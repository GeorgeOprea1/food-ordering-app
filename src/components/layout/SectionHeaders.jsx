import React from "react";

const SectionHeaders = ({ subHeader, mainHeader }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center ">
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </div>
  );
};

export default SectionHeaders;
