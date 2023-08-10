import React, { useState, useEffect } from "react";
import bg from "../../assets/images/bg3.jpg";
import img1 from "../../assets/images/t2.jpg";
import img2 from "../../assets/images/t3.jpg";
import img3 from "../../assets/images/t4.jpg";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const reviews = [
  {
    id: 1,
    image: img1,
    description:
      "I am most grateful that my son's guitar teacher not only makes learning fun and shares his knowledge, but his passion for music as well. I could not have found a better place for him to learn guitar.",
  },
  {
    id: 2,
    image: img2,
    description:
      "The school has everything that children need for successful study: textbooks, daily assignments, planner, notebooks, music sheets, a staff who are very nice and kind, and ready to help at any time.",
  },
  {
    id: 3,
    image: img3,
    description:
      "My son has been taking piano and guitar lessons for more than a year. He loves his teachers and I can tell that they really care about my kid too. Your music school is wonderful and I highly recommend.",
  },
];

const ASlider = () => {
  const [activeReview, setActiveReview] = useState(reviews[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prevReview) => {
        const currentIndex = reviews.findIndex(
          (review) => review.id === prevReview.id
        );
        const nextIndex = (currentIndex + 1) % reviews.length;
        return reviews[nextIndex];
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToPreviousReview = () => {
    setActiveReview((prevReview) => {
      const currentIndex = reviews.findIndex(
        (review) => review.id === prevReview.id
      );
      const previousIndex =
        (currentIndex - 1 + reviews.length) % reviews.length;
      return reviews[previousIndex];
    });
  };

  const goToNextReview = () => {
    setActiveReview((prevReview) => {
      const currentIndex = reviews.findIndex(
        (review) => review.id === prevReview.id
      );
      const nextIndex = (currentIndex + 1) % reviews.length;
      return reviews[nextIndex];
    });
  };

  return (
    <div className="relative">
      <img src={bg} alt="Background" className="w-full h-auto" />
      <div className="max-w-7xl mx-auto relative bottom-[60px] md:bottom-[110px] lg:bottom-36 xl:bottom-64">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full text-center">
            <div className="mb-4 items-center justify-center mx-auto w-[302px] md:w-[502px] lg:w-[702px]">
              <img
                src={activeReview.image}
                alt="Circle"
                className="w-9 h-9 rounded-full mx-auto lg:mb-8 md:w-11 md:h-11 lg:w-[92px] lg:h-[92px]"
              />
              <p className="text-[11px] md:text-sm lg:text-lg text-white">
                {activeReview.description}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-2 left-2 transform -translate-y-1/2">
          <BsArrowLeftCircle
            size={32}
            className="cursor-pointer text-white"
            onClick={goToPreviousReview}
          />
        </div>
        <div className="absolute top-2 right-2 transform -translate-y-1/2">
          <BsArrowRightCircle
            size={32}
            className="cursor-pointer text-white"
            onClick={goToNextReview}
          />
        </div>
      </div>
    </div>
  );
};

export default ASlider;
