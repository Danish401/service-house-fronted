// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchBookingById } from "../features/bookingSlice";
// import { useParams, Link } from "react-router-dom";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import PersonIcon from "@mui/icons-material/Person";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// function BookingDetail() {
//   const { bookingId } = useParams();
//   const dispatch = useDispatch();
//   const { bookingDetails } = useSelector((state) => state.bookings);

//   useEffect(() => {
//     if (bookingId) {
//       dispatch(fetchBookingById(bookingId));
//     }
//   }, [dispatch, bookingId]);

//   const booking = bookingDetails[bookingId];

//   if (!booking) {
//     return (
//       <div className="p-5">
//         <h2 className="text-xl font-bold text-gray-800">
//           Loading booking details...
//         </h2>
//       </div>
//     );
//   }

//   const employeeDetails = booking.employee;

//   return (
//     <div className="p-5 mt-4">
//       <Link to="/my-bookings" className="flex items-center mb-4 text-blue-600">
//         <ArrowBackIcon className="mr-2" /> Back to My Bookings
//       </Link>

//       <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md">
//         <img
//           src={employeeDetails?.image || ""}
//           alt={employeeDetails?.speciality || "Service"}
//           className="object-cover w-24 h-24 mb-4 rounded-full shadow-lg"
//         />
//         <h2 className="mb-2 text-2xl font-bold text-gray-800">
//           {employeeDetails?.name || "Employee Name"}
//         </h2>
//         <span className="px-3 py-1 text-sm font-medium bg-purple-200 rounded-full text-primary">
//           {employeeDetails?.category || "Service Category"}
//         </span>

//         <div className="mt-6 space-y-4 text-center">
//           <div className="flex items-center space-x-2">
//             <FaMapMarkerAlt className="text-indigo-400" />
//             <p className="text-sm text-gray-600">
//               {booking.address || "Booking Address"}
//             </p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <CalendarTodayIcon className="text-indigo-400" />
//             <p className="text-sm text-gray-600">
//               Service on:
//               <span className="font-semibold text-gray-800">
//                 {new Date(booking.date).toDateString()}
//               </span>
//             </p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <AccessTimeIcon className="text-indigo-400" />
//             <p className="text-sm text-gray-600">
//               {booking.time || "Time not available"}
//             </p>
//           </div>
//         </div>

//         {booking.status === "Completed" && (
//           <div className="flex items-center mt-4 text-green-600">
//             <span className="mr-2">This service is completed!</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BookingDetail;


//3/1/25
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchBookingById, updateBooking } from "../features/bookingSlice";
// import { useParams, Link } from "react-router-dom";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import PersonIcon from "@mui/icons-material/Person";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// function BookingDetail() {
//   const { bookingId } = useParams();
//   const dispatch = useDispatch();
//   const { bookingDetails, loading, error } = useSelector((state) => state.bookings);

//   const [editMode, setEditMode] = useState(false);
//   const [updatedBooking, setUpdatedBooking] = useState({
//     date: "",
//     time: "",
//     address: "",
//   });

//   useEffect(() => {
//     if (bookingId) {
//       dispatch(fetchBookingById(bookingId));
//     }
//   }, [dispatch, bookingId]);

//   const booking = bookingDetails[bookingId];

//   useEffect(() => {
//     if (booking) {
//       setUpdatedBooking({
//         date: booking.date,
//         time: booking.time,
//         address: booking.address,
//       });
//     }
//   }, [booking]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedBooking((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = () => {
//     dispatch(updateBooking({ bookingId, updates: updatedBooking }));
//     setEditMode(false);
//   };

//   if (loading) {
//     return (
//       <div className="p-5">
//         <h2 className="text-xl font-bold text-gray-800">Loading booking details...</h2>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-5">
//         <h2 className="text-xl font-bold text-red-600">Error: {error}</h2>
//       </div>
//     );
//   }

