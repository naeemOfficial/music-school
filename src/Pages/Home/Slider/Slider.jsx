import React, { useEffect, useState } from "react";
import "typeface-poppins";
import img from "../../../assets/images/parts.png";
import img1 from "../../../assets/images/lub.png";

const Slider = () => {
  const data = [
    {
      id: 1,
      name: "Lubricants",
      imageUrl: img,
      viewMoreUrl: "path/to/viewmore1",
    },
    {
      id: 2,
      name: "Spare parts",
      imageUrl: img1,
      viewMoreUrl: "path/to/viewmore2",
    },
    {
      id: 3,
      name: "Lubricants",
      imageUrl: img,
      viewMoreUrl: "path/to/viewmore3",
    },
    {
      id: 4,
      name: "Spare parts",
      imageUrl: img1,
      viewMoreUrl: "path/to/viewmore4",
    },
    {
      id: 5,
      name: "Lubricants",
      imageUrl: img,
      viewMoreUrl: "path/to/viewmore5",
    },
    {
      id: 6,
      name: "Spare parts",
      imageUrl: img1,
      viewMoreUrl: "path/to/viewmore6",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex >= data.length - 2 ? 0 : prevIndex + 2
      );
    }, 3000); // Change the interval duration (in milliseconds) as per your requirement

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex max-w-[1440px] mx-auto justify-center font-poppins pt-28 pb-28 ">
        <div className="flex flex-wrap">
          {data.slice(activeIndex, activeIndex + 2).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start "
              style={{ margin: "0 120px" }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full rounded-full object-cover"
              />
              <h2 className="mt-5 text-[36px] font-medium md:ml-10">
                {item.name}
              </h2>
              <p className="mt-5 text-xl font-semibold md:ml-10 mb-16">
                View More
                <span className="block border-b-2 border-black mt-2"></span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
