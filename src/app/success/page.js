"use client";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../components/AppContext";
import Link from "next/link";
import { useEffect } from "react";

const SuccessPage = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg  flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl font-bold mb-4">Checkout Success!</h1>
        <p className="text-gray-700 mb-4 text-center">
          Thank you for your purchase. Your order has been successfully
          processed.
        </p>
        <Link
          href={"/"}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
