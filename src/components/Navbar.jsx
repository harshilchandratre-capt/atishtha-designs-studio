import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Atishtha Designs</h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#services" className="hover:text-black">Services</a></li>
          <li><a href="#projects" className="hover:text-black">Projects</a></li>
          <li><a href="#testimonials" className="hover:text-black">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
