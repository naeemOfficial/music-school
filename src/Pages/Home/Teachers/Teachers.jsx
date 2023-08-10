import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import "typeface-lora";
import "typeface-open-sans";
import img1 from "../../../assets/images/t1.jpg";
import img2 from "../../../assets/images/t2.jpg";
import img3 from "../../../assets/images/t3.jpg";
import img4 from "../../../assets/images/t4.jpg";
import img5 from "../../../assets/images/t5.jpg";
import img6 from "../../../assets/images/t6.jpg";
import { Link } from "react-router-dom";

const Teachers = () => {
  const reviews = [
    {
      id: 1,
      image: img1,
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      image: img2,
      name: "Jane Smith",
      email: "jane@example.com",
    },
    {
      id: 3,
      image: img3,
      name: "Mike Johnson",
      email: "mike@example.com",
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily@example.com",
      image: img4,
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      image: img5,
    },
    {
      id: 6,
      name: "Sarah Davis",
      email: "sarah@example.com",
      image: img6,
    },
  ];

  // Use slice() to get the first 3 elements from the array
  const slicedReviews = reviews.slice(0, 3);

  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-black font-lora text-center mt-4 mb-2">
            Featured Teachers
          </h2>
          <p className="italic text-[#59C6BC] text-sm sm:text-base text-center mb-6 lg:mb-11">
            staff
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 justify-center items-center">
            {slicedReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col items-center overflow-hidden mx-auto max-w-xs sm:max-w-sm md:max-w-none"
              >
                <div className="w-[250px] h-[250px] rounded-full overflow-hidden mb-5">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl text-black font-lora mb-2 hover:text-[#59C6BC]">
                  <Link to={`/teacherDetails/${review.id}`}>{review.name}</Link>
                </h3>
                <p className="text-gray-700 w-[270px] sm:w-auto leading-6 opacity-70 text-[13px] sm:text-base text-center">
                  {review.email}
                </p>
                <div className="flex space-x-2 sm:space-x-4 mt-3">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[#59C6BC] text-xl"
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-[#59C6BC] text-xl"
                  />
                  <FontAwesomeIcon
                    icon={faGooglePlus}
                    className="text-xl text-[#59C6BC]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
