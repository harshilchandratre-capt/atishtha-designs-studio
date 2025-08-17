import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Atishtha Designs</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#services" className="hover:text-black">Services</a></li>
          <li><a href="#projects" className="hover:text-black">Projects</a></li>
          <li><a href="#testimonials" className="hover:text-black">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Get in Touch
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#about" className="block hover:text-black">About</a>
          <a href="#services" className="block hover:text-black">Services</a>
          <a href="#projects" className="block hover:text-black">Projects</a>
          <a href="#testimonials" className="block hover:text-black">Testimonials</a>
          <a href="#contact" className="block hover:text-black">Contact</a>
          <a
            href="#contact"
            className="block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition text-center"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
