import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900 text-white">
  <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-8 py-3">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 rounded-lg p-2">
            <span className="text-white text-xl font-bold">🚗</span>
          </div>
          <span className="font-semibold text-lg">PistonWolves</span>
        </div>

        {/* Hamburger button for mobile */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle Menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Center: Menu */}
        <ul className={`flex-col md:flex-row md:flex gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:pt-0 pt-4 transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden md:flex"}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/product" onClick={() => setIsOpen(false)}>Product</Link></li>
          <li><Link to="/project" onClick={() => setIsOpen(false)}>Project</Link></li>
          <li><Link to="/event" onClick={() => setIsOpen(false)}>Event</Link></li>
          <li><Link to="/team" onClick={() => setIsOpen(false)}>Team</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        {/* Right: Book Button */}
        <div className="hidden md:block">
          <Link
            to="/book"
            className="border border-gray-400 rounded-full px-5 py-1 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-150 text-sm font-normal"
          >
            Book
          </Link>
        </div>

        {/* Book Button for Mobile */}
        <div className={`md:hidden absolute top-full right-6 mt-2 ${isOpen ? "block" : "hidden"}`}>
          <Link
            to="/book"
            className="border border-gray-400 rounded-full px-5 py-1 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-150 text-sm font-normal"
            onClick={() => setIsOpen(false)}
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
