import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="about"
      className="py-20 bg-white text-[#003366] flex flex-col items-center px-6 sm:px-12 lg:px-24"
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
        Who We Are
      </h2>
      <div className="relative mb-8">
        <div className="h-1 w-20 bg-[#ffcc00] mx-auto rounded-full"></div>
      </div>

      {/* Image + Text */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <img
          src={assets.about}
          alt="About CAD Concept"
          className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover"
        />
        <div className="flex-1 text-gray-700 space-y-6">
          <p className="text-base leading-relaxed">
            <span className="font-semibold">
              CAD Concept & Digital Solutions Ltd
            </span>{" "}
            (RC-1361196), incorporated on{" "}
            <span className="font-semibold">14 September 2016</span> and
            headquartered in Abuja, Nigeria, is committed to transforming the
            engineering and design landscape in Africa.
            <br />
            <br />
            With a team of dedicated professionals and state-of-the-art training
            programmes, we specialise in delivering both industry-grade design
            services and practical upskilling for engineers, designers and
            students. From infrastructure modelling (roads and highways) to CAD
            drafting, structural analysis, earthworks and drainage, our mission
            is to bridge the gap between concept and completion.
            <br />
            <br />
            Over the years, we’ve worked with clients across civil, structural
            and digital design sectors, delivering quality, innovation and
            real-world results. Partner with us for excellence in engineering
            design, digital transformation and future-ready training.
          </p>

          {/* Link (React Router) */}
          <Link
            to="/about"
            className="inline-block bg-[#ffcc00] text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-[#e6b800] transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Counters */}
      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center"
      >
        <div>
          <h3 className="text-4xl font-bold text-[#ffcc00]">
            {inView && <CountUp end={80} duration={3} />}+
          </h3>
          <p className="mt-2 font-medium text-gray-600">Satisfied Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#ffcc00]">
            {inView && <CountUp end={280} duration={3} />}+
          </h3>
          <p className="mt-2 font-medium text-gray-600">Projects Finished</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#ffcc00]">
            {inView && <CountUp end={10} duration={3} />}+
          </h3>
          <p className="mt-2 font-medium text-gray-600">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#ffcc00]">
            {inView && <CountUp end={100} duration={3} />}+
          </h3>
          <p className="mt-2 font-medium text-gray-600">Professional Team</p>
        </div>
      </div>
    </section>
  );
};

export default About;
