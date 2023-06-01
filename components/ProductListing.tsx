import { Product } from '@/services/product-service';
import ProductCard from './ProductCard';

type ProductListingProps = {
  products: Product[];
};

function ProductListing({ products }: ProductListingProps) {
  return (
    <section>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductListing;
