// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { markAsCompleted } from '../features/bookingSlice'; // Import action
// import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icon for completed
// import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Icon for time
// import BusinessIcon from '@mui/icons-material/Business'; // Icon for business

// function MyBooking() {
//   const dispatch = useDispatch();
//   const booked = useSelector((state) => state.bookings.booked);
//   const completed = useSelector((state) => state.bookings.completed);

//   return (
//     <div className="p-5">
//       <h2 className="text-3xl font-bold mb-4 text-[#7d66d9]">My Bookings</h2>

//       {/* Booked Services Section */}
//       <div>
//         <h3 className="text-xl font-bold mt-4 text-[#7d66d9]">Booked Services</h3>
//         <ul className="space-y-4">
//           {booked.map((booking, index) => (
//             <li key={index} className="border border-gray-300 rounded-lg p-4 shadow-md">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={booking.image}
//                   alt={booking.businessCategory}
//                   className="w-16 h-16 rounded-full"
//                 />
//                 <div>
//                   <h4 className="text-lg font-bold">{booking.businessCategory}</h4>
//                   <p className="text-sm text-gray-600">{booking.address}</p>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <p className="flex items-center">
//                   <AccessTimeIcon className="mr-2" /> {booking.date.toDateString()} - {booking.time}
//                 </p>
//                 <p className="flex items-center">
//                   <BusinessIcon className="mr-2" /> {booking.userName} ({booking.email})
//                 </p>
//               </div>
//               <button
//                 onClick={() => dispatch(markAsCompleted({ id: booking.businessId }))}
//                 className="text-white bg-[#818cf8] hover:bg-[#9b9ef0] mt-3 p-2 rounded"
//               >
//                 Mark as Completed
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Completed Services Section */}
//       <div>
//         <h3 className="text-xl font-bold mt-6 text-[#7d66d9]">Completed Services</h3>
//         <ul className="space-y-4">
//           {completed.map((booking, index) => (
//             <li key={index} className="border border-gray-300 rounded-lg p-4 shadow-md">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={booking.image}
//                   alt={booking.businessCategory}
//                   className="w-16 h-16 rounded-full"
//                 />
//                 <div>
//                   <h4 className="text-lg font-bold">{booking.businessCategory}</h4>
//                   <p className="text-sm text-gray-600">{booking.address}</p>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <p className="flex items-center">
//                   <AccessTimeIcon className="mr-2" /> {booking.date.toDateString()} - {booking.time}
//                 </p>
//                 <p className="flex items-center">
//                   <BusinessIcon className="mr-2" /> {booking.userName} ({booking.email})
//                 </p>
//               </div>
//               <div className="mt-2 flex items-center text-green-600">
//                 <CheckCircleIcon className="mr-2" /> Completed
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default MyBooking;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { markAsCompleted } from "../features/bookingSlice"; // Import action
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import BusinessIcon from "@mui/icons-material/Business";

// function MyBooking() {
//   const dispatch = useDispatch();
//   const booked = useSelector((state) => state.bookings.booked);
//   const completed = useSelector((state) => state.bookings.completed);

//   return (
//     <div className="p-5">
//       <h2 className="text-3xl font-bold mb-4 text-[#7d66d9]">My Bookings</h2>

//       {/* Tabs for Booked and Completed Services */}
//       <Tabs defaultValue="booked" className="w-full">
//         <TabsList className="w-full justify-start mb-4">
//           <TabsTrigger value="booked">Booked Services</TabsTrigger>
//           <TabsTrigger value="completed">Completed Services</TabsTrigger>
//         </TabsList>

//         {/* Booked Services Section */}
//         <TabsContent value="booked">
//           <h3 className="text-xl font-bold mt-4 text-[#7d66d9]">
//             Booked Services
//           </h3>
//           <ul className="space-y-4">
//             {booked.map((booking, index) => (
//               <li
//                 key={index}
//                 className="border border-gray-300 rounded-lg p-4 shadow-md"
//               >
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={booking.image}
//                     alt={booking.businessCategory}
//                     className="w-16 h-16 rounded-full"
//                   />
//                   <div className="flex items-center mb-4 text-lg text-gray-700">
//                   <h4 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//                       {booking.businessCategory}
//                     </h4>
//                     <p className="text-sm text-gray-600">{booking.address}</p>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <p className="flex items-center">
//                     <AccessTimeIcon className="mr-2" />
//                     {new Date(booking.date).toDateString()} - {booking.time}
//                   </p>
//                   <p className="flex items-center">
//                     <BusinessIcon className="mr-2" /> {booking.userName} (
//                     {booking.email})
//                   </p>
//                 </div>
//                 <button
//                   onClick={() =>
//                     dispatch(markAsCompleted({ id: booking.businessId }))
//                   }
//                   className="text-white bg-[#818cf8] hover:bg-[#9b9ef0] mt-3 p-2 rounded"
//                 >
//                   Mark as Completed
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </TabsContent>

