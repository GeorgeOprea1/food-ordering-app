"use client";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../AppContext";

const MenuItem = ({ id, image, title, description, price, quantity }) => {
  const { addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const product = { id, image, title, price, quantity };

  function handleAddToCartClicked(e) {
    e.stopPropagation();
    addToCart(product);
  }
  function handleItemClicked() {
    setShowPopup(true);
  }
  useEffect(() => {
    function handleClickOutside(e) {
      if (showPopup && !e.target.closest(".menu-item")) {
        setShowPopup(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-[80%]  sm:max-w-md">
            {" "}
            <div className="">
              <img
                src={image}
                alt={title}
                className="max-h-auto max-h-24 block mx-auto"
              />
            </div>
            <div className="h-[60%] overflow-scroll flex items-center justify-center flex-col">
              <h4 className="font-semibold text-center text-xl my-3">
                {title}
              </h4>
              <p className="text-gray-500 text-sm w-[90%] sm:w-[70%] text-center">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => addToCart(product)}
                className="sm:w-[50%] w-[70%] bg-primary text-white text-sm  sm:text-md rounded-full px-8 py-2 mt-4 hover:brightness-90"
              >
                Add to cart ${price}
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={handleItemClicked}
        className="flex flex-col items-center gap-1  bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all cursor-pointer hover:shadow-md hover:shadow-black/25"
      >
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
            onClick={handleAddToCartClicked}
            className=" bg-primary text-white rounded-full px-8 py-2 mt-4 hover:brightness-90"
          >
            Add to cart ${price}
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
