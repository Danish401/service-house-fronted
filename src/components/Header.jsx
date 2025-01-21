

import React, { useState, useEffect } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md"; // Add this line at the top of your file

import {
  MdNightlight,
  MdWbSunny,
  MdOutlineAccountBalance,
  MdOutlineBuild,
  MdSave,
  MdEdit,
} from "react-icons/md";
import logo from "../assets/home2.svg";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/bookingSlice";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import p from "../assets/images/profile.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser, setUser, clearUser } from "../features/authSlice"; // Adjust the path accordingly

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For services dropdown
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // For profile dropdown
  const [userdata, setUserdata] = useState({});
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const BACKEND_URL =process.env.NODE_ENV === "production"
    ? "https://houseservicebackend.onrender.com/"
    : "http://localhost:5000/";
  useEffect(() => {
    if (!isAuthenticated) {
      getUser();
    }
  }, [isAuthenticated]);
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      if (!token) {
        console.log("Token not found");
        return;
      }

      const response = await axios.get(`${BACKEND_URL}login/success`, {
        withCredentials: true, // Allow sending cookies
        headers: {
          Authorization: `Bearer ${token}`, // Send token in header
        },
      });

      if (response.data.success) {
        dispatch(
          setUser({
            user: response.data.user,
            token: response.data.token,
            isAuthenticated: true,
          })
        );
      } else {
        dispatch(clearUser());
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch(clearUser());
    }
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    if (isProfileDropdownOpen) setIsProfileDropdownOpen(false); // Close profile dropdown if open
  };

  

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };
  

  


  const handleLogout = async () => {
    try {
      // If the user logged in via Google, log them out from Google
      if (user?.googleId) {
        await axios.post(
          `${BACKEND_URL}auth/logout/google`,
          {},
          { withCredentials: true }
        );
      }

      // Logout the user using Redux (clearing user data)
      const result = await dispatch(logoutUser()).unwrap(); // Unwrap the promise for error handling

      if (result) {
        dispatch(clearUser()); // Clear user data in Redux
        toast.success("Logout successful!", { position: "top-right" });
        navigate("/login"); // Navigate to login page after logout
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout. Please try again.", {
        position: "top-right",
      });
    }
  };

  

 
  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 py-0 w-full flex justify-between items-center shadow-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-[#26292B]"
        } z-50`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-4 ml-4"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={logo}
            alt="logo"
            width={100}
            height={30}
            className="ml-4 cursor-pointer"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          />
  <motion.span
      className={`flex items-baseline gap-1 cursor-pointer ${
        isDarkMode ? "text-white" : "text-gray-800"
      }`}
      whileHover={{ color: "#7F57F1", scale: 1.2 }}
      transition={{ duration: 0.4 }}
    >
      <motion.span
        className={`text-4xl font-extrabold ${
          isDarkMode ? "text-indigo-400" : "text-gray-800"
        }`}
        whileHover={{ y: -5, color: "#5B5BD6" }}
        transition={{ duration: 0.3 }}
      >
        A
      </motion.span>
      <motion.span
        className={`text-2xl font-bold ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
        whileHover={{ y: -3, color: "#ABBDF9" }}
        transition={{ duration: 0.3 }}
      >
        LI.
      </motion.span>
    </motion.span>
        </motion.div>

        <motion.div className="relative flex items-center gap-8">
          {["Home", "About Us"].map((item, index) => (
            <motion.div key={index} className="relative cursor-pointer group">
              <Link
                to={item === "Home" ? "/" : "/about"}
                className={`text-sm ${isDarkMode ? "text-white" : ""}`}
              >
                <h2 className="hover:text-[#9b9ef0] transition">{item}</h2>
              </Link>
              <motion.div
                className="absolute left-0 right-0 h-1 bg-[#9b9ef0] mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ bottom: -2 }}
              />
            </motion.div>
          ))}

          {/* Services Dropdown */}
          <motion.div className="relative cursor-pointer group">
            <motion.h2
              className={`text-sm ${isDarkMode ? "text-white" : ""}`}
              onClick={toggleDropdown}
            >
              services{" "}
              {isDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </motion.h2>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className={`absolute z-10 shadow-lg mt-2 rounded ${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-[#e2ddfe] text-black"
                  }`}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={dropdownVariants}
                >
                  <motion.ul className="p-2 space-y-1">
                    <motion.li
                      className="px-4 py-2 hover:bg-[#6e6ade] cursor-pointer flex items-center"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        navigate("/bookings");
                      }}
                    >
                      <MdOutlineBuild className="mr-2" />
                      Booking
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.li
          className="px-4 py-2 hover:bg-[#6e6ade] cursor-pointer flex items-center"
          onClick={() => {
            setIsDropdownOpen(false);
            navigate("/businesslist");
          }}
        >
          <MdOutlineBuild className="mr-2" />
          Workers
        </motion.li>
        <motion.div className="flex items-center gap-4">
          {/* Theme toggle icon */}
          <IconButton onClick={toggleTheme}>
            {isDarkMode ? (
              <MdWbSunny className="mr-3 text-white" size={24} />
            ) : (
              <MdNightlight size={24} />
            )}
          </IconButton>

          {/* Profile dropdown */}
          {isAuthenticated || user ? (
            <div
              className="relative"
              onMouseEnter={() => setIsProfileDropdownOpen(true)}
              onMouseLeave={() => setIsProfileDropdownOpen(false)}
            >
              <IconButton className="focus:outline-none">
                {/* Profile image or icon */}
                {userdata.image ? (
                  <img
                    src={p}
                    alt="User profile"
                    className="w-10 h-10 mr-4  rounded-full border-2 border-[#6e6ade]"
                  />
                ) : (
                  <MdOutlineAccountBalance
                    className={
                      isDarkMode ? "text-white mr-8" : "text-gray-500 mr-8"
                    }
                    size={24}
                  />
                )}
              </IconButton>

              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute right-0 z-10 p-4 mt-2 mr-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 w-60"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {/* Large profile image in dropdown */}
                      <div>
                        {/* Assuming user.image contains the image URL */}
                        <img
                          src={user.image || "/path/to/default-image.jpg"} // Add default image if user.image is not available
                          alt="User Profile"
                          className="object-cover w-12 h-12 rounded-full"
                        />
                      </div>

                      <div>
                        {/* Username and email display */}
                        <p
                          className={`text-lg font-bold font-serif ${
                            isDarkMode ? "text-gray-700" : "text-indigo-950"
                          }`}
                        >
                          {user.name}
                        </p>
                        <p
                          className={`text-xs font-sans ${
                            isDarkMode ? "text-gray-700" : "text-indigo-950"
                          }`}
                        >
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <hr className="mb-4 border-gray-300 dark:border-gray-600" />
                    {/* Profile Link to Update Form */}
                    <motion.button
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                        navigate("/profile"); // Redirect to update-form page
                      }}
                      className={`w-full flex items-center text-left text-sm ${
                        isDarkMode
                          ? "text-gray-400 hover:text-indigo-500"
                          : "text-indigo-950 hover:text-indigo-600"
                      } transition`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MdOutlineAccountCircle className="mr-2" />
                      <span>Profile</span>
                    </motion.button>
                    {/* Logout button with framer motion effects */}
                    <motion.button
                      onClick={handleLogout}
                      className={`w-full flex items-center text-left text-sm ${
                        isDarkMode
                          ? "text-gray-400 hover:text-indigo-500"
                          : "text-indigo-950 hover:text-indigo-600"
                      } transition`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LogoutIcon className="mr-2" />
                      <span>Logout</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : userdata && userdata.email ? (
            <div
              className="relative"
              onMouseEnter={() => setIsProfileDropdownOpen(true)}
              onMouseLeave={() => setIsProfileDropdownOpen(false)}
            >
              <IconButton className="focus:outline-none">
                {/* Profile image or icon */}
                {userdata.image ? (
                  <img
                    src={userdata.image}
                    alt="User profile"
                    className="w-10 h-10 mr-8  rounded-full border-2 border-[#6e6ade]"
                  />
                ) : (
                  <MdOutlineAccountBalance
                    className={
                      isDarkMode ? "text-white mr-8" : "text-gray-500 mr-8"
                    }
                    size={24}
                  />
                )}
              </IconButton>

              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute right-0 z-10 p-4 mt-2 mr-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 w-60"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {/* Large profile image in dropdown */}
                      {userdata.image && (
                        <img
                          src={userdata.image}
                          alt="User profile"
                          className="w-12 h-12 rounded-full border-2 border-[#6e6ade]"
                        />
                      )}
                      <div>
                        {/* Username and email display */}
                        <p
                          className={`text-lg font-bold font-serif ${
                            isDarkMode ? "text-gray-700" : "text-indigo-950"
                          }`}
                        >
                          {userdata.displayName || userdata.name}
                        </p>
                        <p
                          className={`text-xs font-sans ${
                            isDarkMode ? "text-gray-700" : "text-indigo-950"
                          }`}
                        >
                          {userdata.email}
                        </p>
                      </div>
                    </div>
                    <hr className="mb-4 border-gray-300 dark:border-gray-600" />
                    {/* Logout button with framer motion effects */}
                    <motion.button
                      onClick={handleLogout}
                      className={`w-full flex items-center text-left text-sm ${
                        isDarkMode
                          ? "text-gray-400 hover:text-indigo-500"
                          : "text-indigo-950 hover:text-indigo-600"
                      } transition`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LogoutIcon className="mr-2" />
                      <span>Logout</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="mr-8">
              <Button
                variant="contained"
                className={`flex rounded-full py-0.5 px-3 text-sm transition-colors ${
                  isDarkMode
                    ? "bg-[#c5aff1] hover:bg-[#5e4f9e] text-[#e5e5ee]" // Dark mode colors
                    : "bg-[#7F57F1] hover:bg-[#7d66d9] text-[#26292B]" // Light mode colors
                }`}
                onClick={() => setIsModalOpen(true)} // Open the modal
              >
                Get Started
              </Button>
            </div>
          )}
        </motion.div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div
              className={`relative p-8 rounded-lg shadow-lg transform transition-all duration-300 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              }`}
              style={{
                width: "90%",
                maxWidth: "400px",
              }}
            >
              <h2 className="text-xl font-bold text-center mb-6 text-[#9B9EF0]">
                Register as:
              </h2>
              <div className="flex flex-col gap-6">
                <button
                  className="w-full py-3 rounded-lg text-lg font-medium text-white bg-[#9B9EF0] hover:bg-[#7F57F1] transition duration-200 shadow-md hover:shadow-lg"
                  onClick={() => {
                    setIsModalOpen(false); // Close the modal
                    navigate("/user"); // Redirect to Employee Register
                  }}
                >
                  Employee Register
                </button>
                <button
                  className="w-full py-3 rounded-lg text-lg font-medium text-white bg-[#E2DDFE] hover:bg-[#9B9EF0] transition duration-200 shadow-md hover:shadow-lg"
                  onClick={() => {
                    setIsModalOpen(false); // Close the modal
                    navigate("/signup"); // Redirect to Customer Register
                  }}
                >
                  Customer Register
                </button>
              </div>
              <button
                onClick={() => setIsModalOpen(false)} // Close the modal
                className="absolute text-xl text-gray-400 transition duration-200 top-4 right-4 hover:text-red-500 focus:outline-none"
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </motion.div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          margin: "20px", // Add margin for spacing from the edges
          zIndex: 9999, // Ensure the toast appears above other elements
        }}
      />
    </>
  );
}

export default Header;
