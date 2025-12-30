import React, { useEffect, useState } from "react";
import { Box, IconButton, Avatar, Drawer, Tooltip, Badge } from "@mui/material";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/bookingSlice";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
      setIsDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    {
      path: "/dashboard",
      icon: <TbLayoutDashboardFilled className="text-xl" />,
      label: "Dashboard",
      show: true,
    },
    {
      path: "/dashboard/data",
      icon: <QueryStatsIcon className="text-xl" />,
      label: "Analytics",
      show: isAuthenticated && user?.role === "admin",
    },
    {
      path: "/dashboard/all-appointements",
      icon: <FaCalendarCheck className="text-xl" />,
      label: "Appointments",
      show: isAuthenticated && user?.role === "admin",
    },
    {
      path: "/dashboard/add-users",
      icon: <GiArchiveRegister className="text-xl" />,
      label: "Add Users",
      show: isAuthenticated && user?.role === "admin",
    },
    {
      path: "/dashboard/add-customer",
      icon: <GiArchiveRegister className="text-xl" />,
      label: "Add Customer",
      show: isAuthenticated && user?.role === "admin",
    },
    {
      path: "/dashboard/all-users",
      icon: <PiUsersDuotone className="text-xl" />,
      label: "User List",
      show: isAuthenticated && user?.role === "admin",
    },
    {
      path: "/dashboard/all-customers",
      icon: <RiCustomerService2Line className="text-xl" />,
      label: "Customer List",
      show: isAuthenticated && user?.role === "admin",
    },
  ].filter((item) => item.show);

  const SidebarContent = () => (
    <Box
      className={`h-full flex flex-col ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-700"
      } text-white shadow-2xl`}
    >
      {/* Logo/Brand */}
      <Box className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">FixMate</h1>
          {isMobile && (
            <IconButton
              onClick={() => setIsDrawerOpen(false)}
              className="text-white hover:bg-white/10"
              size="small"
            >
              <FaTimes />
        </IconButton>
            )}
        </div>
      </Box>

      {/* Navigation Menu */}
      <Box className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => isMobile && setIsDrawerOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                active
                  ? isDarkMode
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/50"
                    : "bg-white/20 backdrop-blur-sm shadow-lg"
                  : "hover:bg-white/10"
              }`}
            >
              <span
                className={`transition-transform duration-300 ${
                  active ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
              </Link>
          );
        })}
      </Box>

      {/* User Section / Logout */}
      <Box className="p-4 border-t border-white/10 space-y-2">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-white transition-all duration-300 group"
              >
            <AiOutlineLogout className="text-xl group-hover:translate-x-1 transition-transform" />
            <span className="font-medium">Logout</span>
              </button>
        ) : (
              <Link
                to="/dashboard/admin-signup"
            onClick={() => isMobile && setIsDrawerOpen(false)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive("/dashboard/admin-signup")
                ? "bg-white/20 backdrop-blur-sm shadow-lg"
                : "bg-green-500/20 hover:bg-green-500/30"
                }`}
              >
                <SiGnuprivacyguard className="text-xl" />
            <span className="font-medium">Signup</span>
              </Link>
            )}
      </Box>
        </Box>
  );

  return (
    <Box
      className={`flex flex-col h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Top Header */}
      <Box
        className={`fixed top-0 left-0 right-0 z-30 h-16 flex items-center justify-between px-4 md:px-6 shadow-lg ${
          isDarkMode
            ? "bg-gray-800/95 backdrop-blur-md border-b border-gray-700"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200"
        }`}
      >
        {/* Left: Menu Button (Mobile Only) */}
        <IconButton
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className={`${isDarkMode ? "text-white" : "text-gray-700"} hover:bg-opacity-10 lg:hidden`}
          size="large"
        >
          <FaBars />
        </IconButton>
        {/* Spacer for desktop */}
        <Box className="hidden lg:block w-12" />

        {/* Center: Title */}
        <div className="flex-1 text-center">
          <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
        </div>

        {/* Right: Theme Toggle & User Info */}
        <Box className="flex items-center space-x-3">
          <Tooltip title={isDarkMode ? "Light Mode" : "Dark Mode"}>
            <IconButton
              onClick={toggleTheme}
              className={`${isDarkMode ? "text-yellow-400" : "text-gray-700"} hover:bg-opacity-10`}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </IconButton>
          </Tooltip>

          {isAuthenticated && user && (
            <Box className="hidden md:flex items-center space-x-3 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
              <Avatar
                src={user?.image}
                alt={user?.name}
                sx={{ width: 32, height: 32 }}
                className="ring-2 ring-white/20"
              />
              <Box className="hidden lg:block">
                <div className="text-sm font-semibold">{user?.name}</div>
                <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {user?.email}
                </div>
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* Sidebar Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen && isMobile}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      {/* Desktop Sidebar */}
      <Box className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 z-20">
        <SidebarContent />
      </Box>

      {/* Main Content Area */}
      <Box
        className={`flex-1 pt-16 transition-all duration-300 ${
          isMobile ? "ml-0" : "lg:ml-64"
        } overflow-y-auto`}
      >
        <Box className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Statistics Cards */}
          {isAuthenticated && user?.role === "admin" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {/* Employees Card */}
              <Box
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/20"
                    : "bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200"
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-purple-400/20 transition-colors" />
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isDarkMode
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    <FaUsersGear className="text-2xl" />
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {employeeCount}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Total Employees
                  </p>
                </div>
              </Box>

              {/* Appointments Card */}
              <Box
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20"
                    : "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200"
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-400/20 transition-colors" />
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isDarkMode
                        ? "bg-blue-500/20 text-blue-300"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <FaCalendarCheck className="text-2xl" />
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {bookingCount}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Appointments
                  </p>
                </div>
              </Box>

              {/* Customers Card */}
              <Box
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/20"
                    : "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200"
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-400/20 transition-colors" />
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isDarkMode
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    <FaUser className="text-2xl" />
      </div>
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {customerCount}
                  </h3>
                  <p
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Customers
                  </p>
      </div>
              </Box>
    </div>
  )}

          {/* Outlet Content */}
          <Box
            className={`rounded-2xl p-4 md:p-6 lg:p-8 transition-all duration-300 min-h-[calc(100vh-300px)] ${
              isDarkMode
                ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                : "bg-white shadow-lg border border-gray-200"
    }`}
  >
    <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
