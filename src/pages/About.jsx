import React from "react";
import About1 from "../assets/img/About/About1.png";
import About2 from "../assets/img/About/About2.png";
import About3 from "../assets/img/About/About3.png";
import About4 from "../assets/img/About/About4.png";
import About5 from "../assets/img/About/About5.png";
import About6 from "../assets/img/About/AboutHero.png";
import { FaTrophy, FaLightbulb, FaUsers, FaShieldAlt } from "react-icons/fa";

const team = [
  {
    name: "Marcus Rodriguez",
    role: "Lead Performance Engineer",
    desc: "Specializes in engine tuning and performance upgrades with 15+ years of experience.",
    img: About2,
  },
  {
    name: "Sarah Chen",
    role: "Head of Customization",
    desc: "Expert in custom bodywork, paint, and interior design for unique builds.",
    img: About3,
  },
  {
    name: "Jake Thompson",
    role: "Racing Specialist",
    desc: "Professional racer and suspension tuning expert for track builds.",
    img: About4,
  },
  {
    name: "Jake Thompson",
    role: "Senior Technician",
    desc: "Master technician with a focus on reliability and precision assembly.",
    img: About5,
  },
];

const values = [
  {
    icon: <FaTrophy />,
    title: "Excellence",
    text: "We strive for perfection in every project, setting a new standard of craft.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    text: "Always adopting new technology and creative solutions for unique builds.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    text: "We closely partner with clients to understand their vision, bringing it to life.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliability",
    text: "Our clients trust us for solutions that deliver both excitement and dependability.",
  },
];

const About = () => (
  <div className="bg-[#181818] min-h-screen w-full overflow-x-hidden">
    {/* Hero Section */}
   <section
      className="h-[80vh] md:h-screen flex flex-col justify-center items-center bg-cover bg-center relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
                  style={{ backgroundImage: `url(${About6})` }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
      <div className="relative z-10 max-w-3xl px-2 sm:px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-snug">
          About <span className="text-red-500">PistonWolves</span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-4">
          We are a passionate team of automotive enthusiasts, dedicated to
          transforming vehicles into works of art and engineering excellence.
          Since 2015, we’ve delivered hundreds of custom projects for clients who
          demand the best.
        </p>
      </div>
    </section>




    {/* Our Story Section */}
    <section className="py-12 px-4 sm:px-8 flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-center">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Our Story</h2>
        <p className="text-gray-200 mb-4 text-sm sm:text-base leading-relaxed">
          Founded in 2015, PistonWolves began as a small group of car lovers with
          a vision to push the boundaries of automotive performance and style.
          Over the years, we’ve grown into a full-service modification shop, known
          for our attention to detail and commitment to quality.
        </p>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Every project is driven by a commitment to excellence—whether it’s a
          subtle upgrade or a complete transformation. Our team combines
          technical expertise, creativity, and a love for cars to deliver results
          that exceed expectations.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={About1}
          alt="Our Team"
          className="rounded-lg w-full max-w-sm sm:max-w-md object-cover"
        />
      </div>
    </section>

    {/* Our Values Section */}
    <section className="py-10 bg-[#222] px-4">
      <h2 className="text-2xl font-bold text-center text-gray-200 mb-8">
        Our <span className="text-yellow-400">Values</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center max-w-5xl mx-auto">
        {values.map((val, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center max-w-[180px] sm:max-w-[200px]"
          >
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-2 text-2xl">
              {val.icon}
            </div>
            <h3 className="text-white font-semibold mb-1">{val.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">{val.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Meet Our Team Section */}
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-200 mb-8">
        Meet Our <span className="text-red-500">Team</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-[#222] rounded-lg overflow-hidden shadow-lg w-64 sm:w-72 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="object-cover w-full h-48 sm:h-56"
            />
            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="font-bold text-lg text-white mb-1">
                {member.name}
              </h3>
              <span className="text-red-500 font-semibold mb-2">
                {member.role}
              </span>
              <p className="text-gray-400 text-sm">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
