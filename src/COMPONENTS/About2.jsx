import React from "react";
import decentralization from "../assets/decentralization.png";
import security from "../assets/security2.png";

export const About2 = () => {
  return (
    <div className=" absolute top-14 left-[91em] py-10 my-20 text-[white] w-[100%] gap-40 flex flex-col items-center justify-center text-center">
      {/* <div className="flex flex-row gap-24  ">
        <div>
          <h2 className="font-poppins tracking-wider text-[white] font-semibold text-4xl">
            $4,200,368,117
          </h2>
          <p className="font-inter text-lg crypto font-semibold tracking-wide ">
            All-time trade volume
          </p>
        </div>

        <div>
          <h2 className="font-poppins tracking-wider text-[white] font-semibold text-4xl">
            10,434
          </h2>
          <p className="font-inter text-lg crypto font-semibold tracking-wide ">
            Total trades
          </p>
        </div>
      </div> */}

      <div className=" flex flex-col w-[80%] gap-10 ">
        <div
          id="glass"
          className="p-6  flex flex-row justify-around items-center  gap-  10 "
        >
          <div className=" w-[50%] flex flex-col gap-8 justify-content items-center">
            <h2 className=" text-6xl font-poppins ">
              Take full control of your cryptos
            </h2>
            <p className=" text-sm font-poppins font-light ">
              Built on Ethereum, our non-custodial perpetuals exchange focuses
              on one thing: being the best execution environment for trades
            </p>
          </div>

          <div className="  w-[25%] ">
            <img src={security} className=" relative -left-16 " />
          </div>
        </div>

        {/* DECENTRALIZED */}
        <div
          id="glass"
          className=" p-6 flex flex-row justify-around items-center     "
        >
          <div className=" w-[35%] ">
            <img src={decentralization} className=" relative left-20 " />
          </div>

          <div className="w-[50%] flex flex-col gap-8 relative text-center">
            <h2 className=" text-6xl  font-poppins ">
              Fully decentralized. Completely secure.
            </h2>
            <p className=" text-sm font-poppins font-light   ">
              We have all been in this industry too long not to make the
              security of your funds our absolute top priority. That's why, so
              far, we've spent upwards of $450k on audits from Open Zeppelin and
              Trail of Bits, as well as code reviews from white hats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
