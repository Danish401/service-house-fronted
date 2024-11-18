// // import React from 'react';
// // import { useNavigate } from 'react-router-dom'; // For navigation

// // function CategoryList({ categoryList = [] }) {
// //   const navigate = useNavigate(); // Initialize React Router's navigate function

// //   return (
// //     <div className="grid grid-cols-3 gap-4 mx-4 md:mx-22 lg:mx-52 md:grid-cols-4 lg:grid-cols-6">
// //       {categoryList.length > 0 ? (
// //         categoryList.map((category, index) => (
// //           <div
// //             key={index}
// //             className={`flex flex-col items-center justify-center gap-2
// //              bg-purple-50 p-5 rounded-lg cursor-pointer
// //              hover:scale-110 transition-all ease-in-out`}
// //             onClick={() => navigate(`/search/${category.name}`)} // Using React Router for navigation
// //           >
// //             <img
// //               src={category.icon.url}
// //               alt="icon"
// //               width={35}
// //               height={35}
// //               className="object-contain"
// //             />
// //             <h2 className="text-primary">{category.name}</h2>
// //           </div>
// //         ))
// //       ) : (
// //         [1, 2, 3, 4, 5, 6].map((item, index) => (
// //           <div
// //             key={index}
// //             className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
// //           ></div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// // export default CategoryList;

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom"; // For navigation

// // // Import icons from assets
// // import MasonIcon from "../assets/icons/mason.png";
// // import GardnerIcon from "../assets/icons/gardner.png";
// // import LabourIcon from "../assets/icons/labour.png";
// // import ChefIcon from "../assets/icons/chef.png";
// // import CarpenterIcon from "../assets/icons/carpenter.png";
// // import ShiftingIcon from "../assets/icons/shifting.png";
// // // Add more icons as necessary

// // function CategoryList({ categoryList = [] }) {
// //   const navigate = useNavigate(); // Initialize React Router's navigate function
// //   const [showAll, setShowAll] = useState(false); // State to toggle between showing all categories or only the first 6

// //   // Default categories data (use icons you've imported)
// //   const categories = [
// //     { name: "Mason", icon: MasonIcon },
// //     { name: "Gardner", icon: GardnerIcon },
// //     { name: "Labour", icon: LabourIcon },
// //     { name: "Chef", icon: ChefIcon },
// //     { name: "Carpenter", icon: CarpenterIcon },
// //     { name: "Shifting", icon: ShiftingIcon },
// //     // Add other categories as needed
// //   ];

// //   // Determine how many categories to show based on `showAll` state
// //   const categoriesToShow = showAll ? categories : categories.slice(0, 6);

// //   return (
// //     <div className="mx-4 md:mx-22 lg:mx-52">
// //       <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
// //         {categoriesToShow.length > 0
// //           ? categoriesToShow.map((category, index) => (
// //               <div
// //                 key={index}
// //                 className={`flex flex-col items-center justify-center gap-2
// //              bg-purple-50 p-5 rounded-lg cursor-pointer
// //              hover:scale-110 transition-all ease-in-out`}
// //                 onClick={() => navigate(`/search/${category.name}`)} // Using React Router for navigation
// //               >
// //                 <img
// //                   src={category.icon}
// //                   alt={category.name}
// //                   width={35}
// //                   height={35}
// //                   className="object-contain"
// //                 />
// //                 <h2 className="text-primary">{category.name}</h2>
// //               </div>
// //             ))
// //           : [1, 2, 3, 4, 5, 6].map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
// //               ></div>
// //             ))}
// //       </div>
// //       {/* See All button */}
// //       {!showAll && categories.length > 6 && (
// //         <div className="flex justify-end mt-4">
// //           <button
// //             className="underline cursor-pointer text-primary"
// //             onClick={() => setShowAll(true)} // Toggle state to show all categories
// //           >
// //             See All
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default CategoryList;

// // Import icons from assets
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // // Import icons from assets
// // import MasonIcon from "../assets/icons/Mason.png";
// // import GardnerIcon from "../assets/icons/Gardner.png";
// // import LabourIcon from "../assets/icons/Labour.png";
// // import ChefIcon from "../assets/icons/Chef.png";
// // import CarpenterIcon from "../assets/icons/Carpenter.png";
// // import ElectricianIcon from "../assets/icons/Electrician.png";
// // import PlumberIcon from "../assets/icons/Plumber.png";
// // import PainterIcon from "../assets/icons/Painter.png";
// // import CleaningIcon from "../assets/icons/Cleaning.png";
// // import ShiftingIcon from "../assets/icons/Shifting.png";

