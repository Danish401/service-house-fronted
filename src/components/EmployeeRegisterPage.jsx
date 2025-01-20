// import React from "react";
// import { useSelector } from "react-redux";
// import HeaderEmployee from "./HeaderEmployee"; // Only the header for this page
// import EmployeeRegister from "../User/EmployeeRegister"; // The employee registration form
// function EmployeeRegisterPage() {
//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state from Redux

//   return (
//     <div
//       className={`min-h-screen ${isDarkMode ? "dark:bg-gray-900" : "bg-white"}`}
//     >
//       <div className="mt-8">
//         {/* Only Header and EmployeeRegister form */}
//         <HeaderEmployee />
//         <EmployeeRegister />
//       </div>
//     </div>
//   );
// }

// export default EmployeeRegisterPage;

import React from "react";
import { useSelector } from "react-redux";
import HeaderEmployee from "./HeaderEmployee"; 
import EmployeeRegister from "../User/EmployeeRegister"; 

function EmployeeRegisterPage() {
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); 

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark:bg-gray-900" : "bg-white"}`}>
      <div className="mt-8">
        <HeaderEmployee />
        <EmployeeRegister />
      </div>
    </div>
  );
}

export default EmployeeRegisterPage;
