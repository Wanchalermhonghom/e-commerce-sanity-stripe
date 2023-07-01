'use client';

import { Product } from '@/services/product-service';
import { ChangeEvent, createContext, useContext, useState } from 'react';

import debounce from 'lodash.debounce';

type ProductListType = {
  products: Product[];
};

export function useProductList({ products: productsList }: ProductListType) {
  const initalProducts = productsList;
  const [products, setProducts] = useState<Product[]>(productsList);

  const dropDownFilters = [
    {
      value: 'HightToLow',
      operation: '<',
    },
    {
      value: 'LowToHigh',
      operation: '>',
    },
  ];

  function filterProducts(searchTerm = '') {
    if (searchTerm === '') return setProducts([...initalProducts]);
    const filteredList = products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm);
    });
    setProducts([...filteredList]);
  }

  function filterDropDown(dropDownItems: string) {
    switch (dropDownItems) {
      case 'HighToLow':
        const highToLow = products.sort((a, b) => {
          return b.price - a.price;
        });
        setProducts([...highToLow]);
        break;
      case 'LowToHigh':
        const lowToHigh = products.sort((a, b) => {
          return a.price - b.price;
        });
        setProducts([...lowToHigh]);
        break;
      default:
        break;
    }
  }

  const updateProducts = (e: ChangeEvent<HTMLInputElement>) =>
    filterProducts(e.target.value);

  const deboundeUpdateProducts = debounce(updateProducts, 100);

  return {
    products,
    setProductsList: setProducts,
    filterProducts,
    filterDropDown,
    updateProducts,
    deboundeUpdateProducts,
  };
}

export type ProductListContextType = ReturnType<typeof useProductList>;

export const ProductListContext = createContext<
  ProductListContextType | undefined
>(undefined);

export const useProductListContext = () => {
  const context = useContext(ProductListContext);
  if (context === undefined) {
    throw new Error(
      'useProductListContext must be used within a ProductListProvider'
    );
  }
  return context;
};