//   if (!booking) {
//     return (
//       <div className="p-5">
//         <h2 className="text-xl font-bold text-gray-800">Booking not found.</h2>
//       </div>
//     );
//   }

//   const employeeDetails = booking.employee;

//   return (
//     <div className="p-5 mt-4">
//       <Link to="/my-bookings" className="flex items-center mb-4 text-blue-600">
//         <ArrowBackIcon className="mr-2" /> Back to My Bookings
//       </Link>

//       <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md">
//         <img
//           src={employeeDetails?.image || ""}
//           alt={employeeDetails?.speciality || "Service"}
//           className="object-cover w-24 h-24 mb-4 rounded-full shadow-lg"
//         />
//         <h2 className="mb-2 text-2xl font-bold text-gray-800">
//           {employeeDetails?.name || "Employee Name"}
//         </h2>
//         <span className="px-3 py-1 text-sm font-medium bg-purple-200 rounded-full text-primary">
//           {employeeDetails?.category || "Service Category"}
//         </span>

//         {editMode ? (
//           <div className="mt-6 space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={updatedBooking.date}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 mt-1 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Time</label>
//               <input
//                 type="time"
//                 name="time"
//                 value={updatedBooking.time}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 mt-1 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={updatedBooking.address}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 mt-1 border rounded-md"
//               />
//             </div>
//             <button
//               onClick={handleUpdate}
//               className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
//             >
//               Save Changes
//             </button>
//             <button
//               onClick={() => setEditMode(false)}
//               className="px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <div className="mt-6 space-y-4 text-center">
//             <div className="flex items-center space-x-2">
//               <FaMapMarkerAlt className="text-indigo-400" />
//               <p className="text-sm text-gray-600">{booking.address || "Booking Address"}</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <CalendarTodayIcon className="text-indigo-400" />
//               <p className="text-sm text-gray-600">
//                 Service on:
//                 <span className="font-semibold text-gray-800">
//                   {new Date(booking.date).toDateString()}
//                 </span>
//               </p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <AccessTimeIcon className="text-indigo-400" />
//               <p className="text-sm text-gray-600">{booking.time || "Time not available"}</p>
//             </div>
//             <button
//               onClick={() => setEditMode(true)}
//               className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
//             >
//               Edit Booking
//             </button>
//           </div>
//         )}

//         {booking.status === "Completed" && (
//           <div className="flex items-center mt-4 text-green-600">
//             <span className="mr-2">This service is completed!</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BookingDetail;


// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchBookingById, updateBooking } from "../features/bookingSlice";
// import { useParams, Link } from "react-router-dom";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import Calendar from "react-calendar"; // React Calendar
// import "react-calendar/dist/Calendar.css"; // Calendar styles
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetHeader,
//   SheetTitle,
//   SheetFooter,
// } from "./sheet"; // Modal-like component
// import { Button } from "./button"; // Reusable button component

// function BookingDetail() {
//   const { bookingId } = useParams();
//   const dispatch = useDispatch();
//   const { bookingDetails, loading, error } = useSelector((state) => state.bookings);

//   const [editMode, setEditMode] = useState(false);
//   const [updatedBooking, setUpdatedBooking] = useState({
//     date: new Date(),
//     time: "",
//     address: "",
//   });

//   useEffect(() => {
//     if (bookingId) {
//       dispatch(fetchBookingById(bookingId));
//     }
//   }, [dispatch, bookingId]);

//   const booking = bookingDetails[bookingId];

//   useEffect(() => {
//     if (booking) {
//       setUpdatedBooking({
//         date: new Date(booking.date),
//         time: booking.time,
//         address: booking.address,
//       });
//     }
//   }, [booking]);

//   const handleDateChange = (date) => {
//     setUpdatedBooking((prev) => ({ ...prev, date }));
//   };

//   const handleTimeChange = (e) => {
//     setUpdatedBooking((prev) => ({ ...prev, time: e.target.value }));
//   };

