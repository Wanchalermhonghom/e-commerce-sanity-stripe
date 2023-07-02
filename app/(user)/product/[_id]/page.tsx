import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { urlForImage } from '@/sanity/lib/image';
import {
  Product,
  fetchProducts,
  findProductBy,
} from '@/services/product-service';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

export default async function ProductDetailPage({
  params,
}: {
  params: Pick<Product, '_id'>;
}) {
  const product = await findProductBy(params._id);

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <div className="flex flex-row px-24 py-12 gap-4">
        <div className="w-3/6 h-[667px] p-12">
          <div className="relative w-full h-full">
            <Image
              src={urlForImage(product.image).url()}
              alt="productDetailImage"
              fill={true}
            />
          </div>
        </div>
        <div className="flex flex-col w-3/6 gap-8 p-12">
          <div>
            <h1 className="font-bold text-3xl">{product.title}</h1>
            <h4 className="text-xl font-semibold">{product.subtitle}</h4>
          </div>
          <span className="text-4xl font-bold">${product.price}</span>
          <div>
            <h4>Quantity</h4>
            <span>{product.quantity}</span>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose a size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sizes</SelectLabel>
                {product.sizes.map((size, index) => (
                  <SelectItem key={index} value={size}>{size}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="flex gap-4">
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
            </Button>
            <Button>Checkout</Button>
          </div>
        </div>
      </div>
      <section className="p-24 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Description</h1>
        <p className="text-lg">{product.description}</p>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const products: Product[] = await fetchProducts();
  return products.map((product: Product) => product._id);
}
