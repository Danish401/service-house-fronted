// SearchPage.js
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { Data1 } from "./Data1"; // Adjust the path to your Data1 import

// function SearchPage() {
//   const { category } = useParams(); // Extract the category from the URL

//   // Filter Data1 by category, ensuring it captures all matches
//   const filteredData = Data1.filter(item => item.category === category);

//   return (
//     <div className="p-4 mt-5">
//       <h1 className="font-bold text-[22px] mb-4">Results for: {category}</h1>
//       <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
//         {filteredData.length > 0 ? (
//           filteredData.map((business, index) => (
//             <Link
//               to={"/details/" + business.id}
//               key={index}
//               className="transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
//             >
//               <img
//                 src={business.icon || "/placeholder-image.png"}
//                 alt={business.name}
//                 width={500}
//                 height={200}
//                 className="h-[150px] md:h-[200px] object-cover rounded-lg"
//               />
//               <div className="flex flex-col items-baseline gap-1 p-3">
//                 <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//                   {business.category || "Unknown Category"}
//                 </h2>
//                 <h2 className="text-lg font-bold">{business.name}</h2>
//                 <h2 className="text-sm text-gray-500">
//                   {business.location || "No Address Provided"}
//                 </h2>
//                 <button className="px-4 py-2 mt-3 text-white bg-blue-500 rounded-lg">
//                   <Link to={`/details/${business.id}`}>Book Now</Link>
//                 </button>
//               </div>
//             </Link>
//           ))
//         ) : (
//           // Skeleton loading placeholders
//           [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
//             <div
//               key={index}
//               className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse"
//             ></div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchPage;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Data1 } from "./Data1"; // Import your data
// import CategoryList from "./CategoryList";

// function SearchPage() {
//   const { category } = useParams();
//   const [selectedCategory, setSelectedCategory] = useState(category || "Mason");

//   // Filter data based on selected category
//   const filteredData = Data1.filter((item) => item.category === selectedCategory);

//   return (
// <div className="flex gap-6 p-6">
//   {/* Left section - Category List */}
//   <div className="w-1/4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
//     <h2 className="mb-4 text-lg font-semibold text-gray-700">Categories</h2>
//     <CategoryList selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory}  showAllCategories={true} />
//   </div>

//       {/* Right section - Filtered results */}
//       <div className="flex-1 p-4">
//         <h1 className="mb-4 text-2xl font-bold text-gray-800">Results for: {selectedCategory}</h1>
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {filteredData.length > 0 ? (
//             filteredData.map((item) => (
//               <div
//                 key={item.id}
//                 className="p-5 transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
//               >
//                 <img
//                   src={item.icon}
//                   alt={item.name}
//                   className="object-cover w-16 h-16 mx-auto mb-3"
//                 />
//                 <h2 className="mb-1 text-xl font-semibold text-center">{item.name}</h2>
//                 <p className="text-center text-gray-600">{item.location}</p>
//                 <p className="mt-2 text-sm text-center text-gray-700">{item.description}</p>
//                 <p className="mt-1 text-center text-blue-500">{item.gmail}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No results found for "{selectedCategory}"</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchPage;
// working fine
// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Data1 } from "./Data1"; // Import your data
// import CategoryList from "./CategoryList";

// function SearchPage() {
//   const { category } = useParams();
//   const [selectedCategory, setSelectedCategory] = useState(category || "Mason");

//   // Filter data based on selected category
//   const filteredData = Data1.filter(
//     (item) => item.category === selectedCategory
//   );

//   return (
//     <div className="flex gap-6 p-6">
//       {/* Left section - Category List */}
//       <div className="w-1/4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
//         <h2 className="mb-4 text-lg font-semibold text-gray-700">Categories</h2>
//         <CategoryList
//           selectedCategory={selectedCategory}
//           onSelectCategory={setSelectedCategory}
//           showAllCategories={true}
//         />
//       </div>

//       {/* Right section - Filtered results */}
//       <div className="flex-1 p-4">

//         {/* Business List Style */}
//         <div className="mt-5">
//           <h2 className="font-bold text-[22px]">
//            {selectedCategory}
//           </h2>
//           <div className="grid grid-cols-2 gap-6 mt-5 md:grid-cols-3 lg:grid-cols-4">
//             {filteredData.length > 0
//               ? filteredData.map((business, index) => (
//                   <Link
//                     to={"/details/" + business.id}
//                     key={index}
//                     className="transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
//                   >
//                     <img
//                       src={business.icon}
//                       alt={business.name}
//                       width={500}
//                       height={200}
//                       className="h-[150px] md:h-[200px] object-cover rounded-lg"
//                     />
//                     <div className="flex flex-col items-baseline gap-1 p-3">
//                       <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//                         {business.category || "Unknown Category"}
//                       </h2>
//                       <h2 className="text-lg font-bold">{business.name}</h2>
//                       <h2 className="text-sm text-gray-500">
//                         {business.location || "No Address Provided"}
//                       </h2>
//                       <button className="mt-3 rounded-lg bg-[#7D66D9] text-white px-4 py-2">
//                         <Link to={`/details/${business.id}`}>Book Now</Link>
//                       </button>
//                     </div>
//                   </Link>
//                 ))
//               : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse"
//                   ></div>
//                 ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchPage;

import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Data1 } from "./Data1"; // Import your data
import CategoryList from "./CategoryList";

function SearchPage() {
  const { category } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [selectedCategory, setSelectedCategory] = useState(category || "Mason");

  // Filter data based on selected category
  const filteredData = Data1.filter(
    (item) => item.category === selectedCategory
  );

  // Function to handle category selection and update the URL
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/search/${category}`); // Update the URL
  };

  return (
    <div className="flex gap-6 p-6 mt-8">
      {/* Left section - Category List */}
      <div className="w-1/4 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="mb-4 text-lg font-semibold text-[#7D66D9] ">
  Categories
</h2>

        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect} // Use the new handler
          showAllCategories={true}
        />
      </div>

      {/* Right section - Filtered results */}
      <div className="flex-1 p-4">
        {/* Business List Style */}
        <div className="mt-5">
          <h2 className="font-bold text-[22px]">{selectedCategory}</h2>
          <div className="grid grid-cols-2 gap-6 mt-5 md:grid-cols-3 lg:grid-cols-4">
            {filteredData.length > 0
              ? filteredData.map((business, index) => (
                  <Link
                    to={"/details/" + business.id}
                    key={index}
                    className="transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
                  >
                    <img
                      src={business.icon}
                      alt={business.name}
                      width={500}
                      height={200}
                      className="h-[150px] md:h-[200px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col items-baseline gap-1 p-3">
                      <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
                        {business.category || "Unknown Category"}
                      </h2>
                      <h2 className="text-lg font-bold">{business.name}</h2>
                      <h2 className="text-sm text-gray-500">
                        {business.location || "No Address Provided"}
                      </h2>
                      <button className="mt-3 rounded-lg bg-[#7D66D9] text-white px-4 py-2">
                        <Link to={`/details/${business.id}`}>Book Now</Link>
                      </button>
                    </div>
                  </Link>
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse"
                  ></div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
