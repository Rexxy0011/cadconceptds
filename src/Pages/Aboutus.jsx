import React from "react";
import {
  Hammer,
  Building2,
  Ruler,
  Mountain,
  GraduationCap,
  Cpu,
  Wrench,
} from "lucide-react";
import CountUp from "react-countup";
import assets from "../assets/assets";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Aboutus = () => {
  const services = [
    {
      icon: <Hammer size={40} className="text-[#ffcc00]" />,
      title: "Transport & Corridor Engineering (Road/Highway)",
      description:
        "We plan and design transport links that actually work on the ground — from rural access roads to busy inter-city corridors connecting ports, industrial zones, farms and markets.",
      points: [
        "Route studies and corridor selection using GIS and terrain models.",
        "Horizontal/vertical alignment for highways, arterials and rural roads.",
        "Pavement concepts matched to local materials, traffic and maintenance realities.",
        "Integrated drainage and detailing to handle intense rainfall and erosion.",
        "Construction drawings, BOQs and specs prepared for review and site use.",
      ],
    },
    {
      icon: <Building2 size={40} className="text-[#ffcc00]" />,
      title: "Structural Design, Detailing & Analysis",
      description:
        "Practical, code-compliant solutions for buildings, bridges and plant structures — balancing safety, cost and what can be built with available skills and supply chains.",
      points: [
        "RC/steel/composite design to BS/Eurocode/ACI with local actions and conditions.",
        "Finite-element modelling (STAAD/ETABS/Prota) with clear assumptions and checks.",
        "Shop drawings, rebar detailing and BBS aligned with site workflows.",
        "Condition assessment, strengthening and retrofit schemes for existing assets.",
        "Foundations and retaining systems sized for real soil data and construction methods.",
      ],
    },
    {
      icon: <Ruler size={40} className="text-[#ffcc00]" />,
      title: "High-Precision CAD Drafting & 3D Modelling",
      description:
        "Clean drawings and models that move a project from concept to site without confusion — consistent standards, clear layers and submission-ready sheets.",
      points: [
        "2D drafting for civil, structural, architectural and MEP interfaces.",
        "3D models and visuals for coordination, briefings and approvals.",
        "CAD standards, template libraries and QA checklists to cut rework.",
        "As-builts, redline updates and legacy drawing conversions.",
        "Multidisciplinary coordination drawings to prevent clashes before procurement.",
      ],
    },
    {
      icon: <Mountain size={40} className="text-[#ffcc00]" />,
      title: "Earthworks, Drainage & Hydrology",
      description:
        "Landform and water management that respects budget and terrain — grading that minimizes haul, and drainage that survives heavy storms.",
      points: [
        "Cut-and-fill optimisation and grading for haul distance and fuel reality.",
        "Pipe, culvert and open-channel systems sized for storm events.",
        "Hydrologic/hydraulic simulations for floodplains and urban hotspots.",
        "Slope stability, erosion control and gully remediation details.",
        "Profiles, typicals and bills issued in a contractor-friendly format.",
      ],
    },
    {
      icon: <GraduationCap size={40} className="text-[#ffcc00]" />,
      title: "Professional Training (CAD, BIM & Design)",
      description:
        "Short, focused programs that turn software skills into job-ready output — drawings, models and documents people can build from.",
      points: [
        "Hands-on AutoCAD, Civil 3D, Revit, STAAD and related toolchains.",
        "Project-based tasks: from survey data to submission packs.",
        "Certification, mentoring and portfolio reviews.",
        "Standards, naming, sheet management and presentation skills.",
        "Bootcamps with schools and firms for faster skills transfer.",
      ],
    },
    {
      icon: <Cpu size={40} className="text-[#ffcc00]" />,
      title: "Digital Engineering & BIM Implementation",
      description:
        "We set up practical digital standards, templates and automation so teams produce consistent deliverables — even on modest hardware and bandwidth.",
      points: [
        "CAD/BIM standards and template ecosystems aligned to your approvals.",
        "Automation scripts, symbol libraries and parametric content.",
        "Process audits and workflow redesign to reduce RFIs and rework.",
        "2D-to-BIM transition plans with training and hand-over guides.",
        "QA reviews and coordination model checks before issue.",
      ],
    },
    {
      icon: <Wrench size={40} className="text-[#ffcc00]" />,
      title: "Technical Support & Outsourced Drafting",
      description:
        "Extra capacity when you need it — reliable drafting and documentation delivered on tight timelines and clear trackers.",
      points: [
        "Full-service drafting and detailing for civil/structural/architectural scopes.",
        "As-builts, redlines and disciplined revision/version control.",
        "CAD compliance checks and drawing clean-ups for portfolios.",
        "Quantity take-offs and tender documentation support.",
        "Quick-turnaround packages for milestones and authority submissions.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section
        id="about"
        className="flex flex-col items-center px-6 sm:px-12 lg:px-24 xl:px-40 py-24 bg-white text-[#003366]"
      >
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">About Us</h1>
          <div className="h-1 w-24 bg-[#ffcc00] mx-auto rounded-full"></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-10 w-full max-w-6xl mb-12">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Help owners, consultants and contractors deliver better designs
              and build better teams — through practical digital engineering,
              clear documentation and training that leads to real output on
              site.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the partner known for reliable drawings, repeatable
              workflows and people who can deliver — from first sketch to
              handover.
            </p>
          </div>
        </div>

        {/* How We Work (concise, non-regional) */}
        <div className="w-full max-w-6xl mb-16">
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">How We Work</h3>
            <p className="text-gray-700 mb-4">
              Every project is different, but a few rules keep quality high and
              surprises low:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                Designs that match local materials, skills and maintenance
                practice.
              </li>
              <li>
                Climate-aware detailing and drainage that survives heavy storms.
              </li>
              <li>
                Submission packs that pass reviews: clear sheets, naming and
                metadata.
              </li>
              <li>
                Skills transfer baked in — so your team gets faster every cycle.
              </li>
            </ul>
          </div>
        </div>

        {/* Image + Narrative */}
        <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl mb-16">
          <img
            src={assets.about}
            alt="Team at work on transport and structural design"
            className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover"
          />
          <div className="flex-1 text-gray-700 leading-relaxed">
            <p className="mb-4">
              We combine experience, common-sense engineering and modern
              tooling. The goal is simple: drawings that are easy to build from,
              quantities you can trust, and a team that knows exactly what to do
              next.
            </p>
            <p>
              Beyond delivery, we invest in people — short courses, mentorship
              and on-the-job standards that raise the bar across projects.
            </p>
          </div>
        </div>

        {/* Detailed Services (Ordered + Bulleted) */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Our Core Services
          </h2>
          <ol className="list-decimal pl-6 space-y-12">
            {services.map((s, i) => (
              <li key={i} className="space-y-3">
                <div className="flex items-center gap-3">
                  {s.icon}
                  <h3 className="text-xl sm:text-2xl font-bold">{s.title}</h3>
                </div>
                <p className="text-gray-700">{s.description}</p>
                <ul className="list-disc ml-10 text-gray-700 space-y-1">
                  {s.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Impact / Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mt-20 w-full max-w-5xl">
          <div>
            <h3 className="text-4xl font-extrabold text-[#ffcc00]">
              <CountUp end={80} duration={2} />+
            </h3>
            <p className="text-gray-600 mt-2 font-medium">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-[#ffcc00]">
              <CountUp end={280} duration={2} />+
            </h3>
            <p className="text-gray-600 mt-2 font-medium">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-[#ffcc00]">
              <CountUp end={10} duration={2} />+
            </h3>
            <p className="text-gray-600 mt-2 font-medium">
              Years of Experience
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-[#ffcc00]">
              <CountUp end={100} duration={2} />+
            </h3>
            <p className="text-gray-600 mt-2 font-medium">Professional Team</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Aboutus;