//         {/* Completed Services Section */}
//         <TabsContent value="completed">
//           <h3 className="text-xl font-bold mt-4 text-[#7d66d9]">
//             Completed Services
//           </h3>
//           <ul className="space-y-4">
//             {completed.map((booking, index) => (
//               <li
//                 key={index}
//                 className="border border-gray-300 rounded-lg p-4 shadow-md"
//               >
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={booking.image}
//                     alt={booking.businessCategory}
//                     className="w-16 h-16 rounded-full"
//                   />
//                   <div>
//                     <h4 className="text-lg font-bold">
//                       {booking.businessCategory}
//                     </h4>
//                     <p className="text-sm text-gray-600">{booking.address}</p>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <p className="flex items-center">
//                     <AccessTimeIcon className="mr-2" />
//                     {new Date(booking.date).toDateString()} - {booking.time}
//                   </p>
//                   <p className="flex items-center">
//                     <BusinessIcon className="mr-2" /> {booking.userName} (
//                     {booking.email})
//                   </p>
//                 </div>
//                 <div className="mt-2 flex items-center text-green-600">
//                   <CheckCircleIcon className="mr-2" /> Completed
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

// export default MyBooking;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { markAsCompleted } from "../features/bookingSlice"; // Import action
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import { FaMapMarkerAlt } from "react-icons/fa"; // Import location icon
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Import date icon
// import PersonIcon from "@mui/icons-material/Person"; // Import profile icon

// function MyBooking() {
//   const dispatch = useDispatch();
//   const booked = useSelector((state) => state.bookings.booked);
//   const completed = useSelector((state) => state.bookings.completed);

//   return (
//     <div className="p-5 mt-8">
//       <h2 className="text-3xl font-bold mb-4 text-[#7d66d9]">My Bookings</h2>

//       {/* Tabs for Booked and Completed Services */}
//       <Tabs defaultValue="booked" className="w-full">
//         <TabsList className="w-full justify-start mb-4">
//           <TabsTrigger value="booked">Booked Services</TabsTrigger>
//           <TabsTrigger value="completed">Completed Services</TabsTrigger>
//         </TabsList>

//         {/* Booked Services Section */}
//         <TabsContent value="booked">
//           <h3 className="text-xl font-bold mt-4 text-[#7d66d9]">
//             Booked Services
//           </h3>
//           <ul className="space-y-4">
//             {booked.map((booking, index) => (
//               <li
//                 key={index}
//                 className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col"
//               >
//                 <div className="flex mt-4 mb-6 justify-">
//                   <img
//                     src={booking.image}
//                     alt={booking.businessCategory}
//                     className="object-cover w-40 h-40 rounded-full shadow-lg"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   {/* Category */}
//                   <div className="flex items-center">
//                     <span className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//                       {booking.businessCategory}
//                     </span>
//                   </div>
//                   {/* Name */}
//                   <div className="flex items-center space-x-2">
//                     <div className="bg-indigo-100 rounded-full p-2">
//                       <PersonIcon className="text-indigo-400" />
//                     </div>
//                     <p className="text-gray-800 font-semibold">
//                       {booking.userName}
//                     </p>
//                   </div>
//                   {/* Location */}
//                   <div className="flex items-center space-x-2">
//                     <div className="bg-indigo-100 rounded-full p-2">
//                       <FaMapMarkerAlt className="text-indigo-400" />
//                     </div>
//                     <p className="text-gray-600">{booking.address}</p>
//                   </div>
//                   {/* Date */}
//                   <div className="flex items-center space-x-2">
//                     <div className="bg-indigo-100 rounded-full p-2">
//                       <CalendarTodayIcon className="text-indigo-400" />
//                     </div>
//                     <p className="text-gray-600">
//                       {new Date(booking.date).toDateString()}
//                     </p>
//                   </div>
//                   {/* Time */}
//                   <div className="flex items-center space-x-2">
//                     <div className="bg-indigo-100 rounded-full p-2">
//                       <AccessTimeIcon className="text-indigo-400" />
//                     </div>
//                     <p className="text-gray-600">{booking.time}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() =>
//                     dispatch(markAsCompleted({ id: booking.businessId }))
//                   }
//                   className="text-white bg-[#818cf8] hover:bg-[#9b9ef0] mt-3 p-2 rounded"
//                 >
//                   Mark as Completed
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </TabsContent>

