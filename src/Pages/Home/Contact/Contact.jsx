import React from "react";
import "typeface-poppins";
import img from "../../../assets/images/bg.png";

const Contact = () => {
  return (
    <div>
      <div className="relative font-poppins">
        <img className="w-full h-auto" src={img} alt="Background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-7xl lg:text-7xl font-bold text-black lg:mb-5">
            Our Instagram
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black lg:mb-8 mb-2">
            Follow our store on Instagram
          </p>
          <div className="space-x-4">
            <button className="bg-[#FAF4F4] text-black text-lg md:text-xl lg:text-2xl py-3 md:py-4 lg:py-5 px-8 md:px-[44px] lg:px-[82px] rounded-full shadow-2xl">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
