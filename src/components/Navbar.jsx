import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import Logo from "../assets/Attendify White Text.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 font-Raleway shadow-lg border-b-2 border-primary fixed w-full z-10 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <a href="#" className="text-white text-3xl font-bold">
              Attendify
            </a> */}
            <img src={Logo} alt="Logo" width={200} />
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a
              href="#home"
              className="relative text-white px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Home
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#features"
              className="relative text-white px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Features
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#pricing"
              className="relative text-white px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Pricing
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#ourteam"
              className="relative text-white px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Our Team
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="mailto:attendify.lk@gmail.com"
              className="relative text-white hover:text-primary hover:bg-white inset-0 border border-white px-3 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
            >
              GET IN TOUCH
              <span className="absolute inset-0 border border-white rounded-full px-3 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <BsX /> : <BsList />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive dropdown menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center">
          <div className="py-2 space-y-1">
            <a
              href="#"
              className="text-white text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Home
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="text-white text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              About
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="text-white text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Services
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="text-white text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Contact
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="text-white w-64 text-center rounded-full px-3 py-2 text-base font-medium transition duration-500 relative hover:bg-white hover:text-primary block"
            >
              Get in touch
              <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
