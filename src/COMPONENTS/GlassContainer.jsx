import React from "react";
import Start4 from "../assets/next4.png";

export const GlassContainer = () => {
  return (
    <>
      <div className=" sm:ml-2 select-none">
        <h1 className="relative  text-6xl sm:text-5xl font-poppins font-semibold text-[white]  uppercase tracking-wide">
          fast & secure platform made for{" "}
          <span className="crypto text-7xl">crypto trading</span>
        </h1>
        <p className=" w-[80%] py-8 sm:py-4 font-inter text-[0.8rem] font-normal text-[lightgrey] tracking-wide ">
          Buy and sell 100+ cryptocurrencies with 25+ flat currencies. Access,
          manage and spend your founds anytime with this platform.
        </p>

        <button
          // onClick={() => console.log("hello")}
          id="button"
          className=" flex flex-row items-center justify-center py-[5.5px] px-4 rounded-full text-[white] font-inter text-[0.85rem] "
        >
          Start trading
          <img src={Start4} className=" relative -right-2 w-6 " />
        </button>

        <div className=" relative font-inter mt-16 sm:mt-8 flex    ">
          <div className="mr-6 ">
            <h2 className="tracking-wider text-[white] font-semibold text-2xl ">
              5M+
            </h2>
            <p className="text-xs crypto font-semibold tracking-wider ">
              Customer
            </p>
          </div>
          <div className="mr-6">
            <h2 className="tracking-wider text-[white] font-semibold text-2xl font-inter">
              280M
            </h2>
            <p className=" text text-xs crypto font-semibold tracking-wider ">
              Coverage
            </p>
          </div>
          <div className="mr-6">
            <h2 className="tracking-wider text-[white] font-semibold text-2xl font-inter">
              22%
            </h2>
            <p className="text-xs crypto font-semibold tracking-wider ">
              Earnings
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
