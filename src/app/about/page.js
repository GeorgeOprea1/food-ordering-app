"use client";
import work from "./../../../public/work.avif";
import { MdOutlineStar } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import ReviewItem from "./../../components/review/ReviewItem";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { useRef } from "react";
import { customers } from "./../constants/customers";

const AboutPage = () => {
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
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl my-2">About</h1>
      <div className=" flex flex-col gap-4 text-center">
        <h1 className="text-center text-primary text-4xl font-bold my-10">
          St Pizza History
        </h1>
        <p className="text-gray-500 font-semibold text-lg">
          St Pizza has given you a taste of the best of pizza and beyond since
          1985. Get to know our story and brand history.
        </p>
        <h1 className="text-center text-primary text-2xl font-medium  my-10 ">
          30+ YEARS OF DELICIOUS PIZZA
        </h1>
        <p className="text-gray-500 font-semibold text-lg">
          In 1985, St Pizza opened its doors for the very first time in Plano,
          Texas – and just like that, the Original home of all the pizza, pasta,
          salad, and desserts you can eat was born. For nearly four decades, St
          Pizza has been committed to creating fun, family-friendly restaurants
          where guests can spend quality time together and enjoy all their
          favorites for one low price.{" "}
        </p>
        <p className="text-gray-500 font-semibold text-lg">
          Consistently adapting to meet the changing needs of its guests in
          recent years, St Pizza put a stronger focus on its off-premise options
          with the launch of online ordering, and new menu items. Now, fans can
          easily order their favorites for pick-up or delivery at St Pizza
          locations across the country, making it easier for guests to enjoy
          TBPVA™, wherever they want to! TBPVA™, you ask? The Best Pizza Value
          Anywhere!
        </p>
        <p className="text-gray-500 font-semibold text-lg">
          Today, the brand has more than 300 restaurants in 30-plus states and
          has been ranked by CNN Money as the No. 1 “Casual Dining Pizza Chain
          (for your money) in America,” named by Technomic as the No. 2 “Most
          Kid-Friendly Chain as voted by Millennial Moms” and recognized by
          Nation’s Restaurant News among its Top 200 Restaurant Chains and
          Franchise Times Top 400.
        </p>
      </div>
      <div>
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
            id=" arrow-left"
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
          <button
            id=" arrow-right"
            aria-label="Arrow right"
            className="border-0 flex  items-center justify-center hover:scale-150"
          >
            <FaAngleRight className="w-[30px] h-[30px]" onClick={scrollRight} />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col  sm:flex-row gap-4 bg-primary  rounded-2xl mt-8 p-8">
        <div className="sm:w-[50%] ">
          <img
            src={work.src}
            alt="call to action image"
            className="w-full h-full rounded-xl"
          ></img>
        </div>

        <div className="sm:w-[50%] flex  gap-4 flex-col items-center justify-around text-white">
          <h1 className="text-2xl font-bold">WORK WITH US!</h1>
          <p className="sm:w-[80%] w-full text-center">
            We’re hiring part-time and full-time roles at St Pizza! Find a job
            that fits you, whether you prefer working behind the scenes crafting
            our delicious pizzas or live for the fast-paced action on the
            buffet. Get to know the benefits of joining our friendly team and
            apply today.
          </p>
          <button
            id="explore"
            aria-label="EXPLORE ST PIZZA CAREERS"
            className="bg-white text-primary border-0 rounded-full sm:w-[80%] hoover:underline"
          >
            EXPLORE ST PIZZA CAREERS
          </button>
        </div>
      </div>{" "}
    </section>
  );
};

export default AboutPage;
