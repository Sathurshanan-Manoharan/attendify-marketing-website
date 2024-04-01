import "./index.css";
import Navbar from "./components/Navbar";
import LogoCarousel from "./components/LogoCarousel";
import PricingCards from "./components/PricingCards";
import  Footer  from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* Hero Section - adib */}
      <PricingCards />
      <LogoCarousel />
      <Footer/>
    </>
  );
}

export default App;
