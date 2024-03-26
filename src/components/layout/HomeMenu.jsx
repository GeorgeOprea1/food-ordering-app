import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

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

        <SectionHeaders subHeader={"Check Out"} mainHeader={"Menu"} />

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
