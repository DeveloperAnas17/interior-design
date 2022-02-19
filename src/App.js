import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import OurWork from "./OurWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/" element={<Body />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