//         {/* Completed Services Section */}
//         <TabsContent value="completed">
//           <h3 className="text-xl font-bold mt-4 text-[#7d66d9]">
//             Completed Services
//           </h3>
//           <ul className="space-y-4">
//             {completed.map((booking, index) => (
//               <li
//                 key={index}
//                 className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col"
//               >
//                 <img
//                   src={booking.image}
//                   alt={booking.businessCategory}
//                   className="w-full h-32 object-cover rounded-lg mb-4"
//                 />
//                 <div className="space-y-2">
//                   {/* Category */}
//                   <div className="flex items-center">
//                     <span className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//                       {booking.businessCategory}
//                     </span>
//                   </div>
//                   {/* Name */}
//                   <div className="flex items-center space-x-2">
//                     <div className="bg-indigo-100 rounded-full p-2">
//                       <PersonIcon className="text-indigo-400" />
//                     </div>
//                     <p className="text-gray-800 font-semibold">
//                       {booking.userName}
//                     </p>
//                   </div>
//                   {/* Location */}
//                   <div className="flex items-center space-x-2">
//                     <div className="bg-indigo-100 rounded-full p-2">
//                       <FaMapMarkerAlt className="text-indigo-400" />
//                     </div>
//                     <p className="text-gray-600">{booking.address}</p>
//                   </div>
//                   {/* Date */}
//                   <div className="flex items-center space-x-2">
//                     <div className="bg-indigo-100 rounded-full p-2">
//                       <CalendarTodayIcon className="text-indigo-400" />
//                     </div>
//                     <p className="text-gray-600">
//                       {new Date(booking.date).toDateString()}
//                     </p>
//                   </div>
//                   {/* Time */}
//                   <div className="flex items-center space-x-2">
//                     <div className="bg-indigo-100 rounded-full p-2">
//                       <AccessTimeIcon className="text-indigo-400" />
//                     </div>
//                     <p className="text-gray-600">{booking.time}</p>
//                   </div>
//                 </div>
//                 <div className="mt-2 flex items-center text-green-600">
//                   <CheckCircleIcon className="mr-2" /> Completed
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

// export default MyBooking;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markAsCompleted } from "../features/bookingSlice";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./TabsExample";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FaMapMarkerAlt } from "react-icons/fa";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

function MyBooking() {
  const dispatch = useDispatch();
  const booked = useSelector((state) => state.bookings.booked);
  const completed = useSelector((state) => state.bookings.completed);

  return (
    <div className="p-5 mt-8">
      <h2 className="text-3xl font-bold mb-4 text-[#7d66d9]">My Bookings</h2>

      {/* Tabs for Booked and Completed Services */}
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full justify-start mb-4">
          <TabsTrigger value="booked">Booked Services</TabsTrigger>
          <TabsTrigger value="completed">Completed Services</TabsTrigger>
        </TabsList>

        {/* Booked Services Section */}
        <TabsContent value="booked">
          <h3 className="text-xl font-bold mt-4 text-[#7d66d9]">Booked Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {booked.map((booking, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col items-center">
                <img
                  src={booking.image}
                  alt={booking.businessCategory}
                  className="object-cover w-24 h-24 rounded-full shadow-lg mb-4"
                />
                <div className="text-center space-y-2">
                  <span className="bg-purple-200 text-primary rounded-full px-2 text-[12px] font-medium">
                    {booking.businessCategory}
                  </span>
                  <div className="flex items-center space-x-2">
                    <PersonIcon className="text-indigo-400" />
                    <p className="text-gray-800 font-semibold">{booking.userName}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-indigo-400" />
                    <p className="text-gray-600 text-sm">{booking.address}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarTodayIcon className="text-indigo-400" />
                    <p className="text-gray-600 text-sm">Service on:<span className="text-gray-800 font-semibold">{new Date(booking.date).toDateString()}</span></p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AccessTimeIcon className="text-indigo-400" />
                    <p className="text-gray-600 text-sm">Service on:<span className="text-gray-800 font-semibold">{booking.time}</span></p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(markAsCompleted({ id: booking.businessId }))}
                  className="text-white bg-[#818cf8] hover:bg-[#9b9ef0] mt-4 p-2 rounded w-full"
                >
                  Mark as Completed
                </button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Completed Services Section */}
        <TabsContent value="completed">
          <h3 className="text-xl font-bold mt-4 text-[#7d66d9]">Completed Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {completed.map((booking, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col items-center">
                <img
                  src={booking.image}
                  alt={booking.businessCategory}
                  className="object-cover w-24 h-24 rounded-full shadow-lg mb-4"
                />
                <div className="text-center space-y-2">
                  <span className="bg-purple-200 text-primary rounded-full px-2 text-[12px] font-medium">
                    {booking.businessCategory}
                  </span>
                  <div className="flex items-center space-x-2">
                    <PersonIcon className="text-indigo-400" />
                    <p className="text-gray-800 font-semibold">{booking.userName}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-indigo-400" />
                    <p className="text-gray-600 text-sm">{booking.address}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarTodayIcon className="text-indigo-400" />
                    <p className="text-gray-600 text-sm">{new Date(booking.date).toDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AccessTimeIcon className="text-indigo-400" />
                    <p className="text-gray-600 text-sm">{booking.time}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-green-600">
                  <CheckCircleIcon className="mr-2" /> Completed
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;
