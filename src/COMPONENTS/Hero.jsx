import React from "react";
import { GlassContainer } from "./GlassContainer";

export const Hero = () => {
  return (
    <>
      <div
        id={innerWidth >= 767 ? "glass" : ""}
        className=" relative top-10 sm:top-12 md:top-6 sm:left-8 w-[50%] sm:w-[80%] md:w-[100%] p-10 sm:p-4 flex flex-col justify-center items-center z-50 my-20 sm:my-4 "
      >
        <GlassContainer />
      </div>
    </>
  );
};
