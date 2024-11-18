// import React from "react";
// import logo from "../assets/logo.svg"; // Update the path to your logo file
// import { Button } from "@mui/material";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";
// import { MdNightlight } from "react-icons/md"; // Importing Moon icon
// import { MdWbSunny } from "react-icons/md"; // Importing Sun icon
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../features/formSlice"; // Import the action

// function Header() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.form.isDarkMode); // Get dark mode state from Redux

//   const toggleTheme = () => {
//     dispatch(toggleDarkMode()); // Dispatch the action to toggle dark mode
//   };

//   return (
//     <motion.div
//       className={`fixed top-0 left-0 w-full flex justify-between items-center py-0 shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-[#26292B]"} z-50`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Left side - Logo */}
//       <motion.div className="flex items-center gap-4 ml-4" whileHover={{ scale: 1.05 }}>
//         <motion.img
//           src={logo}
//           alt="logo"
//           width={100}
//           height={50}
//           className="cursor-pointer"
//           whileHover={{ rotate: 360 }}
//           transition={{ duration: 1 }}
//         />
//       </motion.div>

//       {/* Center - Navigation Links */}
//       <motion.div className="flex items-center gap-8">
//         {["Home", "Services", "About Us"].map((item, index) => (
//           <motion.div key={index} className="relative cursor-pointer group">
//             <Link
//               to={
//                 item === "Home"
//                   ? "/"
//                   : item === "Services"
//                   ? "/form/new"
//                   : "/about"
//               }
//               className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//             >
//               <h2 className="hover:text-[#9B9EF0] transition">{item}</h2>
//             </Link>
//             <motion.div
//               className="absolute left-0 right-0 h-1 bg-[#9B9EF0] mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//               style={{ bottom: -2 }}
//             />
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Right side - Toggle Button */}
//       <motion.div className="mr-4" whileHover={{ scale: 1.05 }}>
//         <IconButton onClick={toggleTheme}>
//           {isDarkMode ? (
//             <MdWbSunny size={24} /> // Sun icon for light mode
//           ) : (
//             <MdNightlight size={24} /> // Moon icon for dark mode
//           )}
//         </IconButton>
//       </motion.div>

//       {/* Right side - Button */}
//       <motion.div className="mr-4" whileHover={{ scale: 1.05 }}>
//         <Button
//           variant="contained"
//           className="bg-[#7F57F1] hover:bg-[#7F57F1] text-[#e5e5ee] rounded-full py-0.5 px-3 text-sm"
//           onClick={() => navigate('/signup')} // Navigate to the signup page
//         >
//           Get Started
//         </Button>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import logo from "../assets/logo.svg";
// import { Button } from "@mui/material";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";
// import { MdNightlight, MdWbSunny } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../features/formSlice";

// function Header() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.form.isDarkMode);

