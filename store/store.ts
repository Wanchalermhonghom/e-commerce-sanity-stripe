import { Product } from '@/services/product-service';
import { create } from 'zustand';

type CartStoreProps = {
  open: boolean;
  products: Product[];
  setOpen: (state: boolean) => void;
  addProductToCart: (product: Product) => void;
};

export const useCartStore = create<CartStoreProps>((set, get) => ({
  open: false,
  products: [],
  setOpen: (state) => set({ open: state }),
  addProductToCart: (product: Product) =>
    set((state) => ({ products: [...state.products, product] })),
}));
