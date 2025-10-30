import React from "react";
import project1 from "../assets/img/project/project1.png";
import project2 from "../assets/img/project/project2.png";
import project3 from "../assets/img/project/project3.png";
import project4 from "../assets/img/project/project4.png";
import project5 from "../assets/img/project/project5.png";
import project6 from "../assets/img/project/project6.png";
import project7 from "../assets/img/project/project7.png";
import project8 from "../assets/img/project/project8.png";
import project9 from "../assets/img/project/project9.png";
import project10 from "../assets/img/project/project10.png";
import project11 from "../assets/img/project/project11.png";
import project12 from "../assets/img/project/project12.png";
import Projects from  "../assets/img/project/ProjectsHero.png";

const projects = [
  {
    tag: "BMW",
    title: "BMW 430i G20 Build",
    desc: "Full performance and styling package including custom headlights, aero kit, and ECU tune.",
    images: [project1, project2],
  },
  {
    tag: "BMW",
    title: "M4 GTS Light Kit",
    desc: "Installed advanced LED light kit and custom grille for a unique night-time look.",
    images: [project4, project3],
  },
  {
    tag: "BMW",
    title: "E46 Coupe Overhaul",
    desc: "Complete restoration and performance upgrade for this classic E46 coupe.",
    images: [project5, project6],
  },
  {
    tag: "BMW",
    title: "Showstopper BMW E30 M3",
    desc: "Track-ready build with roll cage, racing suspension, and aggressive styling.",
    images: [project7, project8],
  },
  {
    tag: "BMW",
    title: "Classic BMW E21 Euro Look",
    desc: "Euro-style conversion with period-correct wheels, paint, and interior upgrades.",
    images: [project9, project10],
  },
  {
    tag: "BMW",
    title: "Vintage 1977 BMW 520i",
    desc: "Restored to original glory with subtle modern touches for reliability and comfort.",
    images: [project11, project12],
  },
];

const Project = () => (
  <div className="bg-[#181818] min-h-screen text-white">
    {/* Hero Section */}
  <section
  className="h-[80vh] md:h-screen flex flex-col justify-center items-center bg-cover bg-center relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
  style={{ backgroundImage: `url(${Projects})` }}
>
  {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}

  <div className="relative z-10 max-w-3xl px-2 sm:px-4 text-center">
    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-snug">
      Our <span className="text-red-500">Projects</span>
    </h1>
    <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-4">
      Explore our latest builds, customizations, and restorations. Each project
      is a true reflection of our passion, innovation, and craftsmanship that
      define the PistonWolves experience.
    </p>
  </div>
</section>


    {/* Projects List */}
    <section className="py-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="bg-[#23232a] rounded-lg shadow-lg mb-8 overflow-hidden hover:scale-[1.01] transition-transform duration-300"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={proj.images[0]}
                alt={proj.title}
                className="object-cover w-full h-52 sm:h-64 md:h-full"
              />
            </div>

            {/* Right Info */}
            <div className="md:w-1/2 w-full flex flex-col justify-between p-5 sm:p-6">
              <div>
                <span className="bg-red-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-semibold mb-2 inline-block">
                  {proj.tag}
                </span>
                <h3 className="font-bold text-lg sm:text-xl mb-2">{proj.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">{proj.desc}</p>
              </div>

              {/* Small Image */}
              <div className="flex gap-4 justify-center md:justify-start">
                <img
                  src={proj.images[1]}
                  alt={proj.title + " detail"}
                  className="object-cover w-28 h-20 sm:w-32 sm:h-24 rounded"
                />
              </div>

              {/* Button */}
              <div className="mt-4 text-center md:text-left">
                <button className="bg-red-600 text-white px-5 py-2 sm:px-6 sm:py-2 rounded hover:bg-red-700 font-semibold text-sm sm:text-base transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#23232a] border border-red-600 text-red-600 px-6 sm:px-8 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition text-sm sm:text-base">
          Load More Projects
        </button>
      </div>
    </section>
  </div>
);

export default Project;
