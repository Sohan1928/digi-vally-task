import { useState, useEffect } from "react";
import "./RotatingText.css";

const RotatingText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const texts = [
    "Bad Bunny",
    "Linkin Park",
    "Peso Pluma",
    "Kendrick Lamar",
    "Everything Always",
    "Rauw Alejandro",
    "Travis Scott",
  ];

  const totalTexts = texts.length;
  const scrollFactor = 200;
  const position = (scrollPosition / scrollFactor) % totalTexts;
  const activeIndex = Math.floor(position) % totalTexts;

  return (
    <div className="px-3 rotating-text-container text-nowrap">
      <div className="rotating-text">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`text-item ${activeIndex === index ? "active" : ""}`}
            style={{
              transform: `rotateX(${
                (index - position) * 50
              }deg) translateZ(250px)`,
              opacity: `${1 - Math.abs(index - position) / 3}`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingText;
