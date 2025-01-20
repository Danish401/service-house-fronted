// import React from "react";
// import { useParams } from "react-router-dom";
// import { Data1 } from "./BusinessList"; // Import your business data
// import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons for email and location
// import BookingSection from './BookingSection'; // Import the BookingSection component
// import SuggestedBusinessList from './SuggestedBusinessList'; // Import the SuggestedBusinessList component

// const Details = () => {
//   const { id } = useParams(); // Get the business ID from the URL
//   const business = Data1.find((item) => item.id === parseInt(id)); // Find the business data based on ID

//   if (!business) {
//     return <div>Business not found.</div>; // Handle the case where the business is not found
//   }

//   return (
//     business?.name && (
//       <div className="max-w-xl p-4 mx-auto">
//         {/* Business Name */}

//         {/* Business Icon */}
//         <div className="flex justify-center mt-4 mb-6">
//           <img
//             src={business.icon}
//             alt={`${business.name} icon`}
//             className="object-cover w-40 h-40 rounded-full shadow-lg"
//           />
//         </div>
//         <h2 className="mb-4 text-3xl font-bold text-gray-800">{business.name}</h2>

//         {/* Business Category */}
//         <div className="flex items-center mb-4 text-lg text-gray-700">
//           <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//             {business.category || "Unknown Category"}
//           </h2>
//         </div>

//         {/* Location Section */}
//         <div className="mt-6">
//           <div className="flex items-center mt-2 text-gray-700">
//             <FaMapMarkerAlt className="mr-2 text-indigo-400" />
//             <span>{business.location}</span>
//           </div>

//           {/* Email Section */}
//           <div className="flex items-center mb-4 text-lg text-gray-700">
//             <FaEnvelope className="mr-2 text-indigo-400" />
//             <span className="ml-2">{business.gmail}</span>
//           </div>

//           {/* Business Description */}
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold text-gray-800">Description:</h3>
//             <p className="mt-2 text-gray-600">{business.description}</p>
//           </div>

//           {/* Booking Section */}
//           <h3 className="mt-6 text-xl font-bold text-gray-800">Book an Appointment</h3>
//           {/* <BookingSection business={business}>
//             <button className="flex w-full gap-2 p-2 text-white bg-blue-600 rounded">
//               Book Appointment
//             </button>
//           </BookingSection> */}

//           {/* Suggested Business List */}
//           <SuggestedBusinessList business={business} />

//           {/* Gallery Section */}
//           <h3 className="mt-8 text-xl font-bold text-gray-800">Gallery</h3>
//           <div className="mt-4 text-lg text-gray-600">Coming Soon</div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Details;

//29/12/24
// import React from "react";
// import { useParams } from "react-router-dom";
// import { Data1 } from "./BusinessList"; // Import your business data
// import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons for email and location
// import BookingSection from './BookingSection'; // Import the BookingSection component
// import SuggestedBusinessList from './SuggestedBusinessList'; // Import the SuggestedBusinessList component

// const Details = () => {
//   const { id } = useParams(); // Get the business ID from the URL
//   const business = Data1.find((item) => item.id === parseInt(id)); // Find the business data based on ID

//   if (!business) {
//     return <div>Business not found.</div>; // Handle the case where the business is not found
//   }

//   return (
//     business?.name && (
//       <div className="flex flex-col max-w-6xl gap-6 p-6 mx-auto lg:flex-row">
//         {/* Left Section - Business Details */}
//         <div className="p-4 lg:w-2/3">
//           {/* Business Icon */}
//           <div className="flex mt-4 mb-6 justify-">
//             <img
//               src={business.icon}
//               alt={`${business.name} icon`}
//               className="object-cover w-40 h-40 rounded-full shadow-lg"
//             />
//           </div>

//           {/* Business Name */}
//           <h2 className="mb-4 text-3xl font-bold text-gray-800">{business.name}</h2>

//           {/* Business Category */}
//           <div className="flex items-center mb-4 text-lg text-gray-700">
//             <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//               {business.category || "Unknown Category"}
//             </h2>
//           </div>

//           {/* Location Section */}
//           <div className="flex items-center mt-2 text-gray-700">
//             <FaMapMarkerAlt className="mr-2 text-indigo-400" />
//             <span>{business.location}</span>
//           </div>

//           {/* Email Section */}
//           <div className="flex items-center mb-4 text-lg text-gray-700">
//             <FaEnvelope className="mr-2 text-indigo-400" />
//             <span className="ml-2">{business.gmail}</span>
//           </div>

