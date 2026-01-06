


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
import { getEmployeeBookings } from "../features/bookingSlice";
import email from "../assets/images/email.png";
import phones from "../assets/images/phone.png";
import whatsapps from "../assets/images/whatsapp.png";
import ways from "../assets/images/way.png";
import profile from "../assets/profile.jpg"; // Import the fallback image
import { 
  Star, 
  VerifiedUser, 
  LocalPhone, 
  Email, 
  LocationOn,
  WhatsApp,
  Message,
  AccessTime
} from '@mui/icons-material';
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (state) => state.employeeRegister
  );
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const { employeeBookings } = useSelector((state) => state.bookings);
  const [flipped, setFlipped] = useState({
    whatsapp: false,
    phone: false,
    email: false,
    address: false,
  });

  // Find business first before using it
  const business = employees?.find((item) => item._id === id || item.id === id);

  const handleFlipAndOpen = (type) => {
    setFlipped((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));

    switch (type) {
      case "whatsapp":
        window.open(`https://wa.me/${business?.phone || "7009236647"}`, "_blank");
        break;
      case "phone":
        window.open(`tel:${business?.phone || "7009236647"}`, "_self");
        break;
      case "email":
        window.open(`mailto:${business?.email || "example@example.com"}`, "_self");
        break;
      case "address":
        window.open(
          `https://www.google.com/maps?q=${encodeURIComponent(
            business?.address1 || "123 Main Street"
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

  // Fetch employee bookings to get reviews
  useEffect(() => {
    if (business?._id) {
      dispatch(getEmployeeBookings(business._id));
    }
  }, [dispatch, business?._id]);

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
            loading="lazy"
            decoding="async"
            width={160}
            height={160}
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
          
          {/* Attractive Contact Card Section */}
          <div className={`mt-6 p-5 rounded-xl shadow-lg ${
            isDarkMode 
              ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800" 
              : "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100"
          } border-2 ${
            isDarkMode ? "border-indigo-600" : "border-indigo-200"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <VerifiedUser className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-indigo-600"}`} />
                <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                  Quick Contact
                </h3>
              </div>
              <div className="flex items-center space-x-1">
                <Star className={`text-sm ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`} />
                <span className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                  {business.rating || "4.8"}
                </span>
              </div>
            </div>
            
            <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Get in touch instantly with our service provider
            </p>

            {/* Contact Icons Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* WhatsApp */}
              <div
                onClick={() => handleFlipAndOpen("whatsapp")}
                className={`group flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-green-600 hover:bg-green-500" 
                    : "bg-green-50 hover:bg-green-100 border border-green-200"
                } transform hover:scale-105 hover:shadow-md`}
              >
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-green-700" : "bg-white"
                }`}>
                  <FaWhatsapp className={`text-xl ${
                    isDarkMode ? "text-white" : "text-green-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <p className={`text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}>WhatsApp</p>
                  <p className={`text-xs ${
                    isDarkMode ? "text-green-100" : "text-gray-500"
                  }`}>Chat Now</p>
                </div>
              </div>

              {/* Phone */}
              <div
                onClick={() => handleFlipAndOpen("phone")}
                className={`group flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-blue-600 hover:bg-blue-500" 
                    : "bg-blue-50 hover:bg-blue-100 border border-blue-200"
                } transform hover:scale-105 hover:shadow-md`}
              >
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-blue-700" : "bg-white"
                }`}>
                  <LocalPhone className={`text-xl ${
                    isDarkMode ? "text-white" : "text-blue-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <p className={`text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}>Call</p>
                  <p className={`text-xs ${
                    isDarkMode ? "text-blue-100" : "text-gray-500"
                  }`}>Direct Call</p>
                </div>
              </div>

              {/* Email */}
              <div
                onClick={() => handleFlipAndOpen("email")}
                className={`group flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-purple-600 hover:bg-purple-500" 
                    : "bg-purple-50 hover:bg-purple-100 border border-purple-200"
                } transform hover:scale-105 hover:shadow-md`}
              >
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-purple-700" : "bg-white"
                }`}>
                  <Email className={`text-xl ${
                    isDarkMode ? "text-white" : "text-purple-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <p className={`text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}>Email</p>
                  <p className={`text-xs ${
                    isDarkMode ? "text-purple-100" : "text-gray-500"
                  }`}>Send Mail</p>
                </div>
              </div>

              {/* Location */}
              <div
                onClick={() => handleFlipAndOpen("address")}
                className={`group flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  isDarkMode 
                    ? "bg-red-600 hover:bg-red-500" 
                    : "bg-red-50 hover:bg-red-100 border border-red-200"
                } transform hover:scale-105 hover:shadow-md`}
              >
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? "bg-red-700" : "bg-white"
                }`}>
                  <LocationOn className={`text-xl ${
                    isDarkMode ? "text-white" : "text-red-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <p className={`text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}>Location</p>
                  <p className={`text-xs ${
                    isDarkMode ? "text-red-100" : "text-gray-500"
                  }`}>Get Directions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews/Feedback Section */}
        <div
          className={`p-6 rounded-lg shadow-lg mt-6 ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          }`}
        >
          <h3
            className={`mb-4 text-xl font-bold ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Customer Reviews
          </h3>
          {(() => {
            // Filter completed bookings with ratings
            // Note: getEmployeeBookings already filters by employee, so all bookings are for this employee
            const reviews = employeeBookings?.filter(
              (booking) =>
                booking.status === "Completed" &&
                booking.rating?.value
            ) || [];

            if (reviews.length === 0) {
              return (
                <div
                  className={`py-8 text-center rounded-lg ${
                    isDarkMode ? "bg-gray-600/50" : "bg-gray-50"
                  }`}
                >
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    No reviews yet. Be the first to review this service!
                  </p>
                </div>
              );
            }

            // Calculate average rating
            const avgRating =
              reviews.reduce((sum, review) => sum + review.rating.value, 0) /
              reviews.length;

            return (
              <div className="space-y-4">
                {/* Average Rating */}
                <div
                  className={`p-4 rounded-lg ${
                    isDarkMode
                      ? "bg-indigo-900/30 border border-indigo-700"
                      : "bg-indigo-50 border border-indigo-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Average Rating
                    </span>
                    <span
                      className={`text-2xl font-bold ${
                        isDarkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      {avgRating.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-2xl ${
                          star <= Math.round(avgRating)
                            ? "text-yellow-400"
                            : isDarkMode
                            ? "text-gray-600"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span
                      className={`ml-2 text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
                    </span>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {reviews.map((review) => (
                    <div
                      key={review._id}
                      className={`p-4 rounded-lg border ${
                        isDarkMode
                          ? "bg-gray-600/50 border-gray-500"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                  key={star}
                                  className={`text-lg ${
                                    star <= review.rating.value
                                      ? "text-yellow-400"
                                      : isDarkMode
                                      ? "text-gray-600"
                                      : "text-gray-300"
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span
                              className={`text-sm font-medium ${
                                isDarkMode ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              {review.customer?.name || "Anonymous"}
                            </span>
                          </div>
                          {review.rating.comment && (
                            <p
                              className={`mt-2 text-sm ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              "{review.rating.comment}"
                            </p>
                          )}
                          <div className="mt-2 flex items-center gap-3 flex-wrap">
                            {review.time && (
                              <p
                                className={`text-xs flex items-center gap-1 ${
                                  isDarkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                <AccessTime className="text-xs" />
                                {review.time}
                              </p>
                            )}
                            <p
                              className={`text-xs ${
                                isDarkMode ? "text-gray-500" : "text-gray-400"
                              }`}
                            >
                              {new Date(review.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Suggested Businesses */}
        <div
          className={`p-6 rounded-lg shadow-lg mt-6 ${
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
