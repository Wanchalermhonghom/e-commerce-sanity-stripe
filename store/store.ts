import { Product } from '@/services/product-service';
import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartStoreProps = {
  open: boolean;
  products: Product[];
  setOpen: (state: boolean) => void;
  addProductToCart: (product: Product) => void;
};

export const useCartStore = create<CartStoreProps>()(
  persist(
    (set, get) => ({
      open: false,
      products: [],
      setOpen: (state) => set({ open: state }),
      addProductToCart: (product: Product) => {
        toast.success(product.title + ' added');
        set((state) => ({ products: [...state.products, product] }));
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
