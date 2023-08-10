import React from "react";
import "typeface-poppins";

const Offer = () => {
  return (
    <div className="bg-[#D4D4D4] py-[150px]">
      <div className="flex flex-wrap justify-center max-w-[1440px] mx-auto font-poppins">
        <div className="w-full md:w-1/3 px-4 mb-12">
          <div>
            <h2 className="text-[32px] font-medium">Free Delivery</h2>
            <p className="text-xl font-normal w-[376px]">
              For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-12">
          <div>
            <h2 className="text-[32px] font-medium">90 Days Return</h2>
            <p className="text-xl font-normal w-[376px]">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-12">
          <div>
            <h2 className="text-[32px] font-medium">Secure Payment</h2>
            <p className="text-xl font-normal w-[376px]">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
