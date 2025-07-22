import React, { useRef } from "react";
import { gsap } from "gsap";

// Array of icons
const icons = [
  { src: "./ii1.png", alt: "JavaScript Logo" },
  { src: "./ii1.svg", alt: "CSS3 Logo" },
  { src: "./ii3.png", alt: "HTML5 Logo" },
  { src: "./react.png", alt: "React Logo" },
  { src: "./nodejs.svg", alt: "Node.js Logo" },
  { src: "./i5.svg", alt: "TailwindCSS Logo" },
  { src: "./gsap.png", alt: "GSAP Logo" },
  { src: "./mongodb.svg", alt: "MongoDB Logo" },
];

export default function TechStackIcons() {
  const iconRefs = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.25,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <section className="my-16 px-4">
      <h1 className="text-center text-pink-400 text-5xl mb-12">
        Some Tech Stacks I am familiar with
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {icons.map(({ src, alt }, index) => (
          <div
            key={index}
            ref={(el) => (iconRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="bg-white shadow-md rounded-lg flex items-center justify-center p-4 w-32 h-32 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <img src={src} alt={alt} className="w-20 h-20 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
