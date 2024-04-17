import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-black border-t-2 mt-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col gap-6 items-center justify-center md:justify-start">
          <div className=" flex md:gap-4">
            <div className="flex flex-1 gap-2 items-center  justify-center border-r-2">
              <FaPizzaSlice
                alt="St Pizza logo"
                className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] text-primary  "
              />
              <h1 className="text-primary sm:text-4xl text-2xl font-bold ">
                St Pizza
              </h1>
            </div>
            <div className="flex-1 flex items-center justify-center text-center font-bold italic">
              <h1 className="font-mono">THE BEST PIZZA VALUE ANYWHERE</h1>
            </div>
          </div>

          <div className="flex  w-full items-center justify-center  space-x-4 p-2">
            <a href="#">
              <FaFacebookSquare
                aria-label="Check out our facebook page"
                alt="Facebook Logo"
                className=" w-[25px] h-[25px] cursor-pointer hover:text-primary"
              />
            </a>
            <a href="#" aria-label="Check out our youtube channel">
              <FaYoutube
                alt="YouTube Logo"
                className="  w-[25px] h-[25px] cursor-pointer hover:text-primary"
              />
            </a>
            <a href="#" aria-label="Follow us on Twitter">
              <FaXTwitter
                alt="Twitter Logo"
                className="w-[25px] h-[25px] cursor-pointer hover:text-primary"
              />
            </a>
            <a href="#" aria-label="Follow us on Instagram">
              <FaInstagramSquare
                alt="Instagram Logo"
                className=" w-[25px] h-[25px] cursor-pointer hover:text-primary"
              />
            </a>
            <a href="#" aria-label="Follow us on Tiktok">
              <FaTiktok
                alt="TikTok Logo"
                className=" w-[25px] h-[25px] hover:text-primary"
              />
            </a>
          </div>
        </div>

        <div className="w-full  text-center md:text-left  ">
          <ul className="flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-4   md:justify-end space-x-4 ">
            <li>
              <a
                href="/contact"
                aria-label="Check the most frequently asked questions"
                className="hover:text-primary ml-4"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                aria-label="Get in touch with us"
                className="hover:text-primary"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/about"
                aria-label="Read more about Our Story"
                className="hover:text-primary"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="/menu"
                aria-label="Read more about Order Online"
                className="hover:text-primary"
              >
                Order Online
              </a>
            </li>
            <li>
              <a
                href="/about"
                aria-label="Read more about Careers"
                className="hover:text-primary"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Read more about Privacy Policy"
                className="hover:text-primary"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Read more about Terms & Conditions"
                className="hover:text-primary"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/contact"
                aria-label="Read more about Franchising"
                className="hover:text-gray-400"
              >
                Franchising
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Read more about Nutrition"
                className="hover:text-gray-400"
              >
                Nutrition
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Read more about Ingredients Statements"
                className="hover:text-primary"
              >
                Ingredients Statements
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
