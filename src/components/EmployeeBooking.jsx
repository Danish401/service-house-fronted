// //11/1/25
// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { getEmployeeBookings, updateBookingStatus } from "../features/bookingSlice";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
// // import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// // import AccessTimeIcon from "@mui/icons-material/AccessTime";
// // import { FaMapMarkerAlt } from "react-icons/fa";
// // import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// // import Swal from "sweetalert2";
// // import PropTypes from "prop-types";
// // import { FiPhoneCall } from "react-icons/fi";
// // import { MdSpeakerNotes } from "react-icons/md";
// // import { toast } from "react-toastify"; // Import Toast
// // import "react-toastify/dist/ReactToastify.css";

// // const BookingCard = ({ booking, onComplete, onUpdateStatus }) => {
// //   const handleAccept = () => {
// //     onUpdateStatus(booking._id, "Accepted");
// //     toast.success("Booking accepted successfully!");
// //   };

// //   const handleReject = () => {
// //     onUpdateStatus(booking._id, "Rejected");
// //     toast.error("Booking rejected successfully!");
// //   };

// //   return (
// //     <div
// //       key={booking._id}
// //       className="flex flex-col items-center p-4 mb-4 border border-gray-300 rounded-lg shadow-md"
// //     >
// //       <img
// //         src={booking.customer?.image || ""}
// //         alt={booking.customer?.name || "Service"}
// //         className="object-cover w-32 h-32 mb-2 rounded-full"
// //       />
// //       <div className="text-center">
// //         <h3 className="text-xl font-bold">{booking.customer?.name || "Customer Name"}</h3>
// //       </div>
// //       <div className="flex flex-col items-start mt-4">
// //         <div className="flex items-center">
// //           <FaMapMarkerAlt className="mr-2 text-gray-500" />
// //           <p>{booking.customer?.address1 || "Customer Address"}</p>
// //         </div>
// //         <div className="flex items-center">
// //           <FiPhoneCall className="mr-2 text-gray-500" />
// //           <p>{booking.customer?.phone || "Customer Phone"}</p>
// //         </div>
// //         <div className="flex items-center mt-2">
// //           <CalendarTodayIcon className="mr-2 text-gray-500" />
// //           <p>{new Date(booking.date).toLocaleDateString()}</p>
// //         </div>
// //         <div className="flex items-center mt-2">
// //           <AccessTimeIcon className="mr-2 text-gray-500" />
// //           <p>{booking.time}</p>
// //         </div>
// //         <div className="flex items-center">
// //           <MdSpeakerNotes className="mr-2 text-gray-500" />
// //           <p>{booking.notes || "No additional notes"}</p>
// //         </div>
// //         <div className="flex gap-2 mt-4">
// //           {booking.status === "Pending" && (
// //             <>
// //               <button
// //                 onClick={handleAccept}
// //                 className="flex items-center px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
// //               >
// //                 <CheckCircleIcon className="mr-2" />
// //                 Accept
// //               </button>
// //               <button
// //                 onClick={handleReject}
// //                 className="flex items-center px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
// //               >
// //                 <AccessTimeIcon className="mr-2" />
// //                 Reject
// //               </button>
// //             </>
// //           )}
// //           {booking.status === "Accepted" && (
// //             <>
// //               <p className="text-green-500">Accepted</p>
// //               <button
// //                 onClick={() => onComplete(booking._id)}
// //                 className="flex items-center px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
// //               >
// //                 <CheckCircleIcon className="mr-2" />
// //                 Mark as Completed
// //               </button>
// //               <button
// //                 onClick={handleReject}
// //                 className="flex items-center px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
// //               >
// //                 <AccessTimeIcon className="mr-2" />
// //                 Reject
// //               </button>
// //             </>
// //           )}
// //           {booking.status === "Rejected" && (
// //             <p className="text-red-500">Rejected</p>
// //           )}
// //           {booking.status === "Completed" && (
// //             <p className="text-green-500">Booking Completed</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // BookingCard.propTypes = {
// //   booking: PropTypes.object.isRequired,
// //   onComplete: PropTypes.func.isRequired,
// //   onUpdateStatus: PropTypes.func.isRequired,
// // };

// // const EmployeeBooking = () => {
// //   const dispatch = useDispatch();
// //   const { employeeBookings, loading, error } = useSelector((state) => state.bookings);
// //   const employeeData = useSelector((state) => state.employeeRegister.employee);

