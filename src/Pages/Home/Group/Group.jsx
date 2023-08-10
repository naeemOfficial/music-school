import React from "react";
import "typeface-lora";
import "typeface-open-sans";
import img1 from "../../../assets/images/group1.jpg";
import img2 from "../../../assets/images/group2.jpg";
import img3 from "../../../assets/images/group3.jpg";
import img4 from "../../../assets/images/group4.jpg";

const reviews = [
  {
    id: 1,
    image: img1,
    name: "Kids",
    description:
      "Our school is a solution for families who would like to expose their children to the world of music.Lorem ipsum dolor sit amet, mel modus dicam...",
  },
  {
    id: 2,
    image: img2,
    name: "Teens",
    description:
      "Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music. Lorem ipsum dolor sit amet, mel modus dicam...",
  },
  {
    id: 3,
    image: img3,
    name: "Adults",
    description:
      "We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors. Lorem ipsum dolor sit amet, mel modus...",
  },
  {
    id: 4,
    image: img4,
    name: "Private lesson",
    description:
      "Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs. Lorem ipsum dolor sit amet, mel modus...",
  },
];

const Group = () => {
  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-black font-lora text-center mt-4 mb-2">
          Music Groups
        </h2>
        <p className="italic text-[#59C6BC] text-sm text-center mb-[60px]">
          for
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              <div className="w-[166px] h-[166px] rounded-full overflow-hidden mb-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl text-black font-lora mb-2 hover:text-[#59C6BC]">
                {review.name}
              </h3>
              <p className="text-gray-700 w-[270px] leading-6 opacity-70 text-[13px] text-center">
                {review.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Group;
