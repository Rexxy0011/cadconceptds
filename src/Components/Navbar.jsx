import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact Us", path: "/#contact-us" },
  ];

  // ✅ Handle navigation & scrolling
  const handleNavClick = (path) => {
    setSidebarOpen(false);

    // Handle "Contact Us" smooth scroll
    if (path.includes("#")) {
      const id = path.split("#")[1];

      if (location.pathname === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
      return;
    }

    // ✅ If already on Home and click Home → scroll to top
    if (path === "/" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Navigate normally
    navigate(path);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sm:py-6 z-50 bg-white/90 backdrop-blur-md shadow-md font-medium">
      {/* Logo (clickable to Home) */}
      <button
        onClick={() => handleNavClick("/")}
        className="flex items-center gap-2"
      >
        <img
          src={assets.logo11}
          alt="Logo"
          className="w-28 sm:w-36 cursor-pointer"
        />
      </button>

      {/* Navigation Links */}
      <div
        className={`text-[#003366] sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 
        max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-white max-sm:text-[#003366] max-sm:pt-20 
        flex sm:items-center gap-8 transition-all duration-300`}
      >
        {/* Close Icon */}
        <img
          src={assets.close_icon}
          alt="Close menu"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Menu Links */}
        {navItems.map((item, index) => {
          const basePath = item.path.split("#")[0];
          const shouldShowActive =
            !["Home", "Contact Us"].includes(item.name) &&
            location.pathname === basePath;

          return (
            <button
              key={index}
              onClick={() => handleNavClick(item.path)}
              className={`transition-colors ${
                shouldShowActive
                  ? "text-[#ffcc00] font-semibold border-b-2 border-[#ffcc00]"
                  : "hover:text-[#ffcc00]"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Right Side (no Register button) */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-8 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
