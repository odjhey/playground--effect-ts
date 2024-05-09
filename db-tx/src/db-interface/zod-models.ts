import { z } from 'zod'

const OrderSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
})

export type Order = z.infer<typeof OrderSchema>

// You would manually have to define which fields are creatable
const CreatableOrderSchema = OrderSchema.pick({
  name: true,
  price: true,
})

export type OrderInput = z.infer<typeof CreatableOrderSchema>
