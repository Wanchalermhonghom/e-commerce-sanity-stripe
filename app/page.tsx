import ProductCard from '@/components/ProductCard';
import ProductListing from '@/components/ProductListing';
import { runQuery } from '@/sanity/lib/client';
import { fetchProducts } from '@/services/product-service';
import { InferType, q, sanityImage } from 'groqd';

export default async function Home() {

const products = await fetchProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <ProductListing products={products} />
    </main>
  );
}
