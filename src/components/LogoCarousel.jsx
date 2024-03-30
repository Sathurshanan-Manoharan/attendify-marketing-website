import { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      const container = containerRef.current;
      const children = container.children;
      let currentOffset = 0;

      const moveText = () => {
        currentOffset -= 1; // Adjust the speed by changing this value
        if (currentOffset <= -children[0].offsetWidth) {
          currentOffset += children[0].offsetWidth;
          container.appendChild(children[0]); // Move the first child to the end
        }
        container.style.transform = `translateX(${currentOffset}px)`;
      };

      const animationId = setInterval(moveText, 30); // Adjust the speed by changing this value

      // Cleanup function
      return () => clearInterval(animationId);
    };

    animate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full overflow-hidden carousel-container">
      <div
        ref={containerRef}
        className="flex items-center"
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="text-slide">
          Streamlining Attendance, Empowering Efficiency!
        </div>
        <div className="text-slide">
          Streamlining Attendance, Empowering Efficiency!
        </div>
        <div className="text-slide">
          Streamlining Attendance, Empowering Efficiency!
        </div>
        <div className="text-slide">
          Streamlining Attendance, Empowering Efficiency!
        </div>
        <div className="text-slide">
          Streamlining Attendance, Empowering Efficiency!
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
