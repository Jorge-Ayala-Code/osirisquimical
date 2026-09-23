import { defineCollection, z } from 'astro:content';
import { productsData } from './products/products';

const products = defineCollection({
  loader: () => productsData.map((product) => ({
    ...product,
    id: product.id 
  })),
  schema: z.object({
    id: z.string(),
    productId: z.string(),
    lang: z.string(),
    key: z.string(),
    category: z.string(),
    name: z.string(),
    description: z.string(),
    image: z.string(),
    pictograms: z.array(z.string()),
    presentations: z.array(z.object({
      type: z.string(),
      label: z.string()
    })),
    content: z.string().optional()
  }),
});

export const collections = { products };