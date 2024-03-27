import Image from "next/image";
import Right from "../icons/Right";

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
          <button className="bg-primary uppercase text-white px-8 py-2 rounded-full flex items-center gap-2 ">
            Order Now <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="sm:w-[50%] w-full  flex items-center justify-center">
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
