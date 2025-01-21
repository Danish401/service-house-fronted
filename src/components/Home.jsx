

import React from "react";
import { useSelector } from "react-redux";
import Hero from "./Hero"; // Importing the Hero component
import CategoryList from "./CategoryList";
import BusinessList from "./BusinessList";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import HeroSection from "./HeroSection";
import ServicesCarousel from "./ServicesCarousel";
import HouseServiceSection from "./HouseServiceSection";

function Home() {
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state from Redux

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "dark:bg-gray-900" : "bg-white"}`}
    >
      <div className="mt-8">
        <HeroSection />
        <Hero />
        <CategoryList showAllCategories={false} />
        {/* Only show 12 employees on the home page */}
        <BusinessList  showAll={false} />
        <ServicesCarousel />
        <Newsletter />
        <HouseServiceSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