// // function CategoryList() {
// //   const navigate = useNavigate();
// //   const [showAll, setShowAll] = useState(false); // State to show/hide all categories

// //   const categories = [
// //     { name: "Mason", icon: MasonIcon },
// //     { name: "Gardner", icon: GardnerIcon },
// //     { name: "Labour", icon: LabourIcon },
// //     { name: "Chef", icon: ChefIcon },
// //     { name: "Carpenter", icon: CarpenterIcon },
// //     { name: "Shifting", icon: ShiftingIcon },
// //     { name: "Electrician", icon: ElectricianIcon },
// //     { name: "Plumber", icon: PlumberIcon },
// //     { name: "Painter", icon: PainterIcon },
// //     { name: "Cleaning", icon: CleaningIcon },
// //   ];

// //   // Determine how many categories to show based on the `showAll` state
// //   const categoriesBelow = categories.slice(0, 5); // First 5 categories
// //   const categoriesAbove = showAll ? categories.slice(5) : []; // Rest of the categories when `showAll` is true

// //   return (
// //     <div className="mx-4 md:mx-22 lg:mx-52">
// //       {/* Show the rest of the icons above the first 5 icons after clicking "See All" */}
// //       {showAll && (
// //         <div className="grid grid-cols-3 gap-4 mb-4 md:grid-cols-4 lg:grid-cols-6">
// //           {categoriesAbove.map((category, index) => (
// //             <div
// //               key={index}
// //               className={`flex flex-col items-center justify-center gap-2
// //                bg-[#9B9EF0] p-5 rounded-lg cursor-pointer
// //                hover:bg-[#7D66D9] transition-all ease-in-out transform hover:scale-110`}
// //               onClick={() => navigate(`/search/${category.name}`)}
// //             >
// //               <img
// //                 src={category.icon}
// //                 alt={category.name}
// //                 width={35}
// //                 height={35}
// //                 className="object-contain"
// //               />
// //               <h2 className="text-primary">{category.name}</h2>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* First 5 categories */}
// //       <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
// //         {categoriesBelow.map((category, index) => (
// //           <div
// //             key={index}
// //             className={`flex flex-col items-center justify-center gap-2
// //              bg-[#9B9EF0] p-5 rounded-lg cursor-pointer
// //              hover:bg-[#7D66D9] transition-all ease-in-out transform hover:scale-110`}
// //             onClick={() => navigate(`/search/${category.name}`)}
// //           >
// //             <img
// //               src={category.icon}
// //               alt={category.name}
// //               width={35}
// //               height={35}
// //               className="object-contain"
// //             />
// //             <h2 className="text-primary">{category.name}</h2>
// //           </div>
// //         ))}
// //       </div>

// //       {/* "See All" button */}
// //       {!showAll && categories.length > 5 && (
// //         <div className="flex justify-center mt-4">
// //           <button
// //             className="px-4 py-2 text-sm text-white transition-all ease-in-out bg-black rounded-lg hover:bg-gray-800"
// //             onClick={() => setShowAll(true)}
// //           >
// //             See All
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default CategoryList;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Import icons from assets
// import MasonIcon from "../assets/icons/Mason.png";
// import GardnerIcon from "../assets/icons/Gardner.png";
// import LabourIcon from "../assets/icons/Labour.png";
// import ChefIcon from "../assets/icons/Chef.png";
// import CarpenterIcon from "../assets/icons/Carpenter.png";
// import ElectricianIcon from "../assets/icons/Electrician.png";
// import PlumberIcon from "../assets/icons/Plumber.png";
// import PainterIcon from "../assets/icons/Painter.png";
// import CleaningIcon from "../assets/icons/Cleaning.png";
// import ShiftingIcon from "../assets/icons/Shifting.png";

// function CategoryList() {
//   const navigate = useNavigate();
//   const [showAll, setShowAll] = useState(false); // State to show/hide all categories

//   const categories = [
//     { name: "Mason", icon: MasonIcon },
//     { name: "Gardner", icon: GardnerIcon },
//     { name: "Labour", icon: LabourIcon },
//     { name: "Chef", icon: ChefIcon },
//     { name: "Carpenter", icon: CarpenterIcon },
//     { name: "Shifting", icon: ShiftingIcon },
//     { name: "Electrician", icon: ElectricianIcon },
//     { name: "Plumber", icon: PlumberIcon },
//     { name: "Painter", icon: PainterIcon },
//     { name: "Cleaning", icon: CleaningIcon },
//   ];

