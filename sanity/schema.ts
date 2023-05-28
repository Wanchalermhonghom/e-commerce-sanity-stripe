import category from '@/schemas/category'
import customer from '@/schemas/customer'
import faq from '@/schemas/faq'
import hero from '@/schemas/hero'
import product from '@/schemas/product'
import review from '@/schemas/review'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product, category, customer, faq, hero, review
  ],
}
