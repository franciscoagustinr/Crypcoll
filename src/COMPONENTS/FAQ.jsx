import React from "react";

export const FAQ = () => {
  return (
    <>
      <div className="my-20 w-[45%] sm:w-[90%] md:w-[80%] block m-auto ">
        <details className=" text-white font-poppins font-normal text-md m-auto  p-4 text-left  ">
          <summary className="flex justify-between  px-[1.3rem] py-[0.5em] cursor-pointer">
            What is ICO Crypto?
          </summary>
          <div className="pl-4 text-sm font-extralight ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            dolores dicta hic quisquam excepturi! Numquam?
          </div>
        </details>

        <details className=" text-white font-poppins font-normal text-md m-auto  p-4 text-left  ">
          <summary className="flex justify-between transition-[height] duration-[1s] ease-[ease] px-[1.3rem] py-[0.5em] cursor-pointer">
            What cryptocurrencies can I use to purchase?
          </summary>
          <div className="pl-4 text-sm font-extralight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            aliquam quia eos ad.
          </div>
        </details>

        <details className=" text-white font-poppins font-normal text-md m-auto  p-4 text-left  ">
          <summary className="flex justify-between transition-[height] duration-[1s] ease-[ease] px-[1.3rem] py-[0.5em] cursor-pointer">
            How do I benefit from the ICO Token?
          </summary>
          <div className="pl-4 text-sm font-extralight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsum libero hic optio eius iusto.
          </div>
        </details>
      </div>
    </>
  );
};
