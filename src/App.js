import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero slider={SliderData} />
    </div>
  );
}

export default App;
