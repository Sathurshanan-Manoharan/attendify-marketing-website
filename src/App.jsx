import "./index.css";
import Navbar from "./components/Navbar";
import LogoCarousel from "./components/LogoCarousel";
import PricingCards from "./components/PricingCards";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import Timetable from "./components/Timetable";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PricingCards />
      <LogoCarousel />
      <OurTeam />

    <Timetable/>
      {/* Footer - Binuri */}
    </>
  );
}

export default App;
