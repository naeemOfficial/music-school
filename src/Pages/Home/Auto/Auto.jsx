import React, { useState, useEffect } from "react";
import img1 from "../../../assets/images/brand1.png";
import img2 from "../../../assets/images/brand2.png";
import img3 from "../../../assets/images/brand3.png";
import img4 from "../../../assets/images/brand4.png";
import img5 from "../../../assets/images/brand5.png";
import img6 from "../../../assets/images/brand6.png";
import img7 from "../../../assets/images/brand1.png";
import img8 from "../../../assets/images/brand2.png";
import img9 from "../../../assets/images/brand3.png";
import img10 from "../../../assets/images/brand4.png";
import img11 from "../../../assets/images/brand5.png";
import img12 from "../../../assets/images/brand6.png";

const Carousel = () => {
  const imageUrls = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + getVisibleImagesCount();

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === imageUrls.length - getVisibleImagesCount()
          ? 0
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  const displayedImages = imageUrls.slice(startIndex, endIndex);

  function getVisibleImagesCount() {
    // Define your responsive breakpoints and the number of images to display at each breakpoint
    const breakpoints = [
      { width: 768, imagesCount: 2 }, // Example: 2 images for screens up to 768px wide
      { width: 1024, imagesCount: 4 }, // Example: 4 images for screens up to 1024px wide
      { width: Infinity, imagesCount: 6 }, // Default: 6 images for larger screens
    ];

    // Determine the current breakpoint based on the window width
    const currentBreakpoint = breakpoints.find(
      (breakpoint) => window.innerWidth <= breakpoint.width
    );

    // Return the corresponding number of images to display
    return currentBreakpoint ? currentBreakpoint.imagesCount : 6;
  }

  return (
    <div className="bg-[#59C6BC]">
      <div className="flex gap-28 justify-center max-w-7xl mx-auto items-center py-8">
        {displayedImages.map((imageUrl) => (
          <img
            src={imageUrl}
            alt="Slider Image"
            className="w-auto h-[50px] mx-2"
            key={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
