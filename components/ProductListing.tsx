'use client';
import ProductCard from '@/components/ProductCard';
import { Product, fetchProducts } from '@/services/product-service';

async function ProductListing() {
  const products = await fetchProducts();
  //const s = useProductList({ products });

  return (
    <section className="p-24 flex flex-col gap-4 w-full">
      {/* <div className="flex justify-end gap-2">
          <Search></Search>
          <ProductFilter></ProductFilter>
        </div> */}
      <div className="flex flex-wrap gap-4 h-96">
        {products.map((product: Product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductListing;
