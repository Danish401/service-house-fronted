// // 8/1/25

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toast, ToastContainer } from "react-toastify";
// import { motion, AnimatePresence } from "framer-motion";
// import { logout, getEmployeeById } from "../features/employeeRegisterSlice";
// import { toggleDarkMode } from "../features/bookingSlice";
// import "react-toastify/dist/ReactToastify.css";
// import { MdNightlight, MdWbSunny } from "react-icons/md";
// import LogoutIcon from "@mui/icons-material/Logout";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import profilePlaceholder from "../assets/images/profile.png";
// import logo from "../assets/logo.svg";
// import { IconButton } from "@mui/material";

// function HeaderEmployee() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
//   const { formValues, isAuthenticated } = useSelector((state) => state.employeeRegister);

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     if (formValues?.id) {
//       dispatch(getEmployeeById(formValues.id));
//     }
//   }, [formValues, dispatch]);

//   const handleLogout = () => {
//     dispatch(logout());
//     toast.success("Logged out successfully!");
//     navigate("user/Employee-login");
//   };

//   return (
//     <>
//       <ToastContainer />
//       <motion.div
//         className={`fixed top-0 w-full py-2 flex justify-between items-center shadow-md ${
//           isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-[#26292B]"
//         } z-50`}
//       >
//         <motion.div className="flex items-center gap-4 ml-4">
//           <motion.img
//             src={logo}
//             alt="logo"
//             width={100}
//             height={50}
//             className="cursor-pointer"
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 1 }}
//           />
//         </motion.div>

//         <motion.div className="flex items-center gap-8">
//           {["Home", "About Us"].map((item, index) => (
//             <Link key={index} to="/" className="text-sm hover:text-[#9b9ef0] transition">
//               {item}
//             </Link>
//           ))}

//           <motion.div className="relative cursor-pointer">
//             {isAuthenticated ? (
//               <motion.div className="flex items-center gap-2">
//                 <img
//                   src={formValues?.imagePreview || profilePlaceholder}
//                   alt="profile"
//                   className="rounded-full w-8 h-8"
//                 />
//                 <motion.div onClick={() => setIsDropdownOpen((prev) => !prev)}>
//                   {formValues?.name} <ArrowDropDownIcon />
//                 </motion.div>

//                 <AnimatePresence>
//                   {isDropdownOpen && (
//                     <motion.div
//                       className={`absolute right-0 mt-2 w-48 bg-white shadow-md rounded p-4 ${
//                         isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
//                       }`}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                     >
//                       <motion.div className="mb-4">
//                         <img
//                           src={formValues?.image || profilePlaceholder}
//                           alt="profile"
//                           className="rounded-full w-12 h-12 mx-auto"
//                         />
//                         <p className="text-center mt-2 font-semibold">{formValues?.name}</p>
//                         <p className="text-center text-sm">{formValues?.email}</p>
//                       </motion.div>
//                       <motion.div
//                         className="p-2 cursor-pointer hover:bg-gray-200 rounded flex items-center justify-center"
//                         onClick={handleLogout}
//                       >
//                         Logout <LogoutIcon className="ml-2" />
//                       </motion.div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ) : (
//               <Link to="user/Employee-login" className="text-sm hover:text-[#9b9ef0] transition">
//                 Login
//               </Link>
//             )}
//           </motion.div>

//           <IconButton onClick={() => dispatch(toggleDarkMode())}>
//             {isDarkMode ? <MdWbSunny /> : <MdNightlight />}
//           </IconButton>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }

// export default HeaderEmployee;

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { logout, getEmployeeById } from "../features/employeeRegisterSlice";
import { toggleDarkMode } from "../features/bookingSlice";
import "react-toastify/dist/ReactToastify.css";
import { MdNightlight, MdWbSunny } from "react-icons/md";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profilePlaceholder from "../assets/images/profile.png";
import logo from "../assets/home.svg";
import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
function HeaderEmployee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const { formValues, isAuthenticated } = useSelector(
    (state) => state.employeeRegister
  );
  const { t, i18n } = useTranslation(); // Initialize i18n

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const employeeData = useSelector((state) => state.employeeRegister.employee);
  console.log(employeeData);
  useEffect(() => {
    if (employeeData?.id) {
      dispatch(getEmployeeById(employeeData.id));
    }
  }, [employeeData, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change language
    setIsLanguageDropdownOpen(false); // Close the dropdown
  };
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("user/Employee-login");
  };

  const handleProfileClick = () => {
    navigate("/user/profile-employee");
    setIsDropdownOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <motion.div
        className={`fixed top-0 w-full py-2 flex justify-between items-center shadow-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-[#26292B]"
        } z-50`}
      >
        <motion.div className="flex items-center gap-4 ml-4">
          <motion.img
            src={logo}
            alt="logo"
            width={100}
            height={50}
            className="cursor-pointer"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.div className="flex items-center gap-8">
          {["Home", "About Us", "Services"].map((item, index) => (
            <Link
              key={index}
              to={
                item === "Services"
                  ? "/user/bookings/customer"
                  : "/user"
              }
              className="text-sm hover:text-[#9b9ef0] transition"
            >
              {item}
            </Link>
          ))}
          {/* Language Dropdown */}
          <motion.div className="relative">
            <motion.div
              className="cursor-pointer"
              onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
            >
              Language <ArrowDropDownIcon />
            </motion.div>

            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div
                  className={`absolute right-0 mt-2 w-40 shadow-md rounded p-4 ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-800"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <motion.div
                    className="p-2 cursor-pointer hover:bg-gray-200 rounded"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </motion.div>
                  <motion.div
                    className="p-2 cursor-pointer hover:bg-gray-200 rounded"
                    onClick={() => changeLanguage("hi")}
                  >
                    हिंदी
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div ref={dropdownRef} className="relative cursor-pointer">
            {isAuthenticated ? (
              <motion.div className="flex items-center gap-2">
                <img
                  src={employeeData?.image || profilePlaceholder}
                  alt="profile"
                  className="rounded-full w-8 h-8"
                />
                <motion.div onClick={() => setIsDropdownOpen((prev) => !prev)}>
                  {employeeData?.name} <ArrowDropDownIcon />
                </motion.div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className={`absolute right-0 mt-2 w-48 shadow-md rounded p-4 ${
                        isDarkMode
                          ? "bg-gray-700 text-white"
                          : "bg-white text-gray-800"
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <motion.div className="mt-40">
                        <img
                          src={employeeData?.image || profilePlaceholder}
                          alt="profile"
                          className="rounded-full w-12 h-12 mx-auto"
                        />
                        <p className="text-center mt-2 font-semibold">
                          {employeeData?.name}
                        </p>
                        <p className="text-center text-sm">
                          {employeeData?.email}
                        </p>
                      </motion.div>
                      <motion.div
                        className="p-2 cursor-pointer hover:bg-gray-200 rounded flex items-center justify-center"
                        onClick={handleProfileClick}
                      >
                        Profile
                      </motion.div>
                      <motion.div
                        className="p-2 cursor-pointer hover:bg-gray-200 rounded flex items-center justify-center"
                        onClick={handleLogout}
                      >
                        Logout <LogoutIcon className="ml-2" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <Link
  to="/user/Employee-register"
  className="text-sm hover:text-[#9b9ef0] transition"
>
  Register
</Link>

            )}
          </motion.div>

          <IconButton onClick={() => dispatch(toggleDarkMode())}>
            {isDarkMode ? <MdWbSunny /> : <MdNightlight />}
          </IconButton>
        </motion.div>
      </motion.div>
    </>
  );
}

export default HeaderEmployee;
