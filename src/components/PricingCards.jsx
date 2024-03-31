const PricingCards = () => {
  return (
    <>
      <div className="font-sans bg-gray-100 min-h-screen py-12 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="p-1 bg-blue-200"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Basic Plan
              </h2>
              <p className="text-gray-600 mb-6">Ideal for small institutions</p>
              <p className="text-4xl font-bold text-gray-800 mb-6">
                $3.99/User
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
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
                  Min 25 Users
                </li>
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
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
                    className="w-4 h-4 mr-2 text-green-500"
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
              {/* <button className="w-full bg-primary text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Select Plan
              </button> */}
              <button
                href="#"
                className="w-full relative text-primary hover:text-white hover:bg-primary inset-0 border border-primary px-4 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
              >
                GET IN TOUCH
                <span className="absolute inset-0 border border-primary rounded-full px-4 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="p-1 bg-blue-200"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Pro Plan
              </h2>
              <p className="text-gray-600 mb-6">
                Perfect for growing institutions
              </p>
              <p className="text-4xl font-bold text-gray-800 mb-6">
                $2.99/User
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
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
                  Min 200 Users
                </li>
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
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
                    className="w-4 h-4 mr-2 text-green-500"
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
              {/* <button className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                Select Plan
              </button> */}
              <button
                href="#"
                className="w-full relative text-primary hover:text-white hover:bg-primary inset-0 border border-primary px-4 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
              >
                GET IN TOUCH
                <span className="absolute inset-0 border border-primary rounded-full px-4 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="p-1 bg-blue-200"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Enterprise Plan
              </h2>
              <p className="text-gray-600 mb-6">For large-scale institutions</p>
              <p className="text-4xl font-bold text-gray-800 mb-6">Custom</p>
              <ul className="text-sm text-gray-600 mb-6">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
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
                    className="w-4 h-4 mr-2 text-green-500"
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
                    className="w-4 h-4 mr-2 text-green-500"
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
              {/* <button className="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                Select Plan
              </button> */}
              <button
                href="#"
                className="w-full relative text-primary hover:text-white hover:bg-primary inset-0 border border-primary px-4 py-1 rounded-full text-base font-medium transition duration-500 overflow-hidden"
              >
                GET IN TOUCH
                <span className="absolute inset-0 border border-primary rounded-full px-4 py-2 text-base font-medium opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
