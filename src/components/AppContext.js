"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product) {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartProducts(updatedProducts);
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(productId) {
    const updatedProducts = cartProducts.filter(
      (item) => item.id !== productId
    );
    setCartProducts(updatedProducts);
  }

  function increaseQuantity(productId) {
    const updatedProducts = cartProducts.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartProducts(updatedProducts);
  }

  function decreaseQuantity(productId) {
    const updatedProducts = cartProducts
      .map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartProducts(updatedProducts);
  }

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProducts.forEach((product) => {
      totalPrice += parseFloat(product.price) * product.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const calculateQuantity = () => {
    let totalQuantity = 0;
    cartProducts.forEach((product) => {
      totalQuantity += product.quantity;
    });
    return totalQuantity;
  };

  return (
    <SessionProvider>
      <CartContext.Provider
        value={{
          cartProducts,
          addToCart,
          removeFromCart,
          increaseQuantity,
          decreaseQuantity,
          calculateTotalPrice,
          calculateQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    </SessionProvider>
  );
}
