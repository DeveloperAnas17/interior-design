import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import { SliderData } from "./data/SliderData";
import { InfoData } from "./data/InfoData";
import { InfoDataTwo } from "./data/InfoData";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="app">
      <Header />
      <Hero slider={SliderData} />
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        className="max-h-600px m-auto my-8"
      >
        <InfoSection {...InfoData} />
      </div>
    </div>
  );
}

export default App;
