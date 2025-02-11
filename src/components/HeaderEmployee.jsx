// import React, { useState, useEffect, useRef } from "react";
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
// import logo from "../assets/home.svg";
// import { IconButton } from "@mui/material";
// import { useTranslation } from "react-i18next";
// function HeaderEmployee() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const dropdownRef = useRef(null);
//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
//   const { formValues, isAuthenticated } = useSelector(
//     (state) => state.employeeRegister
//   );
//   const { t, i18n } = useTranslation(); // Initialize i18n

//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const employeeData = useSelector((state) => state.employeeRegister.employee);
//   console.log(employeeData);
//   useEffect(() => {
//     if (employeeData?.id) {
//       dispatch(getEmployeeById(employeeData.id));
//     }
//   }, [employeeData, dispatch]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//         setIsLanguageDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang); // Change language
//     setIsLanguageDropdownOpen(false); // Close the dropdown
//   };
//   const handleLogout = () => {
//     dispatch(logout());
//     toast.success("Logged out successfully!");
//     navigate("user/Employee-login");
//   };

//   const handleProfileClick = () => {
//     navigate("/user/profile-employee");
//     setIsDropdownOpen(false);
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
//           {["Home", "About Us", "Services"].map((item, index) => (
//             <Link
//               key={index}
//               to={
//                 item === "Services"
//                   ? "/user/bookings/customer"
//                   : "/user"
//               }
//               className="text-sm hover:text-[#9b9ef0] transition"
//             >
//               {item}
//             </Link>
//           ))}
//           {/* Language Dropdown */}
//           <motion.div className="relative">
//             <motion.div
//               className="cursor-pointer"
//               onClick={() => setIsLanguageDropdownOpen((prev) => !prev)}
//             >
//               Language <ArrowDropDownIcon />
//             </motion.div>

//             <AnimatePresence>
//               {isLanguageDropdownOpen && (
//                 <motion.div
//                   className={`absolute right-0 mt-2 w-40 shadow-md rounded p-4 ${
//                     isDarkMode
//                       ? "bg-gray-700 text-white"
//                       : "bg-white text-gray-800"
//                   }`}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                 >
//                   <motion.div
//                     className="p-2 rounded cursor-pointer hover:bg-gray-200"
//                     onClick={() => changeLanguage("en")}
//                   >
//                     English
//                   </motion.div>
//                   <motion.div
//                     className="p-2 rounded cursor-pointer hover:bg-gray-200"
//                     onClick={() => changeLanguage("hi")}
//                   >
//                     हिंदी
//                   </motion.div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//           <motion.div ref={dropdownRef} className="relative cursor-pointer">
//             {isAuthenticated ? (
//               <motion.div className="flex items-center gap-2">
//                 <img
//                   src={employeeData?.image || profilePlaceholder}
//                   alt="profile"
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <motion.div onClick={() => setIsDropdownOpen((prev) => !prev)}>
//                   {employeeData?.name} <ArrowDropDownIcon />
//                 </motion.div>

