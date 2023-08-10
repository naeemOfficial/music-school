import React from "react";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import img from "../../../assets/images/logo.png";
import {
  FaHome,
  FaChalkboardTeacher,
  FaBookOpen,
  FaChartLine,
  FaSignInAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#59C6BC] font-mulish w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-3">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img className="h-[43px] w-[169px]" src={img} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-white  hover:text-yellow-200 rounded-md text-sm font-semibold"
                >
                  HOME
                </Link>
                <Link
                  to="/instructors"
                  className="text-white  hover:text-yellow-200 rounded-md text-sm font-semibold"
                >
                  INSTRUCTORS
                </Link>
                <Link
                  to="/classes"
                  className="text-white  hover:text-yellow-200 rounded-md text-sm font-semibold"
                >
                  CLASSES
                </Link>
                <Link
                  to="/dashboard"
                  className="text-white  hover:text-yellow-200 rounded-md text-sm font-semibold"
                >
                  DASHBOARD
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Link
                to="/login"
                className="text-white hover:bg-white hover:text-black border-2 px-5 py-2 rounded-3xl text-sm font-medium"
              >
                Login
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={handleToggle}
                className="bg-[#59C6BC] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={handleToggle}
          direction="left"
          className="z-50"
          style={{
            position: "fixed",
            height: "100%",
            width: "250px",
            background: "#59C6BC",
          }}
        >
          <div className="px-4 py-4 text-white">
            <Link to="/" className="">
              <img
                className="h-auto w-auto bg-[#59C6BC] px-auto"
                src={img}
                alt="Logo"
              />
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 mt-3 text-sm"
              onClick={handleToggle}
            >
              <FaHome className="inline-block h-6 w-5 mr-2" /> Home
            </Link>
            <Link
              to="/instructors"
              className="block px-4 py-2 text-sm"
              onClick={handleToggle}
            >
              <FaChalkboardTeacher className="inline-block h-6 w-5 mr-2" />{" "}
              Instructors
            </Link>
            <Link
              to="/classes"
              className="block px-4 py-2 text-sm"
              onClick={handleToggle}
            >
              <FaBookOpen className="inline-block h-6 w-5 mr-2" /> Classes
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-sm"
              onClick={handleToggle}
            >
              <FaChartLine className="inline-block h-6 w-5 mr-2" /> Dashboard
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-sm"
              onClick={handleToggle}
            >
              <FaSignInAlt className="inline-block h-6 w-5 mr-2" /> Login
            </Link>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
