import Image from "next/image";
import MenuItem from "../menu/MenuItem";

const HomeMenu = () => {
  return (
    <section className=" w-full  ">
      <div className=" w-full flex justify-between items-center">
        <div className="">
          <Image
            src={"/sallad1.png"}
            width={100}
            height={100}
            alt={"sallad"}
          ></Image>
        </div>

        <div className="">
          <h3 className="uppercase text-gray-500 font-semibold leading-4">
            Check out
          </h3>
          <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
        </div>

        <div className="">
          <Image
            src={"/sallad2.png"}
            width={100}
            height={100}
            alt={"sallad"}
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />{" "}
      </div>
    </section>
  );
};

export default HomeMenu;
