'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useCartStore } from '@/store/store';
import { ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const { setOpen, open, quantity, sumQuantity } = useCartStore();

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-between p-4">
        <Link href={'/'}>Home</Link>
        <NavigationMenuItem>
          <Image alt="logo" src={'/logo.png'} height={100} width={100} />
        </NavigationMenuItem>
        <NavigationMenuItem
          className="flex items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <ShoppingCartIcon className="mr-2 h-4 w-4"></ShoppingCartIcon>
          <span>Cart ({sumQuantity})</span>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
