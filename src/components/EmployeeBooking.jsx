
//8/2/25
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
// import DownloadReceipt from "./DownloadReceipt"; // Adjust path
// const BookingCard = ({ booking, onComplete, onUpdateStatus }) => {
//   const handleAccept = () => {
//     onUpdateStatus(booking._id, "Accepted");
//     toast.success("Booking accepted successfully!");
//   };

//   const handleReject = () => {
//     onUpdateStatus(booking._id, "Rejected");
//     toast.error("Booking rejected successfully!");
//   };

//   const renderCustomerCard = (booking) => (
//     <div
//       key={booking._id}
//    className="flex flex-col items-center w-full p-6 mt-8 mb-6 border border-gray-300 rounded-lg shadow-lg md:flex-row md:items-start"
//     >
//       <div className="flex items-center">
//   <img
//     src={booking.customer?.image || "https://via.placeholder.com/150"}
//     alt={booking.customer?.name || "Service"}
//     className="object-cover w-40 h-40 mb-4 border-2 border-gray-200 rounded-lg shadow-lg md:mb-0 md:mr-6"
//   />
// </div>

//       <div className="flex-1 text-center md:text-left">
//         <h3 className="mb-2 text-2xl font-bold">
//           {booking.customer?.name || "Customer Name"}
//         </h3>
        
//         <div className="flex flex-col items-start">
//         <div className="flex items-center mb-2 space-x-2">
//             <FaMapMarkerAlt className="text-indigo-400"  />
//             <p>
//           {booking.customer?.address1 || "Customer Address"}
//         </p>
//           </div>
//         <div className="flex items-center mb-2 space-x-2">
//             <MdOutlinePhoneInTalk className="text-indigo-400" />
//             <p >
//           {booking.customer?.phone || "Customer Phone"}
//         </p>
//           </div>
//           <div className="flex items-center mb-2 space-x-2">
//             <AiTwotoneMail className="text-indigo-400"  />
//             <p >
//           {booking.customer?.email || "Customer email"}
//         </p>
//           </div>

//           <div className="flex items-center mb-2 space-x-2">
//             <CalendarTodayIcon className="text-indigo-400"  />
//             <p>{new Date(booking.date).toLocaleDateString()}</p>
//           </div>
//           <div className="flex items-center mb-2 space-x-2">
//             <AccessTimeIcon className="text-indigo-400" />
//             <p>{booking.time}</p>
//           </div>
//           <DownloadReceipt bookingId={booking._id} />
//         </div>
//         {booking.status === "Pending" && (
//           <div className="flex gap-2 mt-4">
//             <button
//               onClick={handleAccept}
//               className="px-5 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
//             >
//               Accept
//             </button>
//             <button
//               onClick={handleReject}
//               className="px-5 py-3 bg-[#7d66d9] text-white rounded-lg hover:bg-[#a38ae8]"
//             >
//               Reject
//             </button>
//           </div>
//         )}
//         {booking.status === "Accepted" && (
//           <>
//             <p className="mt-4 text-indigo-400">Accepted</p>
//             <button
//               onClick={() => onComplete(booking._id)}
//               className="px-5 py-3 mt-2 text-white bg-indigo-700 rounded-lg hover:bg-indigo-500"
//             >
//               Mark as Completed
//             </button>
//           </>
//         )}
//         {booking.status === "Rejected" && (
//           <p className="mt-4 text-red-400">Rejected</p>
//         )}
//         {booking.status === "Completed" && (
//           <p className="mt-4 text-indigo-400">Completed</p>
//         )}
//       </div>
//     </div>
//   );

//   return renderCustomerCard(booking);
// };

// const EmployeeBooking = () => {
//   const dispatch = useDispatch();
//   const { employeeBookings, loading, error } = useSelector(
//     (state) => state.bookings
//   );
//   const employeeData = useSelector((state) => state.employeeRegister.employee);

//   useEffect(() => {
//     if (employeeData?._id) {
//       dispatch(getEmployeeBookings(employeeData._id));
//     }
//   }, [dispatch, employeeData]);

//   const handleMarkAsCompleted = async (id) => {
//     const confirm = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#4f46e5",
//       cancelButtonColor: "#f87171",
//       confirmButtonText: "Yes, mark as completed!",
//     });

//     if (confirm.isConfirmed) {
//       dispatch(updateBookingStatus({ bookingId: id, status: "Completed" }));
//       Swal.fire(
//         "Completed!",
//         "The booking has been marked as completed.",
//         "success"
//       );
//       toast.success("Booking marked as completed!");
//     }
//   };

//   const handleUpdateStatus = async (id, status) => {
//     const confirm = await Swal.fire({
//       title: `Are you sure you want to ${status.toLowerCase()} this booking?`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#4f46e5",
//       cancelButtonColor: "#f87171",
//       confirmButtonText: `Yes, ${status.toLowerCase()} it!`,
//     });

//     if (confirm.isConfirmed) {
//       dispatch(updateBookingStatus({ bookingId: id, status }));
//       Swal.fire(
//         "Updated!",
//         `The booking has been ${status.toLowerCase()}.`,
//         "success"
//       );
//       toast.info(`Booking ${status.toLowerCase()} successfully!`);
//     }
//   };