// //   useEffect(() => {
// //     if (employeeData?._id) {
// //       dispatch(getEmployeeBookings(employeeData._id));
// //     }
// //   }, [dispatch, employeeData]);

// //   const handleMarkAsCompleted = async (id) => {
// //     const confirm = await Swal.fire({
// //       title: "Are you sure?",
// //       text: "You won't be able to revert this!",
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: "Yes, mark as completed!",
// //     });

// //     if (confirm.isConfirmed) {
// //       dispatch(updateBookingStatus({ bookingId: id, status: "Completed" }));
// //       Swal.fire("Completed!", "The booking has been marked as completed.", "success");
// //       toast.success("Booking marked as completed!");
// //     }
// //   };

// //   const handleUpdateStatus = async (id, status) => {
// //     const confirm = await Swal.fire({
// //       title: `Are you sure you want to ${status.toLowerCase()} this booking?`,
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: `Yes, ${status.toLowerCase()} it!`,
// //     });

// //     if (confirm.isConfirmed) {
// //       dispatch(updateBookingStatus({ bookingId: id, status }));
// //       Swal.fire("Updated!", `The booking has been ${status.toLowerCase()}.`, "success");
// //       toast.info(`Booking ${status.toLowerCase()} successfully!`);
// //     }
// //   };

// //   if (loading) return <div>Loading your bookings...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="container p-4 mx-auto mt-16">
// //       <Tabs>
// //         <TabsList>
// //           <TabsTrigger value="booked">Booked</TabsTrigger>
// //           <TabsTrigger value="completed">Completed</TabsTrigger>
// //           <TabsTrigger value="rejected">Rejected</TabsTrigger>
// //         </TabsList>

// //         <TabsContent value="booked">
// //           {employeeBookings?.filter((b) => b.status === "Pending" || b.status === "Accepted").length > 0 ? (
// //             employeeBookings
// //               .filter((booking) => booking.status === "Pending" || booking.status === "Accepted")
// //               .map((booking) => (
// //                 <BookingCard
// //                   key={booking._id}
// //                   booking={booking}
// //                   onComplete={handleMarkAsCompleted}
// //                   onUpdateStatus={handleUpdateStatus}
// //                 />
// //               ))
// //           ) : (
// //             <p>No bookings found.</p>
// //           )}
// //         </TabsContent>

// //         <TabsContent value="completed">
// //           {employeeBookings?.filter((b) => b.status === "Completed").length > 0 ? (
// //             employeeBookings
// //               .filter((booking) => booking.status === "Completed")
// //               .map((booking) => (
// //                 <BookingCard
// //                   key={booking._id}
// //                   booking={booking}
// //                   onComplete={handleMarkAsCompleted}
// //                   onUpdateStatus={handleUpdateStatus}
// //                 />
// //               ))
// //           ) : (
// //             <p>No completed bookings.</p>
// //           )}
// //         </TabsContent>

// //         <TabsContent value="rejected">
// //           {employeeBookings?.filter((b) => b.status === "Rejected").length > 0 ? (
// //             employeeBookings
// //               .filter((booking) => booking.status === "Rejected")
// //               .map((booking) => (
// //                 <BookingCard
// //                   key={booking._id}
// //                   booking={booking}
// //                   onComplete={handleMarkAsCompleted}
// //                   onUpdateStatus={handleUpdateStatus}
// //                 />
// //               ))
// //           ) : (
// //             <p>No rejected bookings.</p>
// //           )}
// //         </TabsContent>
// //       </Tabs>
// //     </div>
// //   );
// // };

// // export default EmployeeBooking;

// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { getEmployeeBookings, updateBookingStatus } from "../features/bookingSlice";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
// // import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// // import AccessTimeIcon from "@mui/icons-material/AccessTime";
// // import { FaMapMarkerAlt } from "react-icons/fa";
// // import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// // import Swal from "sweetalert2";
// // import PropTypes from "prop-types";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const BookingCard = ({ booking, onComplete, onUpdateStatus }) => {
// //   const handleAccept = () => {
// //     onUpdateStatus(booking._id, "Accepted");
// //     toast.success("Booking accepted successfully!");
// //   };

// //   const handleReject = () => {
// //     onUpdateStatus(booking._id, "Rejected");
// //     toast.error("Booking rejected successfully!");
// //   };