//           {/* Business Description */}
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold text-gray-800">Description:</h3>
//             <p className="mt-2 text-gray-600">{business.description}</p>
//           </div>

//           {/* Gallery Section */}
//           <h3 className="mt-8 text-xl font-bold text-gray-800">Gallery</h3>
//           <div className="mt-4 text-lg text-gray-600">Coming Soon</div>
//         </div>

//         {/* Right Section - Booking and Suggested Businesses */}
//         <div className="flex flex-col gap-6 lg:w-1/3">
//           {/* Booking Section */}

//             <BookingSection business={business}/>

//           {/* Suggested Business List */}
//           <div className="p-4 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-4 text-xl font-bold text-gray-800">Similar Businesses</h3>
//             <SuggestedBusinessList business={business} />
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Details;

//31/12/2024
// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllEmployees } from "../features/employeeRegisterSlice";
// import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import BookingSection from "./BookingSection";
// import SuggestedBusinessList from "./SuggestedBusinessList";

// const Details = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//  /* The line `const { employees, loading, error } = useSelector((state) => state.employeeRegister);` is
//  using the `useSelector` hook from Redux to extract specific pieces of data from the Redux store. */
//   const { employees, loading, error } = useSelector((state) => state.employeeRegister);

//   useEffect(() => {
//     dispatch(getAllEmployees());
//   }, [dispatch]);

//   const business = employees?.find((item) => item._id === id || item.id === id);

//   if (loading) {
//     return <div className="p-6 text-center text-blue-500 animate-pulse">Loading...</div>;
//   }

//   if (error) {
//     return <div className="p-6 text-center text-red-500">Error: {error}</div>;
//   }

//   if (!business) {
//     return <div className="p-6 text-center text-red-500">Business not found.</div>;
//   }

//   return (
//     <div className="p-6 mx-auto mt-4 space-y-20 max-w-7xl lg:space-y-0 lg:space-x-8 lg:flex">
//       {/* Left Section */}
//       <div className="p-6 bg-white rounded-lg shadow-lg lg:w-2/3">
//         {/* Business Icon */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={business.image || "/placeholder.png"}
//             alt={`${business.name || "Business"} icon`}
//             className="object-cover w-40 h-40 border-4 border-indigo-200 rounded-full shadow-md"
//           />
//         </div>

//         {/* Business Details */}
//         <h2 className="mb-4 text-4xl font-bold text-center text-gray-800">{business.name}</h2>
//         <div className="flex justify-center mb-4">
//           <span className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
//             {business.category || "Unknown Category"}
//           </span>
//         </div>

//         <div className="space-y-4 text-gray-700">
//           {/* Location */}
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="mr-2 text-indigo-500" />
//             <span>{business.address1 || "Location not available"}</span>
//           </div>
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="mr-2 text-indigo-500" />
//             <span>{business.address2 || "Location not available"}</span>
//           </div>
//           {/* Email */}
//           <div className="flex items-center">
//             <FaEnvelope className="mr-2 text-indigo-500" />
//             <span>{business.email || "Email not available"}</span>
//           </div>
//           {/* Description */}
//           <div>
//             <h3 className="text-lg font-semibold">Description:</h3>
//             <p className="mt-2 text-gray-600">{business.about || "No description provided."}</p>
//           </div>
//         </div>

//         {/* Gallery */}
//         <h3 className="mt-8 text-xl font-bold text-gray-800">Gallery</h3>
//         <div className="flex items-center justify-center h-40 mt-4 text-gray-500 bg-gray-100 rounded-md">
//           Coming Soon
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="space-y-6 lg:w-1/3">
//         {/* Booking Section */}
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <BookingSection business={business} />
//         </div>

//         {/* Suggested Businesses */}
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h3 className="mb-4 text-xl font-bold text-gray-800">Similar Businesses</h3>
//           <SuggestedBusinessList business={business} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;



//without dark mode 

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllEmployees } from "../features/employeeRegisterSlice";
// import {
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaWhatsapp,
// } from "react-icons/fa";
// import BookingSection from "./BookingSection";
// import SuggestedBusinessList from "./SuggestedBusinessList";
// import email from "../assets/images/email.png";
// import phones from "../assets/images/phone.png";
// import whatsapps from "../assets/images/whatsapp.png";
// import ways from "../assets/images/way.png";
// const Details = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   /* The line `const { employees, loading, error } = useSelector((state) => state.employeeRegister);` is
//  using the `useSelector` hook from Redux to extract specific pieces of data from the Redux store. */
//   const { employees, loading, error } = useSelector(
//     (state) => state.employeeRegister
//   );
//   const [flipped, setFlipped] = useState({
//     whatsapp: false,
//     phone: false,
//     email: false,
//     address: false,
//   });
//   const handleFlipAndOpen = (type) => {
//     setFlipped((prev) => ({
//       ...prev,
//       [type]: !prev[type], // Toggle the flipped state
//     }));
  
