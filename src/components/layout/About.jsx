"use client";
import React from "react";
import SectionHeaders from "./../layout/SectionHeaders";
import Link from "next/link";
import { MdOutlineStar } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { customers } from "../../app/constants/customers";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { useRef } from "react";
import ReviewItem from "../review/ReviewItem";

const About = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className=" text-center my-16 ">
      <Link href={"/about"}>
        <SectionHeaders
          subHeader={"Our story"}
          mainHeader={"About us"}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex flex-col gap-4  text-gray-500 mx-auto mt-4">
        <p>
          In 1985, St Pizza opened its doors for the very first time in Plano,
          Texas – and just like that, the Original home of all the pizza, pasta,
          salad, and desserts you can eat was born. For nearly four decades, St
          Pizza has been committed to creating fun, family-friendly restaurants
          where guests can spend quality time together and enjoy all their
          favorites for one low price.
        </p>
      </div>
      <div className=" flex flex-col mt-10">
        <h1 className="text-center text-primary text-2xl font-medium  mt-10 mb-4 ">
          WHAT OUR CUSTOMERS SAY
        </h1>
        <div className="flex items-center justify-center mb-4">
          <MdOutlineStar className="w-[25px] h-[25px]" />
          <MdOutlineStar className="w-[25px] h-[25px]" />
          <MdOutlineStar className="w-[25px] h-[25px]" />
          <MdOutlineStar className="w-[25px] h-[25px]" />
          <IoStarHalfOutline className="w-[25px] h-[25px]" />
        </div>
        <div className="flex items-center justify-center">
          4.50 (97824 reviews)
        </div>
        <div className=" flex">
          <button
            id="arrow-left"
            aria-label="Arrow left"
            className="border-0 flex items-center justify-center hover:scale-150"
          >
            <FaChevronLeft className="w-[30px] h-[30px]" onClick={scrollLeft} />
          </button>
          <div className="carousel-container my-10 py-8" ref={carouselRef}>
            {customers.map((costumer) => (
              <ReviewItem
                key={costumer.id}
                name={costumer.name}
                review={costumer.review}
                date={costumer.date}
              />
            ))}
          </div>
          <button className="border-0 flex  items-center justify-center hover:scale-150 ">
            <FaAngleRight
              id="arrow-right"
              aria-label="Arrow right"
              className="w-[30px] h-[30px]"
              onClick={scrollRight}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
