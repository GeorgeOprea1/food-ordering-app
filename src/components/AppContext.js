"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product) {
    setCartProducts((prevProducts) => {
      const newProduct = { ...product };
      const newProducts = [...prevProducts, newProduct];
      console.log(cartProducts);
      return newProducts;
    });
  }
  return (
    <SessionProvider>
      <CartContext.Provider
        value={{ cartProducts, setCartProducts, addToCart }}
      >
        {children}
      </CartContext.Provider>
    </SessionProvider>
  );
}
