import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class=" text-black border-t-2 mt-8 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-10">
        <div class="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col gap-6 items-center justify-center md:justify-start">
          <div className=" flex md:gap-4">
            <div className="flex flex-1 gap-2 items-center  justify-center border-r-2">
              <FaPizzaSlice
                alt="St Pizza logo"
                class="w-[50px] h-[50px] text-primary "
              />
              <h1 className="text-primary text-4xl font-bold ">St Pizza</h1>
            </div>
            <div className="flex-1 flex items-center justify-center text-center font-bold italic">
              <h1 className="font-mono">THE BEST PIZZA VALUE ANYWHERE</h1>
            </div>
          </div>

          <div class="flex  w-full items-center justify-center  space-x-4 p-2">
            <a href="#">
              <FaFacebookSquare
                alt="Facebook Logo"
                class=" w-[25px] h-[25px] cursor-pointer hover:text-primary"
              />
            </a>
            <a href="#">
              <FaYoutube
                alt="YouTube Logo"
                class="  w-[25px] h-[25px] cursor-pointer hover:text-primary"
              />
            </a>
            <a href="#">
              <FaXTwitter
                alt="Twitter Logo"
                class="w-[25px] h-[25px] cursor-pointer hover:text-primary"
              />
            </a>
            <a href="#">
              <FaInstagramSquare
                alt="Instagram Logo"
                class=" w-[25px] h-[25px] cursor-pointer hover:text-primary"
              />
            </a>
            <a href="#">
              <FaTiktok
                alt="TikTok Logo"
                class=" w-[25px] h-[25px] hover:text-primary"
              />
            </a>
          </div>
        </div>

        <div class="w-full  text-center md:text-left  ">
          <ul class="flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-4   md:justify-end space-x-4 ">
            <li>
              <a href="#" class="hover:text-primary ml-4">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">
                Order Online
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">
                Careers
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Franchising
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-400">
                Nutrition
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-primary">
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
