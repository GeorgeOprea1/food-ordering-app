"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext({});

export default function AppProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (ls) {
      const storedCart = ls.getItem("cart");
      if (storedCart) {
        setCartProducts(JSON.parse(storedCart));
      }
    }
  }, []);

  function addToCart(product) {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedProducts = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartProducts(updatedProducts);
      saveCartProductsToLocalStorage(updatedProducts);
    } else {
      const updatedCart = [...cartProducts, { ...product, quantity: 1 }];
      setCartProducts(updatedCart);
      saveCartProductsToLocalStorage(updatedCart);
    }
    toast.success("Product added");
  }

  function removeFromCart(productId) {
    const updatedProducts = cartProducts.filter(
      (item) => item.id !== productId
    );
    setCartProducts(updatedProducts);
    saveCartProductsToLocalStorage(updatedProducts);
    toast.error("Product removed");
  }

  function increaseQuantity(productId) {
    const updatedProducts = cartProducts.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartProducts(updatedProducts);
    saveCartProductsToLocalStorage(updatedProducts);
    toast.success("Added one item");
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
    saveCartProductsToLocalStorage(updatedProducts);
    toast.error("Removed one item");
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

  function saveCartProductsToLocalStorage(cartProducts) {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }

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
