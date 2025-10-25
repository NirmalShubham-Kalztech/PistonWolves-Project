import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Project from "./pages/Project.jsx";
import Product from "./pages/Product.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import Event from "./pages/Event.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#181818] text-white">

        {/* Navbar Section */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />} />
            <Route path="/product" element={<Product />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
