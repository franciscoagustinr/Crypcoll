import React from "react";

export const Contact = () => {
  return (
    <div className="relative sm:w-[100%] text-center font-poppins text-[white] ">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h2 className="py-4 text-6xl sm:text-5xl  ">Contact Us</h2>
        <a
          href="mailto:hello@crypcoll.io"
          className="crypto text-5xl sm:text-4xl pb-8 font-bold hover:text-[lightblue] transition-all duration-300 hover:scale-110 "
        >
          {" "}
          hello@crypcoll.io{" "}
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462910.92487084615!2d-74.17272548767306!3d40.72349210674415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1683085862116!5m2!1ses-419!2sar"
          className="w-[450px] sm:w-[90%] h-[450px] sm:h-[350px] rounded "
        ></iframe>
      </div>
    </div>
  );
};
