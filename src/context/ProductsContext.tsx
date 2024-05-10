"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
}

type Products = Product[];

interface ProductContextType {
  total: string;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Products>>;
  removeItem: (id: string) => void;
}

export const ProductsContext = createContext({} as ProductContextType);

interface ProductsContextProviderProp {
  children: ReactNode;
}

export const ProductsContextProvider = ({
  children,
}: ProductsContextProviderProp) => {
  const [products, setProducts] = useState<Products>(() => {
    const storedProducts = localStorage.getItem("localProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const totalPrice = products.length
    ? products.reduce((acc, product) => acc + product.price * product.amount, 0)
    : 0;

  const total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  const removeItem = (id: string) => {
    const updatedList = products.filter((product) => product.id !== id);
    setProducts(updatedList);
  };

  useEffect(() => {
    if (!products.length) return;
    localStorage.setItem("localProducts", JSON.stringify(products));
  }, [products]);

  const values = {
    total,
    products,
    setProducts,
    removeItem,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};
