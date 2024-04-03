import "./index.css";
import Navbar from "./components/Navbar";
import LogoCarousel from "./components/LogoCarousel";
import PricingCards from "./components/PricingCards";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import Timetable from "./components/Timetable";
import Features from "./components/Features";
import Subscribe from "./components/Subscribe";
import HeroTest from "./components/HeroTest";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroTest />
      {/* <Hero /> */}
      <Features />
      <PricingCards />
      {/* <LogoCarousel />   */}
      <OurTeam />

      {/* <Timetable /> */}
      <Subscribe />

      <Footer />
    </>
  );
}

export default App;
