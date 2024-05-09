import { Shipment, ShipmentInput } from './models'
import { Order, OrderInput, CreatableOrderSchema } from './zod-models'

export const createOrder = async (input: OrderInput): Promise<Order> => {
  // @todo in using effects, don't we still need to use a Either/Result type to handle errors?
  CreatableOrderSchema.parse(input)

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
