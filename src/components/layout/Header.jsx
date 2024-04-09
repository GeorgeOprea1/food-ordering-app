"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { CartContext } from "../AppContext";
import { useContext } from "react";

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, status } = useSession();
  const userData = session?.user;
  let userName = userData?.name || userData?.email;

  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full flex items-center justify-between ">
      <Link href={"/"}>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <FaPizzaSlice
            alt="St Pizza logo"
            className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] text-primary  "
          />
          <h1 className="text-primary font-semibold text-2xl md:text-4xl">
            St Pizza
          </h1>
        </div>
      </Link>
      <SlMenu
        className="md:hidden cursor-pointer z-30"
        onClick={toggleMenu}
        style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
      />
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="md:hidden bg-white w-full h-full flex flex-col gap-6 items-center justify-center  shadow-lg">
            <nav className="flex flex-col gap-6 text-xl md:text-lg text-gray-500 font-semibold items-center w-full">
              <Link
                href={"/"}
                className="hover:text-primary border-2 border-gray-300 p-4 w-[50%] text-center rounded-full"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="hover:text-primary border-2 border-gray-300 p-4 w-[50%] text-center rounded-full"
                onClick={toggleMenu}
              >
                Menu
              </Link>
              <Link
                href={"/about"}
                className="hover:text-primary border-2 border-gray-300 p-4 w-[50%] text-center rounded-full"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-primary border-2 border-gray-300 p-4 w-[50%] text-center rounded-full"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                href={"/cart"}
                className="hover:text-primary border-2 border-gray-300 p-4 w-[50%] text-center rounded-full"
                onClick={toggleMenu}
              >
                Cart <span>({cartProducts.length})</span>
              </Link>
            </nav>
            <nav className="flex flex-col items-center gap-6 text-xl text-gray-500 font-semibold w-full">
              {status === "authenticated" && (
                <>
                  <Link
                    href={"/profile"}
                    className="whitespace-nowrap p-4 w-[50%] rounded-full border-2 border-gray-300 text-center "
                    onClick={toggleMenu}
                  >
                    Hello, {userName}
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="bg-primary text-white  p-4 w-[50%] rounded-full border-0"
                  >
                    Logout
                  </button>
                </>
              )}
              {status !== "authenticated" && (
                <>
                  <Link
                    href={"/login"}
                    className="hover:text-primary border-2 border-gray-300 p-4 w-[50%] text-center rounded-full"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    href={"/register"}
                    className="text-white bg-primary p-4 w-[50%] text-center rounded-full"
                    onClick={toggleMenu}
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
      <div className="hidden md:flex gap-10">
        <nav className="flex gap-4 text-xs md:text-lg text-gray-500 font-semibold items-center">
          <Link href={"/"} className="hover:text-primary">
            Home
          </Link>
          <Link href={"/menu"} className="hover:text-primary">
            Menu
          </Link>
          <Link href={"/about"} className="hover:text-primary">
            About
          </Link>
          <Link href={"/contact"} className="hover:text-primary">
            Contact
          </Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {status === "authenticated" && (
            <>
              <Link href={"/profile"} className="whitespace-nowrap">
                Hello, {userName}
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-primary text-white px-2 md:px-8 py-1 rounded-full"
              >
                Logout
              </button>
            </>
          )}
          {status !== "authenticated" && (
            <>
              <Link href={"/login"} className="hover:text-primary">
                Login
              </Link>
              <Link
                href={"/register"}
                className="bg-primary text-white px-2 md:px-8 py-1 rounded-full"
              >
                Register
              </Link>
            </>
          )}
          <Link href={"/cart"} className="flex">
            <h1 className="text-xs md:text-lg text-gray-500 font-semibold hover:text-primary cursor-pointer">
              Cart <span>({cartProducts.length})</span>
            </h1>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
