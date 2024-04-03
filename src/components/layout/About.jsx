import React from "react";
import SectionHeaders from "./../layout/SectionHeaders";
import Link from "next/link";

const About = () => {
  return (
    <section className=" text-center my-16 ">
      <Link href={"/about"}>
        <SectionHeaders
          subHeader={"Our story"}
          mainHeader={"About us"}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex flex-col gap-4 max-w-lg text-gray-500 mx-auto mt-4">
        <p>
          In 1985, St Pizza opened its doors for the very first time in Plano,
          Texas – and just like that, the Original home of all the pizza, pasta,
          salad, and desserts you can eat was born. For nearly four decades, St
          Pizza has been committed to creating fun, family-friendly restaurants
          where guests can spend quality time together and enjoy all their
          favorites for one low price.
        </p>
        <p>
          Today, the brand has more than 300 restaurants in 30-plus states and
          has been ranked by CNN Money as the No. 1 “Casual Dining Pizza Chain
          (for your money) in America,” named by Technomic as the No. 2 “Most
          Kid-Friendly Chain as voted by Millennial Moms” and recognized by
          Nation’s Restaurant News among its Top 200 Restaurant Chains and
          Franchise Times Top 400.
        </p>
      </div>
    </section>
  );
};

export default About;
