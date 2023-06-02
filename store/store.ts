import { Product } from '@/services/product-service';
import { createStore } from 'zustand';

interface ProductStoreProps {
  products: Product[];
}

interface BearState extends ProductStoreProps {
  setProducts: (products: Product[]) => void;
}

export const createProductStore = (initProps?: ProductStoreProps) => {
  const DEFAULT_PROPS: ProductStoreProps = {
    products: [],
  };
  return createStore<BearState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setProducts: (products) => set(() => ({ products })),
  }));
};
