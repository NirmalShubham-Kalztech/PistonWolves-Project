import React from "react"; // Import React library
import About1 from "../assets/img/About/About1.png"; // Import team image 1
import About2 from "../assets/img/About/About2.png"; // Import team image 2
import About3 from "../assets/img/About/About3.png"; // Import team image 3
import About4 from "../assets/img/About/About4.png"; // Import team image 4
import About5 from "../assets/img/About/About5.png"; // Import team image 5
import {
  FaTrophy,        // Import trophy icon
  FaLightbulb,     // Import lightbulb icon
  FaUsers,         // Import users icon
  FaShieldAlt,     // Import shield icon
} from "react-icons/fa"; // Import icons from react-icons

// Team members array
const team = [
  {
    name: "Marcus Rodriguez", // Team member name
    role: "Lead Performance Engineer", // Role
    desc: "Specializes in engine tuning and performance upgrades with 15+ years of experience.", // Description
    img: About2, // Image
  },
  {
    name: "Sarah Chen", // Team member name
    role: "Head of Customization", // Role
    desc: "Expert in custom bodywork, paint, and interior design for unique builds.", // Description
    img: About3, // Image
  },
  {
    name: "Jake Thompson", // Team member name
    role: "Racing Specialist", // Role
    desc: "Professional racer and suspension tuning expert for track builds.", // Description
    img: About4, // Image
  },
  {
    name: "Jake Thompson", // Team member name
    role: "Senior Technician", // Role
    desc: "Master technician with a focus on reliability and precision assembly.", // Description
    img: About5, // Image
  },
];

// Company values array
const values = [
  {
    icon: <FaTrophy />, // Icon component
    title: "Excellence", // Value title
    text: "We strive for perfection in every project, setting a new standard of craft.", // Value description
  },
  {
    icon: <FaLightbulb />, // Icon component
    title: "Innovation", // Value title
    text: "Always adopting new technology and creative solutions for unique builds.", // Value description
  },
  {
    icon: <FaUsers />, // Icon component
    title: "Collaboration", // Value title
    text: "We closely partner with clients to understand their vision, bringing it to life.", // Value description
  },
  {
    icon: <FaShieldAlt />, // Icon component
    title: "Reliability", // Value title
    text: "Our clients trust us for solutions that deliver both excitement and dependability.", // Value description
  },
];

// About component definition
const About = () => (
  // Main container with background color and min height
  <div className="bg-[#181818] min-h-screen">
    {/* Hero Section */}
    <section
      className="h-[400px] flex flex-col justify-center items-center bg-cover bg-center relative" // Section styling
      style={{ backgroundImage: `url(${About1})` }} // Background image
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-2">
          About <span className="text-red-500">PistonWolves</span> {/* Highlighted brand name */}
        </h1>
        <p className="text-gray-300 text-center max-w-2xl">
          {/* Company intro text */}
          We are a passionate team of automotive enthusiasts, dedicated to
          transforming vehicles into works of art and engineering excellence.
          Since 2015, we’ve delivered hundreds of custom projects for clients who
          demand the best.
        </p>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="py-12 px-4 flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-center">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Our Story</h2> {/* Section heading */}
        <p className="text-gray-200 mb-4">
          {/* Story paragraph 1 */}
          Founded in 2015, PistonWolves began as a small group of car lovers with
          a vision to push the boundaries of automotive performance and style.
          Over the years, we’ve grown into a full-service modification shop, known
          for our attention to detail and commitment to quality.
        </p>
        <p className="text-gray-400">
          {/* Story paragraph 2 */}
          Every project is driven by a commitment to excellence—whether it’s a
          subtle upgrade or a complete transformation. Our team combines
          technical expertise, creativity, and a love for cars to deliver results
          that exceed expectations.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <img
          src={About1} // Team image
          alt="Our Team"
          className="rounded-lg w-full max-w-md mb-2"
        />
        {/* <div className="bg-red-600 text-white px-4 py-2 rounded font-bold text-center w-fit">
          500+ Projects Delivered
        </div> */}
      </div>
    </section>

    {/* Our Values Section */}
    <section className="py-10 bg-[#222]">
      <h2 className="text-2xl font-bold text-center text-gray-200 mb-6">
        Our <span className="text-yellow-400">Values</span> {/* Highlighted word */}
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {values.map((val, idx) => (
          // Value card
          <div key={idx} className="flex flex-col items-center w-48 text-center">
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-2 text-2xl">
              {val.icon} {/* Value icon */}
            </div>
            <h3 className="text-white font-semibold mb-1">{val.title}</h3> {/* Value title */}
            <p className="text-gray-400 text-sm">{val.text}</p> {/* Value description */}
          </div>
        ))}
      </div>
    </section>

    {/* Meet Our Team Section */}
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-200 mb-8">
        Meet Our <span className="text-red-500">Team</span> {/* Highlighted word */}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member, idx) => (
          // Team member card
          <div
            key={idx}
            className="bg-[#222] rounded-lg overflow-hidden shadow-lg w-64 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.img} // Member image
              alt={member.name}
              className="object-cover w-full h-56"
            />
            <div className="p-4 flex-1 flex flex-col items-center">
              <h3 className="font-bold text-lg text-white mb-1">
                {member.name} {/* Member name */}
              </h3>
              <span className="text-red-500 font-semibold mb-2">
                {member.role} {/* Member role */}
              </span>
              <p className="text-gray-400 text-center text-sm">
                {member.desc} {/* Member description */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About; // Export About component
