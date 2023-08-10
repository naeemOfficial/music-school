import React from "react";
import "typeface-open-sans";

const Lesson = () => {
  return (
    <div className="bg-[#59C6BC]">
      <div className=" flex flex-col lg:flex-row items-center lg:justify-between max-w-7xl mx-auto px-4 py-8 lg:py-16">
        <div className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-4">
          <h2 className="text-2xl lg:text-4xl text-white font-lora font-normal">
            Private Lessons
          </h2>
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-lg lg:text-xl w-[445px] text-white">
            We offer music education for individuals of just about every age and
            skill level.
          </p>
        </div>
        <div className="text-center lg:text-left">
          <button className="px-8 py-3 rounded-3xl bg-[#54afa9] hover:border-2 hover:border-white hover:bg-[#59C6BC] font-semibold text-white">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