//   const toggleTheme = () => {
//     dispatch(toggleDarkMode());
//   };

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   return (
//     <motion.div
//       className={`fixed top-0 left-0 w-full flex justify-between items-center py-0 shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-[#26292B]"} z-50`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div className="flex items-center gap-4 ml-4" whileHover={{ scale: 1.05 }}>
//         <motion.img
//           src={logo}
//           alt="logo"
//           width={100}
//           height={50}
//           className="cursor-pointer"
//           whileHover={{ rotate: 360 }}
//           transition={{ duration: 1 }}
//         />
//       </motion.div>

//       <motion.div className="relative flex items-center gap-8">
//         {["Home", "About Us"].map((item, index) => (
//           <motion.div key={index} className="relative cursor-pointer group">
//             <Link
//               to={item === "Home" ? "/" : "/about"}
//               className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//             >
//               <h2 className="hover:text-[#9B9EF0] transition">{item}</h2>
//             </Link>
//             <motion.div
//               className="absolute left-0 right-0 h-1 bg-[#9B9EF0] mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//               style={{ bottom: -2 }}
//             />
//           </motion.div>
//         ))}

//         {/* Services Dropdown */}
//         <motion.div className="relative cursor-pointer group" onClick={handleDropdownToggle}>
//           <h2 className={`text-sm ${isDarkMode ? "text-white" : ""}`}>Services</h2>
//           <motion.div
//             className={`absolute left-0 z-10 bg-white text-black shadow-lg mt-1 rounded ${isDropdownOpen ? "block" : "hidden"} ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-[#26292B]"}`}
//           >
//             <Link to="/form/new" className="block px-4 py-2 hover:bg-gray-200">
//               <h2 className="hover:text-[#9B9EF0]">Designer</h2>
//             </Link>
//             <Link to="/saved-forms" className="block px-4 py-2 hover:bg-gray-200">
//               <h2 className="hover:text-[#9B9EF0]">Saved Forms</h2>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       <motion.div className="mr-4" whileHover={{ scale: 1.05 }}>
//         <IconButton onClick={toggleTheme}>
//           {isDarkMode ? <MdWbSunny size={24} /> : <MdNightlight size={24} />}
//         </IconButton>
//       </motion.div>

//       <motion.div className="mr-4" whileHover={{ scale: 1.05 }}>
//         <Button
//           variant="contained"
//           className="bg-[#7F57F1] hover:bg-[#7F57F1] text-[#e5e5ee] rounded-full py-0.5 px-3 text-sm"
//           onClick={() => navigate('/signup')}
//         >
//           Get Started
//         </Button>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import logo from "../assets/logo.svg";
// import { Button, IconButton } from "@mui/material";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { MdNightlight, MdWbSunny } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../features/formSlice";

// function Header() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.form.isDarkMode);

//   const toggleTheme = () => {
//     dispatch(toggleDarkMode());
//   };

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   // State for the tab selection
//   const [activeTab, setActiveTab] = useState("Designer");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (tab === "Designer") {
//       navigate("/form/new"); // Navigate to the FormBuilder
//     } else if (tab === "Preview") {
//       navigate("/form/view/1"); // Example: Navigate to a specific form view
//     }
//   };

//   return (
//     <>
//       <motion.div
//         className={`fixed top-0 left-0 w-full flex justify-between items-center py-0 shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-[#26292B]"} z-50`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Existing Header Code */}
//         <motion.div className="flex items-center gap-4 ml-4" whileHover={{ scale: 1.05 }}>
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

//         <motion.div className="relative flex items-center gap-8">
//           {["Home", "About Us"].map((item, index) => (
//             <motion.div key={index} className="relative cursor-pointer group">
//               <Link
//                 to={item === "Home" ? "/" : "/about"}
//                 className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//               >
//                 <h2 className="hover:text-[#9B9EF0] transition">{item}</h2>
//               </Link>
//               <motion.div
//                 className="absolute left-0 right-0 h-1 bg-[#9B9EF0] mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//                 style={{ bottom: -2 }}
//               />
//             </motion.div>
//           ))}

//           {/* Services Dropdown */}
//           <motion.div className="relative cursor-pointer group" onClick={handleDropdownToggle}>
//             <h2 className={`text-sm ${isDarkMode ? "text-white" : ""}`}>Services</h2>
//             <motion.div
//               className={`absolute left-0 z-10 bg-white text-black shadow-lg mt-1 rounded ${isDropdownOpen ? "block" : "hidden"} ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-[#26292B]"}`}
//             >
//               <Link to="/form/new" className="block px-4 py-2 hover:bg-gray-200">
//                 <h2 className="hover:text-[#9B9EF0]">Designer</h2>
//               </Link>
//               <Link to="/saved-forms" className="block px-4 py-2 hover:bg-gray-200">
//                 <h2 className="hover:text-[#9B9EF0]">Saved Forms</h2>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         <motion.div className="mr-4" whileHover={{ scale: 1.05 }}>
//           <IconButton onClick={toggleTheme}>
//             {isDarkMode ? <MdWbSunny size={24} /> : <MdNightlight size={24} />}
//           </IconButton>
//         </motion.div>

//         <motion.div className="mr-4" whileHover={{ scale: 1.05 }}>
//           <Button
//             variant="contained"
//             className="bg-[#7F57F1] hover:bg-[#7F57F1] text-[#e5e5ee] rounded-full py-0.5 px-3 text-sm"
//             onClick={() => navigate('/signup')}
//           >
//             Get Started
//           </Button>
//         </motion.div>
//       </motion.div>

//       {/* New Tab Section Below Header */}
//       <div className={`flex justify-around items-center py-2 ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}>
//         {["Designer", "Preview", "Logic", "JSON Editor"].map((tab) => (
//           <div
//             key={tab}
//             className={`cursor-pointer ${activeTab === tab ? "text-[#6e6ade] font-bold" : "text-gray-600"}`}
//             onClick={() => handleTabClick(tab)}
//           >
//             <span>{tab}</span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import { Button, IconButton } from "@mui/material";
// import { motion } from "framer-motion";
// import { Link, useNavigate ,useParams } from "react-router-dom";
// import { MdNightlight, MdWbSunny, MdOutlineBuild, MdPreview, MdSave, MdEdit } from "react-icons/md";
// import logo from "../assets/logo.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../features/formSlice";
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Preview from "./Preview";

// function Header() {
//   const { formId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.form.isDarkMode);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleTheme = () => {
//     dispatch(toggleDarkMode());
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const dropdownVariants = {
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 24 },
//     },
//     closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
//   };

//   return (
//     <>
//       <motion.div
//         className={`fixed top-0 left-0 py-0 w-full flex justify-between items-center  shadow-md ${
//           isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-[#26292B]"
//         } z-50`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//   <motion.div className="flex items-center gap-4 ml-4" whileHover={{ scale: 1.05 }}>
//         <motion.img
//           src={logo}
//           alt="logo"
//            width={100}
//            height={50}
//           className="cursor-pointer"
//           whileHover={{ rotate: 360 }}
//           transition={{ duration: 1 }}
//         />
//       </motion.div>

//         <motion.div className="relative flex items-center gap-8">
//           {["Home", "About Us"].map((item, index) => (
//             <motion.div key={index} className="relative cursor-pointer group">
//               <Link
//                 to={item === "Home" ? "/" : "/about"}
//                 className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//               >
//                 <h2 className="hover:text-[#9b9ef0] transition">{item}</h2>
//               </Link>
//               <motion.div
//                 className="absolute left-0 right-0 h-1 bg-[#9b9ef0] mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//                 style={{ bottom: -2 }}
//               />
//             </motion.div>
//           ))}

//           {/* Services Dropdown */}
//           <motion.div className="relative cursor-pointer group">
//             <motion.h2
//               className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//               onClick={handleDropdownToggle}
//             >
//               Services {isDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} {/* Arrow icons toggle */}
//             </motion.h2>

//             <motion.div
//               className={`absolute z-10 shadow-lg mt-2 rounded ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-black"
//               }`} // Dropdown background color updated
//               initial="closed"
//               animate={isDropdownOpen ? "open" : "closed"}
//               variants={dropdownVariants}
//             >
//               <motion.ul className="p-2 space-y-1">
//                 <motion.li
//                   className="px-4 py-2 hover:bg-[#6e6ade] cursor-pointer flex items-center"
//                   onClick={() => {
//                     setIsDropdownOpen(false);
//                     navigate("/form/new");
//                   }}
//                 >
//                   <MdOutlineBuild className="mr-2" /> {/* Icon added */}
//                   FormBuilder
//                 </motion.li>
//                 {/* <motion.li
//                   className="px-4 py-2 hover:bg-[#7d66d9] cursor-pointer flex items-center"
//                   onClick={() => {
//                     setIsDropdownOpen(false);
//                     navigate(`/form/preview/:${formId}`);
//                   }}
//                 >
//                   <MdPreview className="mr-2" /> {/* Icon added */}
//                 {/* Preview
//               </motion.li> */}
//                 {/* <motion.li
//                   className="px-4 py-2 hover:bg-[#e2ddfe] cursor-pointer flex items-center"
//                   onClick={() => {
//                     setIsDropdownOpen(false);
//                     navigate("/saved-forms");
//                   }}
//                 >
//                   <MdSave className="mr-2" /> {/* Icon added */}
//                   {/* Saved Forms */}
//                 {/* </motion.li> */}
//                 {/* <motion.li
//                   className="px-4 py-2 hover:bg-[#6e6ade] cursor-pointer flex items-center"
//                   onClick={() => {
//                     setIsDropdownOpen(false);
//                     navigate(`/form/edit/:${formId}`);
//                   }}
//                 >
//                   <MdEdit className="mr-2" /> {/* Icon added */}
//                   {/* Edit Form
//                 </motion.li> */}
//               </motion.ul>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         <motion.div className="mr-4" whileHover={{ scale: 1.05 }}>
//           <IconButton onClick={toggleTheme}>
//             {isDarkMode ? <MdWbSunny size={24} /> : <MdNightlight size={24} />}
//           </IconButton>
//         </motion.div>

//         <motion.div className="mr-4" whileHover={{ scale: 1.05 }}>
//           <Button
//             variant="contained"
//             className="bg-[#7F57F1] hover:bg-[#7d66d9] text-[#e5e5ee] rounded-full py-0.5 px-3 text-sm"
//             onClick={() => navigate("/signup")}
//           >
//             Get Started
//           </Button>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }

// export default Header;

// import React, { useState,useEffect
//  } from "react";
// import { Button, IconButton } from "@mui/material";
// import { motion ,AnimatePresence} from "framer-motion";
// import { Link, useNavigate ,useParams } from "react-router-dom";
// import { MdNightlight, MdWbSunny,MdOutlineAccountBalance, MdOutlineBuild, MdPreview, MdSave, MdEdit } from "react-icons/md";
// import logo from "../assets/logo.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../features/formSlice";
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Preview from "./Preview";
// import axios from "axios"
// import { NavLink } from "react-router-dom"

// function Header() {
//   const { formId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.form.isDarkMode);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [userdata, setUserdata] = useState({});
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const getUser = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/login/success", { withCredentials: true });
//       if (response.data.user) {
//         setUserdata(response.data.user); // This should set userdata for both login methods
//         console.log("response", response)
//       } else {
//         setUserdata({}); // Clear user data if not logged in
//       }
//     } catch (error) {
//       console.log("Error fetching user data", error);
//       setUserdata({}); // Clear user data on error
//     }
//   };

//   // Logout function
//   const logout = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/logout", { withCredentials: true });
//       if (response.status === 200) {
//         localStorage.removeItem("token");
//         document.cookie = "token=; Max-Age=0; path=/;";
//         setUserdata({});
//         navigate("/login");
//         console.log("Logged out successfully:", response);
//       }
//     } catch (error) {
//       console.error("Error logging out:", error.response ? error.response.data : error.message);
//     }
//   };

//   // const getUser1 = async () => {
//   //   try {
//   //     const response = await axios.get("http://localhost:5000/api/auth/user", { withCredentials: true });
//   //     console.log("Response from user API:", response.data); // Log the response data
//   //     if (response.data.user) {
//   //       setUserdata(response.data.user); // Set user data including name and email
//   //       console.log("User data:", response.data.user);
//   //     } else {
//   //       setUserdata({}); // Clear user data if not logged in
//   //     }
//   //   } catch (error) {
//   //     console.log("Error fetching user data", error.response ? error.response.data : error.message);
//   //     setUserdata({}); // Clear user data on error
//   //   }
//   // };
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     getUser(); // Fetch user data on component mount

//   }, []);

//   // useEffect(() => {
//   //   getUser1(); // Fetch user data on component mount

//   // }, []);
//   const toggleTheme = () => {
//     dispatch(toggleDarkMode());
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const dropdownVariants = {
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 24 },
//     },
//     closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
//   };

//   return (
//     <>
//       <motion.div
//         className={`fixed top-0 left-0 py-0 w-full flex justify-between items-center shadow-md ${
//           isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-[#26292B]"
//         } z-50`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.div className="flex items-center gap-4 ml-4" whileHover={{ scale: 1.05 }}>
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

//         <motion.div className="relative flex items-center gap-8">
//           {["Home", "About Us"].map((item, index) => (
//             <motion.div key={index} className="relative cursor-pointer group">
//               <Link
//                 to={item === "Home" ? "/" : "/about"}
//                 className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//               >
//                 <h2 className="hover:text-[#9b9ef0] transition">{item}</h2>
//               </Link>
//               <motion.div
//                 className="absolute left-0 right-0 h-1 bg-[#9b9ef0] mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//                 style={{ bottom: -2 }}
//               />
//             </motion.div>
//           ))}

//           {/* Services Dropdown */}
//           <motion.div className="relative cursor-pointer group">
//             <motion.h2
//               className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//               onClick={handleDropdownToggle}
//             >
//               Services {isDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
//             </motion.h2>

//             <motion.div
//               className={`absolute z-10 shadow-lg mt-2 rounded ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-black"
//               }`}
//               initial="closed"
//               animate={isDropdownOpen ? "open" : "closed"}
//               variants={dropdownVariants}
//             >
//               <motion.ul className="p-2 space-y-1">
//                 <motion.li
//                   className="px-4 py-2 hover:bg-[#6e6ade] cursor-pointer flex items-center"
//                   onClick={() => {
//                     setIsDropdownOpen(false);
//                     navigate("/form/new");
//                   }}
//                 >
//                   <MdOutlineBuild className="mr-2" />
//                   FormBuilder
//                 </motion.li>
//               </motion.ul>
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         <motion.div className="flex items-center gap-4">
//         <IconButton onClick={toggleTheme}>
//           {isDarkMode ? <MdWbSunny size={24} /> : <MdNightlight size={24} />}
//         </IconButton>

//         {userdata ? (
//           <div className="relative">
//             <IconButton onClick={handleDropdownToggle} className="focus:outline-none">
//               {userdata.image ? (
//                 <img src={userdata.image} alt="User profile" className="w-10 h-10 rounded-full border-2 border-[#6e6ade]" />
//               ) : (
//                 <MdOutlineAccountBalance size={24} />
//               )}
//             </IconButton>

//             <AnimatePresence>
//               {isDropdownOpen && (
//                 <motion.div
//                   variants={dropdownVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                   className={`absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-10 w-56`}
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     {userdata.image && (
//                       <img src={userdata.image} alt="User profile" className="w-12 h-12 rounded-full border-2 border-[#6e6ade]" />
//                     )}
//                     <div>
//                       <p className="text-sm font-bold" style={{ color: isDarkMode ? "white" : "black" }}>
//                         {userdata.displayName || userdata.name}
//                       </p>
//                       <p className="text-xs" style={{ color: isDarkMode ? "white" : "black" }}>
//                         {userdata.email}
//                       </p>
//                     </div>
//                   </div>
//                   <hr className="mb-4 border-gray-300 dark:border-gray-700" />
//                   <button
//                     onClick={logout}
//                     className="w-full text-sm text-left text-red-500 transition hover:text-red-700"
//                   >
//                     Logout
//                   </button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ) : (
//           <Button
//             variant="contained"
//             className="bg-[#7F57F1] hover:bg-[#7d66d9] text-[#e5e5ee] rounded-full py-0.5 px-3 text-sm"
//             onClick={() => navigate("/signup")}
//           >
//             Get Started
//           </Button>
//         )}
//       </motion.div>
//       </motion.div>
//     </>
//   );
// }

// export default Header;

// updated version 18-09-2024 working google

// import React, { useState, useEffect } from "react";
// import { Button, IconButton } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { MdNightlight, MdWbSunny, MdOutlineAccountBalance, MdOutlineBuild, MdSave, MdEdit } from "react-icons/md";
// import logo from "../assets/logo.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../features/formSlice";
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import axios from "axios";
// import LogoutIcon from '@mui/icons-material/Logout';
// function Header() {
//   const { formId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.form.isDarkMode);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For services dropdown
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // For profile dropdown
//   const [userdata, setUserdata] = useState({});

//   const getUser = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/login/success", { withCredentials: true });
//       if (response.data.user) {
//         setUserdata(response.data.user); // Set userdata for both login methods
//       } else {
//         setUserdata({}); // Clear user data if not logged in
//       }
//     } catch (error) {
//       console.log("Error fetching user data", error);
//       setUserdata({}); // Clear user data on error
//     }
//   };

//   // Logout function
//   const logout = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/logout", { withCredentials: true });
//       if (response.status === 200) {
//         localStorage.removeItem("token");
//         document.cookie = "token=; Max-Age=0; path=/;";
//         setUserdata({}); // Clear userdata on logout
//         setIsProfileDropdownOpen(false); // Close profile dropdown after logout
//         navigate("/login");
//       }
//     } catch (error) {
//       console.error("Error logging out:", error.response ? error.response.data : error.message);
//     }
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//     if (isProfileDropdownOpen) setIsProfileDropdownOpen(false); // Close profile dropdown if open
//   };

//   const toggleProfileDropdown = () => {
//     setIsProfileDropdownOpen((prev) => !prev);
//     if (isDropdownOpen) setIsDropdownOpen(false); // Close services dropdown if open
//   };

//   useEffect(() => {
//     getUser(); // Fetch user data on component mount
//   }, []);

//   const toggleTheme = () => {
//     dispatch(toggleDarkMode());
//   };

//   const dropdownVariants = {
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 24 },
//     },
//     closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
//   };

//   return (
//     <>
//       <motion.div
//         className={`fixed top-0 left-0 py-0 w-full flex justify-between items-center shadow-md ${
//           isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-[#26292B]"
//         } z-50`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.div className="flex items-center gap-4 ml-4" whileHover={{ scale: 1.05 }}>
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

//         <motion.div className="relative flex items-center gap-8">
//           {["Home", "About Us"].map((item, index) => (
//             <motion.div key={index} className="relative cursor-pointer group">
//               <Link
//                 to={item === "Home" ? "/" : "/about"}
//                 className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//               >
//                 <h2 className="hover:text-[#9b9ef0] transition">{item}</h2>
//               </Link>
//               <motion.div
//                 className="absolute left-0 right-0 h-1 bg-[#9b9ef0] mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//                 style={{ bottom: -2 }}
//               />
//             </motion.div>
//           ))}

//           {/* Services Dropdown */}
//           <motion.div className="relative cursor-pointer group">
//             <motion.h2
//               className={`text-sm ${isDarkMode ? "text-white" : ""}`}
//               onClick={toggleDropdown}
//             >
//               Services {isDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
//             </motion.h2>

//             <AnimatePresence>
//               {isDropdownOpen && (
//                 <motion.div
//                   className={`absolute z-10 shadow-lg mt-2 rounded ${
//                     isDarkMode ? "bg-gray-800 text-white" : "bg-[#e2ddfe] text-black"
//                   }`}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                   variants={dropdownVariants}
//                 >
//                   <motion.ul className="p-2 space-y-1">
//                     <motion.li
//                       className="px-4 py-2 hover:bg-[#6e6ade] cursor-pointer flex items-center"
//                       onClick={() => {
//                         setIsDropdownOpen(false);
//                         navigate("/form/new");
//                       }}
//                     >
//                       <MdOutlineBuild className="mr-2" />
//                       FormBuilder
//                     </motion.li>
//                   </motion.ul>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </motion.div>

//         <motion.div className="flex items-center gap-4">
//   {/* Theme toggle icon */}
//   <IconButton onClick={toggleTheme}>
//     {isDarkMode ? <MdWbSunny size={24} /> : <MdNightlight size={24} />}
//   </IconButton>

//   {/* Profile dropdown */}
//   {userdata && userdata.email ? (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsProfileDropdownOpen(true)}
//       onMouseLeave={() => setIsProfileDropdownOpen(false)}
//     >
//       <IconButton className="focus:outline-none">
//         {/* Profile image or icon */}
//         {userdata.image ? (
//           <img src={userdata.image} alt="User profile" className="w-10 h-10 mr-4  rounded-full border-2 border-[#6e6ade]" />
//         ) : (
//           <MdOutlineAccountBalance size={24} />
//         )}
//       </IconButton>

//       <AnimatePresence>
//         {isProfileDropdownOpen && (
//           <motion.div
//             variants={dropdownVariants}
//             initial="closed"
//             animate="open"
//             exit="closed"
//             className="absolute right-0 z-10 p-4 mt-2 mr-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 w-60"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               {/* Large profile image in dropdown */}
//               {userdata.image && (
//                 <img src={userdata.image} alt="User profile" className="w-12 h-12 rounded-full border-2 border-[#6e6ade]" />
//               )}
//               <div>
//                 {/* Username and email display */}
//                 <p className={`text-lg font-bold font-serif ${isDarkMode ? "text-gray-700" : "text-indigo-950"}`}>
//                   {userdata.displayName || userdata.name}
//                 </p>
//                 <p className={`text-xs font-sans ${isDarkMode ? "text-gray-700" : "text-indigo-950"}`}>
//                   {userdata.email}
//                 </p>
//               </div>
//             </div>
//             <hr className="mb-4 border-gray-300 dark:border-gray-600" />
//             {/* Logout button with framer motion effects */}
//             <motion.button
//               onClick={logout}
//               className={`w-full flex items-center text-left text-sm ${
//                 isDarkMode ? "text-gray-400 hover:text-indigo-500" : "text-indigo-950 hover:text-indigo-600"
//               } transition`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <LogoutIcon className="mr-2" />
//               <span>Logout</span>
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
//  : (
//             <Button
//               variant="contained"
//               className="bg-[#7F57F1] hover:bg-[#7d66d9] text-[#e5e5ee] rounded-full py-0.5 px-3 text-sm mr-4"
//               onClick={() => navigate("/signup")}
//             >
//               Get Started
//             </Button>
//           )}
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  MdNightlight,
  MdWbSunny,
  MdOutlineAccountBalance,
  MdOutlineBuild,
  MdSave,
  MdEdit,
} from "react-icons/md";
import logo from "../assets/logo.svg";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/bookingSlice";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import p from "../assets/images/profile.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout1 } from "../features/authSlice"; // Adjust the path accordingly
function Header() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For services dropdown
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // For profile dropdown
  const [userdata, setUserdata] = useState({});
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  // const getUser = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/login/success", { withCredentials: true });
  //     if (response.data.user) {
  //       setUserdata(response.data.user); // Set userdata for both login methods
  //     } else {
  //       setUserdata({}); // Clear user data if not logged in
  //     }
  //   } catch (error) {
  //     console.log("Error fetching user data", error);
  //     setUserdata({}); // Clear user data on error
  //   }
  // };
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/login/success", {
        withCredentials: true,
      });
      console.log("Response from /login/success:", response.data); // Add this line
      if (response.data.user) {
        setUserdata(response.data.user); // Set userdata for both login methods
      } else {
        setUserdata({}); // Clear user data if not logged in
      }
    } catch (error) {
      console.log("Error fetching user data", error);
      setUserdata({}); // Clear user data on error
    }
  };

  // Logout function
  // const logout = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/logout", { withCredentials: true });
  //     if (response.status === 200) {
  //       localStorage.removeItem("token");
  //       document.cookie = "token=; Max-Age=0; path=/;";
  //       setUserdata({}); // Clear userdata on logout
  //       setIsProfileDropdownOpen(false); // Close profile dropdown after logout
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     console.error("Error logging out:", error.response ? error.response.data : error.message);
  //   }
  // };
  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/logout", {
        withCredentials: true,
      });
      if (response.status === 200) {
        localStorage.removeItem("token");
        document.cookie = "token=; Max-Age=0; path=/;";
        setUserdata({}); // Clear userdata on logout
        setIsProfileDropdownOpen(false); // Close profile dropdown after logout

        // Show success toast notification
        toast.success("Successfully logged out!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          style: {
            backgroundColor: "#9b9ef0",
            color: "#f5f5f5",
            borderRadius: "8px",
          },
        });

        navigate("/login");
      }
    } catch (error) {
      console.error(
        "Error logging out:",
        error.response ? error.response.data : error.message
      );

      // Show error toast notification
      toast.error("Logout failed. Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
        className: "custom-toast", // Optionally apply a custom clas
        hideProgressBar: true,
        style: {
          backgroundColor: "#9b9ef0",
          color: "#f5f5f5",
          borderRadius: "8px",
        },
      });
    }
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    if (isProfileDropdownOpen) setIsProfileDropdownOpen(false); // Close profile dropdown if open
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
    if (isDropdownOpen) setIsDropdownOpen(false); // Close services dropdown if open
  };

  useEffect(() => {
    getUser(); // Fetch user data on component mount
  }, []);

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const handleLogout = () => {
    // Clear user and token from Redux
    dispatch(logout1());
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Show success toast notification
    toast.success("Successfully logged out!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      className: "custom-toast", // Optionally apply a custom clas
      style: {
        backgroundColor: "#9b9ef0",
        color: "#fff",
        borderRadius: "8px",
      },
    });

    // Delay the navigation to allow the toast to display
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Wait for 3000 milliseconds (3 seconds) before navigating
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
            height={50}
            className="cursor-pointer"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          />
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
              Services{" "}
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
                        navigate("/form/new");
                      }}
                    >
                      <MdOutlineBuild className="mr-2" />
                      FormBuilder
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

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
          {isAuthenticated && user ? (
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
                      onClick={logout}
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
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
            </div>
          )}
        </motion.div>
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
