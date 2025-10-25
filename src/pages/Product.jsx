import React from "react";
// Product images imports
import prodct from "../assets/img/Prodct/prodct1.png";
import prodct2 from "../assets/img/Prodct/prodct2.png";
import prodct3 from "../assets/img/Prodct/prodct3.png";
import prodct4 from "../assets/img/Prodct/prodct4.png";
import prodct5 from "../assets/img/Prodct/prodct5.png";
import prodct6 from "../assets/img/Prodct/prodct6.png";

// Icon imports
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// Statistic cards content
const stats = [
  { value: "10K+", label: "Parts In Stock" },
  { value: "500+", label: "Brands" },
  { value: "24/7", label: "Support" },
];

// Product categories data
const categories = [
  {
    tag: "New",
    title: "ECU Upgrades",
    desc: "Unlock hidden power with advanced ECU tuning solutions.",
    img: prodct6,
  },
  {
    title: "Racing Seats",
    desc: "Lightweight, FIA-approved seats for maximum support.",
    img: prodct,
  },
  {
    tag: "Best Seller",
    title: "Carbon Fiber Kits",
    desc: "Premium carbon fiber body kits for weight savings and style.",
    img: prodct2,
  },
  {
    title: "Exhaust Systems",
    desc: "Performance exhausts for sound and flow.",
    img: prodct3,
  },
  {
    title: "Forged Wheels",
    desc: "Lightweight, strong wheels for track and street.",
    img: prodct4,
  },
  {
    title: "Paint Protection",
    desc: "Protect your finish with advanced PPF and ceramic coatings.",
    img: prodct5,
  },
];

// Contact information data
const contacts = [
  { icon: <FaPhoneAlt />, label: "Phone", value: "+91 98765 43210" },
  { icon: <FaEnvelope />, label: "Email", value: "info@pistonwolves.com" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "203 Automotive Lane, Mumbai" },
  { icon: <FaClock />, label: "Hours", value: "Mon-Sat: 10AM - 8PM" },
];

const Product = () => (
  <div className="bg-[#181818] min-h-screen text-white">
    {/* ---- Hero Section ---- */}
    <section
      className="relative h-[220px] sm:h-[280px] flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${prodct6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">
          Premium <span className="text-red-500">Products</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          The best in performance, reliability, and style. Shop our curated
          selection of premium automotive parts and accessories.
        </p>
        <button className="mt-5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-semibold text-sm sm:text-base">
          Shop Now
        </button>
      </div>
    </section>

    {/* ---- Stats Section ---- */}
    <section className="py-8 bg-[#222] flex flex-wrap justify-center gap-6 sm:gap-10">
      {stats.map((s, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-bold text-red-500">{s.value}</span>
          <span className="text-sm sm:text-base text-gray-200">{s.label}</span>
        </div>
      ))}
    </section>

    {/* ---- Categories Section ---- */}
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Product <span className="text-red-500">Categories</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-[#23232a] rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-red-500/30 transition-transform duration-300"
          >
            <div className="relative h-40 sm:h-52 w-full">
              <img src={cat.img} alt={cat.title} className="object-cover w-full h-full" />
              {cat.tag && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {cat.tag}
                </span>
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
              <p className="text-gray-300 text-sm flex-1">{cat.desc}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold mt-4 text-sm">
                View Products
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ---- Featured Products Section ---- */}
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Featured <span className="text-red-500">Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((prod, idx) => (
          <div
            key={idx}
            className="bg-[#23232a] rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-red-500/30 transition-transform duration-300"
          >
            <div className="relative h-40 sm:h-52 w-full">
              <img src={prod.img} alt={prod.title} className="object-cover w-full h-full" />
              {prod.tag && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {prod.tag}
                </span>
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-1">{prod.title}</h3>
              <p className="text-gray-300 text-sm flex-1">{prod.desc}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold mt-4 text-sm">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#23232a] border border-red-600 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition text-sm">
          Load More Products
        </button>
      </div>
    </section>

    {/* ---- Contact Section ---- */}
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Get in <span className="text-red-500">Touch</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {contacts.map((c, idx) => (
          <div
            key={idx}
            className="bg-[#23232a] rounded-lg p-4 flex flex-col items-center hover:shadow-lg hover:shadow-red-500/20 transition"
          >
            <span className="bg-red-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl mb-2">
              {c.icon}
            </span>
            <div className="font-semibold text-sm sm:text-base mb-1">{c.label}</div>
            <div className="text-gray-400 text-xs sm:text-sm text-center">{c.value}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Product;
