import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";

const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedCategory]);

  const handleFilterChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex justify-center mt-5">
        <div className="flex flex-wrap space-x-2">
          <label htmlFor="category" className="text-gray-700">
            Filter by category:
          </label>
          <select
            id="category"
            className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFilterChange}
            value={selectedCategory}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-8 shadow-md rounded-md">
            <div className="h-96 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg font-bold mt-4">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center mt-2">
              <StarRatings
                rating={product.rating.rate}
                starRatedColor="#ffd700"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
              />
              <span className="ml-2 text-gray-600">{product.rating.rate}</span>
            </div>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Filter;