// //   return (
// //     <div className="flex flex-col p-4 bg-white border rounded-lg shadow-md">
// //       <div className="flex items-start gap-4">
// //         <img
// //           src={booking.customer?.image || "https://via.placeholder.com/150"}
// //           alt={booking.customer?.name || "Service"}
// //           className="w-24 h-24 border border-gray-300 rounded-md"
// //         />
// //         <div>

// //           <p className="text-sm font-medium text-purple-600">{booking.customer?.name || "Customer Name"}</p>
// //           <p className="text-sm text-gray-500">
// //             <FaMapMarkerAlt className="inline-block mr-1" />
// //             {booking.customer?.address1 || "Customer Address"}
// //           </p>
// //         </div>
// //       </div>
// //       <div className="flex flex-col gap-2 mt-4">
// //         <div className="text-sm text-gray-600">
// //           <CalendarTodayIcon className="mr-1 text-gray-500" />
// //           Service on: <span className="font-medium text-gray-800">{new Date(booking.date).toLocaleDateString()}</span>
// //         </div>
// //         <div className="text-sm text-gray-600">
// //           <AccessTimeIcon className="mr-1 text-gray-500" />
// //           Time: <span className="font-medium text-gray-800">{booking.time}</span>
// //         </div>
// //         <div className="flex gap-2 mt-2">
// //           {booking.status === "Pending" && (
// //             <>
// //               <button
// //                 onClick={handleAccept}
// //                 className="px-4 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-600"
// //               >
// //                 Accept
// //               </button>
// //               <button
// //                 onClick={handleReject}
// //                 className="px-4 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
// //               >
// //                 Reject
// //               </button>
// //             </>
// //           )}
// //           {booking.status === "Accepted" && (
// //             <>
// //               <p className="text-sm font-medium text-green-600">Accepted</p>
// //               <button
// //                 onClick={() => onComplete(booking._id)}
// //                 className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
// //               >
// //                 Mark as Completed
// //               </button>
// //             </>
// //           )}
// //           {booking.status === "Rejected" && (
// //             <p className="text-sm font-medium text-red-600">Rejected</p>
// //           )}
// //           {booking.status === "Completed" && (
// //             <p className="text-sm font-medium text-green-600">Completed</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // BookingCard.propTypes = {
// //   booking: PropTypes.object.isRequired,
// //   onComplete: PropTypes.func.isRequired,
// //   onUpdateStatus: PropTypes.func.isRequired,
// // };

// // const EmployeeBooking = () => {
// //   const dispatch = useDispatch();
// //   const { employeeBookings, loading, error } = useSelector((state) => state.bookings);
// //   const employeeData = useSelector((state) => state.employeeRegister.employee);

// //   useEffect(() => {
// //     if (employeeData?._id) {
// //       dispatch(getEmployeeBookings(employeeData._id));
// //     }
// //   }, [dispatch, employeeData]);

// //   const handleMarkAsCompleted = async (id) => {
// //     const confirm = await Swal.fire({
// //       title: "Are you sure?",
// //       text: "You won't be able to revert this!",
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: "Yes, mark as completed!",
// //     });

// //     if (confirm.isConfirmed) {
// //       dispatch(updateBookingStatus({ bookingId: id, status: "Completed" }));
// //       Swal.fire("Completed!", "The booking has been marked as completed.", "success");
// //       toast.success("Booking marked as completed!");
// //     }
// //   };

// //   const handleUpdateStatus = async (id, status) => {
// //     const confirm = await Swal.fire({
// //       title: `Are you sure you want to ${status.toLowerCase()} this booking?`,
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: `Yes, ${status.toLowerCase()} it!`,
// //     });

// //     if (confirm.isConfirmed) {
// //       dispatch(updateBookingStatus({ bookingId: id, status }));
// //       Swal.fire("Updated!", `The booking has been ${status.toLowerCase()}.`, "success");
// //       toast.info(`Booking ${status.toLowerCase()} successfully!`);
// //     }
// //   };

