import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-black text-gray-400 py-12 px-6 w-full border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-2">PistonWolves</h3>
          <p className="text-sm">© 2025 PistonWolves. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Quick Links</h4>
          <ul className="text-sm flex flex-col items-center sm:items-start gap-2">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-red-500 transition duration-300 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

     {/* Address */}
<div>
  <h4 className="text-white font-semibold mb-2 text-base">Our Address</h4>
  <p className="text-sm leading-relaxed">
    PistonWolves Auto Garage <br />
    123 Performance Avenue, Andheri (E), <br />
    Near Metro Station, Mumbai, Maharashtra 400059 <br />
    India
  </p>
 

</div>


        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-base">Contact</h4>
          <p className="text-sm">info@pistonwolves.com</p>
          <p className="text-sm">+91 98765 43210</p>
            <p className="text-sm mt-2">
    <span className="font-semibold">Working Hours:</span> Mon - Sat: 9:00 AM – 7:00 PM
  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
