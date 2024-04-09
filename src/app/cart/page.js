"use client";
import React from "react";
import { CartContext } from "../../components/AppContext";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="container flex-col mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4 text-center">Your Cart</h1>
      {cartProducts.length === 0 ? (
        <p className="text-gray-600 text-lg font-semibold text-center">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between"
            >
              <div className="flex items-center  ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-30 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
              <div className="flex gap-4  justify-between  items-center">
                <h1 className="text-gray-500  text-center ">
                  ${product.price}
                </h1>
                <div className="flex gap-2">
                  <button className="bg-primary text-white px-3 py-1 rounded-md hover:brightness-75">
                    +
                  </button>
                  <button className="bg-primary text-white px-3 py-1 rounded-md hover:brightness-75">
                    -
                  </button>
                  <button className="text-black px-3 py-1 rounded-md ">
                    <FaTrashAlt className="w-[20px] h-[20px] hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
