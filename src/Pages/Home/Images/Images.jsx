import React, { useState, useEffect } from "react";
import image1 from "../../../assets/images/image-1.jpg";
import image2 from "../../../assets/images/image-2.jpg";
import image3 from "../../../assets/images/image-3.jpg";
import image4 from "../../../assets/images/image-4-1.jpg";
import image5 from "../../../assets/images/image-5.jpg";
import image6 from "../../../assets/images/image-6.jpg";
import image7 from "../../../assets/images/image-7.jpg";

const Images = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize("lg");
      } else if (width >= 768) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };

    handleResize(); // Call once to set initial screen size
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getImageList = () => {
    switch (screenSize) {
      case "lg":
        return [image1, image2, image3, image4, image5, image6, image7];
      case "md":
        return [image1, image2, image3];
      case "sm":
        return [image1];
      default:
        return [];
    }
  };

  const images = getImageList();

  return (
    <div className="flex justify-center">
      <div
        className={`grid ${
          screenSize === "lg"
            ? "grid-cols-7"
            : screenSize === "md"
            ? "grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-full md:h-[272px] w-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
