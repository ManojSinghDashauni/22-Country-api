import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Button = ({ text, icon, type = "button", className = "", ...props }) => {
  return (
    <button
      className={`${className} border-none px-8 py-2 rounded-md dark:bg-Dark-Mode-Elements  shadow-md bg-Dark-Mode-Text-Light-Mode-Elements dark:text-Dark-Mode-Text-Light-Mode-Elements`}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