//   if (loading) return <div>Loading your bookings...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container p-6 mx-auto mt-16">
//       <h2 className="mb-6 text-2xl font-bold text-gray-800">My Bookings</h2>
//       <Tabs>
//         <TabsList className="flex gap-4 p-2 bg-gray-100 rounded-md">
//           <TabsTrigger
//             value="booked"
//             className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200"
//           >
//             Booked
//           </TabsTrigger>
//           <TabsTrigger
//             value="completed"
//             className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200"
//           >
//             Completed
//           </TabsTrigger>
//           <TabsTrigger
//             value="rejected"
//             className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200"
//           >
//             Rejected
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="booked">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {employeeBookings?.filter(
//               (b) => b.status === "Pending" || b.status === "Accepted"
//             ).length > 0 ? (
//               employeeBookings
//                 .filter(
//                   (booking) =>
//                     booking.status === "Pending" ||
//                     booking.status === "Accepted"
//                 )
//                 .map((booking) => (
//                   <BookingCard
//                     key={booking._id}
//                     booking={booking}
//                     onComplete={handleMarkAsCompleted}
//                     onUpdateStatus={handleUpdateStatus}
//                   />
//                 ))
//             ) : (
//               <p>No bookings found.</p>
//             )}
//           </div>
//         </TabsContent>

//         <TabsContent value="completed">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {employeeBookings?.filter((b) => b.status === "Completed").length >
//             0 ? (
//               employeeBookings
//                 .filter((booking) => booking.status === "Completed")
//                 .map((booking) => (
//                   <BookingCard
//                     key={booking._id}
//                     booking={booking}
//                     onComplete={handleMarkAsCompleted}
//                     onUpdateStatus={handleUpdateStatus}
//                   />
//                 ))
//             ) : (
//               <p>No completed bookings found.</p>
//             )}
//           </div>
//         </TabsContent>

//         <TabsContent value="rejected">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {employeeBookings?.filter((b) => b.status === "Rejected").length >
//             0 ? (
//               employeeBookings
//                 .filter((booking) => booking.status === "Rejected")
//                 .map((booking) => (
//                   <BookingCard
//                     key={booking._id}
//                     booking={booking}
//                     onComplete={handleMarkAsCompleted}
//                     onUpdateStatus={handleUpdateStatus}
//                   />
//                 ))
//             ) : (
//               <p>No rejected bookings found.</p>
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default EmployeeBooking;




import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getEmployeeBookings,
  updateBookingStatus,
  fetchBookingById,
} from "../features/bookingSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import DownloadReceipt from "./DownloadReceipt"; // Adjust path
import { SiChatbot } from "react-icons/si";
const BookingCard = ({ booking, onComplete, onUpdateStatus }) => {
  const handleAccept = () => {
    onUpdateStatus(booking._id, "Accepted");
    toast.success("Booking accepted successfully!");
  };
 const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const handleReject = () => {
    onUpdateStatus(booking._id, "Rejected");
    toast.error("Booking rejected successfully!");
  };

  const renderCustomerCard = (booking) => (
    <div
      key={booking._id}
   className={`flex flex-col items-center w-full p-6 mt-8 mb-6 border border-gray-300 rounded-lg shadow-lg md:flex-row md:items-start ${isDarkMode ? "bg-gray-900 text-white border-[#000000]" : "bg-white text-gray-800"}
   `}
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
          <DownloadReceipt bookingId={booking._id} />
        </div>
        {booking.status === "Pending" && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAccept}
              className="px-5 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              Accept
            </button>
            <Link
  to={`/user/booking/detail/${booking._id}`}
  className="flex items-center justify-center w-auto gap-2 px-4 py-2 text-white transition-all bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 active:scale-95"
>
  <SiChatbot className={`text-lg ${isDarkMode ? "text-yellow-500" : "text-indigo-200"}`} />
  Live Chat
</Link>

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
       <Link
  to={`/user/booking/detail/${booking._id}`}
  className="inline-flex items-center gap-2 px-2 py-1 mt-2 text-white transition-all bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 active:scale-95"
>
  <SiChatbot className={`text-lg ${isDarkMode ? "text-yellow-500" : "text-indigo-200"}`} />
  Live Chat
</Link>


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
  const navigate = useNavigate();
    const { bookingId } = useParams();
  const { employeeBookings, loading, error } = useSelector(
    (state) => state.bookings
  );
  
  
  const employeeData = useSelector((state) => state.employeeRegister.employee);
 // Fetch booking details if bookingId is available
  useEffect(() => {
    if (bookingId) {
      dispatch(fetchBookingById(bookingId));
    }
  }, [dispatch, bookingId]);
  
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
 const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  if (loading) return <div>Loading your bookings...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
    className={`w-full min-h-screen p-6 mx-auto mt-16 
      ${isDarkMode ? "bg-gray-900 text-white border-[#000000]" : "bg-white text-gray-800"}
    `}
  >
  
  
  <h2
  className={`mb-6 text-2xl font-bold transition-colors duration-300 ${
    isDarkMode ? "text-indigo-400" : "text-gray-800"
  }`}
>
  My Bookings
</h2>

      <Tabs>
      <TabsList
  className={`flex gap-4 p-2 rounded-md transition-colors duration-300 ${
    isDarkMode ? "bg-gray-900 text-white border-gray-700" : "bg-gray-100 text-gray-900 border-gray-300"
  }`}
>
  <TabsTrigger
    value="booked"
    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
      isDarkMode
        ? "text-white bg-gray-700 hover:bg-gray-600"
        : "text-gray-800 hover:bg-gray-200"
    }`}
  >
    Booked
  </TabsTrigger>
  <TabsTrigger
    value="completed"
    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
      isDarkMode
        ? "text-white bg-gray-700 hover:bg-gray-600"
        : "text-gray-800 hover:bg-gray-200"
    }`}
  >
    Completed
  </TabsTrigger>
  <TabsTrigger
    value="rejected"
    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
      isDarkMode
        ? "text-white bg-gray-700 hover:bg-gray-600"
        : "text-gray-800 hover:bg-gray-200"
    }`}
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


