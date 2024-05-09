// Constants for type safety
const Types = {
  string: 'string' as const,
  number: 'number' as const,
}
const Flags = {
  true: true as const,
  false: false as const,
}

type F = Record<string, { type: 'string' | 'number'; creatable: true | false }>

// Generic function to create field definitions
export function defineFields<T extends F>(fields: T) {
  return fields
}

// Type mapper utility
type TypeMapper = {
  string: string
  number: number
}

// Generic type for full object
export type ExtractFullType<T extends F> = {
  [K in keyof T]: TypeMapper[T[K]['type']]
}

// Generic type for creatable fields only
export type ExtractCreatableType<T extends F> = {
  [K in keyof T as T[K]['creatable'] extends true
    ? K
    : never]: TypeMapper[T[K]['type']]
}
