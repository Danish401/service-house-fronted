

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
