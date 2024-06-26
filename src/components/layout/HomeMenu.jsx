import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
import Link from "next/link";
import { pizzas } from "../../app/constants/pizzas";

const HomeMenu = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomPizzas = shuffleArray(pizzas).slice(0, 6);

  return (
    <section className=" w-full  ">
      <div className=" w-full flex justify-between items-center">
        <div className="">
          <Image
            src={"/sallad1.png"}
            width={200}
            height={200}
            alt={"sallad image"}
            style={{ width: "auto", height: "auto" }}
          ></Image>
        </div>

        <Link href={"/menu"}>
          <SectionHeaders subHeader={"Check Out"} mainHeader={"Menu"} />
        </Link>

        <div className="">
          <Image
            src={"/sallad2.png"}
            width={200}
            height={200}
            alt={"sallad image"}
            style={{ width: "auto", height: "auto" }}
          ></Image>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {randomPizzas.map((pizza) => (
          <MenuItem
            key={pizza.id}
            id={pizza.id}
            image={pizza.image}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            quantity={pizza.quantity}
            price_id={pizza.price_id}
            link={pizza.link}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeMenu;
