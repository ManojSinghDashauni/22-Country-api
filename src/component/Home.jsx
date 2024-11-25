import React from "react";
import { Navlink } from "./index";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="sm:px-16 px-5 bg-Light-Mode-Background dark:bg-Dark-Mode-Background">
        <Navlink />
      </div>
    </div>
  );
};

export default Home;
