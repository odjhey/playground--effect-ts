import { createOrder, createShipment } from './db-interface/db'
import { pipe } from 'effect'

console.log('hello db-tx')

async function main() {
  const result = pipe(
    {
      name: 'order1',
      price: '100',
    },
    async function (orderInput) {
      // random failure
      if (Math.random() < 0.5) {
        throw new Error('failed')
      }
      return createOrder(orderInput)
    },

    async function (order) {
      return createShipment({
        orderId: (await order).id,
        destination: 'destination1',
        weight: 100,
      })
    }
  )

  return result
}

main().then(console.log)
