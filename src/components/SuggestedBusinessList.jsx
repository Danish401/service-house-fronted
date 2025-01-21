

import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../features/employeeRegisterSlice";
import BookingSection from "./BookingSection";
import profile from "../assets/profile.jpg"; // Import the fallback image

function SuggestedBusinessList({ business }) {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const { employees, loading: employeesLoading, error } = useSelector(
    (state) => state.employeeRegister
  );

  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state

  // Fetch employees initially
  useEffect(() => {
    if (employees.length === 0) {
      dispatch(getAllEmployees());
    }
  }, [dispatch, employees]);

  // Update category and reset index when the business changes
  useEffect(() => {
    if (business) {
      setCategory(business.category);
      setCurrentIndex(0); // Reset index when the business changes
    }
  }, [business]);

  // Stop loading when employees data is fetched
  useEffect(() => {
    if (!employeesLoading) {
      setLoading(false);
    }
  }, [employeesLoading]);

  // Auto-switch businesses every 3 seconds
  useEffect(() => {
    if (employees.length > 0 && category) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const similarBusinesses = employees.filter(
            (employee) => employee.category === category
          );
          return (prevIndex + 1) % similarBusinesses.length;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [employees, category]);

  if (loading || employeesLoading) {
    return <div>Loading...</div>;
  }

  // Filter similar businesses based on category
  const similarBusinesses = employees.filter(
    (employee) => employee.category === category
  );

  if (similarBusinesses.length === 0) {
    return (
      <div className={`p-6 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <h2 className="text-lg font-bold">No similar businesses found</h2>
        <p>Try again later.</p>
      </div>
    );
  }

  // Get the current active business
  const activeBusiness = similarBusinesses[currentIndex];

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* Booking Section */}
      <BookingSection business={business}>
        <Button className="flex w-full gap-2">
          <NotebookPen />
          Book Appointment
        </Button>
      </BookingSection>

      {/* Similar Businesses Section */}
      <div className="mt-6">
        <h2 className="mb-4 text-2xl font-bold">Similar Businesses</h2>
        <div className="relative overflow-hidden h-72">
          <div
            key={activeBusiness._id}
            className={`absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} shadow-lg rounded-lg transition-transform duration-700 ease-in-out`}
          >
            <img
              src={activeBusiness?.image || profile}
              alt={activeBusiness.name}
              className="object-cover mb-4 rounded-lg w-36 h-36" // Square image with rounded corners
            />
            <h3 className="text-lg font-bold">{activeBusiness.name}</h3>
            <p className="text-sm">{activeBusiness.speciality}</p>
            <span className="px-3 py-1 mt-2 text-sm text-white bg-gray-400 rounded-full">
              {activeBusiness.category}
            </span>
            <Link
              to={`/details/${activeBusiness._id}`}
              className={`mt-4 text-sm hover:underline ${isDarkMode ? 'text-indigo-400' : 'text-indigo-500'}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestedBusinessList;
