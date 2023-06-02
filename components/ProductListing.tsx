'use client';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/services/product-service';
import { ProductFilter } from './ProductFilter';
import Search from './Search';
import {
  ProductListContext,
  useProductList,
} from './context/productListContext';

type ProductListingProps = {
  products: Product[];
};

function ProductListing({ products }: ProductListingProps) {
  const s = useProductList({ products });

  return (
    <ProductListContext.Provider value={s}>
      <section className="p-24 flex flex-col gap-4 w-full">
        <div className="flex justify-end gap-2">
          <Search></Search>
          <ProductFilter></ProductFilter>
        </div>
        <div className="flex flex-wrap gap-4 h-96">
          {s.products.map((product: Product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </section>
    </ProductListContext.Provider>
  );
}

export default ProductListing;
