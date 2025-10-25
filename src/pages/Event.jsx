import React, { useState } from "react";
import EventImg from "../assets/img/Event/Event1.png";
import EventImg2 from "../assets/img/Event/Event2.png";
import EventImg3 from "../assets/img/Event/Event3.png";
import EventImg4 from "../assets/img/Event/Event4.png";
import EventImg5 from "../assets/img/Event/Event5.png";
import EventImg6 from "../assets/img/Event/Event6.png";

const eventCategories = [
  "All",
  "Meet",
  "Track",
  "Show",
  "Workshop",
  "Gathering",
  "Finals",
];

const events = [
  {
    tag: "Meet",
    title: "Summer Cars & Coffee Meet",
    desc: "Join fellow enthusiasts for a morning of cars, coffee, and conversation.",
    img: EventImg,
    date: "July 14, 2025",
    location: "Mumbai, India",
    featured: true,
  },
  {
    tag: "Track",
    title: "Track Day Experience",
    desc: "Test your skills and your car’s limits on a professional race track.",
    img: EventImg2,
    date: "August 2, 2025",
    location: "Pune Circuit",
    featured: true,
  },
  {
    tag: "Show",
    title: "Annual Auto Show & Expo",
    desc: "See the latest builds, meet vendors, and enjoy live demos.",
    img: EventImg3,
    date: "September 10, 2025",
    location: "NESCO, Mumbai",
    featured: false,
  },
  {
    tag: "Workshop",
    title: "Performance Tuning Workshop",
    desc: "Hands-on workshop with our experts. Learn tuning basics and advanced tips.",
    img: EventImg4,
    date: "October 5, 2025",
    location: "PistonWolves HQ",
    featured: false,
  },
  {
    tag: "Gathering",
    title: "BMW Enthusiasts Gathering",
    desc: "A night meet for BMW fans—show off your ride and connect with the community.",
    img: EventImg5,
    date: "October 20, 2025",
    location: "BKC, Mumbai",
    featured: true,
  },
  {
    tag: "Finals",
    title: "Drift Championship Finals",
    desc: "Watch the region’s best drivers battle for the drift crown.",
    img: EventImg6,
    date: "November 15, 2025",
    location: "MMRT, Chennai",
    featured: false,
  },
];

const Event = () => {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? events
      : events.filter((e) => e.tag === selected);

  return (
    <div className="bg-[#181818] min-h-screen text-white">
      {/* Hero */}
      <section
        className="h-[180px] sm:h-[300px] flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(/assets/img/event-hero.jpg)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center w-full px-3 py-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
            Automotive <span className="text-red-500">Events</span>
          </h1>
          <p className="text-gray-300 text-center max-w-md sm:max-w-2xl text-base sm:text-lg">
            Track days, car meets, workshops, and more—find your next automotive adventure with PistonWolves.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-2 sm:px-4 max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full font-semibold border text-sm ${
                selected === cat
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-[#23232a] text-gray-300 border-[#23232a] hover:bg-red-700 hover:text-white"
              }`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Upcoming <span className="text-red-500">Events</span>
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto text-base sm:text-lg">
          Mark your calendar. Unmissable events for gearheads, customizers, and motorsport fans.
        </p>
      </section>

      {/* Events List */}
      <section className="px-2 sm:px-4 max-w-4xl mx-auto">
        {filtered.map((event, idx) => (
          <div
            key={idx}
            className="bg-[#23232a] rounded-lg shadow-lg mb-8 overflow-hidden flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/3">
              <img
                src={event.img}
                alt={event.title}
                className="object-cover w-full h-48 md:h-full"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-between p-4 sm:p-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {event.tag}
                  </span>
                  {event.featured && (
                    <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-1">{event.title}</h3>
                <p className="text-gray-300 mb-2 text-sm sm:text-base">{event.desc}</p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-400 mb-2">
                  <span>
                    <i className="fas fa-calendar-alt mr-1"></i>
                    {event.date}
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {event.location}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-semibold w-full sm:w-auto">
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-8">
          <button className="bg-[#23232a] border border-red-600 text-red-600 px-8 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition">
            Load More Events
          </button>
        </div>
      </section>
    </div>
  );
};

export default Event;
