import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg font-semibold">Atishtha Designs</h2>
        <p className="text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
