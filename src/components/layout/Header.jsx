import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between ">
      <Link
        className="text-primary font-semibold text-2xl sm:text-4xl  "
        href=""
      >
        St Pizza
      </Link>
      <nav className="flex gap-4 text-xs sm:text-lg text-gray-500 font-semibold items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          className="bg-primary text-white px-2 sm:px-8 py-1 rounded-full"
          href={""}
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
