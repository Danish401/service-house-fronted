

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCustomerBookings,
  updateBookingStatus,
  fetchBookingById,
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
function Booking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookingId } = useParams();
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
        isDarkMode ? "bg-gray-800 text-white border-[#000000] " : "bg-white text-gray-800"
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
          <DownloadReceipt bookingId={booking._id} />
        </div>
        {["Pending", "booked","Accepted" ].includes(booking.status) && (
          <div className="flex gap-2 mt-4">
            <Link
             to={`/booking/detail/${booking._id}`}
             className="flex items-center justify-center w-auto gap-2 px-4 py-2 text-white transition-all bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 active:scale-95"
           >
             <SiChatbot className={`text-lg ${isDarkMode ? "text-yellow-500" : "text-indigo-200"}`} />
          
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
      <Tabs>
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


        {tabs.map((tab) => (
          <TabsContent value={tab.value} key={tab.value}>
            <div className="flex flex-wrap justify-between gap-4">
              {customerBookings && customerBookings.length > 0 ? (
                customerBookings
                  .filter((booking) =>
                    tab.value === "booked"
                      ? ["Pending", "booked"].includes(booking.status)
                      : booking.status.toLowerCase() === tab.value
                  )
                  .map(renderBookingCard)
              ) : (
                <p>No {tab.label.toLowerCase()} bookings found.</p>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Booking;