//     switch (type) {
//       case "whatsapp":
//         window.open(`https://wa.me/${business.phone || "7009236647"}`, "_blank");
//         break;
//       case "phone":
//         window.open(`tel:${business.phone || "7009236647"}`, "_self");
//         break;
//       case "email":
//         window.open(`mailto:${business.email || "example@example.com"}`, "_self");
//         break;
//       case "address":
//         window.open(
//           `https://www.google.com/maps?q=${encodeURIComponent(
//             business.address1 || "123 Main Street"
//           )}`,
//           "_blank"
//         );
//         break;
//       default:
//         break;
//     }
//   };
  

//   useEffect(() => {
//     dispatch(getAllEmployees());
//   }, [dispatch]);

//   const business = employees?.find((item) => item._id === id || item.id === id);

//   if (loading) {
//     return (
//       <div className="p-6 text-center text-blue-500 animate-pulse">
//         Loading...
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="p-6 text-center text-red-500">Error: {error}</div>;
//   }

//   if (!business) {
//     return (
//       <div className="p-6 text-center text-red-500">Business not found.</div>
//     );
//   }

//   return (
//     <div className="p-6 mx-auto mt-4 space-y-20 max-w-7xl lg:space-y-0 lg:space-x-8 lg:flex">
//       {/* Left Section */}
//       <div className="p-6 bg-white rounded-lg shadow-lg lg:w-2/3">
//         {/* Business Icon */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={business.image || "/placeholder.png"}
//             alt={`${business.name || "Business"} icon`}
//             className="object-cover w-40 h-40 border-4 border-indigo-200 rounded-full shadow-md"
//           />
//         </div>

//         {/* Business Details */}
//         <h2 className="mb-4 text-4xl font-bold text-center text-gray-800">
//           {business.name}
//         </h2>
//         <div className="flex justify-center mb-4">
//           <span className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
//             {business.category || "Unknown Category"}
//           </span>
//         </div>

//         <div className="space-y-4 text-gray-700">
//           {/* Location */}
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="mr-2 text-indigo-500" />
//             <span>{business.address1 || "Location not available"}</span>
//           </div>
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="mr-2 text-indigo-500" />
//             <span>{business.address2 || "Location not available"}</span>
//           </div>
//           {/* Email */}
//           <div className="flex items-center">
//             <FaEnvelope className="mr-2 text-indigo-500" />
//             <span>{business.email || "Email not available"}</span>
//           </div>
//           {/* Description */}
//           <div>
//             <h3 className="text-lg font-semibold">Description:</h3>
//             <p className="mt-2 text-gray-600">
//               {business.about || "No description provided."}
//             </p>
//           </div>
//         </div>

//         {/* Gallery */}
//         <h3 className="mt-8 text-xl font-bold text-gray-800">Gallery</h3>
//         <div className="flex items-center justify-center h-40 mt-4 text-gray-500 bg-gray-100 rounded-md">
//           Coming Soon
//         </div>
//       </div>

//       {/* Right Section */}

//       <div className="space-y-6 lg:w-1/3">
//   {/* Booking Section */}
//   <div className="p-6 bg-white rounded-lg shadow-lg">
//     <BookingSection business={business} />

//     {/* Interactive Section */}
//     <div className="grid grid-cols-2 gap-6 mt-6 mr-8 sm:grid-cols-4">
//       {/* WhatsApp */}
//       <div
//         className="relative w-24 h-24 cursor-pointer rounded-lg bg-gradient-to-r from-[#9B9EF0] via-[#7D66D9] to-[#E2DDFE] transform transition-all duration-300"
//         onClick={() => handleFlipAndOpen("whatsapp")}
//       >
//         <div
//           className={`absolute inset-0 bg-white rounded-lg shadow-lg flex justify-center items-center`}
//         >
//           {!flipped.whatsapp ? (
//             <img
//               src={whatsapps}
//               alt="WhatsApp"
//               className="object-contain w-16 h-16"
//             />
//           ) : (
//             <span className="text-gray-700">{business.phone || "7009236647"}</span>
//           )}
//         </div>
//       </div>

