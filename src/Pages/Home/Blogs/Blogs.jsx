import React from "react";
import "typeface-lora";
import "typeface-open-sans";
import img from "../../../assets/images/banner2.jpg";
import img1 from "../../../assets/images/bg.png";

const Blogs = () => {
  return (
    <section className="flex justify-center items-center bg-opacity-30 bg-cover bg-center my-20">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img
              src={img}
              alt="Blog Image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:order-2 flex flex-col bg-[#F7F7F7] justify-center relative">
            <div className="absolute bottom-0 right-0">
              <img
                src={img1}
                alt="Background Image"
                className="h-full w-full"
              />
            </div>
            <div className="py-20 px-20">
              <h2 className="text-2xl md:text-2xl lg:text-4xl text-[#232a34] mb-4 font-lora relative z-10">
                Summer Arts Garden
              </h2>
              <p className="text-[11px] md:text-[11px] lg:text-[13px] text-[#333745] opacity-70 leading-7 font-sans mb-6 md:mb-8 w-full">
                We offer full-day and half-day music camps for kids of all ages
                and skill levels – including beginners!
                <br />
                Summer camps give students an opportunity to focus on one
                instrument or genre for a whole week.
              </p>
              <button className="px-8 py-3 rounded-3xl bg-[#59C6BC] hover:bg-yellow-200 hover:text-black font-semibold text-white relative">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
