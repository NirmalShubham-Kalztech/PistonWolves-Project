import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 shadow-xl shadow-gray-600  w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-2">PistonWolves</h3>
          <p className="text-sm">© 2025 PistonWolves. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-base">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li className="hover:text-red-500 cursor-pointer transition">Home</li>
            <li className="hover:text-red-500 cursor-pointer transition">About</li>
            <li className="hover:text-red-500 cursor-pointer transition">Services</li>
            <li className="hover:text-red-500 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-base">Our Address</h4>
          <p className="text-sm">123 Performance Ave, Mumbai, India</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-base">Contact</h4>
          <p className="text-sm">info@pistonwolves.com</p>
          <p className="text-sm">+91 98765 43210</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
