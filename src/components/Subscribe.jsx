import React from "react";

function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center h-1/2 my-32 bg-gray-900">
      {/* Heading and paragraph */}
      <div className="text-center">
        <h1 className="text-white text-4xl font-medium">Subscribe to our Newsletter!</h1>
        <p className="text-slate-300">To receive offers and updates on latest trends</p>
      </div>

      {/* Input fields and button in a row (for larger screens) */}
      <div className="flex mt-4">
        <label className="input input-bordered flex items-center gap-2 mr-4 bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <button type="submit" className="text-white bg-gradient-to-r from-attendify-400 via-attendify-500 to-attendify-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-attendify-200 dark:focus:ring-attendify-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-4">Subscribe</button>
      </div>

      {/* Media query for smaller screens */}
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .flex.mt-4 {
            flex-direction: column;
          }
          .flex.mt-4 > label,
          .flex.mt-4 > button {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Subscribe;
