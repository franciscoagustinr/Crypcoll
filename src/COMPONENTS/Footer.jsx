import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="font-poppins mt-8 flex flex-row sm:flex-col content-center justify-evenly items-center  relative text-white sm:flex-col-reverse ">
        <div className="flex flex-col ">
          <h3 className="py-2 font-light font-extralight text-xs  ">
            Crypcoll | 2023 <span className="text-sm">®</span>
          </h3>
        </div>
        <div className="flex flex-col content-center justify-evenly sm:justify-center text-left sm:text-center  w-[20%] sm:w-[80%] md:w-[38%] ">
          <h2 className=" text-base font-light text-center ">Newsletter</h2>
          <input
            type="email"
            placeholder="Email"
            className="my-2 p-2 pl-4 text-sm rounded-full text-black "
          />
          <button
            className=" text-sm font-normal py-2 duration-300
           bg-gradient-to-r from-blue-500 via-blue-600  to-blue-700  hover:bg-gradient-to-br hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-full  "
          >
            SUSCRIBE
          </button>
        </div>
      </div>
    </>
  );
};
