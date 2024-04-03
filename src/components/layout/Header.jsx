"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const session = useSession();
  console.log(session);
  const status = session.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header className="w-full flex items-center justify-between ">
      <nav className="flex gap-4 text-xs sm:text-lg text-gray-500 font-semibold items-center">
        <Link
          className="text-primary font-semibold text-2xl sm:text-4xl  "
          href={"/"}
        >
          St Pizza
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <>
            <Link href={"/profile"} className="whitespace-nowrap">
              Hello, {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary text-white px-2 sm:px-8 py-1 rounded-full"
            >
              Logout
            </button>
          </>
        )}
        {status !== "authenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"/register"}
              className="bg-primary text-white px-2 sm:px-8 py-1 rounded-full"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
