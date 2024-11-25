import React from "react";
import data from "../asset/data.json";
import { Link, useParams } from "react-router";
import Button from "./Button";
import Header from "../header/Header";

const Card = () => {
  const params = useParams();
  const id = params.alpha3Code;

  const alpha = data.find((item) => id === item.alpha3Code);

  // console.log(data);
  // icon = "<FaArrowLeft />";
  return (
    <div className="dark:bg-Dark-Mode-Elements  bg-Dark-Mode-Text-Light-Mode-Elements h-screen">
      <Header />
      <div className=" sm:m-[50px] m-5">
        <Link to="/">
          <Button text="Back" />
        </Link>

        <div className="sm:flex py-10 sm:py-[50px] sm:gap-6 dark:text-Dark-Mode-Text-Light-Mode-Elements">
          <div className="sm:flex-[1_0_40%] sm:flex sm:items-center">
            <img className="" src={alpha.flag} alt={alpha.name} />
          </div>
          <div className="sm:px-6 sm:py-8 sm:flex-[1_0_60%] ">
            <h1 className=" sm:my-2 mt-4 text-4xl font-bold">{alpha.name}</h1>
            <div className="sm:flex">
              <div className="sm:flex-[1_0_50%] mt-5 sm:mt-0">
                <p className="paragraph">
                  Native Name :<span className="span"> {alpha.name}</span>
                </p>
                <p className="paragraph">
                  Population :
                  <span className="span">
                    {" "}
                    {alpha.population.toLocaleString("en-US")}
                  </span>
                </p>
                <p className="paragraph">
                  Region :<span className="span"> {alpha.region}</span>
                </p>
                <p className="paragraph">
                  Sub Region :<span className="span"> {alpha.subregion}</span>
                </p>
                <p className="paragraph">
                  Capital :<span className="span"> {alpha.capital}</span>
                </p>
              </div>
              <div className="sm:flex-[1_0_50%] mt-5 sm:mt-0">
                <p className="paragraph">
                  Top Level Domain :
                  <span className="span"> {alpha.topLevelDomain}</span>
                </p>
                <p className="paragraph">
                  Currencies :
                  {alpha.currencies?.map((currency, index) => {
                    return (
                      <span className="span" key={index}>
                        {currency.name},
                      </span>
                    );
                  })}
                </p>
                <p className="paragraph">
                  languages :
                  {alpha.languages.map((language, index) => {
                    return (
                      <span className="span" key={index}>
                        {language.name},
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className="mt-4 sm:py-8 sm:mt-0 sm:flex sm:items-start">
              <p className="mb-2 paragraph flex-[1_0_20%]">
                Border Countries :
              </p>
              <div className="flex flex-wrap gap-4">
                {alpha.borders?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link to={`/${item}`}>
                        <Button text={item} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
