import React from "react";
import HomeImg from "../assets/img/Home/Home.jpg";
import Home1 from "../assets/img/Home/Home1.png";
import Home2 from "../assets/img/Home/Home2.png";
import Home3 from "../assets/img/Home/Home3.png";
import Home4 from "../assets/img/Home/Home4.png";
import Home5 from "../assets/img/Home/Home5.png";
import Home6 from "../assets/img/Home/Home6.png";
import Home7 from "../assets/img/Home/Home7.png";

const services = [
  {
    title: "Performance Upgrades",
    desc: "Boost your engine power with our professional performance modifications and tuning services",
    img: Home1,
    label: "Performance Upgrades",
  },
  {
    title: "Custom Paint Jobs",
    desc: "Stand out with our premium custom paint work and vinyl wrapping services.",
    img: Home2,
    label: "Custom Paint Jobs",
  },
  {
    title: "Performance Upgrades",
    desc: "Optimize your ride quality and handling with our advanced suspension systems.",
    img: Home3,
    label: "Performance Upgrades",
  },
  {
    title: "Suspension Tuning",
    desc: "Enhance your vehicle's handling and ride quality with our expert suspension tuning services.",
    img: Home4,
    label: "Suspension Tuning",
  },
];

const projects = [
  {
    tag: "Performance",
    title: "Body Kits & Styling",
    desc: "Complete performance overhaul with turbo upgrade, custom exhaust, and aggressive styling package.",
    img: HomeImg,
  },
  {
    tag: "Track Build",
    title: "Mustang GT Track Beast",
    desc: "Track-focused build with roll cage, racing suspension, and aerodynamic enhancements.",
    img: Home7,
  },
];

const beforeAfter = {
  title: "Mustang GT Track Beast",
  desc: "Track-focused build with roll cage, racing suspension, and aerodynamic enhancements.",
  before: Home5,
  after: Home6,
};

const Home = () => {
  return (
    <div className="bg-[#181818] text-white min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="h-[80vh] md:h-screen flex flex-col justify-center items-center bg-cover bg-center relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
            style={{ backgroundImage: `url(${HomeImg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Your <span className="text-red-500">Dream Ride</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Professional car modification services, performance upgrades, and racing expertise.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
              Book Your Custom Ride
            </button>
            <button className="border border-gray-400 hover:bg-gray-700 px-6 py-2 rounded text-white font-semibold">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-2">Our Featured Services</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            From performance upgrades to custom styling, we offer comprehensive car modification services to bring your automotive vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#222] rounded-xl overflow-hidden shadow-lg w-full sm:w-[45%] lg:w-[22%]"
              >
                <div className="relative h-44 w-full">
                  <img src={service.img} alt={service.title} className="object-cover w-full h-full" />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {service.label}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                  <a href="#" className="text-red-500 font-semibold mt-3 inline-block hover:underline">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full font-semibold">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="py-16 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-2">Project Showcase</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Witness the incredible transformations we’ve achieved. From subtle enhancements to complete overhauls, every project tells a story of precision and passion.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-[#222] rounded-lg overflow-hidden shadow-lg w-full sm:w-[45%] lg:w-[40%]">
                <div className="relative h-56 w-full">
                  <img src={proj.img} alt={proj.title} className="object-cover w-full h-full" />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {proj.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-white mb-2">{proj.title}</h3>
                  <p className="text-gray-300 text-sm">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BEFORE / AFTER */}
          <div className="bg-[#333] rounded-lg p-6 sm:p-10 max-w-5xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-center mb-2">{beforeAfter.title}</h3>
            <p className="text-gray-300 text-center mb-6">{beforeAfter.desc}</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <img src={beforeAfter.before} alt="Before" className="rounded w-full md:w-1/2 h-48 object-cover" />
              <img src={beforeAfter.after} alt="After" className="rounded w-full md:w-1/2 h-48 object-cover" />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full font-semibold">
              View All Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
