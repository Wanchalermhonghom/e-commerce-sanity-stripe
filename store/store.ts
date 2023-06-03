import { Product } from '@/services/product-service';
import { enableMapSet } from 'immer';
import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

enableMapSet();

type CartStoreProps = {
  open: boolean;
  products: Product[];
  quantity: Map<string, number>;
  setOpen: (state: boolean) => void;
  addProductToCart: (product: Product) => void;
};

export const useCartStore = create<CartStoreProps>()(
  persist(
    immer((set, get) => ({
      open: false,
      products: [],
      quantity: new Map<string, number>(),
      setOpen: (state: boolean) => set({ open: state }),
      addProductToCart: (product: Product) => {
        toast.success(product.title + ' added');
        if (get().products.some((p: Product) => p._id === product._id)) {
          set((state: CartStoreProps) => {
            const tmpMap = new Map(state.quantity);
            const oldQuantity = state.quantity.get(product._id) ?? 0;
            tmpMap.set(product._id, oldQuantity + 1);
            return {
              quantity: tmpMap,
            };
          });
        } else {
          set((state: CartStoreProps) => ({
            products: [...state.products, product],
          }));
        }
      },
    })),
    {
      name: 'cart-storage',
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          return {
            state: {
              ...JSON.parse(str).state,
              quantity: new Map(JSON.parse(str).state.quantity),
            },
          };
        },
        setItem: (name, newValue) => {
          const str = JSON.stringify({
            state: {
              ...newValue.state,
              quantity: Array.from(newValue.state.quantity.entries()),
            },
          });
          localStorage.setItem(name, str);
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);
