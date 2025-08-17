import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4"
          >
            <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
              <li><a href="#about" onClick={toggleMenu} className="hover:text-black">About</a></li>
              <li><a href="#services" onClick={toggleMenu} className="hover:text-black">Services</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="hover:text-black">Projects</a></li>
              <li><a href="#testimonials" onClick={toggleMenu} className="hover:text-black">Testimonials</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="hover:text-black">Contact</a></li>
            </ul>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block text-center bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
