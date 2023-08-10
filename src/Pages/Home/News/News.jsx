import React from "react";
import "typeface-lora";
import "typeface-open-sans";
import img1 from "../../../assets/images/p1.jpg";
import img2 from "../../../assets/images/p2.jpg";
import img3 from "../../../assets/images/p3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    id: 1,
    image: img1,
    name: "International Piano Festival",
    date: "May 5, 2023",
    description:
      "Lorem ipsum dolor sit amet, mea nisl invenire at, nam ut wisi prima ullamcorper.",
  },
  {
    id: 2,
    image: img2,
    name: "Kids Week",
    date: "May 5, 2023",
    description:
      "Lorem ipsum dolor sit amet, mea nisl invenire at, nam ut wisi prima ullamcorper.",
  },
  {
    id: 3,
    image: img3,
    name: "Festival of Flutes",
    date: "May 5, 2023",
    description:
      "Lorem ipsum dolor sit amet, mea nisl invenire at, nam ut wisi prima ullamcorper.",
  },
];

const News = () => {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-black font-lora text-center mt-4 mb-2">
          Latest Classes
        </h2>
        <p className="italic text-[#59C6BC] text-sm text-center mb-8">blog</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              <div className="aspect-w-2 aspect-h-1 mb-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-sm sm:text-base text-[#59C6BC] mb-3">
                <FontAwesomeIcon icon={faCalendarDays} className="mr-1 ml-1" />{" "}
                {review.date}
              </h3>
              <h3 className="text-lg sm:text-xl text-black font-lora mb-3 hover:text-[#59C6BC]">
                {review.name}
              </h3>
              <p className="text-gray-700 leading-6 opacity-70 text-xs sm:text-sm">
                {review.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
