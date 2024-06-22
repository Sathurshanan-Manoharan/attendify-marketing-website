const PricingCards = () => {
  return (
    <>
      <div
        id="pricing"
        className="font-Raleway bg-gray-900 min-h-screen py-12 flex flex-col items-center justify-center"
      >
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-6">
          <h2 className="mb-8 text-8xl tracking-tight font-Raleway text-white">
            Our Pricing
          </h2>
          <p className="font-light text-gray-400 lg:mb-6 sm:text-xl px-4">
            We offer flexible options tailored to your institution's needs, with
            transparent pricing and no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 sm:max-w-sm">
            <div className="p-1 bg-primary"></div>
            <div className="p-8">
              <h2 className="text-4xl text-gray-100 mb-4">Basic Plan</h2>
              <p className="text-primary mb-6">Ideal for small institutions</p>
              <p className="text-4xl font-bold text-gray-100 mb-6">Free/User</p>
              <ul className="text-sm text-gray-200 mb-6">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Max 20 Users
                </li>
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Basic Features
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 Support
                </li>
              </ul>
            </div>
            <div className="p-4">
              <button
                href="#"
                className="w-full relative text-white hover:text-primary hover:bg-white inset-0 border border-white px-4 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
              >
                Select Plan
                <span className="absolute inset-0 border border-white rounded-full px-3 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>
          {/* Repeat the same structure for other pricing plans */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 sm:max-w-sm">
            <div className="p-1 bg-primary"></div>
            <div className="p-8">
              <h2 className="text-4xl text-gray-100 mb-4">Pro Plan</h2>
              <p className="text-primary mb-6">
                Perfect for growing institutions
              </p>
              <p className="text-4xl font-bold text-gray-100 mb-6">
                $2.99/User
              </p>
              <ul className="text-sm text-gray-200 mb-6">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Max 200 Users
                </li>
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Advanced Features
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 Support
                </li>
              </ul>
            </div>
            <div className="p-4">
              <button
                href="#"
                className="w-full relative text-white hover:text-primary hover:bg-white inset-0 border border-white px-4 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
              >
                Select Plan
                <span className="absolute inset-0 border border-white rounded-full px-3 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>

          {/* Repeat the same structure for other pricing plans */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 sm:max-w-sm">
            <div className="p-1 bg-primary"></div>
            <div className="p-8">
              <h2 className="text-4xl text-gray-100 mb-4">Enterprise Plan</h2>
              <p className="text-primary mb-6">For large-scale institutions</p>
              <p className="text-4xl font-bold text-gray-100 mb-6">Custom</p>
              <ul className="text-sm text-gray-200 mb-6">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Unlimited Users
                </li>
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Premium Features
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 Priority Support
                </li>
              </ul>
            </div>
            <div className="p-4">
              <button
                href="#"
                className="w-full relative text-white hover:text-primary hover:bg-white inset-0 border border-white px-4 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
              >
                Select Plan
                <span className="absolute inset-0 border border-white rounded-full px-3 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