//                 <AnimatePresence>
//                   {isDropdownOpen && (
//                     <motion.div
//                       className={`absolute right-0 mt-2 w-48 shadow-md rounded p-4 ${
//                         isDarkMode
//                           ? "bg-gray-700 text-white"
//                           : "bg-white text-gray-800"
//                       }`}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                     >
//                       <motion.div className="mt-40">
//                         <img
//                           src={employeeData?.image || profilePlaceholder}
//                           alt="profile"
//                           className="w-12 h-12 mx-auto rounded-full"
//                         />
//                         <p className="mt-2 font-semibold text-center">
//                           {employeeData?.name}
//                         </p>
//                         <p className="text-sm text-center">
//                           {employeeData?.email}
//                         </p>
//                       </motion.div>
//                       <motion.div
//                         className="flex items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-200"
//                         onClick={handleProfileClick}
//                       >
//                         Profile
//                       </motion.div>
//                       <motion.div
//                         className="flex items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-200"
//                         onClick={handleLogout}
//                       >
//                         Logout <LogoutIcon className="ml-2" />
//                       </motion.div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ) : (
//               <Link
//   to="/user/Employee-register"
//   className="text-sm hover:text-[#9b9ef0] transition"
// >
//   Register
// </Link>

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
import { MdNightlight, MdWbSunny ,MdClose} from "react-icons/md";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import profilePlaceholder from "../assets/images/profile.png";
import logo from "../assets/home.svg";
import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import NotificationIcon from "./NotificationIcon";
import { Button } from "@mui/material";
import socket from "./socket"; 
import { setUserRole ,addMessage} from "../features/chatSlice";
function HeaderEmployee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const { formValues, isAuthenticated } = useSelector(
    (state) => state.employeeRegister
  );
  const employee = useSelector((state) => state.employeeRegister.user);

  useEffect(() => {
    if (employee) {
      dispatch(setUserRole("Employee")); // ✅ Set role as Employee
    } else {
      console.warn("⚠️ Employee is undefined. Check authentication.");
    }
  }, [dispatch, employee]);
  const { t, i18n } = useTranslation(); // Initialize i18n
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const employeeData = useSelector((state) => state.employeeRegister.employee);

  useEffect(() => {
    if (!employee) return;
  
    socket.on("receiveMessage", (newMessage) => {
      console.log("📩 Message received in Employee Header:", newMessage);
  
      if (newMessage.senderModel === "User") {
        console.log("✅ User sent a message!");
        toast.info(`New message from ${newMessage.senderName}: ${newMessage.message}`, {
          position: "top-right",
          autoClose: 3000,
        });
      }
  
      dispatch(addMessage(newMessage));
    });
  
    return () => {
      socket.off("receiveMessage");
    };
  }, [dispatch, employee]);
  const userRole ="Employee"
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
    navigate("/user/Employee-login");
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
        {/* Logo and Mobile Menu Button */}
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
          {/* Mobile Menu Icon */}
          <IconButton
            className="sm:hidden"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <ArrowDropDownIcon />
          </IconButton>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div className="items-center hidden gap-8 sm:flex">
          {["Home", "About Us", "Services"].map((item, index) => (
            <Link
              key={index}
              to={item === "Services" ? "/user/bookings/customer" : "/user"}
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
                    className="p-2 rounded cursor-pointer hover:bg-gray-200"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </motion.div>
                  <motion.div
                    className="p-2 rounded cursor-pointer hover:bg-gray-200"
                    onClick={() => changeLanguage("hi")}
                  >
                    हिंदी
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <NotificationIcon userRole={userRole} /> {/* ✅ Pass role */}
          {/* Profile Dropdown */}
          <motion.div ref={dropdownRef} className="relative cursor-pointer">
            {isAuthenticated ? (
              <motion.div className="flex items-center gap-2">
                <img
                  src={employeeData?.image || profilePlaceholder}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
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
                      <motion.div
                        className="flex items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-200"
                        onClick={handleProfileClick}
                      >
                        Profile
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-200"
                        onClick={handleLogout}
                      >
                        Logout <LogoutIcon className="ml-2" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <Link to="/user/Employee-register">
              <Button
                variant="contained"
                className={`flex rounded-full py-0.5 px-3 text-sm transition-colors ${
                  isDarkMode
                    ? "bg-[#c5aff1] hover:bg-[#5e4f9e] text-[#e5e5ee]"
                    : "bg-[#7F57F1] hover:bg-[#7d66d9] text-[#26292B]"
                }`}
              >
                Get Started
              </Button>
            </Link>
            )}
          </motion.div>

          {/* Dark Mode Toggle */}
          <IconButton onClick={() => dispatch(toggleDarkMode())}>
            {isDarkMode ? <MdWbSunny /> : <MdNightlight />}
          </IconButton>
        </motion.div>
      </motion.div>
    
      <AnimatePresence>
      {isDropdownOpen && (
        <motion.div
          className="sm:hidden fixed top-16 mt-6 left-0 w-full p-4 bg-[#e2ddfe] text-gray-800 rounded-lg shadow-xl z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Links */}
          <div className="space-y-4">
            {["Home", "About Us", "Services"].map((item, index) => (
              <Link
                key={index}
                to={item === "Services" ? "/user/bookings/customer" : "/user"}
                className="block py-3 text-xl font-semibold hover:text-[#9b9ef0] transition duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
          <NotificationIcon userRole={userRole} />
          {/* User Section */}
          <motion.div ref={dropdownRef} className="relative mt-4 cursor-pointer">
            {isAuthenticated ? (
              <motion.div className="flex flex-col items-center">
                <img
                  src={employeeData?.image || profilePlaceholder}
                  alt="profile"
                  className="w-16 h-16 rounded-full border-2 border-[#9b9ef0] shadow-lg"
                />
                <div className="mt-2 text-center">
                  <p className="text-lg font-semibold text-gray-900">{employeeData?.name}</p>
                  <p className="text-sm text-gray-600">{employeeData?.email}</p>
                </div>

                <div className="w-full mt-4 space-y-2">
                  <button
                    className="w-full py-2 px-4 bg-[#9b9ef0] text-white rounded-lg shadow-md hover:bg-[#7a7fd7] transition"
                    onClick={handleProfileClick}
                  >
                    Profile
                  </button>
                  
                  <button
                    className="flex items-center justify-center w-full px-4 py-2 text-gray-800 transition bg-gray-300 rounded-lg shadow-md hover:bg-gray-400"
                    onClick={handleLogout}
                  >
                    Logout <LogoutIcon className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ) : (
<Link to="/user/Employee-register">
  <Button
    variant="contained"
    className={`flex rounded-full py-0.5 px-3 text-sm transition-colors ${
      isDarkMode
        ? "bg-[#c5aff1] hover:bg-[#5e4f9e] text-[#e5e5ee]"
        : "bg-[#7F57F1] hover:bg-[#7d66d9] text-[#26292B]"
    }`}
  >
    Get Started
  </Button>
</Link>
            )}
          </motion.div>

          {/* Dark Mode Toggle */}
          {/* <div className="flex justify-center mt-6">
            <IconButton
              onClick={toggleDarkMode}
              className="p-2 transition duration-300 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              {isDarkMode ? <MdWbSunny /> : <MdNightlight />}
            </IconButton>
          </div> */}

          {/* Close Button */}
          <button
            className="absolute p-2 transition bg-gray-300 rounded-full shadow-md bottom-4 right-4 hover:bg-gray-400"
            onClick={() => setIsDropdownOpen(false)}
          >
            <MdClose className="text-xl text-gray-800" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>


    </>
  );
}

export default HeaderEmployee;
