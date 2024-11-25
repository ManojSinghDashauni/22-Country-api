import React from "react";
import { MdDarkMode } from "react-icons/md";

const Mode = ({ click }) => {
  return (
    <button className="flex items-center gap-2 text-sm" onClick={click}>
      <MdDarkMode />
      Dark Mode
    </button>
  );
};

export default Mode;
