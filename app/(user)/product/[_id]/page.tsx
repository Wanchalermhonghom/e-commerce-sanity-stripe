import {
  Product,
  fetchProducts,
  findProductBy,
} from '@/services/product-service';

export default async function ProductDetailPage({
  params,
}: {
  params: Pick<Product, '_id'>;
}) {
  const product = await findProductBy(params._id);

  if (!product) return <div>Product not found</div>;

  return <div>{JSON.stringify(product)}</div>;
}

export async function generateStaticParams() {
  const products: Product[] = await fetchProducts();
  return products.map((product: Product) => product._id);
}
