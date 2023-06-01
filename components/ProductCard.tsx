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
import Image from 'next/image';

type ProductProps = {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  image: any;
  sizes: string[];
  quantity: number;
};

function ProductCard(props: ProductProps) {
  const urlPath = urlForImage(props.image).url();
  return (
    <Card className="w-[267px]">
      <Image src={urlPath} alt="productImage" width={267} height={334} />
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.subtitle}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-end">
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
