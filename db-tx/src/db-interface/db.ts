import { Order, OrderInput, Shipment, ShipmentInput } from './models'

export const createOrder = async (input: OrderInput): Promise<Order> => {
  // generate random id
  // @todo add seed
  const id = Math.random().toString(36).substring(7)

  return {
    id: id,
    name: input.name,
    price: input.price,
  }
}

export const createShipment = async (
  input: ShipmentInput
): Promise<Shipment> => {
  // generate random id
  // @todo add seed
  const id = Math.random().toString(36).substring(7)

  return {
    shipmentId: id,
    orderId: input.orderId,
    destination: input.destination,
    weight: input.weight,
  }
}
