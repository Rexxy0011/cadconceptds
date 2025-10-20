import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook
import assets from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <div
      id="Hero"
      className="relative flex flex-col items-center justify-center text-center w-full h-screen overflow-hidden"
    >
      {/* Background image */}
      <img
        src={assets.background}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Hero text */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-8 text-gray-100">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Shaping the Future of Engineers Through{" "}
          <span className="bg-gradient-to-r from-[#ffcc00] to-[#ff9900] bg-clip-text text-transparent">
            Designs
          </span>{" "}
          and Innovations.
        </h1>

        {/* Short description */}
        <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#ffcc00]">
            CAD Concept & Digital Solutions Ltd
          </span>
          , we combine creativity, technology, and engineering expertise to
          build modern infrastructure and empower the next generation of
          professionals.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* ✅ Learn More (navigates to /about) */}
          <button
            onClick={() => navigate("/about")}
            className="inline-flex items-center justify-center gap-2 bg-[#ffcc00] text-gray-800 px-6 py-2 rounded-full hover:bg-[#e6b800] transition-all font-medium"
          >
            Learn More
          </button>

          {/* Register Now (stays anchor link) */}
          <a
            href="#contact-us"
            className="inline-flex items-center justify-center gap-2 border border-[#ffcc00] text-[#ffcc00] px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#ffcc00"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
