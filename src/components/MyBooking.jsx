
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBookingById,
  markAsCompleted,
  cancelBooking,
} from "../features/bookingSlice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FaMapMarkerAlt } from "react-icons/fa";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2"; // For attractive popups

function MyBooking() {
  const { bookingId } = useParams();
  const dispatch = useDispatch();
  const { booked, completed, bookingDetails } = useSelector(
    (state) => state.bookings
  );

  useEffect(() => {
    if (bookingId) {
      dispatch(fetchBookingById(bookingId));
    }
  }, [dispatch, bookingId]);

  const handleCancelAppointment = (bookingId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f87171",
      cancelButtonColor: "#9b9ef0",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cancelBooking(bookingId)); // Dispatch the cancel action
        Swal.fire(
          "Cancelled!",
          "Your appointment has been cancelled.",
          "success"
        );
      }
    });
  };
  

const renderBookingCard = (booking) => {
  const employeeDetails = bookingDetails[booking._id]?.employee;

  return (
    <div key={booking._id} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md">
      <img
        src={employeeDetails?.image || ""}
        alt={employeeDetails?.speciality || "Service"}
        className="object-cover w-24 h-24 mb-4 rounded-full shadow-lg"
      />
      <div className="space-y-2 text-center">
        <span className="bg-purple-200 text-primary rounded-full px-2 text-[12px] font-medium">
          {employeeDetails?.category || "Service Category"}
        </span>
        <div className="flex items-center space-x-2">
          <PersonIcon className="text-indigo-400" />
          <p className="font-semibold text-gray-800">
            {employeeDetails?.name || "Employee Name"}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-indigo-400" />
          <p className="text-sm text-gray-600">
            {booking.address || "Booking Address"}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarTodayIcon className="text-indigo-400" />
          <p className="text-sm text-gray-600">
            Service on:
            <span className="font-semibold text-gray-800">
              {new Date(booking.date).toDateString()}
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <AccessTimeIcon className="text-indigo-400" />
          <p className="text-sm text-gray-600">
            {booking.time || "Time not available"}
          </p>
        </div>
      </div>
      {booking.status === "Active" && (
        <button
          onClick={() => dispatch(markAsCompleted({ id: booking._id }))}
          className="text-white bg-[#818cf8] hover:bg-[#9b9ef0] mt-4 p-2 rounded w-full"
        >
          Mark as Completed
        </button>
      )}
      {booking.status === "Completed" && (
        <div className="flex items-center mt-2 text-green-600">
          <CheckCircleIcon className="mr-2" /> Completed
        </div>
      )}
      {booking.status === "Cancelled" && (
        <div className="flex items-start mb-2 text-indigo-600">
          <CheckCircleIcon className="mr-2" /> Cancelled
        </div>
      )}

      {/* Cancel Appointment Button */}
      <button
        onClick={() => handleCancelAppointment(booking._id)}
        className="flex items-center justify-center w-full px-4 py-2 text-white transition-all bg-indigo-300 rounded-md shadow-md hover:bg-indigo-600 active:scale-95"
      >
        Cancel Appointment
      </button>

      {/* Schedule Button */}
      <div className="w-full mt-4">
        <Link
          to={`/booking/detail/${booking._id}`}
          className="flex items-center justify-center w-full px-4 py-2 text-white transition-all bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 active:scale-95"
        >
          Schedule Appointment
        </Link>
      </div>
    </div>
  );
};

  return (
    <div className="p-5 mt-8">
      <h2 className="text-3xl font-bold mb-4 text-[#7d66d9]">My Bookings</h2>

      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="justify-start w-full mb-4">
          <TabsTrigger value="booked">Booked Services</TabsTrigger>
          <TabsTrigger value="completed">Completed Services</TabsTrigger>
        </TabsList>

        <TabsContent value="booked">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            {booked.map(renderBookingCard)}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
            {completed.map(renderBookingCard)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;
