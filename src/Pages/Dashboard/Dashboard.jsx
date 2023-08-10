import React from "react";
import img from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Left Side Navbar */}
      <nav className="bg-[#59C6BC] w-64 h-screen py-4 px-6">
        {/* Logo */}
        <Link to="/" className="">
          <img className="h-auto w-auto px-auto" src={img} alt="Logo" />
        </Link>
        {/* Navbar Items */}
        <ul className="space-y-4 mt-9">
          <li className="flex items-center text-white hover:text-gray-200">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            Dashboard
          </li>
          <li className="flex items-center text-white hover:text-gray-200">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            My Classes
          </li>
          <li className="flex items-center text-white hover:text-gray-200">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            My Enrolled
          </li>
          <li className="flex items-center text-white hover:text-gray-200">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Payment History
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {" "}
        {/* Replace with your main content here */}
      </div>
    </div>
  );
};

export default Dashboard;
