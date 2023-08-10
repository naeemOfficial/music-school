import React from "react";
import "typeface-lora";
import "typeface-open-sans";
import bannerImage from "../../../assets/images/bg2.jpg";

const Banner2 = () => {
  return (
    <div
      className="bg-cover bg-fixed py-16 md:py-[100px]"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="px-4">
        <div className="max-w-7xl mx-auto text-center w-[470px]">
          <h1 className="text-2xl md:text-4xl font-lora text-center text-white mb-6">
            Let's make Music!
          </h1>
          <p className="text-sm md:text-lg font-sans text-white mt-4">
            Explore several art forms as your child builds creativity and
            confidence in our new visual arts classes for ages 2-5!
          </p>
          <button className="px-8 py-3 rounded-3xl bg-[#59C6BC]  hover:bg-yellow-200 hover:text-black font-semibold text-white mt-6">
            SEE OUR CLASSES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
