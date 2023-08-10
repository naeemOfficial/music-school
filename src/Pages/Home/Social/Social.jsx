import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import "./Social.css";

const Social = () => {
  const icons = [
    { icon: FaFacebookF, link: "https://www.facebook.com/" },
    { icon: FaTwitter, link: "https://twitter.com/" },
    { icon: FaInstagram, link: "https://www.instagram.com/" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/" },
  ];

  const iconAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 300, friction: 20 },
  });

  return (
    <div className="relative">
      <animated.div style={iconAnimation} className="social-icons">
        {icons.map(({ icon: Icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            <Icon className="social-icon" />
          </a>
        ))}
      </animated.div>
    </div>
  );
};

export default Social;
