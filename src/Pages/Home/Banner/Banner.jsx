import React, { useEffect, useState } from "react";
import "typeface-lora";
import "typeface-open-sans";
import img from "../../../assets/images/slider1.jpg";
import img1 from "../../../assets/images/slider2.jpg";
import img2 from "../../../assets/images/slider3.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesData = [
    {
      backgroundImage: img,
      title: "Music For Everyone",
      subtitle: "Awaken Possibility",
    },
    {
      backgroundImage: img1,
      title: "Music Is your World",
      subtitle: "Don't miss a Chance",
    },
    {
      backgroundImage: img2,
      title: "Start With a Note",
      subtitle: "Awaken Possibility",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {slidesData.map((slide, index) => (
        <div key={index} className={index === currentSlide ? "" : "hidden"}>
          <div
            className="bg-cover bg-center h-[300px] md:h-[500px] lg:h-[787px] flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[78px] text-white font-lora font-normal">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white font font-sans mb-4">
              {slide.subtitle}
            </p>
            <button className="px-8 py-3 bg-yellow-200 text-black hover:bg-[#59C6BC] hover:text-white font-semibold rounded-full">
              START LEARNING
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
