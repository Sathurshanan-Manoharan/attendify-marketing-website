import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import Logo from "../assets/Attendify Blue Text.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-gray-300 fixed w-full z-10 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <a href="#" className="text-primary text-3xl font-bold">
              Attendify
            </a> */}
            <img src={Logo} alt="Logo" width={200} />
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a
              href="#"
              className="relative text-primary px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Home
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="relative text-primary px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              About
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="relative text-primary px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Services
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="relative text-primary px-3 py-2 rounded-full text-sm font-medium transition duration-500"
            >
              Contact
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="relative text-primary hover:text-white hover:bg-primary inset-0 border border-primary px-3 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
            >
              GET IN TOUCH
              <span className="absolute inset-0 border border-primary rounded-full px-3 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              className="text-primary focus:outline-none"
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
              className="text-primary text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Home
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="text-primary text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              About
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="text-primary text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Services
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="text-primary text-center relative px-3 py-2 rounded-md text-base font-medium transition duration-500 block"
            >
              Contact
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
            <a
              href="#"
              className="text-primary w-64 text-center rounded-full px-3 py-2 text-base font-medium transition duration-500 relative hover:bg-primary hover:text-white block"
            >
              Get in touch
              <span className="absolute inset-0 border border-primary rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
