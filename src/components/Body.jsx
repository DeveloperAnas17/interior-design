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

const Body = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default Body;
