import React from "react";
import diamondLogo from "../assets/diamond.png";
import optionsButt from "../assets/more.png";

export const NavBar = () => {
  return (
    <div className="z-50 mt-4 absolute w-full font-poppins text-[white] flex flex-row content-around place-content-around justify-around items-center">
      <div className="p-2 font-bold font-normal gap-4 flex items-center align-center hover:cursor-pointer ">
        {" "}
        <img src={diamondLogo} className="w-8 mx-2" />
        Crypcoll
      </div>
      <div className="">
        <ul className="flex items-center gap-2 text-sm  sm:text-xs ">
          <li className="sm:hidden md:hidden border-r-2 px-4 hover:color-white hover:cursor-pointer">
            Learn
          </li>

          <li className="sm:hidden md:hidden border-r-2 px-4  hover:cursor-pointer">
            Prices
          </li>

          <li className="sm:hidden md:hidden border-r-2 px-4  hover:cursor-pointer">
            EN <span className=" text-xs pl-1 ">↓</span>
          </li>

          <li className=" hover:cursor-pointer ">
            <img
              src={optionsButt}
              className=" relative w-[20px] top-0  r-0 pl-2 "
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
