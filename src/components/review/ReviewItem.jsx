"use client";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { useState } from "react";

const ReviewItem = () => {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  return (
    <div
      className={`snap-start  ${
        expanded ? "h-[350px]" : "h-full"
      } mr-4 bg-[#f4f3e9] p-8 rounded-3xl`}
    >
      <h1 className="font-bold text-xl">ROSE</h1>
      <div className="flex items-center">
        <MdOutlineStar className="w-[25px] h-[25px]" />
        <MdOutlineStar className="w-[25px] h-[25px]" />
        <MdOutlineStar className="w-[25px] h-[25px]" />
        <MdOutlineStar className="w-[25px] h-[25px]" />
        <MdOutlineStar className="w-[25px] h-[25px]" />
      </div>
      <h2 className="text-lg font-semibold">a year ago</h2>
      <div className="flex flex-col ">
        <p
          className={` w-full my-2 ${
            !expanded ? "h-full " : " h-[160px] overflow-hidden  "
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem
          explicabo autem doloremque voluptates eum, eos, officiis maxime ullam
          deserunt, aut blanditiis? Placeat saepe nam quae. Tempore ducimus
          nihil impedit!
        </p>{" "}
        {expanded ? (
          <button
            className="text-blue-500 hover:underline  border-0 w-full text-sm"
            onClick={toggleExpanded}
          >
            Show more
          </button>
        ) : (
          <button
            className="text-blue-500 hover:underline border-0 w-full text-sm"
            onClick={toggleExpanded}
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
