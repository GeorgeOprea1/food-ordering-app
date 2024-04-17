"use client";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../AppContext";

const MenuItem = ({
  id,
  image,
  name,
  description,
  price,
  price_id,
  quantity,
  link,
}) => {
  const { addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const product = { id, image, name, price, price_id, quantity, link };

  function handleAddToCartClicked(e) {
    e.stopPropagation();
    addToCart(product);
  }

  function handleBuyNowClicked(e) {
    e.stopPropagation();
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
                alt={name}
                className="max-h-auto max-h-24 block mx-auto"
              />
            </div>
            <div className="h-[60%] overflow-scroll flex items-center justify-center flex-col">
              <h1 className="font-semibold text-center text-xl my-3">{name}</h1>
              <p className="text-gray-500 text-sm w-[90%] sm:w-[70%] text-center">
                {description}
              </p>
            </div>
            <div className=" flex flex-col items-center gap-3">
              <button
                id="add-to-cart"
                aria-label="Add to cart"
                onClick={() => addToCart(product)}
                className="sm:w-[50%] w-[70%] bg-primary text-white text-sm  sm:text-md rounded-full px-8 py-2 mt-4 hover:brightness-90"
              >
                Add to cart ${price}
              </button>
              <a
                onClick={handleBuyNowClicked}
                href={link}
                aria-label="Buy now"
                className="sm:w-[50%] w-[70%] text-center text-sm  sm:text-md  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Buy Now
              </a>
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
            alt={name}
            className="max-h-auto max-h-24 block mx-auto"
          />
        </div>
        <div className="h-[60%] overflow-scroll">
          <h4 className="font-semibold  text-xl my-3">{name}</h4>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className=" flex flex-col gap-3">
          <button
            onClick={handleAddToCartClicked}
            className=" bg-primary text-white rounded-full px-8 py-2 mt-4 hover:brightness-90"
          >
            Add to cart ${price}
          </button>
          <a
            onClick={handleBuyNowClicked}
            href={link}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
