import { ExtractCreatableType, ExtractFullType, defineFields } from './types'

const OrderDefinition = defineFields({
  id: {
    type: 'string',
    creatable: false,
  },
  name: {
    type: 'string',
    creatable: true,
  },
  price: {
    type: 'string',
    creatable: true,
  },
})

// Creating types using the defined generics
export type Order = ExtractFullType<typeof OrderDefinition>
export type OrderInput = ExtractCreatableType<typeof OrderDefinition>

// Example with another definition
const ShipmentDefinition = defineFields({
  shipmentId: {
    type: 'string',
    creatable: false,
  },
  orderId: {
    type: 'string',
    creatable: true,
  },
  destination: {
    type: 'string',
    creatable: true,
  },
  weight: {
    type: 'number',
    creatable: true,
  },
})

export type Shipment = ExtractFullType<typeof ShipmentDefinition>
export type ShipmentInput = ExtractCreatableType<typeof ShipmentDefinition>
