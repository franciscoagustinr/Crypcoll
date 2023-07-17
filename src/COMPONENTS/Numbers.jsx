import React from "react";

export const Numbers = () => {
  return (
    <>
      <div className="relative my-24 sm:mt-20 text-center flex flex-row gap-24 sm:gap-10 justify-evenly sm:flex-col sm:justify-center sm:w-[100%]   ">
        <div>
          <h2 className="font-poppins tracking-wider text-[white] font-semibold text-4xl sm:text-xl">
            $4,200,368,117
          </h2>
          <p className="font-inter text-lg crypto font-semibold tracking-wide ">
            All-time trade volume
          </p>
        </div>

        <div>
          <h2 className="font-poppins tracking-wider text-[white] font-semibold text-4xl sm:text-xl">
            10,434
          </h2>
          <p className="font-inter text-lg crypto font-semibold tracking-wide ">
            Total trades
          </p>
        </div>
      </div>
    </>
  );
};
