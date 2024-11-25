import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import data from "../asset/data.json";
import { Link } from "react-router";

const Navlink = () => {
  const [search, setSearch] = useState("");
  const [filterCountry, setFilterCounrty] = useState(data);

  const findCountry = (country) => {
    const updateCountry = data.filter((data1) => {
      return data1.region === country;
    });
    setFilterCounrty(updateCountry);
  };
  // console.log(data);
  return (
    <div>
      <div className="sm:flex  sm:justify-between px-5 py-10">
        <div className="relative sm:w-1/3  w-full rounded-md">
          <input
            type="text"
            className={`drop-shadow-lg py-2 w-full text-Light-Mode-Input bg-Light-Mode-Background dark:bg-Dark-Mode-Elements dark:text-Dark-Mode-Text-Light-Mode-Elements pl-14 border-none outline-none`}
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaMagnifyingGlass className="absolute bottom-3 text-md left-5 text-Light-Mode-Input dark:text-Dark-Mode-Text-Light-Mode-Elements" />
        </div>

        {/* Filter  */}
        <div className="w-44 mt-5 sm:mt-0 group relative">
          {/* <div className="dark:bg-Dark-Mode-Elements w-3/4 sm:w-full rounded-md"> */}
          <p className=" drop-shadow-lg dark:bg-Dark-Mode-Elements bg-Dark-Mode-Text-Light-Mode-Elements dark:text-Dark-Mode-Text-Light-Mode-Elements flex sm:justify-around justify-between items-center py-1 px-4 rounded-md">
            Filter by Region <RiArrowDropDownLine className="text-3xl" />
          </p>
          {/* </div> */}
          <ul
            className=" group-hover:block hidden w-full absolute  drop-shadow-lg dark:bg-Dark-Mode-Elements dark:text-Dark-Mode-Text-Light-Mode-Elements bg-Dark-Mode-Text-Light-Mode-Elements text-left  py-1 px-5  rounded-md mt-1"
            id="dropDownCountry"
          >
            <li>
              <button onClick={() => findCountry("Africa")}>Africa</button>
            </li>
            <li>
              <button onClick={() => findCountry("Americas")}>Americas</button>
            </li>
            <li>
              <button onClick={() => findCountry("Asia")}>Asia</button>
            </li>
            <li>
              <button onClick={() => findCountry("Europe")}>Europe</button>
            </li>
            <li>
              <button onClick={() => findCountry("Oceania")}>Oceania</button>
            </li>
          </ul>
        </div>
      </div>
      <nav className="mw-screen h-auto flex flex-wrap ">
        {filterCountry
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item) => {
            return (
              <Link
                key={item.alpha3Code}
                to={`/${item.alpha3Code}`}
                className="w-full sm:flex-[0_0_22%] shadow-lg m-5 dark:bg-Dark-Mode-Elements  bg-Dark-Mode-Text-Light-Mode-Elements "
              >
                <div className="dark:text-Dark-Mode-Text-Light-Mode-Elements">
                  <img
                    className="w-full h-52 object-cover"
                    src={item.flag}
                    alt={item.name}
                  />
                  <div className="px-6 py-8 ">
                    <h1 className=" my-2 text-lg font-bold">{item.name}</h1>
                    <p className="text-sm font-bold">
                      Population :
                      <span className="text-sm font-light">
                        {" "}
                        {item.population.toLocaleString("en-US")}
                      </span>
                    </p>
                    <p className="text-sm font-bold">
                      Region :
                      <span className="text-sm font-light"> {item.region}</span>
                    </p>
                    <p className="text-sm font-bold">
                      Capital :
                      <span className="text-sm font-light">
                        {" "}
                        {item.capital}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </nav>
    </div>
  );
};

export default Navlink;
