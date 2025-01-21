
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes
import HeaderEmployee from "./HeaderEmployee"; 
import Hero from "./Hero"; 
import Newsletter from "./Newsletter"; 
import HouseServiceSection from "./HouseServiceSection"; 
import Footer from "./Footer";

function HomeEmployee() {
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state from Redux

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark:bg-gray-900" : "bg-white"}`}>
      {/* Shared Header */}
      <div className="mt-8">
      <HeaderEmployee />
      <Hero />
      <Newsletter />
      <HouseServiceSection />

      {/* Outlet will render the nested routes like EmployeeRegisterPage or EmployeeLogin */}
      <div >
        <Outlet /> {/* This renders the EmployeeRegisterPage or EmployeeLogin component */}
      </div>

      <Footer />
    </div>
    </div>
  );
}

export default HomeEmployee;
