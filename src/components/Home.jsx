// // import React from 'react'

// // function Home() {
// //   return (
// //     <div className='flex flex-row mt-12 ml-20 mr-10 font-serif font-bold text-blue-950 justify-left'>Drag & drop field from the right column onto your form here...</div>
// //   )
// // }

// // export default Home

// import React from "react";
// import { useSelector } from "react-redux";
// import Hero from "./Hero"; // Importing the Hero component
// import CategoryList from "./CategoryList";
// import BusinessList from "./BusinessList";
// function Home() {
//   const isDarkMode = useSelector((state) => state.form.isDarkMode); // Get dark mode state from Redux

//   return (
//     <div
//       className={`min-h-screen ${isDarkMode ? "dark:bg-gray-900" : "bg-white"}`}
//     >
//       <div className="mt-8">
//         <Hero />
//         <CategoryList className="mt-20" />
//         <BusinessList />
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { useSelector } from "react-redux";
import Hero from "./Hero"; // Importing the Hero component
import CategoryList from "./CategoryList";
import BusinessList from "./BusinessList";
import { toggleDarkMode } from "../features/bookingSlice";
function Home() {
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state from Redux

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "dark:bg-gray-900" : "bg-white"}`}
    >
      <div className="mt-8">
        <Hero />
        {/* Add more margin to the top of CategoryList */}
        {/* <CategoryList /> */}
        <CategoryList showAllCategories={false} />
        <BusinessList />
      </div>
    </div>
  );
}

export default Home;





