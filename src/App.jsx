import "./index.css";
import Navbar from "./components/Navbar";
import LogoCarousel from "./components/LogoCarousel";
import PricingCards from "./components/PricingCards";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PricingCards />
      <LogoCarousel />
      {/* Footer - Binuri */}
    </>
  );
}

export default App;
