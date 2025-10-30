import React from "react";
import Services1 from "../assets/img/About/ServicesHero.png";
import {
  FaCogs,
  FaAward,
  FaTools,
  FaStopwatch,
  FaCarSide,
} from "react-icons/fa";

const serviceList = [
  {
    title: "Performance Upgrades",
    features: [
      "ECU remapping",
      "Turbo/supercharger installs",
      "Exhaust systems",
      "Intake upgrades",
      "Dyno tuning",
    ],
    price: "$1,499",
  },
  {
    title: "Custom Paint Jobs",
    features: [
      "Full resprays",
      "Custom graphics",
      "Ceramic coating",
      "Scratch repair",
      "Color matching",
    ],
    price: "$2,199",
  },
  {
    title: "Suspension Tuning",
    features: [
      "Coilover installs",
      "Air suspension",
      "Corner balancing",
      "Alignment",
      "Track setup",
    ],
    price: "$1,299",
  },
  {
    title: "Engine Modifications",
    features: [
      "Forged internals",
      "Camshaft upgrades",
      "Fuel system upgrades",
      "Cooling solutions",
      "Custom builds",
    ],
    price: "$3,499",
  },
  {
    title: "Brake Systems",
    features: [
      "Big brake kits",
      "Performance pads",
      "Braided lines",
      "Fluid flush",
      "Track prep",
    ],
    price: "$1,199",
  },
  {
    title: "Body Kits",
    features: [
      "Widebody installs",
      "Aero parts",
      "Spoilers & diffusers",
      "Custom fabrication",
      "Paint matching",
    ],
    price: "$2,899",
  },
];

const whyChoose = [
  {
    icon: <FaAward className="text-2xl" />,
    title: "Expert Technicians",
    desc: "Certified professionals with years of hands-on experience.",
  },
  {
    icon: <FaTools className="text-2xl" />,
    title: "Amazing Aftercare",
    desc: "We support you long after your project leaves our shop.",
  },
  {
    icon: <FaStopwatch className="text-2xl" />,
    title: "Fast Turnaround",
    desc: "Efficient workflow ensures your car is back on the road quickly.",
  },
  {
    icon: <FaCarSide className="text-2xl" />,
    title: "Comprehensive Services",
    desc: "From mild to wild, we handle all aspects of car modification.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#181818] min-h-screen text-white">
      {/* --- Hero Section --- */}
    <section
  className="h-[80vh] md:h-screen flex flex-col justify-center items-center bg-cover bg-center relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
  style={{ backgroundImage: `url(${Services1})` }}
>
  {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}

  <div className="relative z-10 max-w-3xl px-2 sm:px-4 text-center">
    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-snug">
      Our <span className="text-red-500">Services</span>
    </h1>
    <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-4">
      From cutting-edge performance builds to custom finishes, we deliver
      machines that thrill. Every project reflects our passion for innovation,
      precision, and design excellence.
    </p>
  </div>
</section>


      {/* --- Call to Action --- */}
      <section className="py-10 sm:py-6 px-4 text-center">
        <h2 className="text-2xl sm:text-xl font-semibold mb-2">
          Ready to Transform Your
          <span className="text-red-500"> Ride?</span>
        </h2>
        <p className="text-gray-400 mb-6 sm:mb-4 max-w-xl mx-auto sm:text-xs">
          Whether you want more speed, head-turning looks, or track-ready
          handling, our team is ready to make it happen.
        </p>
        <div className="flex justify-center gap-4 sm:flex-col sm:items-center sm:gap-2">
          <button className="bg-red-600 text-white px-6 py-2 sm:px-4 sm:py-1 rounded hover:bg-red-700 font-semibold transition text-sm">
            Get a Quote
          </button>
          <button className="border border-gray-400 text-white px-6 py-2 sm:px-4 sm:py-1 rounded hover:bg-gray-700 font-semibold transition text-sm">
            See Portfolio
          </button>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-8 sm:py-6 px-4">
        <h2 className="text-2xl sm:text-xl font-bold text-center mb-2">
          Our <span className="text-red-500">Services</span>
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto sm:text-xs sm:mb-4">
          Explore our most popular packages. All services are customizable to
          your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-8 sm:gap-4 max-w-6xl mx-auto">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#23232a] rounded-lg shadow-lg p-6 sm:p-3 flex flex-col hover:shadow-red-500/20 transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-2">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center sm:w-6 sm:h-6 sm:text-xs">
                  <FaCogs />
                </span>
                <h3 className="font-bold text-lg sm:text-base">
                  {service.title}
                </h3>
              </div>

              <ul className="text-gray-300 text-sm sm:text-xs mb-4 flex-1 list-disc list-inside">
                {service.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-auto sm:flex-col sm:items-start sm:gap-2">
                <span className="text-red-500 font-bold sm:text-sm">
                  {service.price}
                </span>
                <button className="bg-red-600 text-white px-4 py-1 sm:px-3 sm:py-1 rounded hover:bg-red-700 text-sm font-semibold transition">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-12 sm:py-6 px-4">
        <h2 className="text-2xl sm:text-xl font-bold text-center mb-8 sm:mb-4">
          Why Choose <span className="text-red-500">PistonWolves?</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-4 max-w-5xl mx-auto">
          {whyChoose.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#23232a] rounded-lg p-6 sm:p-3 w-64 sm:w-40 flex flex-col items-center hover:shadow-lg hover:shadow-red-500/20 transition"
            >
              <span className="bg-red-600 text-white rounded-full w-12 h-12 sm:w-8 sm:h-8 flex items-center justify-center mb-3 sm:mb-1 text-xl sm:text-sm">
                {item.icon}
              </span>
              <h3 className="font-semibold mb-1 sm:text-xs text-center">
                {item.title}
              </h3>
              <p className="text-gray-400 text-center text-sm sm:text-[10px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
