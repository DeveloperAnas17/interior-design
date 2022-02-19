import React, { useEffect, useRef, useState } from "react";
import { TestmonialData } from "../data/TestimonialData";

const Testimonial = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
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

  // const prevSlide = () => {
  //   if (timeOut.current) {
  //     clearTimeout(timeOut.current);
  //   }

  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // if (!Array.isArray(slider) || slider.length <= 0) {
  //   return null;
  // }
  return (
    <div className="mb-96 py-6 bg-gray-200 w-full">
      <div className="max-w-4xl mx-auto  p-5 px-10 ">
        <div className="flex items-center justify-center w-full mb-5 md:mb-8">
          <h1 className="mt-4 text-3xl font-bold ">
            What Client <span className="text-orange-500">Say</span>
          </h1>
        </div>

        <div className="">
          {TestmonialData.map((testimonial, index) => (
            <div className="flex items-center space-x-7 " key={index}>
              {index === current && (
                <div className="md:flex items-center md:space-x-14">
                  <div className="flex flex-1 relative">
                    <img
                      src={testimonial.image}
                      className="h-full w-full"
                      alt=""
                    />
                    <img
                      src={testimonial.author}
                      className="absolute -right-6 h-14 w-14 rounded-full top-1/4 "
                      alt=""
                    />
                  </div>
                  <div className="mt-5 md:mt-0 flex flex-col items-start flex-1">
                    <p className=" text-sm ">
                      Why should we care about you kya ho gaya h mer a kuch to h{" "}
                      {testimonial.message}
                    </p>
                    <h3 className="mt-4 text-orange-500">{testimonial.name}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
