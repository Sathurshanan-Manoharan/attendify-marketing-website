import React, { useEffect, useRef } from "react";
import logo from "../assets/AttendifyBlueText.svg";

function LogoCarousel() {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 18px), transparent 100%)",
      }}
    >
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-100 animate-infinite-scroll"
      >
        <li>
          <img src={logo} height={20} alt="Facebook" />
        </li>
        <li>
          <img src={logo} alt="Disney" />
        </li>
      </ul>
    </div>
  );
}

export default LogoCarousel;