//   // Determine how many categories to show based on the `showAll` state
//   const categoriesBelow = categories.slice(0, 5); // First 5 categories
//   const categoriesAbove = showAll ? categories.slice(5) : []; // Rest of the categories when `showAll` is true

//   return (
//     <div className="px-4 mt-8 md:px-22 lg:px-52"> {/* Set equal left and right padding */}
//       {/* Show the rest of the icons above the first 5 icons after clicking "See All" */}
//       {showAll && (
//         <div className="grid grid-cols-3 gap-3 mb-4 md:grid-cols-4 lg:grid-cols-6"> {/* Adjusted gap between icons */}
//           {categoriesAbove.map((category, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center justify-center gap-2
//                bg-[#9B9EF0] p-5 rounded-lg cursor-pointer
//                hover:bg-[#7D66D9] transition-all ease-in-out transform hover:scale-110`}
//               onClick={() => navigate(`/search/${category.name}`)}
//             >
//               <img
//                 src={category.icon}
//                 alt={category.name}
//                 width={35}
//                 height={35}
//                 className="object-contain"
//               />
//               <h2 className="text-primary">{category.name}</h2>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* First 5 categories */}
//       <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6"> {/* Adjusted gap between icons */}
//         {categoriesBelow.map((category, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center justify-center gap-2
//              bg-[#9B9EF0] p-5 rounded-lg cursor-pointer
//              hover:bg-[#7D66D9] transition-all ease-in-out transform hover:scale-110`}
//             onClick={() => navigate(`/search/${category.name}`)}
//           >
//             <img
//               src={category.icon}
//               alt={category.name}
//               width={35}
//               height={35}
//               className="object-contain"
//             />
//             <h2 className="text-primary">{category.name}</h2>
//           </div>
//         ))}
//       </div>

//       {/* "See All" button */}
//       {!showAll && categories.length > 5 && (
//         <div className="flex justify-center mt-4"> {/* Centered the button below the icons */}
//           <button
//             className="px-4 py-2 text-sm text-white transition-all ease-in-out bg-black rounded-lg hover:bg-gray-800"
//             onClick={() => setShowAll(true)}
//           >
//             See All
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryList;
//28/10/2024
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Import icons from assets
// import MasonIcon from "../assets/icons/Mason.png";
// import GardnerIcon from "../assets/icons/Gardner.png";
// import LabourIcon from "../assets/icons/Labour.png";
// import ChefIcon from "../assets/icons/Chef.png";
// import CarpenterIcon from "../assets/icons/Carpenter.png";
// import ElectricianIcon from "../assets/icons/Electrician.png";
// import PlumberIcon from "../assets/icons/Plumber.png";
// import PainterIcon from "../assets/icons/Painter.png";
// import CleaningIcon from "../assets/icons/Cleaning.png";
// import ShiftingIcon from "../assets/icons/Shifting.png";

// function CategoryList() {
//   const navigate = useNavigate();
//   const [showAll, setShowAll] = useState(false); // State to show/hide all categories

//   const categories = [
//     { name: "Mason", icon: MasonIcon },
//     { name: "Gardner", icon: GardnerIcon },
//     { name: "Labour", icon: LabourIcon },
//     { name: "Chef", icon: ChefIcon },
//     { name: "Carpenter", icon: CarpenterIcon },
//     { name: "Shifting", icon: ShiftingIcon },
//     { name: "Electrician", icon: ElectricianIcon },
//     { name: "Plumber", icon: PlumberIcon },
//     { name: "Painter", icon: PainterIcon },
//     { name: "Cleaning", icon: CleaningIcon },
//   ];

//   // Determine how many categories to show based on the `showAll` state
//   const categoriesBelow = categories.slice(0, 5); // First 5 categories
//   const categoriesAbove = showAll ? categories.slice(5) : []; // Rest of the categories when `showAll` is true

