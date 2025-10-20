import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import assets from "../assets/assets";

const Courses = () => {
  const courses = [
    {
      id: "dam",
      title: "Dam, Water & Irrigation Engineering Training",
      description: `A practical program focused on planning, designing, and managing water infrastructure. 
      Participants build confidence in hydraulic analysis, dam concepts, and irrigation network design — from 
      concept studies to documentation and review.`,
      outcomes: [
        "Hydrologic and hydraulic basics for catchments and reservoirs.",
        "Concepts of spillways, outlets, canals, and distribution systems.",
        "Intro to pump selection, pipelines, and headloss estimation.",
        "Reading drawings, preparing basic calculations and reports.",
      ],
      images: [assets.dam, assets.dam2],
    },
    {
      id: "project",
      title: "Project Management for Engineers",
      description: `A fundamentals-to-practice course for planning, executing, and closing engineering projects. 
      Learn how to structure schedules, budgets, and teams — and communicate clearly with clients and stakeholders.`,
      outcomes: [
        "Plan projects using work breakdowns, timelines, and milestones.",
        "Build and track budgets, risks, and change requests.",
        "Coordinate consultants, contractors, and approvals.",
        "Report progress effectively with simple, clear dashboards.",
      ],
      images: [assets.project, assets.project2], // placeholder slots
    },
    {
      id: "structural",
      title: "Structural Design & Analysis Training",
      description: `Hands-on training in reinforced concrete and steel design. Participants learn to model loads, 
      size members, and prepare drawings and bar schedules that are ready for review and construction.`,
      outcomes: [
        "Load cases/combos, framing concepts, and stability checks.",
        "Member design for beams, slabs, columns, and foundations.",
        "Interpreting analysis results and validating models.",
        "Rebar detailing, BBS basics, and drawing organization.",
      ],
      images: [assets.design, assets.design2],
    },
    {
      id: "road",
      title: "Road & Highway Design Training",
      description: `An end-to-end workflow for route selection, geometry, pavement concepts, and drainage. 
      Learn to develop alignments, profiles, and cross-sections that translate into buildable documentation.`,
      outcomes: [
        "Route alignment, profiles, and corridor fundamentals.",
        "Pavement layer concepts and basic quantity take-off.",
        "Cross-section detailing and safety considerations.",
        "Packaging drawings and data for submission.",
      ],
      images: [assets.road, assets.road2],
    },
    {
      id: "bridge",
      title: "Bridge Design & Detailing Training",
      description: `A focused program on bridge systems, analysis, and detailing. 
      Participants study superstructure/substructure concepts and produce clear, coordinated drawings.`,
      outcomes: [
        "Bridge system overview and design criteria essentials.",
        "Modeling decks, supports, bearings, and substructure elements.",
        "Reading analysis outputs and applying design checks.",
        "Reinforcement detailing and shop-drawing coordination.",
      ],
      images: [assets.bridge, assets.bridge2],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="px-6 sm:px-12 lg:px-24 xl:px-40 py-24 bg-white text-[#003366]">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">
            Our Training Courses
          </h1>
          <div className="h-1 w-24 bg-[#ffcc00] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Programs designed to turn theory into practice — clear workflows,
            real project scenarios, and deliverables that are ready for review.
          </p>
        </div>

        {/* Courses List */}
        <div className="space-y-24">
          {courses.map((course) => (
            <div key={course.id} id={course.id} className="space-y-6">
              {/* Title */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <h2 className="text-2xl font-bold">{course.title}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {course.description}
              </p>

              {/* Learning Outcomes */}
              <div>
                <h3 className="font-semibold text-[#003366] mb-2">
                  What You’ll Learn
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  {course.outcomes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* ✅ Course Images */}
              <div className="flex gap-6 flex-wrap justify-start mt-6">
                {course.images.map((img, i) =>
                  img ? (
                    <img
                      key={i}
                      src={img}
                      alt={`${course.title} ${i + 1}`}
                      className="w-40 h-28 rounded-lg object-cover shadow-sm"
                    />
                  ) : (
                    <div
                      key={i}
                      className="w-40 h-28 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                    >
                      Image {i + 1}
                    </div>
                  )
                )}
              </div>

              <hr className="border-gray-200 mt-10" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
