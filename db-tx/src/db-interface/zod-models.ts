import { z } from 'zod'

export const OrderSchema = z.object({
  id: z.string(),
  name: z.string().min(4),
  price: z.string(),
})

export type Order = z.infer<typeof OrderSchema>

// You would manually have to define which fields are creatable
export const CreatableOrderSchema = OrderSchema.pick({
  name: true,
  price: true,
})

export type OrderInput = z.infer<typeof CreatableOrderSchema>
