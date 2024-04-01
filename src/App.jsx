import "./index.css";
import Navbar from "./components/Navbar";
import LogoCarousel from "./components/LogoCarousel";
import PricingCards from "./components/PricingCards";
import Timetable from "./components/Timetable";


function App() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section - adib */}
      <PricingCards />
      <Timetable/>
     
      <LogoCarousel />
     
  
      {/* Footer - Binuri */}
    </>
  );
}

export default App;
