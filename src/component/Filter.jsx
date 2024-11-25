import React from "react";

const Filter = ({ className = "", option, ...props }) => {
  return (
    <select
      className={`bg-Dark-Blue-Dark-Mode-Elements ${className}`}
      {...props}
    >
      {option?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Filter;
