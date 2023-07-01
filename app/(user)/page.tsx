import Banner from '@/components/Banner';
import ProductListing from '@/components/ProductListing';
import BannerSkeleton from '@/components/ui/skeletons/BannerSkeleton';
import ProductListingSkeleton from '@/components/ui/skeletons/ProductListingSkeleton';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-x-x-24">
      <Suspense fallback={<BannerSkeleton></BannerSkeleton>}>
        {/* @ts-expect-error Async Server component*/}
        <Banner />
      </Suspense>
      <Suspense fallback={<ProductListingSkeleton/>}>
        {/* @ts-expect-error Async Server component*/}
        <ProductListing />
      </Suspense>
    </main>
  );
}