// //   if (loading) return <div>Loading your bookings...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="container p-6 mx-auto mt-16">
// //       <h2 className="mb-6 text-2xl font-bold text-gray-800">My Bookings</h2>
// //       <Tabs>
// //         <TabsList className="flex gap-4 p-2 bg-gray-100 rounded-md">
// //           <TabsTrigger value="booked" className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200">
// //             Booked
// //           </TabsTrigger>
// //           <TabsTrigger value="completed" className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200">
// //             Completed
// //           </TabsTrigger>
// //           <TabsTrigger value="rejected" className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200">
// //             Rejected
// //           </TabsTrigger>
// //         </TabsList>

// //         <TabsContent value="booked">
// //           <div className="grid gap-6 sm:grid-cols-2">
// //             {employeeBookings?.filter((b) => b.status === "Pending" || b.status === "Accepted").length > 0 ? (
// //               employeeBookings
// //                 .filter((booking) => booking.status === "Pending" || booking.status === "Accepted")
// //                 .map((booking) => (
// //                   <BookingCard
// //                     key={booking._id}
// //                     booking={booking}
// //                     onComplete={handleMarkAsCompleted}
// //                     onUpdateStatus={handleUpdateStatus}
// //                   />
// //                 ))
// //             ) : (
// //               <p>No bookings found.</p>
// //             )}
// //           </div>
// //         </TabsContent>

// //         <TabsContent value="completed">
// //           <div className="grid gap-6 sm:grid-cols-2">
// //             {employeeBookings?.filter((b) => b.status === "Completed").length > 0 ? (
// //               employeeBookings
// //                 .filter((booking) => booking.status === "Completed")
// //                 .map((booking) => (
// //                   <BookingCard
// //                     key={booking._id}
// //                     booking={booking}
// //                     onComplete={handleMarkAsCompleted}
// //                     onUpdateStatus={handleUpdateStatus}
// //                   />
// //                 ))
// //             ) : (
// //               <p>No completed bookings.</p>
// //             )}
// //           </div>
// //         </TabsContent>

// //         <TabsContent value="rejected">
// //           <div className="grid gap-6 sm:grid-cols-2">
// //             {employeeBookings?.filter((b) => b.status === "Rejected").length > 0 ? (
// //               employeeBookings
// //                 .filter((booking) => booking.status === "Rejected")
// //                 .map((booking) => (
// //                   <BookingCard
// //                     key={booking._id}
// //                     booking={booking}
// //                     onComplete={handleMarkAsCompleted}
// //                     onUpdateStatus={handleUpdateStatus}
// //                   />
// //                 ))
// //             ) : (
// //               <p>No rejected bookings.</p>
// //             )}
// //           </div>
// //         </TabsContent>
// //       </Tabs>
// //     </div>
// //   );
// // };

// // export default EmployeeBooking;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getEmployeeBookings,
  updateBookingStatus,
} from "../features/bookingSlice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { FaMapMarkerAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
const BookingCard = ({ booking, onComplete, onUpdateStatus }) => {
  const handleAccept = () => {
    onUpdateStatus(booking._id, "Accepted");
    toast.success("Booking accepted successfully!");
  };

  const handleReject = () => {
    onUpdateStatus(booking._id, "Rejected");
    toast.error("Booking rejected successfully!");
  };

  const renderCustomerCard = (booking) => (
    <div
      key={booking._id}
   className="flex flex-col items-center w-full p-6 mt-8 mb-6 border border-gray-300 rounded-lg shadow-lg md:flex-row md:items-start"
    >
      <div className="flex items-center">
  <img
    src={booking.customer?.image || "https://via.placeholder.com/150"}
    alt={booking.customer?.name || "Service"}
    className="object-cover w-40 h-40 mb-4 border-2 border-gray-200 rounded-lg shadow-lg md:mb-0 md:mr-6"
  />
</div>

      <div className="flex-1 text-center md:text-left">
        <h3 className="mb-2 text-2xl font-bold">
          {booking.customer?.name || "Customer Name"}
        </h3>
        
        <div className="flex flex-col items-start">
        <div className="flex items-center mb-2 space-x-2">
            <FaMapMarkerAlt className="text-indigo-400"  />
            <p>
          {booking.customer?.address1 || "Customer Address"}
        </p>
          </div>
        <div className="flex items-center mb-2 space-x-2">
            <MdOutlinePhoneInTalk className="text-indigo-400" />
            <p >
          {booking.customer?.phone || "Customer Phone"}
        </p>
          </div>
          <div className="flex items-center mb-2 space-x-2">
            <AiTwotoneMail className="text-indigo-400"  />
            <p >
          {booking.customer?.email || "Customer email"}
        </p>
          </div>

          <div className="flex items-center mb-2 space-x-2">
            <CalendarTodayIcon className="text-indigo-400"  />
            <p>{new Date(booking.date).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center mb-2 space-x-2">
            <AccessTimeIcon className="text-indigo-400" />
            <p>{booking.time}</p>
          </div>
        </div>
        {booking.status === "Pending" && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAccept}
              className="px-5 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="px-5 py-3 bg-[#7d66d9] text-white rounded-lg hover:bg-[#a38ae8]"
            >
              Reject
            </button>
          </div>
        )}
        {booking.status === "Accepted" && (
          <>
            <p className="mt-4 text-indigo-400">Accepted</p>
            <button
              onClick={() => onComplete(booking._id)}
              className="px-5 py-3 mt-2 text-white bg-indigo-700 rounded-lg hover:bg-indigo-500"
            >
              Mark as Completed
            </button>
          </>
        )}
        {booking.status === "Rejected" && (
          <p className="mt-4 text-red-400">Rejected</p>
        )}
        {booking.status === "Completed" && (
          <p className="mt-4 text-indigo-400">Completed</p>
        )}
      </div>
    </div>
  );

  return renderCustomerCard(booking);
};

