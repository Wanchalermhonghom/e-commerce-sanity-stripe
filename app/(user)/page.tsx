import Banner from '@/components/Banner';
import ProductListing from '@/components/ProductListing';
import { fetchBanner, fetchProducts } from '@/services/product-service';

export default async function Home() {
  const products = await fetchProducts();

  const bannerResponse = await fetchBanner();
  const banner = bannerResponse[0];

  return (
    <main className="flex min-h-screen flex-col items-center p-x-x-24">
      <Banner {...banner} />
      <ProductListing products={products} />
    </main>
  );
}
