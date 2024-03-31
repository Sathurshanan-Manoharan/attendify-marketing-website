import "./index.css";
import Navbar from "./components/Navbar";
import LogoCarousel from "./components/LogoCarousel";
import PricingCards from "./components/PricingCards";

function App() {
  return (
    <>
      <Navbar />
      {/* Hero Section - adib */}
      <PricingCards />
      <LogoCarousel />
      {/* Footer - Binuri */}
    </>
  );
}

export default App;