const EmployeeBooking = () => {
  const dispatch = useDispatch();
  const { employeeBookings, loading, error } = useSelector(
    (state) => state.bookings
  );
  const employeeData = useSelector((state) => state.employeeRegister.employee);

  useEffect(() => {
    if (employeeData?._id) {
      dispatch(getEmployeeBookings(employeeData._id));
    }
  }, [dispatch, employeeData]);

  const handleMarkAsCompleted = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#f87171",
      confirmButtonText: "Yes, mark as completed!",
    });

    if (confirm.isConfirmed) {
      dispatch(updateBookingStatus({ bookingId: id, status: "Completed" }));
      Swal.fire(
        "Completed!",
        "The booking has been marked as completed.",
        "success"
      );
      toast.success("Booking marked as completed!");
    }
  };

  const handleUpdateStatus = async (id, status) => {
    const confirm = await Swal.fire({
      title: `Are you sure you want to ${status.toLowerCase()} this booking?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#f87171",
      confirmButtonText: `Yes, ${status.toLowerCase()} it!`,
    });

    if (confirm.isConfirmed) {
      dispatch(updateBookingStatus({ bookingId: id, status }));
      Swal.fire(
        "Updated!",
        `The booking has been ${status.toLowerCase()}.`,
        "success"
      );
      toast.info(`Booking ${status.toLowerCase()} successfully!`);
    }
  };

  if (loading) return <div>Loading your bookings...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container p-6 mx-auto mt-16">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">My Bookings</h2>
      <Tabs>
        <TabsList className="flex gap-4 p-2 bg-gray-100 rounded-md">
          <TabsTrigger
            value="booked"
            className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200"
          >
            Booked
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            value="rejected"
            className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200"
          >
            Rejected
          </TabsTrigger>
        </TabsList>

        <TabsContent value="booked">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {employeeBookings?.filter(
              (b) => b.status === "Pending" || b.status === "Accepted"
            ).length > 0 ? (
              employeeBookings
                .filter(
                  (booking) =>
                    booking.status === "Pending" ||
                    booking.status === "Accepted"
                )
                .map((booking) => (
                  <BookingCard
                    key={booking._id}
                    booking={booking}
                    onComplete={handleMarkAsCompleted}
                    onUpdateStatus={handleUpdateStatus}
                  />
                ))
            ) : (
              <p>No bookings found.</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {employeeBookings?.filter((b) => b.status === "Completed").length >
            0 ? (
              employeeBookings
                .filter((booking) => booking.status === "Completed")
                .map((booking) => (
                  <BookingCard
                    key={booking._id}
                    booking={booking}
                    onComplete={handleMarkAsCompleted}
                    onUpdateStatus={handleUpdateStatus}
                  />
                ))
            ) : (
              <p>No completed bookings found.</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="rejected">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {employeeBookings?.filter((b) => b.status === "Rejected").length >
            0 ? (
              employeeBookings
                .filter((booking) => booking.status === "Rejected")
                .map((booking) => (
                  <BookingCard
                    key={booking._id}
                    booking={booking}
                    onComplete={handleMarkAsCompleted}
                    onUpdateStatus={handleUpdateStatus}
                  />
                ))
            ) : (
              <p>No rejected bookings found.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmployeeBooking;



// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getEmployeeBookings,
//   updateBookingStatus,
// } from "../features/bookingSlice";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
// import Swal from "sweetalert2";
// import PropTypes from "prop-types";
// import { toast } from "react-toastify";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import { MdOutlinePhoneInTalk } from "react-icons/md";
// import { AiTwotoneMail } from "react-icons/ai";
// import { useTranslation } from "react-i18next";


// const BookingCard = ({ booking, onComplete, onUpdateStatus }) => {
//   const { t } = useTranslation();

//   const handleAccept = () => {
//     onUpdateStatus(booking._id, "Accepted");
//     toast.success(t("bookings.messages.acceptSuccess"));
//   };

//   const handleReject = () => {
//     onUpdateStatus(booking._id, "Rejected");
//     toast.error(t("bookings.messages.rejectSuccess"));
//   };

//   return (
//     <div
//       key={booking._id}
//       className="flex flex-col items-center w-full p-6 mt-8 mb-6 border border-gray-300 rounded-lg shadow-lg md:flex-row md:items-start"
//     >
//       <div className="flex items-center">
//         <img
//           src={booking.customer?.image || "https://via.placeholder.com/150"}
//           alt={booking.customer?.name || t("bookings.default.customerName")}
//           className="object-cover w-40 h-40 mb-4 border-2 border-gray-200 rounded-lg shadow-lg md:mb-0 md:mr-6"
//         />
//       </div>
//       <div className="flex-1 text-center md:text-left">
//         <h3 className="mb-2 text-2xl font-bold">
//           {booking.customer?.name || t("bookings.default.customerName")}
//         </h3>
//         <div className="flex flex-col items-start">
//           <div className="flex items-center mb-2 space-x-2">
//             <FaMapMarkerAlt className="text-indigo-400" />
//             <p>{booking.customer?.address1 || t("bookings.default.address")}</p>
//           </div>
//           <div className="flex items-center mb-2 space-x-2">
//             <MdOutlinePhoneInTalk className="text-indigo-400" />
//             <p>{booking.customer?.phone || t("bookings.default.phone")}</p>
//           </div>
//           <div className="flex items-center mb-2 space-x-2">
//             <AiTwotoneMail className="text-indigo-400" />
//             <p>{booking.customer?.email || t("bookings.default.email")}</p>
//           </div>
//           <div className="flex items-center mb-2 space-x-2">
//             <CalendarTodayIcon className="text-indigo-400" />
//             <p>{new Date(booking.date).toLocaleDateString()}</p>
//           </div>
//           <div className="flex items-center mb-2 space-x-2">
//             <AccessTimeIcon className="text-indigo-400" />
//             <p>{booking.time}</p>
//           </div>
//         </div>
//         {booking.status === t("bookings.statuses.pending") && (
//           <div className="flex gap-2 mt-4">
//             <button
//               onClick={handleAccept}
//               className="px-5 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
//             >
//               {t("bookings.actions.accept")}
//             </button>
//             <button
//               onClick={handleReject}
//               className="px-5 py-3 bg-[#7d66d9] text-white rounded-lg hover:bg-[#a38ae8]"
//             >
//               {t("bookings.actions.reject")}
//             </button>
//           </div>
//         )}
//         {booking.status === t("bookings.statuses.accepted") && (
//           <>
//             <p className="mt-4 text-indigo-400">{t("bookings.statuses.accepted")}</p>
//             <button
//               onClick={() => onComplete(booking._id)}
//               className="px-5 py-3 mt-2 text-white bg-indigo-700 rounded-lg hover:bg-indigo-500"
//             >
//               {t("bookings.actions.markAsCompleted")}
//             </button>
//           </>
//         )}
//         {booking.status === t("bookings.statuses.rejected") && (
//           <p className="mt-4 text-red-400">{t("bookings.statuses.rejected")}</p>
//         )}
//         {booking.status === t("bookings.statuses.completed") && (
//           <p className="mt-4 text-indigo-400">{t("bookings.statuses.completed")}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// const EmployeeBooking = () => {
//   const { t } = useTranslation();
//   const dispatch = useDispatch();
//   const { employeeBookings, loading, error } = useSelector((state) => state.bookings);
//   const employeeData = useSelector((state) => state.employeeRegister.employee);

//   useEffect(() => {
//     if (employeeData?._id) {
//       dispatch(getEmployeeBookings(employeeData._id));
//     }
//   }, [dispatch, employeeData]);

//   const handleMarkAsCompleted = async (id) => {
//     const confirm = await Swal.fire({
//       title: t("bookings.confirmation.markCompleted"),
//       text: t("bookings.messages.markCompletedWarning"),
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#4f46e5",
//       cancelButtonColor: "#f87171",
//       confirmButtonText: t("bookings.actions.markAsCompleted"),
//     });

//     if (confirm.isConfirmed) {
//       dispatch(updateBookingStatus({ bookingId: id, status: t("bookings.statuses.completed") }));
//       Swal.fire("Completed!", t("bookings.messages.completedSuccess"), "success");
//       toast.success(t("bookings.messages.completedSuccess"));
//     }
//   };

//   const handleUpdateStatus = async (id, status) => {
//     const confirm = await Swal.fire({
//       title: t(`bookings.confirmation.${status.toLowerCase()}`),
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#4f46e5",
//       cancelButtonColor: "#f87171",
//       confirmButtonText: t(`bookings.actions.${status.toLowerCase()}`),
//     });

//     if (confirm.isConfirmed) {
//       dispatch(updateBookingStatus({ bookingId: id, status }));
//       Swal.fire("Updated!", t(`bookings.messages.${status.toLowerCase()}Success`), "success");
//       toast.info(t(`bookings.messages.${status.toLowerCase()}Success`));
//     }
//   };

//   if (loading) return <div>{t("bookings.messages.loading")}</div>;
//   if (error) return <div>{t("bookings.messages.error")}: {error}</div>;

//   return (
//     <div className="container p-6 mx-auto mt-16">
//       <h2 className="mb-6 text-2xl font-bold text-gray-800">{t("bookings.title")}</h2>
//       <Tabs>
//         <TabsList className="flex gap-4 p-2 bg-gray-100 rounded-md">
//           <TabsTrigger value="booked" className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200">
//             {t("bookings.tabs.booked")}
//           </TabsTrigger>
//           <TabsTrigger value="completed" className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200">
//             {t("bookings.tabs.completed")}
//           </TabsTrigger>
//           <TabsTrigger value="rejected" className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200">
//             {t("bookings.tabs.rejected")}
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="booked">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {employeeBookings?.filter(
//               (b) => b.status === t("bookings.statuses.pending") || b.status === t("bookings.statuses.accepted")
//             ).length > 0 ? (
//               employeeBookings
//                 .filter((b) => b.status === t("bookings.statuses.pending") || b.status === t("bookings.statuses.accepted"))
//                 .map((booking) => (
//                   <BookingCard
//                     key={booking._id}
//                     booking={booking}
//                     onComplete={handleMarkAsCompleted}
//                     onUpdateStatus={handleUpdateStatus}
//                   />
//                 ))
//             ) : (
//               <p>{t("bookings.messages.noBookings")}</p>
//             )}
//           </div>
//         </TabsContent>

//         <TabsContent value="completed">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {employeeBookings?.filter((b) => b.status === t("bookings.statuses.completed")).length > 0 ? (
//               employeeBookings
//                 .filter((b) => b.status === t("bookings.statuses.completed"))
//                 .map((booking) => (
//                   <BookingCard
//                     key={booking._id}
//                     booking={booking}
//                     onComplete={handleMarkAsCompleted}
//                     onUpdateStatus={handleUpdateStatus}
//                   />
//                 ))
//             ) : (
//               <p>{t("bookings.messages.noCompletedBookings")}</p>
//             )}
//           </div>
//         </TabsContent>

//         <TabsContent value="rejected">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {employeeBookings?.filter((b) => b.status === t("bookings.statuses.rejected")).length > 0 ? (
//               employeeBookings
//                 .filter((b) => b.status === t("bookings.statuses.rejected"))
//                 .map((booking) => (
//                   <BookingCard
//                     key={booking._id}
//                     booking={booking}
//                     onComplete={handleMarkAsCompleted}
//                     onUpdateStatus={handleUpdateStatus}
//                   />
//                 ))
//             ) : (
//               <p>{t("bookings.messages.noRejectedBookings")}</p>
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default EmployeeBooking;
