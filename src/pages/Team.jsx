import React from "react";
import TeamImg from "../assets/img/Team/team1.png";
import TeamImg2 from "../assets/img/Team/team2.png";
import TeamImg3 from "../assets/img/Team/team3.png";
import TeamImg4 from "../assets/img/Team/team4.png";
import TeamImg5 from "../assets/img/Team/team5.png";
import TeamImg6 from "../assets/img/Team/team6.png";

const metrics = [
  { value: "150+", label: "Successful Projects" },
  { value: "500+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support & Service" },
];

const team = [
  {
    name: "Dr. Emily Carter",
    role: "Lead Engineer",
    img: TeamImg,
    desc: "Expert in automotive systems and custom modifications.",
    socials: [
      { icon: "🌐", link: "#" },
      { icon: "🐦", link: "#" },
      { icon: "🔗", link: "#" },
    ],
  },
  {
    name: "Alex Kim",
    role: "Performance Specialist",
    img: TeamImg2,
    desc: "Focused on engine tuning and racing support.",
    socials: [
      { icon: "🌐", link: "#" },
      { icon: "🐦", link: "#" },
      { icon: "🔗", link: "#" },
    ],
  },
  {
    name: "Rachel Morgan",
    role: "Styling Expert",
    img: TeamImg3,
    desc: "Master of visual design and car wraps.",
    socials: [
      { icon: "🌐", link: "#" },
      { icon: "🐦", link: "#" },
      { icon: "🔗", link: "#" },
    ],
  },
  {
    name: "Chris J.",
    role: "Motorsport Coach",
    img: TeamImg4,
    desc: "Driver development and track day guidance.",
    socials: [
      { icon: "🌐", link: "#" },
      { icon: "🐦", link: "#" },
      { icon: "🔗", link: "#" },
    ],
  },
  {
    name: "Samantha D.",
    role: "Customer Success",
    img: TeamImg5,
    desc: "Ensures a smooth and welcoming customer journey.",
    socials: [
      { icon: "🌐", link: "#" },
      { icon: "🐦", link: "#" },
      { icon: "🔗", link: "#" },
    ],
  },
  {
    name: "Mark Evans",
    role: "Parts Specialist",
    img: TeamImg6,
    desc: "Handles sourcing rare and high-performance parts.",
    socials: [
      { icon: "🌐", link: "#" },
      { icon: "🐦", link: "#" },
      { icon: "🔗", link: "#" },
    ],
  },
];

const Team = () => (
  <div className="bg-gray-900 min-h-screen text-white">
    {/* Hero Section */}
    <div
      className="w-full py-16 flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/team-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Our <span className="text-red-500">Team</span>
      </h1>
      <p className="text-base sm:text-lg max-w-xl mb-8 text-gray-300">
        Meet the talented professionals behind our success. Dedicated to delivering
        excellence and innovation in every ride.
      </p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto w-full">
        {metrics.map(({ value, label }, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-red-500">{value}</span>
            <span className="text-sm sm:text-md text-gray-200">{label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Team Section */}
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-3">
        Meet Our <span className="text-red-500">Experts</span>
      </h2>
      <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto text-sm sm:text-base">
        Our team of interdisciplinary automotive specialists combines a passion for
        performance, personalized attention, and integrity—from concept to completion
        & delivery.
      </p>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {team.map((m, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl overflow-hidden shadow flex flex-col items-center text-center p-6 hover:shadow-lg hover:shadow-red-500/20 transition-all"
          >
            <img
              src={m.img}
              alt={m.name}
              className="rounded-full w-24 h-24 sm:w-28 sm:h-28 object-cover mb-3"
            />
            <span className="text-md sm:text-lg font-semibold text-white">{m.name}</span>
            <span className="text-sm text-gray-400 mb-2">{m.role}</span>
            <p className="text-gray-300 text-sm mb-4">{m.desc}</p>
            <div className="flex justify-center gap-2">
              {m.socials.map(({ icon, link }, i) => (
                <a
                  href={link}
                  key={i}
                  className="bg-gray-700 hover:bg-red-600 rounded p-2 text-lg transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer CTA */}
    <div className="text-center pb-10 px-4">
      <h3 className="mb-2 text-lg sm:text-xl">Join Our Team</h3>
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-base transition">
        View Team Positions
      </button>
    </div>
  </div>
);

export default Team;
