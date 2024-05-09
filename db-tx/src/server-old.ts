import { createOrder, createShipment } from './db-interface/db'

console.log('hello db-tx')

async function main() {
  // create order
  const order = await createOrder({
    name: 'order1',
    price: '100',
  })

  const shipment = await createShipment({
    orderId: order.id,
    destination: 'destination1',
    weight: 100,
  })

  return { order, shipment }
}

main().then(console.log)
