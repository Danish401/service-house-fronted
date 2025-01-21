
import React, { useEffect, useState } from "react";
import { Box, IconButton, Avatar } from "@mui/material";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/bookingSlice"; // Update path if using themeSlice
import { getAllEmployees } from "../features/employeeRegisterSlice";
import { getAllUsers, logoutUser } from "../features/authSlice";
import { getAllBookings } from "../features/bookingSlice";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { FaCalendarCheck, FaUser } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { PiUsersDuotone } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";
import { SiGnuprivacyguard } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";

export default function Dashboard() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { employees } = useSelector((state) => state.employeeRegister);
  const { allUsers, user, isAuthenticated } = useSelector((state) => state.auth);
  const { allbookings: bookings, isDarkMode } = useSelector((state) => state.bookings);

  useEffect(() => {
    if (isAuthenticated && user?.role === "admin") {
      dispatch(getAllEmployees());
      dispatch(getAllUsers());
      dispatch(getAllBookings());
    }
  }, [dispatch, isAuthenticated, user]);

  const employeeCount = employees?.length || 0;
  const customerCount = allUsers?.length || 0;
  const bookingCount = bookings?.length || 0;

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("authToken");
    navigate("/dashboard/admin-signup");
  };

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Box className={`flex h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Sidebar */}
      {isSidebarOpen && (
        <Box
          className={`fixed top-0 left-0 w-64 h-full text-white ${
            isDarkMode
              ? "bg-gradient-to-b from-gray-800 to-gray-700"
              : "bg-gradient-to-b from-[#7d66d9] to-[#5b5bd6]"
          }`}
        >
          <div className="mb-8 ml-4 text-2xl font-bold">Dashboard</div>
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
                location.pathname === "/dashboard"
                  ? isDarkMode
                    ? "bg-gray-700 shadow-lg"
                    : "bg-[#5b5bd6] shadow-lg"
                  : isDarkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-[#5b5bd6]"
              }`}
            >
              <TbLayoutDashboardFilled className="text-xl" />
              <span>Dashboard</span>
            </Link>
            {isAuthenticated && user?.role === "admin" &&(
              <>
            <Link
              to="/dashboard/data"
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
                location.pathname === "/dashboard/data"
                  ? "bg-[#5b5bd6] shadow-lg"
                  : "hover:bg-[#5b5bd6]"
              }`}
            >
              <QueryStatsIcon className="text-xl" />
              <span>Analytics</span>
            </Link>
            {/* More Links */}
            <Link
                to="/dashboard/all-appointements"
                className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
                  location.pathname === "/dashboard/all-appointements"
                    ? "bg-[#5b5bd6] shadow-lg"
                    : "hover:bg-[#5b5bd6]"
                }`}
              >
                <FaCalendarCheck className="text-xl" />
                <span>All Appointments</span>
              </Link>
              <Link
                to="/dashboard/add-users"
                className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
                  location.pathname === "/dashboard/add-users"
                    ? "bg-[#5b5bd6] shadow-lg"
                    : "hover:bg-[#5b5bd6]"
                }`}
              >
                <GiArchiveRegister className="text-xl" />
                <span>Add Users</span>
              </Link>
              <Link
                to="/dashboard/all-users"
                className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
                  location.pathname === "/dashboard/all-users"
                    ? "bg-[#5b5bd6] shadow-lg"
                    : "hover:bg-[#5b5bd6]"
                }`}
              >
                <PiUsersDuotone className="text-xl" />
                <span>User List</span>
              </Link>
              <Link
                to="/dashboard/all-customers"
                className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
                  location.pathname === "/dashboard/all-customers"
                    ? "bg-[#5b5bd6] shadow-lg"
                    : "hover:bg-[#5b5bd6]"
                }`}
              >
                <RiCustomerService2Line className="text-xl" />
                <span>Customer List</span>
              </Link>
              </>
            )}
            {/* Logout */}
            {isAuthenticated ? (
//               // Logout button
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 p-3 w-full text-left rounded-md transition-colors duration-300 hover:bg-[#5b5bd6]"
              >
                <AiOutlineLogout className="text-xl" />
                <span>Logout</span>
              </button>
            )  : (
              // Signup visible when not authenticated
              <Link
                to="/dashboard/admin-signup"
                className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
                  location.pathname === "/dashboard/admin-signup"
                    ? "bg-[#5b5bd6] shadow-lg"
                    : "hover:bg-[#5b5bd6]"
                }`}
              >
                <SiGnuprivacyguard className="text-xl" />
                <span>Signup</span>
              </Link>
            )}
       
            {/* Add other links */}
          </nav>
        </Box>
      )}

      {/* Main Content */}
      <Box className={`flex-1 ${isSidebarOpen ? "ml-64" : "ml-0"} -mt-16 h-screen overflow-auto`}>
        {/* Fixed Header */}
        <Box className="sticky top-0 z-10 flex items-center justify-between p-4 shadow-md" 
          style={{ backgroundColor: isDarkMode ? "#1f2937" : "#fff" }}>
          <IconButton
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className={isDarkMode ? "text-white" : "text-[#7d66d9]"}
          >
            <FaBars />
          </IconButton>
          <div className="text-xl font-bold">Dashboard</div>
          <div className="flex items-center space-x-4">
            <IconButton onClick={toggleTheme} className={isDarkMode ? "text-white" : "text-gray-600"}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </IconButton>
            {isAuthenticated && user && (
              <Box className="flex items-center space-x-3">
                <Avatar src={user?.image} alt={user?.name} />
                <Box>
                  <div className="font-medium">{user?.name}</div>
                  <div className="text-sm text-gray-500">{user?.email}</div>
                </Box>
              </Box>
            )}
          </div>
        </Box>

        {/* Overview Cards */}
        <Box className="p-6">
  {isAuthenticated && user?.role === "admin" && (
    <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        className={`p-5 text-center rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <FaUsersGear
          className={`mb-3 text-4xl ${
            isDarkMode ? "text-yellow-500" : "text-[#7d66d9]"
          }`}
        />
        <h3 className="text-xl font-semibold">{employeeCount} Employees</h3>
      </div>
      <div
        className={`p-5 text-center rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <FaCalendarCheck
          className={`mb-3 text-4xl ${
            isDarkMode ? "text-yellow-500" : "text-[#7d66d9]"
          }`}
        />
        <h3 className="text-xl font-semibold">{bookingCount} Appointments</h3>
      </div>
      <div
        className={`p-5 text-center rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <FaUser
          className={`mb-3 text-4xl ${
            isDarkMode ? "text-yellow-500" : "text-[#7d66d9]"
          }`}
        />
        <h3 className="text-xl font-semibold">{customerCount} Customers</h3>
      </div>
    </div>
  )}
  <Outlet />
</Box>

      </Box>
    </Box>
  );
}