//   const handleUpdate = () => {
//     dispatch(
//       updateBooking({
//         bookingId,
//         updates: {
//           date: updatedBooking.date.toISOString(),
//           time: updatedBooking.time,
//           address: updatedBooking.address,
//         },
//       })
//     );
//     setEditMode(false);
//   };

//   if (loading) return <p>Loading booking details...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!booking) return <p>Booking not found.</p>;

//   const employeeDetails = booking.employee;

//   return (
//     <div className="p-5">
//       <Link to="/my-bookings" className="flex items-center mb-4 text-blue-600">
//         <ArrowBackIcon className="mr-2" /> Back to My Bookings
//       </Link>

//       <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md">
//         <img
//           src={employeeDetails?.image || ""}
//           alt={employeeDetails?.speciality || "Service"}
//           className="object-cover w-24 h-24 mb-4 rounded-full shadow-lg"
//         />
//         <h2 className="text-2xl font-bold">{employeeDetails?.name || "Employee Name"}</h2>
//         <span className="px-3 py-1 mt-2 text-sm bg-purple-200 rounded-full">
//           {employeeDetails?.category || "Service Category"}
//         </span>

//         <div className="mt-6">
//           <p>
//             <FaMapMarkerAlt className="inline-block mr-2 text-indigo-400" />
//             {booking.address || "No address provided"}
//           </p>
//           <p>
//             <CalendarTodayIcon className="inline-block mr-2 text-indigo-400" />
//             {new Date(booking.date).toLocaleDateString()}
//           </p>
//           <p>
//             <AccessTimeIcon className="inline-block mr-2 text-indigo-400" />
//             {booking.time || "No time provided"}
//           </p>
//         </div>

//         <Sheet>
//           <SheetTrigger>
//             <Button className="mt-4">Edit Booking</Button>
//           </SheetTrigger>
//           <SheetContent>
//             <SheetHeader>
//               <SheetTitle>Edit Booking Details</SheetTitle>
//             </SheetHeader>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium">Date</label>
//                 <Calendar value={updatedBooking.date} onChange={handleDateChange} />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Time</label>
//                 <input
//                   type="time"
//                   value={updatedBooking.time}
//                   onChange={handleTimeChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//             </div>

//             <SheetFooter>
//               <Button onClick={handleUpdate}>Save Changes</Button>
//               <Button variant="secondary" onClick={() => setEditMode(false)}>
//                 Cancel
//               </Button>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// }

// export default BookingDetail;


// without mode
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import Calendar from "react-calendar"; // React Calendar
// import "react-calendar/dist/Calendar.css"; // Calendar styles
// import { fetchBookingById, updateBooking } from "../features/bookingSlice";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   Sheet,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./sheet";
// import { Button } from "./button";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import { FaMapMarkerAlt } from "react-icons/fa";

// function BookingDetail() {
//   const { bookingId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { bookingDetails, loading, error } = useSelector((state) => state.bookings);

//   const [updatedBooking, setUpdatedBooking] = useState({
//     date: new Date(),
//     time: "",
//     address: "",
//   });
//   const [selectedTime, setSelectedTime] = useState("");

//   const timeSlot = [
//     { time: "10:00 AM" },
//     { time: "10:30 AM" },
//     { time: "11:00 AM" },
//     { time: "11:30 AM" },
//     { time: "12:00 PM" },
//     { time: "12:30 PM" },
//     { time: "1:00 PM" },
//     { time: "1:30 PM" },
//     { time: "2:00 PM" },
//     { time: "2:30 PM" },
//     { time: "3:00 PM" },
//     { time: "3:30 PM" },
//     { time: "4:00 PM" },
//     { time: "4:30 PM" },
//     { time: "5:00 PM" },
//     { time: "5:30 PM" },
//     { time: "6:00 PM" },
//     { time: "6:30 PM" },
//   ];

//   const isSlotBooked = (time) => {
//     return time === "2:00 PM"; // Example logic to disable specific slots
//   };

