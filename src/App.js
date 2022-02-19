import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import OurWork from "./OurWork";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
