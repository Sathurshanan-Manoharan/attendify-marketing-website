import { FaInstagram, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import Sathu from "../assets/SathuuSU.png";
import Adib from "../assets/Adib.jpeg";
import Nethmini from "../assets/Nethmini.jpg";
import Rishen from "../assets/Rishen.jpg";

const OurTeam = () => {
  return (
    <section id="ourteam" className="bg-gray-900 font-Raleway">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-8xl tracking-tight font-Raleway text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-400 lg:mb-16 sm:text-xl px-4">
            Our team comprises dedicated individuals committed to driving
            innovation and excellence in every aspect of our work.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-800 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full max-h-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Sathu image"
                // style={{ maxHeight: "30" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-white">
                <a href="#">Sathurshanan Manoharan</a>
              </h3>
              <span className="text-gray-500">Founder & Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-400 ">
                Sathu drives the technical strategy of Attendify and brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.instagram.com"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd card */}
          <div className="items-center bg-gray-800 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full max-h-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Adib}
                alt="Adib image"
                // style={{ maxHeight: "30" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-white">
                <a href="#">Adib Mubarak</a>
              </h3>
              <span className="text-gray-500">Fullstack Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-400 ">
                Adib drives the technical strategy of Attendify and brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.instagram.com/adibmbrk"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/adibmbrk"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/adibmbrk"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://adibmbrk.netlify.app"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd card */}
          <div className="items-center bg-gray-800 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full max-h-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Nethmini}
                alt="Nethmini image"
                // style={{ maxHeight: "30" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-white">
                <a href="#">Nethmini Apasara</a>
              </h3>
              <span className="text-gray-500">Fullstack Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-400 ">
                Nethmini drives the technical strategy of Attendify and brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.instagram.com"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd card */}
          <div className="items-center bg-gray-800 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full max-h-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Rishen}
                alt="Rishen image"
                // style={{ maxHeight: "30" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-white">
                <a href="#">Rishen Samaranayake</a>
              </h3>
              <span className="text-gray-500">Fullstack Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-400 ">
                Rishen drives the technical strategy of Attendify and brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd card */}
          <div className="items-center bg-gray-800 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full max-h-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Inoj image"
                // style={{ maxHeight: "30" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-white">
                <a href="#">Inoj Hettiarachchi</a>
              </h3>
              <span className="text-gray-500">Fullstack Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-400 ">
                Inoj drives the technical strategy of Attendify and brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd card */}
          <div className="items-center bg-gray-800 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full max-h-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Sathu image"
                // style={{ maxHeight: "30" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-white">
                <a href="#">Binuri Karunarathne</a>
              </h3>
              <span className="text-gray-500">Founder & Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-400 ">
                Binuri drives the technical strategy of Attendify and brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.instagram.com"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    className="transition duration-600 ease-in-out text-gray-400 hover:text-gray-100"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd card */}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
