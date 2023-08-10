import React from "react";
import "typeface-lora";
import "typeface-open-sans";
import img1 from "../../assets/images/piano.png";
import img2 from "../../assets/images/guitar.png";
import img3 from "../../assets/images/mic.png";
import img4 from "../../assets/images/drum.png";
import img5 from "../../assets/images/violin.png";
import img6 from "../../assets/images/violin1.png";
import img7 from "../../assets/images/violin2.png";
import img8 from "../../assets/images/saxophone.png";

const musicData = [
  {
    image: img1,
    name: "Piano",
    description: "It is a musical instrument played using a keyboard.",
  },
  {
    image: img2,
    name: "Guitar",
    description: "The guitar is classified as a string instrument.",
  },
  {
    image: img3,
    name: "Voice",
    description: "It is a type of music performed by one or more singers.",
  },
  {
    image: img4,
    name: "Drums",
    description: "Can play by striking with the hand or two sticks.",
  },
  {
    image: img5,
    name: "Violin",
    description: "The violin has four strings tuned in perfect fifths.",
  },
  {
    image: img6,
    name: "Cello",
    description: "The cello is used as a solo musical instrument.",
  },
  {
    image: img7,
    name: "Double Bass",
    description: "The lowest-pitched bowed string instrument.",
  },
  {
    image: img8,
    name: "Saxophone",
    description: "The saxophone is a woodwind instrument.",
  },
];

const Instrument = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h2 className="text-4xl text-[#333745] font-lora text-center mt-4">
        Musical Instruments
      </h2>
      <p className="italic text-[#59C6BC] text-sm text-center mb-[60px]">
        classes
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20">
        {musicData.map((data, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={data.image}
              alt={data.name}
              className="w-[64px] h-[64px] object-cover"
            />
            <div className="px-6 py-10 text-center">
              <div className="font-lora text-2xl mb-4">{data.name}</div>
              <p className="text-gray-700 font-sans w-[205px] text-[13px] opacity-70">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instrument;
