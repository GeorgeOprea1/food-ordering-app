"use client";
import React, { useContext } from "react";
import { CartContext } from "../AppContext";

const MenuItem = ({ id, image, title, description, price, quantity }) => {
  const { addToCart } = useContext(CartContext);

  const product = { id, image, title, price, quantity };

  return (
    <div className="flex flex-col items-center gap-1  bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all cursor-pointer hover:shadow-md hover:shadow-black/25">
      <div className="">
        <img
          src={image}
          alt={title}
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>
      <div className="h-[60%] overflow-scroll">
        <h4 className="font-semibold  text-xl my-3">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="">
        <button
          onClick={() => addToCart(product)}
          className=" bg-primary text-white rounded-full px-8 py-2 mt-4 hover:brightness-90"
        >
          Add to cart ${price}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
