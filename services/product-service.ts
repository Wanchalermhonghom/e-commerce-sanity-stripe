import { runQuery } from '@/sanity/lib/client';
import { InferType, q, sanityImage } from 'groqd';

const getProductsQuery = q('*')
  .filterByType('product')
  .grab({
    _id: q.string(),
    title: q.string(),
    subtitle: q.string(),
    description: q.string(),
    price: q.number(),
    quantity: q.number(),
    image: sanityImage('image'),
    sizes: q.array(q.string()),
    review: q('*').filterByType('review'),
  });

const getBannerQuery = q('*')
  .filterByType('hero')
  .grab({
    _id: q.string(),
    title: q.string(),
    subtitle: q.string(),
    backgroundImage: sanityImage('backgroundImage'),
  });

export const fetchProducts = async () => await runQuery(getProductsQuery);

export const fetchBanner = async () => await runQuery(getBannerQuery);

export async function findProductBy(productId: string) {
  const getProductByIdQuery = q('*')
    .filter(`_type == 'product' && _id == '${productId}'`)
    .grab({
      _id: q.string(),
      title: q.string(),
      subtitle: q.string(),
      description: q.string(),
      price: q.number(),
      quantity: q.number(),
      image: sanityImage('image'),
      sizes: q.array(q.string()),
      review: q('*').filterByType('review'),
    });

  let product;
  try {
    product = await runQuery(getProductByIdQuery);
  } catch (error) {
    console.error(error);
  }

  return product ? product[0] : undefined;
}

export type Banner = InferType<typeof getBannerQuery>;
export type ProductList = InferType<typeof getProductsQuery>;
export type Product = ProductList[0];
