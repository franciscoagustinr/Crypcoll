import React from "react";
import safe from "../assets/safe.png";
import buy from "../assets/buy.png";

export const How = () => {
  return (
    <div
      id={innerWidth >= 767 ? "glass" : ""}
      className="relative text-center w-[80%] sm:w-[100%] p-4 flex flex-col justify-center items-center gap-2 font-poppins"
    >
      <h1 className="text-6xl sm:text-4xl">How It Works</h1>
      <p className=" w-[70%] pt-2 text-sm sm:text-xs font-light">
        Decentralized cryptocurrency is produced by the entire cryptocurrency
        system collectively, at a rate which is defined when the system is
        created and which is publicly known.
      </p>

      <div className=" flex flex-row items-baseline sm:items-center justify-center  gap-20 sm:gap-4 text-center sm:flex-col">
        <div className="p-4 ">
          <img src={safe} className="w-64" />
          <h2>Safe & Secure</h2>
        </div>
        <div className="p-2 w-[20em]">
          <img src={buy} className="w-92" />
          <h2>Buy & Sell Token</h2>
        </div>
      </div>
    </div>
  );
};