//       {/* Phone */}
//       <div
//         className="relative w-24 h-24 cursor-pointer rounded-lg bg-gradient-to-r from-[#9B9EF0] via-[#7D66D9] to-[#E2DDFE] transform transition-all duration-300"
//         onClick={() => handleFlipAndOpen("phone")}
//       >
//         <div
//           className={`absolute inset-0 bg-white rounded-lg shadow-lg flex justify-center items-center`}
//         >
//           {!flipped.phone ? (
//             <img
//               src={phones}
//               alt="Phone"
//               className="object-contain w-16 h-16"
//             />
//           ) : (
//             <span className="text-gray-700">{business.phone || "7009236647"}</span>
//           )}
//         </div>
//       </div>

//       {/* Email */}
//       <div
//         className="relative w-24 h-24 cursor-pointer rounded-lg bg-gradient-to-r from-[#9B9EF0] via-[#7D66D9] to-[#E2DDFE] transform transition-all duration-300"
//         onClick={() => handleFlipAndOpen("email")}
//       >
//         <div
//           className={`absolute inset-0 bg-white rounded-lg shadow-lg flex justify-center items-center`}
//         >
//           {!flipped.email ? (
//             <img
//               src={email}
//               alt="Email"
//               className="object-contain w-16 h-16"
//             />
//           ) : (
//             <span className="text-gray-700">{business.email || "example@example.com"}</span>
//           )}
//         </div>
//       </div>

//       {/* Address */}
//       <div
//         className="relative w-24 h-24 cursor-pointer rounded-lg bg-gradient-to-r from-[#9B9EF0] via-[#7D66D9] to-[#E2DDFE] transform transition-all duration-300"
//         onClick={() => handleFlipAndOpen("address")}
//       >
//         <div
//           className={`absolute inset-0 bg-white rounded-lg shadow-lg flex justify-center items-center`}
//         >
//           {!flipped.address ? (
//             <img
//               src={ways}
//               alt="Address"
//               className="object-contain w-16 h-16"
//             />
//           ) : (
//             <span className="text-gray-700">{business.address2 || "123 Main Street"}</span>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>



