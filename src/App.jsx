import "./index.css";
import Navbar from "./components/Navbar";
import LogoCarousel from "./components/LogoCarousel";
import PricingCards from "./components/PricingCards";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import Timetable from "./components/Timetable";
import Features from "./components/Features";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PricingCards />
      <LogoCarousel />
      <OurTeam />
      <Features/>


    <Timetable/>
      {/* Footer - Binuri */}
    </>
  );
}

export default App;
