import React from "react";
import { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import { SliderData } from "../data/SliderData";
import { InfoData } from "../data/InfoData";
import "aos/dist/aos.css";
import Aos from "aos";
import LatestWork from "./LatestWork";
import { LatestworkData } from "../data/LatestworkData";
import WhyUs from "./WhyUs";
import Testimonial from "./Testimonial";
import Hero3 from "../assets/hero3.jpg";
import { TestmonialData } from "../data/TestimonialData";

const Body = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <Hero slider={SliderData} />
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        className="max-h-600px m-auto my-8"
      >
        <InfoSection {...InfoData} />
      </div>
      <div className="">
        <LatestWork latestData={LatestworkData} />
      </div>
      <WhyUs />
      <section className="mt-4 md:mt-8 relative w-full h-40">
        <img src={Hero3} className="w-full h-full object-cover" alt="" />
        <p className="absolute  text-center flex items-center justify-center w-full top-10 bottom-10 left-auto right-auto text-lg font-bold text-white ">
          Being the largest in-home decorationg service in newyork city, you can
          work with us from anywhere!
        </p>
      </section>
      <Testimonial testimonials={TestmonialData} />
    </div>
  );
};

export default Body;
