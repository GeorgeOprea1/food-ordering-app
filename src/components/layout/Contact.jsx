import React from "react";
import SectionHeaders from "./../layout/SectionHeaders";

const Contact = () => {
  return (
    <section className="text-center mmy-8">
      <SectionHeaders subHeader={"Don't hesitate"} mainHeader={"Contact Us"} />
      <div className="mt-8">
        <a
          className=" text-4xl underline text-gray-500"
          href="tel:+46738123123"
        >
          +46 738 123 123
        </a>
      </div>
    </section>
  );
};

export default Contact;
