import React from "react";
import { Mode } from "../component";

const Header = () => {
  const toggle = () => {
    let htmlclass = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlclass.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlclass.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className="w-full flex justify-between py-4 sm:px-20 drop-shadow-xl bg-Dark-Mode-Text-Light-Mode-Elements text-Light-Mode-Text dark:bg-Dark-Mode-Elements dark:text-Dark-Mode-Text-Light-Mode-Elements">
      <h2 className="font-bold text-xl"> Where in the world?</h2>
      <Mode click={toggle} />
    </div>
  );
};

export default Header;
