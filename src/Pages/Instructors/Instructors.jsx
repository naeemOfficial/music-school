import React from "react";
import img1 from "../../assets/images/t1.jpg";
import img2 from "../../assets/images/t2.jpg";
import img3 from "../../assets/images/t3.jpg";
import img4 from "../../assets/images/t4.jpg";
import img5 from "../../assets/images/t5.jpg";
import img6 from "../../assets/images/t6.jpg";
import { Link } from "react-router-dom";

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

const review = () => {
  return (
    <div className="grid grid-cols-3  gap-10 max-w-7xl mx-auto my-14">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img src={review.image} alt={review.name} className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{review.name}</div>
            <p className="text-gray-700 text-base mb-4">{review.email}</p>
            <button className="px-8 py-3  bg-[#59C6BC] text-white hover:bg-yellow-200 hover:text-black font-semibold rounded-full">
              <Link to={`/teacherDetails/${review.id}`}>Details</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default review;
