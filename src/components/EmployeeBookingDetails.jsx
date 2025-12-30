
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Calendar from "react-calendar"; // React Calendar
import "react-calendar/dist/Calendar.css"; // Calendar styles
import { fetchBookingById, updateBooking } from "../features/bookingSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FaMapMarkerAlt } from "react-icons/fa";
import EmployeeChatComponent from "./EmployeeChatComponent"; // ✅ Import ChatComponent


function EmployeeBookingDetails() {
  const { bookingId } = useParams(); // ✅ Get bookingId from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookingDetails, loading, error } = useSelector((state) => state.bookings);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode status
  const isAuthenticated = useSelector((state) => state.employeeRegister.isAuthenticated);

  const [updatedBooking, setUpdatedBooking] = useState({
    date: new Date(),
    time: "",
    address: "",
  });
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (bookingId) {
      dispatch(fetchBookingById(bookingId));
    }
  }, [dispatch, bookingId]);

  const booking = bookingDetails[bookingId];

  useEffect(() => {
    if (booking) {
      setUpdatedBooking({
        date: new Date(booking.date),
        time: booking.time,
        address: booking.address,
      });
      setSelectedTime(booking.time);
    }
  }, [booking]);

  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!booking) return <p>Booking not found.</p>;

  // ✅ Extract employee & customer details
  const employeeId = booking?.employee?._id;
  const customerId = booking?.customer?._id;

  // Dark mode styles
  const darkModeStyles = isDarkMode ? "bg-[#121212] text-white border-[#000000]" : "bg-white text-black";
  
  return (
    <motion.div
      className={`p-5 mt-8 ${darkModeStyles}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     

      <div className={`flex flex-col items-start p-6 border border-gray-300 rounded-lg shadow-md ${darkModeStyles}`}>
        <motion.img
          src={booking?.customer?.image || ""}
          alt={booking?.customer?.name || "Service"}
          className="object-cover mb-4 h-[150px] md:h-[200px] transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="text-2xl font-bold">{booking?.customer?.name || "Employee Name"}</h2>
        <span className="px-3 py-1 mt-2 text-sm bg-purple-200 rounded-full">
          {booking?.customer?.email || "Service Category"}
        </span>
        <span className="px-3 py-1 mt-2 text-sm bg-purple-200 rounded-full">
          {booking?.customer?.phone || "Service Category"}
        </span>

        <div className="mt-6">
          <p>
            <FaMapMarkerAlt className="inline-block mr-2 text-indigo-400" />
            {booking.address || "No address provided"}
          </p>
          <p>
            <CalendarTodayIcon className="inline-block mr-2 text-indigo-400" />
            {new Date(booking.date).toLocaleDateString()}
          </p>
          <p>
            <AccessTimeIcon className="inline-block mr-2 text-indigo-400" />
            {booking.time || "No time provided"}
          </p>
        </div>
      </div>

      {/* ✅ Integrate ChatComponent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8"
      >
        <EmployeeChatComponent
          bookingId={bookingId}
          employeeId={employeeId}
          customerId={customerId}
          userId={employeeId}
        />
      </motion.div>
    </motion.div>
  );
}

export default EmployeeBookingDetails;
