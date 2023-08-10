import React, { useState } from "react";
import "typeface-lora";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto my-24">
      <h2 className="text-4xl font-lora text-center text-[#333745] mt-4 mb-14">
        Send Message to Amanda
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-10 flex gap-4">
          <div className=" mr-2">
            <input
              className="appearance-none border-b-2 w-[370px] py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="NAME *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className=" ml-2">
            <input
              className=" appearance-none border-b-2 w-[370px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="SUBJECT"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border-b-2 rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-MAIL *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-8">
          <textarea
            className=" appearance-none border-b-2 rounded w-full py-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="MESSAGE *"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="px-12 py-3 rounded-3xl bg-[#59C6BC] hover:bg-yellow-200 hover:text-black font-semibold text-white relative">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
