import React from "react";

const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  const base =
    "px-6 py-2 rounded-full font-medium transition duration-300";
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
