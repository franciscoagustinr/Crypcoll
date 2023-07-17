import React from "react";
import decentralization from "../assets/decentralization.png";
import security from "../assets/security2.png";
import control from "../assets/control.png";

export const Services = () => {
  return (
    <>
      <div className="relative sm:left-4 text-white m-auto pt-20 w-[80%] sm:w-[90%] gap-10 ">
        {/* SECURITY */}
        <div
          id=""
          className="px-6 flex flex-row sm:flex-col md:flex-col justify-around items-center  gap-36 sm:gap-4 "
        >
          <div className=" w-[50%] sm:w-[100%] md:w-[95%] flex flex-col gap-8 sm:gap-4 justify-content items-center">
            <h2 className=" text-6xl sm:text-4xl md:text-5xl font-poppins ">
              Take full control of your cryptos
            </h2>
            <p className="pt-4 text-sm font-poppins font-light ">
              Online management system for all problems A safe also called a
              strongbox or coffer is a secure lockable box used for securing
              valu- able objects
            </p>
            <button
              id="button"
              className=" mt-4 py-[5.5px] px-4  rounded-full text-[white] font-inter text-[0.85rem] "
            >
              Learn more
            </button>
          </div>

          <div className="  w-[45%] sm:w-[100%] md:w-[100%] ">
            {/* <img src={security} className=" relative -left-16 " /> */}
            <img src={control} className=" relative " />
          </div>
        </div>

        {/* DECENTRALIZED */}
        <div
          id=""
          className="px-6  flex flex-row sm:flex-col sm:flex-col-reverse md:flex-col md:flex-col-reverse justify-around items-center  gap-36 sm:gap-4 "
        >
          <div className=" w-[45%] sm:w-[100%] md:w-[100%] ">
            <img src={decentralization} className=" relative  " />
          </div>

          <div className="w-[50%] sm:w-[100%] md:w-[95%] flex flex-col gap-8 justify-content items-center">
            <h2 className=" text-6xl sm:text-4xl md:text-5xl font-poppins ">
              Fully decentralized. Completely secure.
            </h2>
            <p className="pt-4 text-sm font-poppins font-light  ">
              We have all been in this industry too long not to make the
              security of your funds our absolute top priority. That's why, so
              far, we've spent upwards of $450k on audits from Open Zeppelin and
              Trail of Bits, as well as code reviews from white hats.
            </p>
            <button
              id="button"
              className=" my-4 py-[5.5px] px-4  rounded-full text-[white] font-inter text-[0.85rem]  "
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