//         {/* Suggested Businesses */}
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h3 className="mb-4 text-xl font-bold text-gray-800">
//             Similar Businesses
//           </h3>
//           <SuggestedBusinessList business={business} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../features/employeeRegisterSlice";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import BookingSection from "./BookingSection";
import SuggestedBusinessList from "./SuggestedBusinessList";
import email from "../assets/images/email.png";
import phones from "../assets/images/phone.png";
import whatsapps from "../assets/images/whatsapp.png";
import ways from "../assets/images/way.png";
import profile from "../assets/profile.jpg"; // Import the fallback image

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (state) => state.employeeRegister
  );
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const [flipped, setFlipped] = useState({
    whatsapp: false,
    phone: false,
    email: false,
    address: false,
  });

  const handleFlipAndOpen = (type) => {
    setFlipped((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));

    switch (type) {
      case "whatsapp":
        window.open(`https://wa.me/${business.phone || "7009236647"}`, "_blank");
        break;
      case "phone":
        window.open(`tel:${business.phone || "7009236647"}`, "_self");
        break;
      case "email":
        window.open(`mailto:${business.email || "example@example.com"}`, "_self");
        break;
      case "address":
        window.open(
          `https://www.google.com/maps?q=${encodeURIComponent(
            business.address1 || "123 Main Street"
          )}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const business = employees?.find((item) => item._id === id || item.id === id);

  if (loading) {
    return (
      <div className="p-6 text-center text-blue-500 animate-pulse">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;
  }

  if (!business) {
    return (
      <div className="p-6 text-center text-red-500">Business not found.</div>
    );
  }

  return (
    <div
      className={`p-6  mt-4 space-y-20  lg:space-y-0 lg:space-x-8 lg:flex ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Left Section */}
      <div
        className={`p-6 rounded-lg shadow-lg lg:w-2/3 ${
          isDarkMode ? "bg-gray-700" : "bg-white"
        }`}
      >
        {/* Business Icon */}
        <div className="flex justify-center mb-6">
          <img
            src={business.image || profile}
            alt={`${business.name || "Business"} icon`}
            className="object-cover w-40 h-40 border-4 border-indigo-200 rounded-full shadow-md"
          />
        </div>

        {/* Business Details */}
        <h2
          className={`mb-4 text-4xl font-bold text-center ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {business.name}
        </h2>
        <div className="flex justify-center mb-4">
          <span
            className={`px-3 py-1 text-sm font-medium ${
              isDarkMode ? "text-indigo-100 bg-indigo-700" : "text-indigo-600 bg-indigo-100"
            } rounded-full`}
          >
            {business.category || "Unknown Category"}
          </span>
        </div>

        <div className="space-y-4">
          {/* Location */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-indigo-500" />
            <span>{business.address1 || "Location not available"}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-indigo-500" />
            <span>{business.address2 || "Location not available"}</span>
          </div>
          {/* Email */}
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-indigo-500" />
            <span>{business.email || "Email not available"}</span>
          </div>
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold">Description:</h3>
            <p
              className={`mt-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {business.about || "No description provided."}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <h3
          className={`mt-8 text-xl font-bold ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Gallery
        </h3>
        <div
          className={`flex items-center justify-center h-40 mt-4 ${
            isDarkMode ? "bg-gray-600" : "bg-gray-100"
          } text-gray-500 rounded-md`}
        >
          Coming Soon
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-6 lg:w-1/3">
        {/* Booking Section */}
        <div
          className={`p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          }`}
        >
          <BookingSection business={business} />

          {/* Interactive Section */}
          <div className="grid grid-cols-2 gap-6 mt-6 mr-8 sm:grid-cols-4">
            {/* WhatsApp */}
            <div
              className="relative w-24 h-24 cursor-pointer rounded-lg bg-gradient-to-r from-[#9B9EF0] via-[#7D66D9] to-[#E2DDFE] transform transition-all duration-300"
              onClick={() => handleFlipAndOpen("whatsapp")}
            >
              <div
                className={`absolute inset-0 bg-white rounded-lg shadow-lg flex justify-center items-center`}
              >
                {!flipped.whatsapp ? (
                  <img
                    src={whatsapps}
                    alt="WhatsApp"
                    className="object-contain w-16 h-16"
                  />
                ) : (
                  <span className="text-gray-700">
                    {business.phone || "7009236647"}
                  </span>
                )}
              </div>
            </div>

            {/* Phone */}
            <div
              className="relative w-24 h-24 cursor-pointer rounded-lg bg-gradient-to-r from-[#9B9EF0] via-[#7D66D9] to-[#E2DDFE] transform transition-all duration-300"
              onClick={() => handleFlipAndOpen("phone")}
            >
              <div
                className={`absolute inset-0 bg-white rounded-lg shadow-lg flex justify-center items-center`}
              >
                {!flipped.phone ? (
                  <img
                    src={phones}
                    alt="Phone"
                    className="object-contain w-16 h-16"
                  />
                ) : (
                  <span className="text-gray-700">
                    {business.phone || "7009236647"}
                  </span>
                )}
              </div>
            </div>

            {/* Email */}
            <div
              className="relative w-24 h-24 cursor-pointer rounded-lg bg-gradient-to-r from-[#9B9EF0] via-[#7D66D9] to-[#E2DDFE] transform transition-all duration-300"
              onClick={() => handleFlipAndOpen("email")}
            >
              <div
                className={`absolute inset-0 bg-white rounded-lg shadow-lg flex justify-center items-center`}
              >
                {!flipped.email ? (
                  <img
                    src={email}
                    alt="Email"
                    className="object-contain w-16 h-16"
                  />
                ) : (
                  <span className="text-gray-700">
                    {business.email || "example@example.com"}
                  </span>
                )}
              </div>
            </div>

            {/* Address */}
            <div
              className="relative w-24 h-24 cursor-pointer rounded-lg bg-gradient-to-r from-[#9B9EF0] via-[#7D66D9] to-[#E2DDFE] transform transition-all duration-300"
              onClick={() => handleFlipAndOpen("address")}
            >
              <div
                className={`absolute inset-0 bg-white rounded-lg shadow-lg flex justify-center items-center`}
              >
                {!flipped.address ? (
                  <img
                    src={ways}
                    alt="Address"
                    className="object-contain w-16 h-16"
                  />
                ) : (
                  <span className="text-gray-700">
                    {business.address2 || "123 Main Street"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Businesses */}
        <div
          className={`p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          }`}
        >
          <h3
            className={`mb-4 text-xl font-bold ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Similar Businesses
          </h3>
          <SuggestedBusinessList business={business} />
        </div>
      </div>
    </div>
  );
};

export default Details;
