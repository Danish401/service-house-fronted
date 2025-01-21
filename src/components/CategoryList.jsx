



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Import icons from assets
import MasonIcon from "../assets/icons/Mason.png";
import GardnerIcon from "../assets/icons/Gardner.png";
import LabourIcon from "../assets/icons/Labour.png";
import ChefIcon from "../assets/icons/Chef.png";
import CarpenterIcon from "../assets/icons/Carpenter.png";
import ElectricianIcon from "../assets/icons/Electrician.png";
import PlumberIcon from "../assets/icons/Plumber.png";
import PainterIcon from "../assets/icons/Painter.png";
import CleaningIcon from "../assets/icons/Cleaning.png";
import ShiftingIcon from "../assets/icons/Shifting.png";

function CategoryList({ selectedCategory, onSelectCategory, showAllCategories }) {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false); // State to show/hide all categories
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state

  const categories = [
    { name: "Mason", icon: MasonIcon },
    { name: "Gardner", icon: GardnerIcon },
    { name: "Labour", icon: LabourIcon },
    { name: "Chef", icon: ChefIcon },
    { name: "Carpenter", icon: CarpenterIcon },
    { name: "Shifting", icon: ShiftingIcon },
    { name: "Electrician", icon: ElectricianIcon },
    { name: "Plumber", icon: PlumberIcon },
    { name: "Painter", icon: PainterIcon },
    { name: "Cleaning", icon: CleaningIcon },
  ];

  // Determine how many categories to show based on the `showAll` state
  const categoriesBelow = categories.slice(0, 5); // First 5 categories
  const categoriesAbove = showAll ? categories.slice(5) : []; // Rest of the categories when `showAll` is true

  return (
    <div
  className={`ml-0 mr-0 flex flex-col w-full gap-4 p-4 mx-auto ${
    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
  }`}
>
      {/* Show the rest of the icons above the first 5 icons after clicking "See All" */}
      {showAllCategories ? (
        categories.map((category) => (
          <div
            key={category.name}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
              selectedCategory === category.name
                ? isDarkMode
                  ? "bg-[#5A5A89] text-white"
                  : "bg-[#e2ddfe] text-black"
                : isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => onSelectCategory(category.name)}
          >
            <img src={category.icon} alt={category.name} width={25} height={25} />
            <span className="font-semibold text-md">{category.name}</span>
          </div>
        ))
      ) : (
        <>
          {/* Show the first 5 categories */}
          <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5">
            {categoriesBelow.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-2 ${
                  isDarkMode
                    ? "bg-[#5A5A89] hover:bg-[#404065] text-white"
                    : "bg-[#e2ddfe] hover:bg-[#7D66D9] text-black"
                } p-5 rounded-lg cursor-pointer transition-all ease-in-out transform hover:scale-110`}
                onClick={() => navigate(`/search/${category.name}`)}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  width={35}
                  height={35}
                  className="object-contain"
                />
                <h2 className="text-primary">{category.name}</h2>
              </div>
            ))}
          </div>
          {/* "See All" button */}
          {!showAll && categories.length > 5 && (
            <div className="flex justify-center mt-4">
              <button
                className={`px-4 py-2 text-sm rounded-lg transition-all ease-in-out ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                onClick={() => setShowAll(true)}
              >
                See All
              </button>
            </div>
          )}
          {showAll && (
            <div className="grid grid-cols-3 gap-3 mb-4 md:grid-cols-4 lg:grid-cols-5">
              {categoriesAbove.map((category, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center gap-2 ${
                    isDarkMode
                      ? "bg-[#5A5A89] hover:bg-[#404065] text-white"
                      : "bg-[#e2ddfe] hover:bg-[#7D66D9] text-black"
                  } p-5 rounded-lg cursor-pointer transition-all ease-in-out transform hover:scale-110`}
                  onClick={() => navigate(`/search/${category.name}`)}
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                  <h2 className="text-primary">{category.name}</h2>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CategoryList;
