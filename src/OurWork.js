import React from "react";
import Header from "./components/Header";
import Hero1 from "./assets/hero1.jpg";
import { WorkData } from "./data/WorkData";

const OurWork = () => {
  return (
    <div className="py-20">
      {/* <section className="h-44 relative ">
        <img src={Hero1} className="h-full w-full object-cover" alt="" />
        <h1 className="absolute bottom-3  flex items-center justify-center w-full text-4xl font-extrabold text-white">
          Our Work
        </h1>
      </section> */}

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm font-semibold text-center mt-5 text-orange-600">
          Our Work
        </h1>
        <p className="text-center text-lg max-w-lg mx-auto">
          All our projects are unique and designed to last. Take a look at our
          recent works to find it out for yourself.
        </p>
      </div>

      <div className=" mt-14 px-5 md:px-14 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {WorkData.map((work, index) => (
          <div
            key={index}
            className="border-2 border-orange-600 cursor-pointer "
          >
            <img
              src={work.image}
              className="w-full h-full object-cover hover:opacity-80"
              alt=""
            />
            <h3 className="mt-2 font-medium">{work.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
