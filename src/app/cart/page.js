"use client";
import React from "react";
import { CartContext } from "../../components/AppContext";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const CartPage = () => {
  const {
    cartProducts,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalPrice,
    clearCart,
  } = useContext(CartContext);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/checkout",
      {
        cartProducts,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data);
  };

  return (
    <div className="container flex-col  mx-auto px-4 py-8">
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
                  alt={product.name}
                  className="w-30 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
              <div className="flex gap-4  justify-between  items-center">
                <div className="flex w-full  gap-12 text-lg font-semibold">
                  <h1 className="text-green-600  text-center ">
                    ${product.price}
                  </h1>
                  <h1 className="text-black text-center ">
                    ({product.quantity})
                  </h1>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="bg-primary text-white px-3 py-1 rounded-md hover:brightness-75"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="bg-primary text-white px-3 py-1 rounded-md hover:brightness-75"
                  >
                    -
                  </button>
                  <button
                    type="submit"
                    role="link"
                    onClick={() => removeFromCart(product.id)}
                    className="text-black px-3 py-1 rounded-md "
                  >
                    <FaTrashAlt className="w-[20px] h-[20px] hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-8 text-xl text-center font-semibold">
            Total Price: ${calculateTotalPrice()}
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <button
              onClick={handleCheckout}
              className="w-[80%] sm:[50%] bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-[80%] sm:[50%]  inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Clear cart
            </button>
          </div>

          <div className="flex  items-center justify-center"></div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
