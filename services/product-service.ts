import { runQuery } from '@/sanity/lib/client';
import { InferType, q, sanityImage } from 'groqd';

const getProductQuery = q('*')
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

export const fetchProducts = async () => await runQuery(getProductQuery);

export const fetchBanner = async () => await runQuery(getBannerQuery);

export type Banner = InferType<typeof getBannerQuery>;
export type Product = InferType<typeof getProductQuery>;
