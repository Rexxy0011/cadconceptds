import React from "react";
import { Hammer, Building, Ruler, Mountain, GraduationCap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Hammer size={48} className="text-[#ffcc00]" />, // changed icon
      title: "Road & Highway Design",
      description:
        "We deliver modern, sustainable road and highway designs, ensuring safety, efficiency, and compliance with industry standards.",
    },
    {
      icon: <Building size={48} className="text-[#ffcc00]" />,
      title: "Structural Design & Analysis",
      description:
        "Our team provides structural engineering services that prioritize durability, safety, and cost-effectiveness in every project.",
    },
    {
      icon: <Ruler size={48} className="text-[#ffcc00]" />,
      title: "CAD Drafting & Detailing",
      description:
        "We specialize in high-precision CAD drawings, 3D modeling, and construction detailing using the latest design tools.",
    },
    {
      icon: <Mountain size={48} className="text-[#ffcc00]" />,
      title: "Earthworks & Drainage Design",
      description:
        "Our experts design efficient earthworks and drainage systems that meet environmental and engineering requirements.",
    },
    {
      icon: <GraduationCap size={48} className="text-[#ffcc00]" />,
      title: "Training & Certification",
      description:
        "We offer hands-on training programs for aspiring engineers and designers, bridging the gap between learning and practice.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-white text-[#003366] flex flex-col items-center px-6 sm:px-12 lg:px-24"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
        Our Services
      </h2>
      <div className="relative mb-4">
        <div className="h-1 w-20 bg-[#ffcc00] mx-auto rounded-full"></div>
      </div>
      <p className="text-center max-w-2xl mb-12 text-gray-600">
        At{" "}
        <span className="font-semibold">
          CAD Concept & Digital Solution Ltd
        </span>
        , we specialize in delivering innovative engineering and design services
        that bring ideas to life — from concept to completion.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md hover:shadow-lg p-8 rounded-2xl text-center transition-transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