//   return (
//     <div className="px-4 mt-8 md:px-22 lg:px-52">
//       {" "}
//       {/* Set equal left and right padding */}
//       {/* Show the rest of the icons above the first 5 icons after clicking "See All" */}
//       {showAll && (
//         <div className="grid grid-cols-3 gap-3 mb-4 md:grid-cols-4 lg:grid-cols-6">
//           {" "}
//           {/* Adjusted gap between icons */}
//           {categoriesAbove.map((category, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center justify-center gap-2
//                bg-[#9B9EF0] p-5 rounded-lg cursor-pointer
//                hover:bg-[#7D66D9] transition-all ease-in-out transform hover:scale-110`}
//               onClick={() => navigate(`/search/${category.name}`)}
//             >
//               <img
//                 src={category.icon}
//                 alt={category.name}
//                 width={35}
//                 height={35}
//                 className="object-contain"
//               />
//               <h2 className="text-primary">{category.name}</h2>
//             </div>
//           ))}
//         </div>
//       )}
//       {/* First 5 categories */}
//       <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6">
//         {" "}
//         {/* Adjusted gap between icons */}
//         {categoriesBelow.map((category, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center justify-center gap-2
//              bg-[#9B9EF0] p-5 rounded-lg cursor-pointer
//              hover:bg-[#7D66D9] transition-all ease-in-out transform hover:scale-110`}
//             onClick={() => navigate(`/search/${category.name}`)}
//           >
//             <img
//               src={category.icon}
//               alt={category.name}
//               width={35}
//               height={35}
//               className="object-contain"
//             />
//             <h2 className="text-primary">{category.name}</h2>
//           </div>
//         ))}
//       </div>
//       {/* "See All" button */}
//       {!showAll && categories.length > 5 && (
//         <div className="flex justify-center mt-4">
//           {" "}
//           {/* Centered the button below the icons */}
//           <button
//             className="px-4 py-2 text-sm text-white transition-all ease-in-out bg-black rounded-lg hover:bg-gray-800"
//             onClick={() => setShowAll(true)}
//           >
//             See All
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryList;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Import icons from assets
// import MasonIcon from "../assets/icons/Mason.png";
// import GardnerIcon from "../assets/icons/Gardner.png";
// import LabourIcon from "../assets/icons/Labour.png";
// import ChefIcon from "../assets/icons/Chef.png";
// import CarpenterIcon from "../assets/icons/Carpenter.png";
// import ElectricianIcon from "../assets/icons/Electrician.png";
// import PlumberIcon from "../assets/icons/Plumber.png";
// import PainterIcon from "../assets/icons/Painter.png";
// import CleaningIcon from "../assets/icons/Cleaning.png";
// import ShiftingIcon from "../assets/icons/Shifting.png";

// function CategoryList({ selectedCategory, onSelectCategory }) {
//   const categories = [
//     { name: "Mason", icon: MasonIcon },
//     { name: "Gardner", icon: GardnerIcon },
//     { name: "Labour", icon: LabourIcon },
//     { name: "Chef", icon: ChefIcon },
//     { name: "Carpenter", icon: CarpenterIcon },
//     { name: "Shifting", icon: ShiftingIcon },
//     { name: "Electrician", icon: ElectricianIcon },
//     { name: "Plumber", icon: PlumberIcon },
//     { name: "Painter", icon: PainterIcon },
//     { name: "Cleaning", icon: CleaningIcon },
//   ];

//   return (
//     <div className="flex flex-col gap-4 p-4">
//       {categories.map((category) => (
//         <div
//           key={category.name}
//           className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer 
//           ${
//             selectedCategory === category.name
//               ? "bg-[#9B9EF0] text-white"
//               : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//           }`}
//           onClick={() => onSelectCategory(category.name)}
//         >
//           <img src={category.icon} alt={category.name} width={25} height={25} />
//           <span className="font-semibold text-md">{category.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CategoryList;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto">

      {/* Show the rest of the icons above the first 5 icons after clicking "See All" */}
      {showAllCategories ? (
        categories.map((category) => (
          <div
            key={category.name}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer 
            ${selectedCategory === category.name
              ? "bg-[#e2ddfe] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
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
                className={`flex flex-col items-center justify-center gap-2
                 bg-[#e2ddfe] p-5 rounded-lg cursor-pointer
                 hover:bg-[#7D66D9] transition-all ease-in-out transform hover:scale-110`}
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
                className="px-4 py-2 text-sm text-white transition-all ease-in-out bg-black rounded-lg hover:bg-gray-800"
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
                  className={`flex flex-col items-center justify-center gap-2
                   bg-[#e2ddfe] p-5 rounded-lg cursor-pointer
                   hover:bg-[#7D66D9] transition-all ease-in-out transform hover:scale-110`}
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
