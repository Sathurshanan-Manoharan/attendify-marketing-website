import { FaInstagram, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import Sathu from "../assets/SathuuSU.png";

const OurTeam = () => {
  return (
    <section className="bg-gray-100 font-Raleway">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-Raleway font-bold text-primary">
            Our Team
          </h2>
          <p className="font-light text-gray-900 lg:mb-16 sm:text-xl">
            Our team comprises dedicated individuals committed to driving
            innovation and excellence in every aspect of our work.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Sathu image"
                style={{ maxHeight: "250px" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-primary">
                <a href="#">Sathurshanan Manoharan</a>
              </h3>
              <span className="text-gray-600">Founder & Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-600 ">
                Sathurshanan drives the technical strategy of Attendify and
                brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.instagram.com/sathurshanan.m?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sathurshanan-manoharan"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Sathurshanan-Manoharan"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://sathurshanan.me"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd card */}

          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Sathu image"
                style={{ maxHeight: "250px" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-primary">
                <a href="#">Sathurshanan Manoharan</a>
              </h3>
              <span className="text-gray-600">Founder & Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-600 ">
                Sathurshanan drives the technical strategy of Attendify and
                brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 3rd card */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Sathu image"
                style={{ maxHeight: "250px" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-primary">
                <a href="#">Sathurshanan Manoharan</a>
              </h3>
              <span className="text-gray-600">Founder & Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-600 ">
                Sathurshanan drives the technical strategy of Attendify and
                brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 4th card */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Sathu image"
                style={{ maxHeight: "250px" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-primary">
                <a href="#">Sathurshanan Manoharan</a>
              </h3>
              <span className="text-gray-600">Founder & Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-600 ">
                Sathurshanan drives the technical strategy of Attendify and
                brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 5th card */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Sathu image"
                style={{ maxHeight: "250px" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-primary">
                <a href="#">Sathurshanan Manoharan</a>
              </h3>
              <span className="text-gray-600">Founder & Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-600 ">
                Sathurshanan drives the technical strategy of Attendify and
                brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 6th card */}
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
            <a href="#">
              <img
                className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={Sathu}
                alt="Sathu image"
                style={{ maxHeight: "250px" }} // Adjust minimum height as needed
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-primary">
                <a href="#">Sathurshanan Manoharan</a>
              </h3>
              <span className="text-gray-600">Founder & Developer</span>
              <p className="mt-3 mb-4 font-light text-gray-600 ">
                Sathurshanan drives the technical strategy of Attendify and
                brand.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition duration-600 ease-in-out text-gray-500 hover:text-gray-900"
                  >
                    <FaGlobe size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
