import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row mt-4">
      <div className="py-12  w-full sm:w-[50%]  text-center sm:text-start">
        <h1 className="text-4xl font-semibold ">
          Everything <br />
          is better <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex flex-col items-center sm:items-start sm:flex-row  w-full gap-4 text-sm ">
          <Link
            href={"/menu"}
            className="w-full justify-center bg-primary uppercase text-white px-8 py-2 rounded-full flex items-center gap-2 hover:brightness-90 font-semibold"
          >
            Order Now <Right />
          </Link>{" "}
          <Link
            href={"/about"}
            className="w-full flex  items-center justify-center gap-2 py-2 text-gray-600 font-semibold border  border-gray-700 rounded-full px-6 hover:text-primary hover:border-primary  "
          >
            Learn more
            <Right />
          </Link>
        </div>
      </div>
      <div className="sm:w-[50%] w-full  flex items-center  justify-center">
        <Image
          src={"/pizza.png"}
          alt={"pizza"}
          width={300}
          height={300}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
