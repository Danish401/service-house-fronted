


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
import { ChatBubbleOutline, Textsms } from '@mui/icons-material';
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
          <div
  className={`flex items-center justify-center h-40 mt-4 ${isDarkMode ? "bg-gray-600" : "bg-gray-100"} text-gray-500 rounded-md relative`}
>
  <div className="flex items-center justify-center space-x-2">
    {/* Chat Icon */}
    <ChatBubbleOutline className="text-3xl" />
    <div className="text-lg">Coming Soon</div>
  </div>

  {/* Typing message */}
  <div className="absolute flex items-center text-sm text-gray-400 bottom-4">
    <Textsms className="mr-1 animate-pulse" /> {/* Typing icon */}
    <span>Live Chat coming soon...</span>
  </div>
</div>
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
