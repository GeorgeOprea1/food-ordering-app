import buffalo from "./../../../public/pizzas/buffalo.avif";
import cheese from "./../../../public/pizzas/cheese.avif";
import chicken from "./../../../public/pizzas/chicken.avif";
import maccheese from "./../../../public/pizzas/maccheese.avif";
import pepperoni from "./../../../public/pizzas/pepperoni.avif";
import sausage from "./../../../public/pizzas/sausage.avif";
import spinach from "./../../../public/pizzas/spinach.avif";
import supreme from "./../../../public/pizzas/supreme.avif";
import veggie from "./../../../public/pizzas/veggie.avif";
import beef from "./../../../public/pizzas/beef.avif";
import bbq from "./../../../public/pizzas/bbq.avif";
import hawaiian from "./../../../public/pizzas/hawaiian.avif";
import giant from "./../../../public/pizzas/giant.avif";
import stuffed from "./../../../public/pizzas/stuffed.avif";
import ultimate from "./../../../public/pizzas/ultimate.avif";
import zesty from "./../../../public/pizzas/zesty.avif";
import bacon from "./../../../public/pizzas/bacon.avif";
import jalapeno from "./../../../public/pizzas/jalapeno.avif";

export const pizzas = [
  {
    id: "1",
    image: beef.src,
    name: "Beef ",
    price: 15,
    price_id: process.env.BEEF_ID,
    quantity: 1,
    link: process.env.BEEF_LINK,
    currency: "USD",
    description:
      "Beef pizza is made for the meat lovers. Enjoy on our traditional crust brushed with garlic butter and finished with marinara sauce, mozzarella cheese, and loaded with beef.",
  },

  {
    id: "2",
    image: buffalo.src,
    name: "Buffalo Chicken",
    price: 15,
    price_id: process.env.BUFFALO_ID,
    quantity: 1,
    link: process.env.BUFFALO_LINK,
    currency: "USD",
    description:
      "This pizza brings the heat. Cicis buffalo chicken pizza is topped with juicy chicken, mozzarella cheese, and a hot buffalo sauce drizzle all on a traditional garlic butter brushed crust.",
  },
  {
    id: "3",
    image: cheese.src,
    name: "Cheese",
    price: 12,
    price_id: process.env.CHEESE_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.CHEESE_LINK,
    description:
      "Cheese pizza is a favorite for a reason. Gooey mozzarella cheese is the star of our cheese pizza on a traditional crust brushed with garlic butter and topped with marinara sauce.",
  },
  {
    id: "4",
    image: chicken.src,
    name: "Classic Chicken ",
    price: 12,
    price_id: process.env.CHICKEN_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.CHICKEN_LINK,
    description:
      "Delicious chicken takes center stage. Grab a slice of our classic chicken pizza topped with premium juicy chicken, sliced mushrooms, and mozzarella cheese on a traditional garlic butter brushed crust.",
  },
  {
    id: "5",
    image: maccheese.src,
    name: "Mac & Cheese",
    price: 18,
    price_id: process.env.MAC_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.MAC_LINK,
    description:
      "Pizza and pasta together in one slice? Mind blown. Our mac and cheese pizza features rich and gooey macaroni and cheese on our traditional garlic butter brushed crust topped with, you guessed it, even more cheese.",
  },
  {
    id: "6",
    image: pepperoni.src,
    name: "Pepperoni",
    price: 12,
    price_id: process.env.PEPPERONI_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.PEPPERONI_LINK,
    description:
      "Pepperoni puts the pizzazz in pizza. Enjoy every bite of our traditional crust brushed with garlic butter, topped mozzarella cheese. Go classic with marinara sauce or make it a Zesty Pepperoni Pizza with our tangy Parmesan Ranch sauce.",
  },
  {
    id: "7",
    image: sausage.src,
    name: "Sausage",
    price: 15,
    price_id: process.env.SAUSAGE_ID,
    quantity: 1,
    link: process.env.SAUSAGE_LINK,
    currency: "USD",
    description:
      "Is sausage pizza your savory favorite? Enjoy our classic traditional crust brushed with garlic butter and topped with marinara sauce, mozzarella cheese, and deliciously seasoned pork sausage meat.",
  },
  {
    id: "8",
    image: spinach.src,
    name: "Spinach Alfredo",
    price: 15,
    price_id: process.env.SPINACH_ID,
    quantity: 1,
    link: process.env.SPINACH_LINK,
    currency: "USD",
    description:
      "Get in your greens with this delicious pizza. Cicis spinach alfredo pizza features our traditional garlic butter brushed crust and a creamy alfredo sauce blended with fresh spinach that is finished off with mozzarella cheese.",
  },
  {
    id: "9",
    image: supreme.src,
    name: "Supreme",
    price: 20,
    price_id: process.env.SUPREME_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.SUPREME_LINK,
    description:
      "Take it to the max. Cicis supreme pizza includes all the toppings you love including sliced red onions, green peppers, mushrooms and a trio of pepperoni, beef, and Italian sausage meats. It's all served up on a traditional garlic butter brushed crust with marinara sauce and gooey mozzarella cheese.",
  },
  {
    id: "10",
    image: veggie.src,
    name: "Veggie",
    price: 15,
    price_id: process.env.VEGGIE_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.VEGGIE_LINK,
    description:
      "This one is for the veggie lovers. Our veggie pizza features fresh red onions, green peppers, mushrooms and black olives on top of our traditional garlic butter brushed crust with a marinara sauce and shredded mozzarella cheese. Or change it up by making it a Zesty Veggie Pizza featuring our tangy Parmesan Ranch sauce.",
  },
  {
    id: "11",
    image: bbq.src,
    name: "BBQ Chicken",
    price: 15,
    price_id: process.env.BBQ_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.BBQ_LINK,
    description:
      "Feast on bold BBQ flavors by the slice. Cicis BBQ chicken pizza has it all with premium juicy chicken, sharp cheddar cheese, and sliced red onions slathered with our sweet honey BBQ sauce on a traditional garlic butter crust.",
  },
  {
    id: "12",
    image: hawaiian.src,
    name: "Hawaiian",
    quantity: 1,
    currency: "USD",
    price: 18,
    price_id: process.env.HAWAIIAN_ID,
    link: process.env.HAWAIIAN_LINK,
    description:
      "This pizza will take you on a tropical flavor journey. Our Hawaiian pizza features our traditional garlic butter brushed crust, marinara sauce, and shredded mozzarella cheese topped with savory ham with sweet pineapple.",
  },
  {
    id: "13",
    image: giant.src,
    name: "Giant Pizza",
    price: 20,
    price_id: process.env.GIANT_ID,
    currency: "USD",
    quantity: 1,
    link: process.env.GIANT_LINK,
    description:
      "This 16 inch pizza is made to feed giant appetites. Make Cicis giant pizza your way and pick your favorite crust style, pizza sauce, delicious toppings and gooey mozzarella cheese.",
  },
  {
    id: "14",
    image: stuffed.src,
    name: "Pepperoni Stuffed",
    price: 15,
    price_id: process.env.STUFFED_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.STUFFED_LINK,
    description:
      "Pepperoni puts the pizzazz in pizza. Enjoy every bite of our cheese stuffed crust pizza topped mozzarella cheese, marinara sauce, and pops of pepperoni.",
  },
  {
    id: "15",
    image: ultimate.src,
    name: "Ultimate Pepperoni",
    price: 18,
    price_id: process.env.ULTIMATE_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.ULTIMATE_LINK,
    description:
      "With two types of pepperoni on one pizza, this may be our ultimate pepperoni experience. The ultimate pepperoni pizza is piled high with both regular pepperoni and cupping pepperoni. You can enjoy it all on our traditional garlic butter brushed crust with delicious marinara sauce and gooey mozzarella cheese.",
  },
  {
    id: "16",
    image: zesty.src,
    name: "Zesty Veggie",
    price: "12",
    price_id: process.env.ZESTY_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.ZESTY_LINK,
    description:
      "Have a taste of our zesty veggie pizza topped with red onions, green peppers, mushrooms and black olives. It's all on a traditional garlic butter brushed crust featuring a tangy parmesan ranch sauce for that extra zing.",
  },
  {
    id: "17",
    image: bacon.src,
    name: "Chicken Bacon Club",
    price: "15",
    price_id: process.env.BACON_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.BACON_LINK,
    description:
      "Give your tastebuds a thrill. Enjoy every bite of Cicis chicken bacon club pizza featuring premium juicy chicken, extra crispy bacon, and bruschetta tomatoes. It's all finished with a flourish of cheddar cheese and a zesty parmesan ranch sauce on our traditional garlic butter brushed crust.",
  },
  {
    id: "18",
    image: jalapeno.src,
    name: "Pepperoni & Jalapeno",
    price: "15",
    price_id: process.env.JALAPENO_ID,
    quantity: 1,
    currency: "USD",
    link: process.env.JALAPENO_LINK,
    description:
      "This pizza brings the heat. Our pepperoni and jalapeño pizza features our traditional garlic butter brushed crust, marinara sauce, and shredded mozzarella cheese topped with savory pepperoni and spicy jalapeño slices.",
  },
];
