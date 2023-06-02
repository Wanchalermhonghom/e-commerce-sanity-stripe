'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-between">
        <div>Link</div>
        <NavigationMenuItem>
          <Image alt="logo" src={'/logo.png'} height={100} width={100} />
        </NavigationMenuItem>
        <NavigationMenuItem>Cart</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
