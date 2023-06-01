'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  return (
    <NavigationMenu className='bg-slate-200'>
      <NavigationMenuList>
        <NavigationMenuItem>Logo</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
