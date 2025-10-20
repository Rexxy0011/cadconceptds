import React from "react";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white text-[#003366] border-t-4 border-[#003366] py-12 px-6 sm:px-12 lg:px-24 xl:px-40 shadow-[0_-4px_15px_rgba(0,51,102,0.1)]">
      {/* Decorative blue gradient bar (subtle accent) */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#003366] via-[#004080] to-[#00509e]" />

      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Company Name */}
        <h2 className="text-2xl font-bold text-[#003366]">
          <span className="text-[#ffcc00]">CAD Concept</span> & Digital Solution
          Ltd
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          We combine engineering design, digital workflows, and practical
          training to help professionals deliver projects that work — clear
          drawings, coordinated models, and confident teams.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 mt-4">
          <a
            href="mailto:cadcds16@gmail.com"
            className="flex items-center gap-2 hover:text-[#ffcc00] transition text-sm sm:text-base"
          >
            <Mail size={18} className="text-[#003366]" />
            cadcds16@gmail.com
          </a>
          <a
            href="tel:+2349014527605"
            className="flex items-center gap-2 hover:text-[#ffcc00] transition text-sm sm:text-base"
          >
            <Phone size={18} className="text-[#003366]" />
            0901 452 7605
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <a
            href="https://www.instagram.com/cadcds16?utm_source=qr&igsh=MW84NzFzMGZsZHg2OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm group"
          >
            <div className="p-2 rounded-full border border-[#003366] group-hover:bg-[#003366] transition-all">
              <Instagram
                size={20}
                className="text-[#003366] group-hover:text-white transition"
              />
            </div>
            <span className="group-hover:text-[#ffcc00] transition">
              @cadcds16
            </span>
          </a>

          <a
            href="https://www.facebook.com/share/1A3VH65AB1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm group"
          >
            <div className="p-2 rounded-full border border-[#003366] group-hover:bg-[#003366] transition-all">
              <Facebook
                size={20}
                className="text-[#003366] group-hover:text-white transition"
              />
            </div>
            <span className="group-hover:text-[#ffcc00] transition">
              CAD Concept
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#003366]/40 to-transparent my-8" />

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} CAD Concept & Digital Solution Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
