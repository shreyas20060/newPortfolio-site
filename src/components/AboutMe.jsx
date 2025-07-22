import React, { useRef } from "react";
import { gsap } from "gsap";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-20 bg-yellow-400 min-h-screen justify-center px-4">
      {/* Text Section */}
      <div className="bg-white bg-opacity-90 shadow-lg rounded-xl p-8 md:w-1/2 mx-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-green-800">
          A Bit <span className="underline text-green-700">About Me.</span>
        </h2>
        <p className="font-semibold text-xl mb-3">Hi there! I'm Shreyas</p>
        <p className="mb-2">
          I’m a passionate frontend developer based in [Your City]. I've built web projects like{" "}
          <a className="font-bold underline text-orange-600" href="...">ProjectOne</a>{" "}
          and <a className="font-bold underline text-orange-600" href="...">ProjectTwo</a>,{" "}
          and I love helping others through code.
        </p>
        <p className="mb-2">
          Currently working on{" "}
          <a className="font-bold underline text-orange-600" href="...">NewApp</a>
          , and running my own dev agency. We've delivered for 20+ clients and generated $10k+ in the past year.
        </p>
        <p className="mt-3">
          Want to chat? <a href="mailto:your@email.com" className="font-bold underline text-orange-600">Shoot me an email!</a>
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 mt-8 md:mt-0 mx-2 flex justify-center">
        <img
          src="your-photo.jpg"
          alt="Profile"
          className="w-60 h-72 object-cover rounded-3xl shadow-2xl border-8 border-white"
        />
      </div>
    </div>
  );
};

export default AboutMe;