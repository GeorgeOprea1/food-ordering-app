import React from "react";
import MenuItem from "../../components/menu/MenuItem";
import { pizzas } from "./../constants/pizzas";

const MenuPage = () => {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl my-10">Menu</h1>
      <div className="grid sm:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <MenuItem
            key={pizza.id}
            image={pizza.image}
            title={pizza.title}
            description={pizza.description}
            price={pizza.price}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
