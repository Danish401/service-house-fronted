import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCustomerBookings,
  updateBookingStatus,
  fetchBookingById,
  updateBooking,
} from "../features/bookingSlice";
import DownloadReceipt from "./DownloadReceipt"; // Adjust path
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FaMapMarkerAlt } from "react-icons/fa";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import profile from "../assets/profile.jpg"; // Import the fallback image
import { SiChatbot } from "react-icons/si";
import CoverflowCarousel from "./CoverflowCarousel";
import { RateReview } from "@mui/icons-material";
function Booking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const [activeTab, setActiveTab] = useState("booked");
  const { customerBookings, loading, error, bookingDetails } = useSelector(
    (state) => state.bookings
  );
  const {
    user,
    isAuthenticated,
    loading: authLoading,
  } = useSelector((state) => state.auth);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);

  // Fetch bookings based on user
  useEffect(() => {
    if (isAuthenticated && user?.id) {
      dispatch(getCustomerBookings(user.id));
    }
  }, [dispatch, isAuthenticated, user]);

  // Fetch booking details if bookingId is available
  useEffect(() => {
    if (bookingId) {
      dispatch(fetchBookingById(bookingId));
    }
  }, [dispatch, bookingId]);

  const handleCancelBooking = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This booking will be cancelled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#f87171",
      confirmButtonText: "Yes, cancel it!",
    });

    if (confirm.isConfirmed) {
      dispatch(updateBookingStatus({ bookingId: id, status: "Rejected" }));
      Swal.fire("Cancelled!", "The booking has been cancelled.", "success");
    }
  };

  const handleUpdateBookingStatus = async (id, newStatus) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: `This booking will be marked as ${newStatus}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    });

    if (confirm.isConfirmed) {
      dispatch(updateBookingStatus({ bookingId: id, status: newStatus }));
      Swal.fire(
        "Updated!",
        `The booking has been marked as ${newStatus}.`,
        "success"
      );
    }
  };


  const colors = {
    booked: "#7d66d9",
    accepted: "#a38ae8",
    completed: "#abdf9e",
    rejected: "#f56c6c",
  };

  const tabs = [
    { value: "booked", label: "Booked" },
    { value: "accepted", label: "Accepted" },
    { value: "completed", label: "Completed" },
    { value: "rejected", label: "Rejected" },
  ];

  if (authLoading) {
    return <div>Authenticating...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-br from-indigo-300 to-purple-600">
        <div className="p-6 text-center bg-white rounded-lg shadow-lg w-80 sm:w-96">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Access Restricted
          </h1>
          <p className="mb-6 text-gray-600">
            Please log in to view your bookings and enjoy a seamless experience.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-indigo-400 hover:from-blue-600 hover:to-purple-600"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div>Loading your bookings...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderBookingCard = (booking) => (
    <div
      key={booking._id}
      className={`flex flex-col md:flex-row items-center md:items-start p-4 border rounded-lg shadow-md mb-6 w-full md:w-[48%] ${
        isDarkMode
          ? "bg-gray-800 text-white border-[#000000] "
          : "bg-white text-gray-800"
      }`}
    >
      <img
        src={booking.employee?.image || profile}
        alt={booking.employee?.speciality || "Service"}
        className="object-cover mb-4 h-36 w-36 md:mb-0 md:mr-4"
      />
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold">
          {booking.employee?.name || "Employee Name"}
        </h3>
        <p className="mb-2 text-sm">
          {booking.employee?.category || "Category"}
        </p>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-indigo-400" />
            <p>{booking.employee?.address1 || "Employee Address"}</p>
          </div>
          <div className="flex items-center mb-2">
            <MdOutlinePhoneInTalk className="mr-2 text-indigo-400" />
            <p>{booking.employee?.phone || "Phone"}</p>
          </div>
          <div className="flex items-center mb-2">
            <AiTwotoneMail className="mr-2 text-indigo-400" />
            <p>{booking.employee?.email || "Email"}</p>
          </div>
          <div className="flex items-center mb-2">
            <CalendarTodayIcon className="mr-2 text-indigo-400" />
            <p>{new Date(booking.date).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center mb-2">
            <AccessTimeIcon className="mr-2 text-indigo-400" />
            <p>{booking.time}</p>
          </div>
        </div>
        {["Pending", "booked", "Accepted"].includes(booking.status) && (
          <div className="flex gap-2 mt-4">
            <Link
              to={`/booking/detail/${booking._id}`}
              className="flex items-center justify-center w-auto gap-2 px-4 py-2 text-white transition-all bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 active:scale-95"
            >
              <SiChatbot
                className={`text-lg ${
                  isDarkMode ? "text-yellow-500" : "text-indigo-200"
                }`}
              />
              Schedule Booking or Live Chat
            </Link>
            <button
              onClick={() => handleCancelBooking(booking._id)}
              className="px-6 py-2 bg-[#7d66d9] text-white rounded-lg hover:bg-[#6c55c0]"
            >
              Cancel Booking
            </button>
          </div>
        )}
        {booking.status === "Accepted" && (
          <p className="mt-4 text-blue-500">Booking Accepted</p>
        )}
        {booking.status === "Completed" && (
          <p className="mt-4 text-green-500">Booking Completed</p>
        )}
        {booking.status === "Rejected" && (
          <p className="mt-4 text-red-400">Booking Rejected</p>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={`w-full min-h-screen p-4 mt-6 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex justify-start w-full gap-2 p-2 mt-8 mb-6 overflow-x-auto whitespace-nowrap sm:justify-center rounded-r-3xl">
          {tabs.map((tab) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={tab.value}
              className={`px-4 py-2 border rounded-md ${
                isDarkMode ? "text-white border-[#000000]" : "text-black"
              }`}
              style={{ backgroundColor: colors[tab.value] }}
            >
              <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
            </motion.div>
          ))}
        </TabsList>

        {tabs.map((tab) => {
          const filteredBookings = customerBookings
            ? customerBookings.filter((booking) =>
                tab.value === "booked"
                  ? ["Pending", "booked"].includes(booking.status)
                  : booking.status.toLowerCase() === tab.value
              )
            : [];

          return (
            <TabsContent 
              value={tab.value} 
              key={tab.value}
            >
              {filteredBookings.length > 0 ? (
                <CoverflowCarousel
                  items={filteredBookings}
                  isDarkMode={isDarkMode}
                  renderItem={(booking, isCenter) => (
                    <motion.div
                      className={`relative flex flex-col md:flex-row items-center md:items-start p-8 rounded-3xl w-full max-w-3xl mx-auto overflow-hidden ${
                        isDarkMode
                          ? "bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 text-white border border-gray-700/50"
                          : "bg-gradient-to-br from-white via-gray-50 to-white text-gray-800 border border-gray-200/50"
                      } ${
                        isCenter 
                          ? "shadow-2xl ring-4 ring-indigo-500/20" 
                          : "shadow-xl"
                      }`}
                      whileHover={isCenter ? { 
                        boxShadow: isDarkMode 
                          ? "0 25px 50px -12px rgba(99, 102, 241, 0.3)" 
                          : "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
                      } : {}}
                    >
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br opacity-5 ${
                        isCenter 
                          ? "from-indigo-500 via-purple-500 to-pink-500" 
                          : "from-gray-400 to-gray-500"
                      }`} />
                      
                      {/* Shine Effect */}
                      {isCenter && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: "linear",
                          }}
                        />
                      )}

                      {/* Image Container */}
                      <div className="relative mb-6 md:mb-0 md:mr-8">
                        <div className={`relative overflow-hidden rounded-2xl ${
                          isCenter ? "ring-4 ring-indigo-500/30" : "ring-2 ring-gray-300/20"
                        }`}>
                          <img
                            src={booking.employee?.image || profile}
                            alt={booking.employee?.speciality || "Service"}
                            className="object-cover h-56 w-56 md:h-64 md:w-64"
                          />
                          {/* Image Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        {/* Status Badge */}
                        <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                          booking.status === "Accepted" 
                            ? "bg-green-500 text-white"
                            : booking.status === "Completed"
                            ? "bg-emerald-500 text-white"
                            : booking.status === "Rejected"
                            ? "bg-red-500 text-white"
                            : "bg-indigo-500 text-white"
                        }`}>
                          {booking.status}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center md:text-left flex-1 relative z-10">
                        <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${
                          isDarkMode 
                            ? "from-white to-gray-300 bg-clip-text text-transparent" 
                            : "from-gray-900 to-gray-700 bg-clip-text text-transparent"
                        }`}>
                          {booking.employee?.name || "Employee Name"}
                        </h3>
                        <p className={`mb-6 text-xl font-semibold ${
                          isDarkMode ? "text-indigo-400" : "text-indigo-600"
                        }`}>
                          {booking.employee?.category || "Category"}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center">
                            <div className={`p-2 rounded-lg mr-3 ${
                              isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                            }`}>
                              <FaMapMarkerAlt className={`text-lg ${
                                isDarkMode ? "text-indigo-400" : "text-indigo-600"
                              }`} />
                            </div>
                            <p className="text-sm font-medium">
                              {booking.employee?.address1 || "Employee Address"}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className={`p-2 rounded-lg mr-3 ${
                              isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                            }`}>
                              <MdOutlinePhoneInTalk className={`text-lg ${
                                isDarkMode ? "text-indigo-400" : "text-indigo-600"
                              }`} />
                            </div>
                            <p className="text-sm font-medium">
                              {booking.employee?.phone || "Phone"}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className={`p-2 rounded-lg mr-3 ${
                              isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                            }`}>
                              <AiTwotoneMail className={`text-lg ${
                                isDarkMode ? "text-indigo-400" : "text-indigo-600"
                              }`} />
                            </div>
                            <p className="text-sm font-medium">
                              {booking.employee?.email || "Email"}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className={`p-2 rounded-lg mr-3 ${
                              isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                            }`}>
                              <CalendarTodayIcon className={`text-lg ${
                                isDarkMode ? "text-indigo-400" : "text-indigo-600"
                              }`} />
                            </div>
                            <p className="text-sm font-medium">
                              {new Date(booking.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className={`p-2 rounded-lg mr-3 ${
                              isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                            }`}>
                              <AccessTimeIcon className={`text-lg ${
                                isDarkMode ? "text-indigo-400" : "text-indigo-600"
                              }`} />
                            </div>
                            <p className="text-sm font-medium">{booking.time}</p>
                          </div>
                        </div>

                        {booking.status === "Completed" && (
                          <div className="mb-4 space-y-3">
                            <DownloadReceipt bookingId={booking._id} />
                            
                            {/* Feedback Button - Always show for completed bookings */}
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Link
                                to={`/booking/feedback/${booking._id}`}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-yellow-600 hover:to-orange-600"
                              >
                                <RateReview className="text-xl" />
                                {booking.rating?.value ? "Update Feedback" : "Give Feedback"}
                              </Link>
                            </motion.div>
                            
                            {/* Show existing rating if available */}
                            {booking.rating?.value && (
                              <div className={`p-3 rounded-lg ${
                                isDarkMode ? "bg-indigo-900/30 border border-indigo-700" : "bg-indigo-50 border border-indigo-200"
                              }`}>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-sm font-medium ${
                                    isDarkMode ? "text-gray-300" : "text-gray-700"
                                  }`}>Your Rating:</span>
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <span
                                        key={star}
                                        className={`text-lg ${
                                          star <= booking.rating.value
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
                                </div>
                                {booking.rating.comment && (
                                  <p className={`text-sm mt-1 ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                  }`}>
                                    "{booking.rating.comment}"
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {["Pending", "booked", "Accepted"].includes(
                          booking.status
                        ) && (
                          <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Link
                                to={`/booking/detail/${booking._id}`}
                                className="flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
                              >
                                <SiChatbot className="text-xl" />
                                Schedule Booking or Live Chat
                              </Link>
                            </motion.div>
                            <motion.button
                              onClick={() => handleCancelBooking(booking._id)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-red-500 to-pink-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-600 hover:to-pink-600"
                            >
                              Cancel Booking
                            </motion.button>
                          </div>
                        )}
                        
                        {booking.status === "Accepted" && (
                          <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                            <p className="text-green-500 font-semibold text-center">
                              ✓ Booking Accepted
                            </p>
                          </div>
                        )}
                        {booking.status === "Completed" && (
                          <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <p className="text-emerald-500 font-semibold text-center">
                              ✓ Booking Completed
                            </p>
                          </div>
                        )}
                        {booking.status === "Rejected" && (
                          <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                            <p className="text-red-400 font-semibold text-center">
                              ✗ Booking Rejected
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                />
              ) : (
                <div className="flex items-center justify-center py-20">
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    No {tab.label.toLowerCase()} bookings found.
                  </p>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Booking;