//   useEffect(() => {
//     if (bookingId) {
//       dispatch(fetchBookingById(bookingId));
//     }
//   }, [dispatch, bookingId]);

//   const booking = bookingDetails[bookingId];

//   useEffect(() => {
//     if (booking) {
//       setUpdatedBooking({
//         date: new Date(booking.date),
//         time: booking.time,
//         address: booking.address,
//       });
//       setSelectedTime(booking.time);
//     }
//   }, [booking]);

//   const handleDateChange = (date) => {
//     setUpdatedBooking((prev) => ({ ...prev, date }));
//   };

//   const handleUpdate = async () => {
//     try {
//       await dispatch(
//         updateBooking({
//           bookingId,
//           updates: {
//             date: updatedBooking.date.toISOString(),
//             time: selectedTime,
//             address: updatedBooking.address,
//           },
//         })
//       );
//       navigate("/my-bookings");
//     } catch (error) {
//       console.error("Failed to update booking:", error);
//     }
//   };

//   if (loading) return <p>Loading booking details...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!booking) return <p>Booking not found.</p>;

//   const employeeDetails = booking.employee;

//   return (
//     <motion.div
//       className="p-5 mt-8"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Link to="/my-bookings" className="flex items-center mb-4 text-indigo-900">
//         <ArrowBackIcon className="mr-2" /> Back to My Bookings
//       </Link>

//       <div className="flex flex-col items-start p-6 border border-gray-300 rounded-lg shadow-md">
//         <motion.img
//           src={employeeDetails?.image || ""}
//           alt={employeeDetails?.speciality || "Service"}
//    className="object-cover mb-4 h-[150px] md:h-[200px] transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//         <h2 className="text-2xl font-bold">{employeeDetails?.name || "Employee Name"}</h2>
//         <span className="px-3 py-1 mt-2 text-sm bg-purple-200 rounded-full">
//           {employeeDetails?.category || "Service Category"}
//         </span>

//         <div className="mt-6">
//           <p>
//             <FaMapMarkerAlt className="inline-block mr-2 text-indigo-400" />
//             {booking.address || "No address provided"}
//           </p>
//           <p>
//             <CalendarTodayIcon className="inline-block mr-2 text-indigo-400" />
//             {new Date(booking.date).toLocaleDateString()}
//           </p>
//           <p>
//             <AccessTimeIcon className="inline-block mr-2 text-indigo-400" />
//             {booking.time || "No time provided"}
//           </p>
//         </div>

//         <Sheet>
//           <SheetTrigger>
//             <Button className="mt-4">Schedule Booking</Button>
//           </SheetTrigger>
//           <SheetContent className="p-6 bg-white rounded-lg shadow-lg">
//             <SheetHeader>
//               <SheetTitle className="text-2xl font-bold text-[#7d66d9]">
//               Schedule Booking Details
//               </SheetTitle>
//             </SheetHeader>
//             <motion.div
//               className="space-y-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div>
//                 <label className="block text-sm font-medium">Select Date</label>
//                 <Calendar value={updatedBooking.date} onChange={handleDateChange} />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Select Time Slot</label>
//                 <div className="grid grid-cols-3 gap-3 mt-3">
//                   {timeSlot.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button
//                         disabled={isSlotBooked(item.time)}
//                         variant="outline"
//                         className={`border rounded-full p-2 px-3 hover:bg-[#7d66d9] hover:text-white transition-all
//                           ${selectedTime === item.time ? 'bg-[#7d66d9] text-white' : 'text-[#7d66d9]'}`}
//                         onClick={() => setSelectedTime(item.time)}
//                       >
//                         {item.time}
//                       </Button>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//             <SheetFooter>
//               <Button onClick={handleUpdate}>Schedule Changes</Button>
//               <Button variant="secondary" onClick={() => navigate("/my-bookings")}>
//                 Cancel
//               </Button>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </motion.div>
//   );
// }

