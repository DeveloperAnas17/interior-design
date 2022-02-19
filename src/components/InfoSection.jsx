import React from "react";
import Hero1 from "../assets/hero1.jpg";

const InfoSection = ({
  heading,
  paragraph,
  buttonLabel,
  Image,
  reverse,
  delay,
}) => {
  return (
    <section className="max-w-[1400px] mx-auto w-full h-full py-5">
      <div className="grid p-6 grid-cols-1 md:grid-cols-2 ">
        <div
          className="left flex flex-col justify-center items-start py-2 md:px-4 
            "
        >
          <h1 className=" mb-2 text-2xl font-semibold">{heading}</h1>
          <p>{paragraph} </p>
          <button className="mt-6 bg-orange-400 text-white w-32 h-11 flex items-center justify-center transition hover:bg-transparent duration-200 ease-in border-2 font-semibold border-orange-400 hover:text-orange-400">
            {buttonLabel}
          </button>
        </div>
        <div className="right mt-8 md:mt-0  py-2 md:px-4 flex justify-center items-center">
          <img
            className="  md:w-full md:h-full object-cover"
            src={Image}
            alt="home"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
