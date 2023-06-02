'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { urlForImage } from '@/sanity/lib/image';
import { Product } from '@/services/product-service';
import { useCartStore } from '@/store/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ProductCard(props: Product) {
  const urlPath = urlForImage(props.image).url();
  const router = useRouter();

  const { addProductToCart } = useCartStore();
  return (
    <Card
      className="w-[267px] hover:scale-105 cursor-pointer transition-transform"
      onClick={() => router.push('/product/' + props._id)}
    >
      <Image src={urlPath} alt="productImage" width={267} height={334} />
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.subtitle}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <span className="">${props.price}</span>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            addProductToCart(props);
          }}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
