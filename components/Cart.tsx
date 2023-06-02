'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { urlForImage } from '@/sanity/lib/image';
import { useCartStore } from '@/store/store';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Cart() {
  const { open, setOpen, products } = useCartStore();
  return (
    <Sheet open={open}>
      <SheetContent position="right" size="sm">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {products.map((product) => {
            return (
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage
                    src={urlForImage(product.image).url()}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>{product.title}</span>
                <span>${product.price}</span>
              </div>
            );
          })}
        </div>
        <SheetFooter>
          <SheetClose>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
