// import { Box, Avatar, IconButton } from "@mui/material";
// import { FaUserMd, FaCalendarCheck, FaUser } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import { GiArchiveRegister } from "react-icons/gi";
// import { PiUsersDuotone } from "react-icons/pi";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// export default function Dashboard() {
//   // const appointments = [
//   //   { name: "Dr. Richard James", date: "24th July, 2024", picture: "/path/to/avatar.jpg" },
//   //   // ...other appointments
//   // ];

//   const location = useLocation(); // Track the current location

//   return (
//     <Box className="flex h-screen mt-8 bg-gray-100">
//       {/* Sidebar */}
//       <Box className="w-1/5 p-5 text-white bg-gradient-to-b from-indigo-600 to-indigo-800">
//         <div className="mb-8 text-2xl font-bold">House Service</div>
//         <nav className="space-y-4">
//           <Link to="/dashboard" className={`flex items-center space-x-3 p-2 rounded ${location.pathname === "/dashboard" ? "bg-indigo-700" : "hover:bg-indigo-700"}`}>
//             <TbLayoutDashboardFilled className="text-xl" />
//             <span>Dashboard</span>
//           </Link>
//           <Link to="/dashboard/all-appointements" className={`flex items-center space-x-3 p-2 rounded ${location.pathname === "/dashboard/all-appointements" ? "bg-indigo-700" : "hover:bg-indigo-700"}`}>
//             <FaCalendarCheck className="text-xl" />
//             <span>All Appointments</span>
//           </Link>
//           <Link to="/dashboard/add-users" className={`flex items-center space-x-3 p-2 rounded ${location.pathname === "/dashboard/add-users" ? "bg-indigo-700" : "hover:bg-indigo-700"}`}>
//             <GiArchiveRegister className="text-xl" />
//             <span>Add Users</span>
//           </Link>
//           <Link to="/dashboard/all-users" className={`flex items-center space-x-3 p-2 rounded ${location.pathname === "/dashboard/all-users" ? "bg-indigo-700" : "hover:bg-indigo-700"}`}>
//             <PiUsersDuotone className="text-xl" />
//             <span>User List</span>
//           </Link>
//           <Link to="/dashboard/all-customers" className={`flex items-center space-x-3 p-2 rounded ${location.pathname === "/dashboard/all-customers" ? "bg-indigo-700" : "hover:bg-indigo-700"}`}>
//             <RiCustomerService2Line className="text-xl" />
//             <span>Customer List</span>
//           </Link>
//         </nav>
//       </Box>

//       {/* Main Content */}
//       <Box className="flex-1 p-6">
//         {/* Overview Cards */}
//         <div className="grid grid-cols-3 gap-6 mb-8">
//           <div className="p-5 text-center bg-white rounded-lg shadow-lg">
//             <FaUserMd className="mb-3 text-4xl text-indigo-500" />
//             <h3 className="text-xl font-semibold">10 Employee</h3>
//           </div>
//           <div className="p-5 text-center bg-white rounded-lg shadow-lg">
//             <FaCalendarCheck className="mb-3 text-4xl text-indigo-500" />
//             <h3 className="text-xl font-semibold">2 Appointments</h3>
//           </div>
//           <div className="p-5 text-center bg-white rounded-lg shadow-lg">
//             <FaUser className="mb-3 text-4xl text-indigo-500" />
//             <h3 className="text-xl font-semibold">5 Customers</h3>
//           </div>
//         </div>

//         {/* Latest Appointments */}
//         {/* <div className="p-5 mb-8 bg-white rounded-lg shadow-lg">
//           <h2 className="mb-4 text-lg font-semibold">Latest Appointments</h2>
//           <div className="space-y-3">
//             {appointments.map((appointment, index) => (
//               <div key={index} className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100">
//                 <div className="flex items-center space-x-3">
//                   <Avatar src={appointment.picture} alt={appointment.name} />
//                   <div>
//                     <p className="font-semibold">{appointment.name}</p>
//                     <p className="text-sm text-gray-500">Booking on {appointment.date}</p>
//                   </div>
//                 </div>
//                 <IconButton>
//                   <MdDelete className="text-red-500" />
//                 </IconButton>
//               </div>
//             ))}
//           </div> */}
//         {/* </div> */}

//         {/* Component Rendering */}
//         <Outlet />
//       </Box>
//     </Box>
//   );
// }
import React from "react";
import { Box, Avatar, IconButton } from "@mui/material";
import { FaUserMd, FaCalendarCheck, FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import { PiUsersDuotone } from "react-icons/pi";
import { TbLayoutDashboardFilled } from "react-icons/tb";

export default function Dashboard() {
  const location = useLocation();

  return (
    <Box className="flex flex-col h-screen mt-8 bg-gray-100 md:flex-row">
      {/* Sidebar */}
      <Box className="w-full md:w-1/5 p-5 text-white bg-gradient-to-b from-[#7d66d9] to-[#5b5bd6]">
        <div className="mb-8 text-2xl font-bold">House Service</div>
        <nav className="space-y-4">
          <Link
            to="/dashboard"
            className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
              location.pathname === "/dashboard"
                ? "bg-[#5b5bd6] shadow-lg"
                : "hover:bg-[#5b5bd6]"
            }`}
          >
            <TbLayoutDashboardFilled className="text-xl" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/dashboard/all-appointements"
            className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
              location.pathname === "/dashboard/all-appointements"
                ? "bg-[#5b5bd6] shadow-lg"
                : "hover:bg-[#5b5bd6]"
            }`}
          >
            <FaCalendarCheck className="text-xl" />
            <span>All Appointments</span>
          </Link>
          <Link
            to="/dashboard/add-users"
            className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
              location.pathname === "/dashboard/add-users"
                ? "bg-[#5b5bd6] shadow-lg"
                : "hover:bg-[#5b5bd6]"
            }`}
          >
            <GiArchiveRegister className="text-xl" />
            <span>Add Users</span>
          </Link>
          <Link
            to="/dashboard/all-users"
            className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
              location.pathname === "/dashboard/all-users"
                ? "bg-[#5b5bd6] shadow-lg"
                : "hover:bg-[#5b5bd6]"
            }`}
          >
            <PiUsersDuotone className="text-xl" />
            <span>User List</span>
          </Link>
          <Link
            to="/dashboard/all-customers"
            className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-300 ${
              location.pathname === "/dashboard/all-customers"
                ? "bg-[#5b5bd6] shadow-lg"
                : "hover:bg-[#5b5bd6]"
            }`}
          >
            <RiCustomerService2Line className="text-xl" />
            <span>Customer List</span>
          </Link>
        </nav>
      </Box>

      {/* Main Content */}
      <Box className="flex-1 p-6 overflow-y-auto">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-5 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
            <FaUserMd className="mb-3 text-4xl text-[#7d66d9]" />
            <h3 className="text-xl font-semibold">10 Employee</h3>
          </div>
          <div className="p-5 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
            <FaCalendarCheck className="mb-3 text-4xl text-[#7d66d9]" />
            <h3 className="text-xl font-semibold">2 Appointments</h3>
          </div>
          <div className="p-5 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
            <FaUser className="mb-3 text-4xl text-[#7d66d9]" />
            <h3 className="text-xl font-semibold">5 Customers</h3>
          </div>
        </div>

        {/* Dynamic Component Rendering */}
        <Outlet />
      </Box>
    </Box>
  );
}