// export default BookingDetail;


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

function BookingDetail() {
  const { bookingId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookingDetails, loading, error } = useSelector((state) => state.bookings);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get the dark mode status

  const [updatedBooking, setUpdatedBooking] = useState({
    date: new Date(),
    time: "",
    address: "",
  });
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlot = [
    { time: "10:00 AM" },
    { time: "10:30 AM" },
    { time: "11:00 AM" },
    { time: "11:30 AM" },
    { time: "12:00 PM" },
    { time: "12:30 PM" },
    { time: "1:00 PM" },
    { time: "1:30 PM" },
    { time: "2:00 PM" },
    { time: "2:30 PM" },
    { time: "3:00 PM" },
    { time: "3:30 PM" },
    { time: "4:00 PM" },
    { time: "4:30 PM" },
    { time: "5:00 PM" },
    { time: "5:30 PM" },
    { time: "6:00 PM" },
    { time: "6:30 PM" },
  ];

  const isSlotBooked = (time) => {
    return time === "2:00 PM"; // Example logic to disable specific slots
  };

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

  const handleDateChange = (date) => {
    setUpdatedBooking((prev) => ({ ...prev, date }));
  };

  const handleUpdate = async () => {
    try {
      await dispatch(
        updateBooking({
          bookingId,
          updates: {
            date: updatedBooking.date.toISOString(),
            time: selectedTime,
            address: updatedBooking.address,
          },
        })
      );
      navigate("/bookings");
    } catch (error) {
      console.error("Failed to update booking:", error);
    }
  };

  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!booking) return <p>Booking not found.</p>;

  const employeeDetails = booking.employee;

  // Dark mode styles
  const darkModeStyles = isDarkMode
    ? "bg-[#121212] text-white"
    : "bg-white text-black";

  return (
    <motion.div
      className={`p-5 mt-8 ${darkModeStyles}`} // Apply dark mode class conditionally
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/bookings"
        className={`flex items-center mb-4 text-indigo-900 ${darkModeStyles}`}
      >
        <ArrowBackIcon className="mr-2" /> Back to My Bookings
      </Link>

      <div
        className={`flex flex-col items-start p-6 border border-gray-300 rounded-lg shadow-md ${darkModeStyles}`}
      >
        <motion.img
          src={employeeDetails?.image || ""}
          alt={employeeDetails?.speciality || "Service"}
          className="object-cover mb-4 h-[150px] md:h-[200px] transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="text-2xl font-bold">{employeeDetails?.name || "Employee Name"}</h2>
        <span className="px-3 py-1 mt-2 text-sm bg-purple-200 rounded-full">
          {employeeDetails?.category || "Service Category"}
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

        <Sheet>
          <SheetTrigger>
            <Button className="mt-4">Schedule Booking</Button>
          </SheetTrigger>
          <SheetContent className="p-6 bg-white rounded-lg shadow-lg">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-[#7d66d9]">
                Schedule Booking Details
              </SheetTitle>
            </SheetHeader>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <label className="block text-sm font-medium">Select Date</label>
                <Calendar value={updatedBooking.date} onChange={handleDateChange} />
              </div>
              <div>
                <label className="block text-sm font-medium">Select Time Slot</label>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {timeSlot.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        disabled={isSlotBooked(item.time)}
                        variant="outline"
                        className={`border rounded-full p-2 px-3 hover:bg-[#7d66d9] hover:text-white transition-all
                          ${selectedTime === item.time ? 'bg-[#7d66d9] text-white' : 'text-[#7d66d9]'}`}
                        onClick={() => setSelectedTime(item.time)}
                      >
                        {item.time}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <SheetFooter>
              <Button onClick={handleUpdate}>Schedule Changes</Button>
              <Button variant="secondary" onClick={() => navigate("/my-bookings")}>
                Cancel
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  );
}

export default BookingDetail;
