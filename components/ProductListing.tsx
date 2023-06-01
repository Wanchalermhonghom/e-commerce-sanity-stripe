import ProductCard from '@/components/ProductCard';
import { Product } from '@/services/product-service';

type ProductListingProps = {
  products: Product[];
};

function ProductListing({ products }: ProductListingProps) {
  return (
    <section className="p-24">
      <div className="flex flex-wrap gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductListing;
