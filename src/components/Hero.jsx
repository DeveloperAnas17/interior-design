import React, { useState, useRef, useEffect } from "react";
import { SliderData } from "../data/SliderData";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

const Hero = ({ slider }) => {
  const [current, setCurrent] = useState(0);
  const length = slider.length;
  const timeOut = useRef(null);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   };
  //   timeOut.current = setTimeout(nextSlide, 3000);
  //   return function () {
  //     if (timeOut.current) {
  //       clearTimeout(timeOut.current);
  //     }
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slider) || slider.length <= 0) {
    return null;
  }

  return (
    <div className="h-screen max-w-[1400px] mx-auto">
      <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
        {SliderData.map((slider, index) => (
          // return (
          <div className="heroslide z-10 h-full w-full" key={index}>
            {index === current && (
              <div className="heroslider absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img
                  src={slider.image}
                  alt={slider.alt}
                  className="h-full w-full absolute top-0 left-0 object-cover"
                ></img>
                <div className="heroContent absolute left-7 md:left-16 z-20 flex flex-col  text-white">
                  <h1 className="text-xl font-semibold md:font-extrabold max-w[400px] uppercase md:text-3xl lg:text-4xl text-left shadow-sm">
                    {slider.title}
                  </h1>
                  <p className="font-bold mt-3 ">{slider.price}</p>
                  <div className="mt-7 flex items-center space-x-3">
                    <button className="bg-orange-400 text-white w-32 h-11 flex items-center justify-center transition hover:bg-transparent duration-200 ease-in border-2 font-semibold border-orange-400">
                      {slider.label1}
                    </button>
                    <button className="border-gray-200 border-2 w-32 h-11 flex items-center justify-center font-semibold hover:opacity-80">
                      {slider.label2}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          // )
        ))}
        <div className="sliderButton absolute bottom-14 flex z-10 right-14 space-x-3 ">
          <ArrowLeftIcon
            className="w-12 h-12 text-white rounded-full p-2 cursor-pointer border-2 select-none hover:bg-orange-600 hover:text-white hover:border-orange-600 transition hover:scale-105 duration-200 ease-out "
            onClick={prevSlide}
          />
          <ArrowRightIcon
            className="w-12 h-12 text-white rounded-full p-2  cursor-pointer border-2 select-none hover:bg-orange-600 hover:text-white hover:border-orange-600 transition hover:scale-105 duration-200 ease-out"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
