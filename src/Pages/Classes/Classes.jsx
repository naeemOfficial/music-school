import React from "react";
import "typeface-lora";
import "typeface-open-sans";
import img1 from "../../assets/images/c1.jpg";
import img2 from "../../assets/images/c2.jpg";
import img3 from "../../assets/images/c3.jpg";
import img4 from "../../assets/images/c4.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ASlider from "../ASlider/ASlider";
import Instrument from "../Instrument/Instrument";

const classesData = [
  {
    image: img1,
    name: "Kids",
    description: [
      "Our school is a solution for families who would like to expose their children to the world of music.Lorem ipsum dolor sit amet, mel modus dicam eleifend at. His te alienum omittantur, vix an fugit saepe sensibus. Ei timeam perpetuacum. Viderer scripserit usu eu. Labitur partiendo vix te, his congue intellegam necessitatibus in.",
      "Vim quod doming antiopam eu, te mea inermis epicurei reformidans. Id per appetere insolens constituam. Ea odio modo audiam duo,ut wisi verear utroque eos. No eum option tibique constituam, vix no ipsum errem. Ut sed aeque essent, ei partiendo delicatissimi nec.",
    ],
  },
  {
    image: img2,
    name: "Teens",
    description:
      "Our school is a solution for families who would like to expose their children to the world of music.Lorem ipsum dolor sit amet, mel modus dicam eleifend at. His te alienum omittantur, vix an fugit saepe sensibus. Ei timeam perpetuacum. Viderer scripserit usu eu. Labitur partiendo vix te, his congue intellegam necessitatibus in. Vim quod doming antiopam eu, te mea inermis epicurei reformidans. Id per appetere insolens constituam. Ea odio modo audiam duo,ut wisi verear utroque eos. No eum option tibique constituam, vix no ipsum errem. Ut sed aeque essent, ei partiendo delicatissimi nec.",
  },
  {
    image: img3,
    name: "Adults",
    description:
      "Our school is a solution for families who would like to expose their children to the world of music.Lorem ipsum dolor sit amet, mel modus dicam eleifend at. His te alienum omittantur, vix an fugit saepe sensibus. Ei timeam perpetuacum. Viderer scripserit usu eu. Labitur partiendo vix te, his congue intellegam necessitatibus in. Vim quod doming antiopam eu, te mea inermis epicurei reformidans. Id per appetere insolens constituam. Ea odio modo audiam duo,ut wisi verear utroque eos. No eum option tibique constituam, vix no ipsum errem. Ut sed aeque essent, ei partiendo delicatissimi nec.",
  },
  {
    image: img4,
    name: "Private lesson",
    description:
      "Our school is a solution for families who would like to expose their children to the world of music.Lorem ipsum dolor sit amet, mel modus dicam eleifend at. His te alienum omittantur, vix an fugit saepe sensibus. Ei timeam perpetuacum. Viderer scripserit usu eu. Labitur partiendo vix te, his congue intellegam necessitatibus in. Vim quod doming antiopam eu, te mea inermis epicurei reformidans. Id per appetere insolens constituam. Ea odio modo audiam duo,ut wisi verear utroque eos. No eum option tibique constituam, vix no ipsum errem. Ut sed aeque essent, ei partiendo delicatissimi nec.",
  },
];

const Classes = () => {
  const handleButtonClick = () => {
    toast.success("Selected successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Time in milliseconds after which the toast will be automatically closed
    });
  };

  return (
    <div className="flex flex-col my-14">
      <h2 className="text-4xl text-[#333745] font-lora text-center mt-4">
        Classes
      </h2>
      <p className="italic text-[#59C6BC] text-sm text-center mb-[60px]">
        and groups
      </p>
      {classesData.map((classData, index) => (
        <div key={index} className="w-full flex p-5 max-w-7xl mx-auto my-5">
          <img
            src={classData.image}
            alt={`Class ${index + 1}`}
            className="w-[370px] h-[250px] mb-4"
          />
          <div className="ml-8">
            <h2 className="text-[30px] font-lora mb-3">{classData.name}</h2>
            <p className="text-gray-600 font-sans leading-6 text-[13px] w-[770px] opacity-70">
              {classData.description}
            </p>
            <button
              className="px-8 py-3 rounded-3xl bg-[#59C6BC] hover:bg-yellow-200 hover:text-black font-semibold text-white relative mt-6"
              onClick={handleButtonClick}
            >
              Join Us
            </button>
            <ToastContainer />
          </div>
        </div>
      ))}
      <ASlider></ASlider>
      <Instrument></Instrument>
    </div>
  );
};

export default Classes;
