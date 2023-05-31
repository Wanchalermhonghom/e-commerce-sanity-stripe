import Product from '@/components/Product';
import { runQuery } from '@/sanity/lib/client';
import { q, sanityImage } from 'groqd';

export default async function Home() {
  const query = q('*')
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

  const products = await runQuery(query);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </main>
  );
}
