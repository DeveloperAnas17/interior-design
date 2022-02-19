import React from "react";
import FigmaDesign from "../assets/figma-design.png";

const WhyUs = () => {
  return (
    <section className="max-w-[1400px] mx-auto w-full h-full py-10 px-4">
      <div className="flex flex-col-reverse lg:space-x-10 lg:flex-row  ">
        <div className="mt-8 lg:mt-0 flex-1 border">
          <img
            src={FigmaDesign}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 lg:mt-6 flex flex-col items-start ">
          <h1 className="text-4xl font-semibold">Why Choose Us</h1>
          <p className="text-gray-600 font-medium mt-3">
            Besides great interior design, there are lots of reasons to choose
            Interia. Here are some of the most popular ones.
          </p>
          <div className="mt-10 space-y-6 flex flex-col items-start">
            <div className="flex items-start space-x-10">
              <h1 className="text-3xl">01</h1>
              <div className="">
                <h3 className="font-semibold text-xl">Professional Team</h3>
                <p className="font-medium text-gray-600">
                  Our team includes only the best decorators and interior
                  designers in the industry.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-10">
              <h1 className="text-3xl">02</h1>
              <div className="">
                <h3 className="font-semibold text-xl">Professional Team</h3>
                <p className="font-medium text-gray-600">
                  Our team includes only the best decorators and interior
                  designers in the industry.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-10">
              <h1 className="text-3xl">03</h1>
              <div className="">
                <h3 className="font-semibold text-xl">Professional Team</h3>
                <p className="font-medium text-gray-600">
                  Our team includes only the best decorators and interior
                  designers in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
