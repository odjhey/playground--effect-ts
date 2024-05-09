import { constVoid } from 'effect/Function'
import { createOrder, createShipment } from './db-interface/db'
import { pipe, Effect } from 'effect'

console.log('hello db-tx')

const createOrderCanFail = (orderInput: Parameters<typeof createOrder>[0]) => {
  if (Math.random() < 0.5) {
    throw new Error('failed')
  }
  return createOrder(orderInput)
}

async function main() {
  const result = pipe(
    {
      name: 'order1',
      price: '100',
    },
    function (orderInput) {
      return Effect.tryPromise(() => createOrderCanFail(orderInput))
    },
    Effect.flatMap((order) => {
      return Effect.tryPromise(() =>
        createShipment({
          orderId: order.id,
          destination: 'destination1',
          weight: 100,
        })
      )
    })
  )

  const result2 = Effect.match(result, {
    onSuccess: (value) => {
      console.log('Success', value)
    },
    onFailure: (error) => {
      console.error('Failure', error)
    },
  })

  // return Effect.runPromiseExit(result)
  return Effect.runPromiseExit(result2)
  // return result
}

main().then(() => {
  console.log('done')
})
