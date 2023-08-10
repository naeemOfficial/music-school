import React from "react";
import "typeface-lora";
import "typeface-open-sans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="flex flex-wrap text-black gap-10">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8">
              <h2 className="font-lora  text-xl flex mb-5">Address</h2>
              <div className="flex justify-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-[#59C6BC] w-[24px] h-[24px] mr-5"
                />
                <p className="text-[13px] font-sans leading-7 opacity-70">
                  110 E 16th St <br /> Dhaka, 1230
                </p>
              </div>
            </div>

            <div className=" mb-8 mr-20">
              <h2 className="font-lora text-xl mb-5">Twitter</h2>
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-[#59C6BC] w-[27px] h-[27px] mr-5"
                />
                <p className="text-[13px] font-sans w-[370px] leading-7 opacity-70">
                  Investment Advisor Services is a modern, flexible and highly
                  customizable theme for your financial, business, corporate,
                  personal needs.
                </p>
              </div>
            </div>

            <div className=" mb-8">
              <h2 className="font-lora text-xl mb-5">Open hours</h2>
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[#59C6BC] w-[24px] h-[24px] mr-5"
                />
                <p className="text-[13px] font-sans leading-7 opacity-70">
                  Monday - Friday: 12pm - 8pm <br /> Saturday: 10am - 2pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#59C6BC]">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-white mx-auto py-10 ">
          <div className="mb-3 md:mr-[60px] lg:mr-[500px] lg:mb-0">
            Naeem © 2023 All Rights Reserved Terms of Use and Privacy Policy
          </div>{" "}
          {/* Line on the left */}
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" />
            <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
            <FontAwesomeIcon
              icon={faGooglePlus}
              className="text-white text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
