import React from "react";
import "typeface-poppins";
import img from "../../../assets/images/banner1.png";

const Banner = () => {
  return (
    <div>
      <div className="relative py-28">
        <div className="absolute inset-0">
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="relative">
          <div className="max-w-[1440px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-medium text-center font-poppins text-black">
              Shop
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
