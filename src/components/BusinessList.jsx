

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../features/employeeRegisterSlice"; // Adjust the path
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "./button";
import profile from "../assets/profile.jpg"; // Import the fallback image

function BusinessList({ showAll = false, title }) {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (state) => state.employeeRegister
  );
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={`py-1${isDarkMode ? 'text-white bg-dark' : 'text-black bg-light'}`}>
        <h2 className="font-bold text-[22px]">{title}</h2>
        <div className="grid grid-cols-2 gap-6 mt-5 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="w-full h-[300px] flex flex-col gap-4">
              <Skeleton
                variant="rectangular"
                width="100%"
                height={150}
                className="rounded-lg"
              />
              <Skeleton variant="text" width="60%" height={30} />
              <Skeleton variant="text" width="80%" height={20} />
              <Skeleton variant="text" width="40%" height={20} />
              <Skeleton variant="rectangular" width="50%" height={40} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  // Show all employees if `showAll` is true; otherwise, show only the first 12
  const employeesToShow = showAll ? employees : employees.slice(0, 12);

  return (
    <div className={`-mt-12  ${isDarkMode ? 'text-white bg-[#111827]' : 'text-black bg-light'}`}>
      <h2 className="font-bold text-[22px]">{title}</h2>

      {/* Large container for all employees */}
      <div className={`grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg`}>
        {employeesToShow.map((employee, index) => (
          <Link
            to={"/details/" + employee._id}
            key={index}
            className={`transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300 ${isDarkMode ? 'bg-[#111827]' : 'bg-white'}`}
          >
            <img
              src={employee?.image || profile}
              alt={employee.name}
              width={500}
              height={200}
              className="h-[150px] md:h-[200px] object-cover rounded-lg"
            />
            <div className="flex flex-col items-baseline gap-1 p-3">
              <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
                {employee?.category || "Unknown Category"}
              </h2>
              <h2 className="text-lg font-bold">{employee.name}</h2>
              <h2 className="text-sm text-gray-500">
                {employee.address1 || "No Address Provided"}
              </h2>
              <Button className="mt-3 rounded-lg">
                <Link to={`/details/${employee.id}`}>Book Now</Link>
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BusinessList;
