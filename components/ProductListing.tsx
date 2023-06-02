import ProductCard from '@/components/ProductCard';
import { Product } from '@/services/product-service';
import { ProductFilter } from './ProductFilter';
import Search from './Search';

type ProductListingProps = {
  products: Product[];
};

function ProductListing({ products }: ProductListingProps) {
  return (
    <section className="p-24 flex flex-col gap-4">
      <div className="flex justify-end gap-2">
        <Search></Search>

        <ProductFilter></ProductFilter>
      </div>
      <div className="flex flex-wrap gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductListing;
