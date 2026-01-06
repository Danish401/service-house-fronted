


import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../features/employeeRegisterSlice"; // Import the action to fetch employees
import CategoryList from "./CategoryList";

function SearchPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employeeRegister); // Access employees from the Redux store
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "Mason");
  const business = employees?.find((item) => item._id === id || item.id === id);

  // Get the dark mode state from the Redux store
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);

  // Fetch employees from the backend when the component mounts
  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  // Filter employees based on the selected category
  const filteredData = employees.filter(
    (employee) => employee.category === selectedCategory
  );

  // Handle category selection and update the URL
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/search/${category}`);
  };

  if (loading) {
    return <div className="p-6 text-center text-blue-500 animate-pulse">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;
  }

  if (!business) {
    return <div className="p-6 text-center text-red-500">Business not found.</div>;
  }

  return (
    <div className={`flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-6 mt-4 md:mt-8 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Left section - Category List */}
      <div className={`w-full md:w-1/4 p-3 md:p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"} border border-gray-300 rounded-lg shadow-lg`}>
        <h2 className="mb-3 md:mb-4 text-base md:text-lg font-semibold text-[#7D66D9]">Categories</h2>
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          showAllCategories={true}
        />
      </div>

      {/* Right section - Filtered results */}
      <div className="flex-1 p-2 md:p-4">
        <div className="mt-2 md:mt-5">
          <h2 className="font-bold text-lg md:text-[22px]">{selectedCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-3 md:mt-5 lg:grid-cols-3 xl:grid-cols-4">
            {filteredData.length > 0
              ? filteredData.map((employee, index) => (
                  <Link
                    to={`/details/${employee._id}`} // Ensure the correct `_id` is used
                    key={employee._id} // Use `_id` as the key
                    className="transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
                  >
                    <img
                      src={employee.image}
                      alt={employee.name}
                      width={500}
                      height={200}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col items-baseline gap-1 p-2 md:p-3">
                      <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[10px] md:text-[12px]">
                        {employee.category || "Unknown Category"}
                      </h2>
                      <h2 className="text-base md:text-lg font-bold">{employee.name}</h2>
                      <h2 className="text-xs md:text-sm text-gray-500 truncate w-full">
                        {employee.address1 || "No Address Provided"}
                      </h2>
                      <h2 className="text-xs md:text-sm text-gray-500 truncate w-full">
                        {employee.address2 || "No Address Provided"}
                      </h2>
                      <button className="mt-2 md:mt-3 rounded-lg bg-[#7D66D9] text-white px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base w-full md:w-auto">
                        Book Now
                      </button>
                    </div>
                  </Link>
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-[250px] md:h-[300px] bg-slate-200 rounded-lg animate-pulse"
                  ></div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
