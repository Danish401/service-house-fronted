// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DataGrid } from "@mui/x-data-grid";
// import Avatar from "@mui/material/Avatar";
// import { Box } from "@mui/material";
// import { getAllBookings } from "../features/bookingSlice";

// const combinedColumns = [
//   {
//     field: "customerPicture",
//     headerName: "Customer",
//     width: 100,
//     renderCell: (params) => (
//       <Avatar alt={params.row.name} src={params.row.picture} />
//     ),
//   },
//   {
//     field: "serviceIcon",
//     headerName: "Service Provider",
//     width: 100,
//     renderCell: (params) => (
//       <Avatar alt={params.row.serviceName} src={params.row.icon} />
//     ),
//   },
//   { field: "name", headerName: "Customer Name", width: 150 },
//   { field: "serviceName", headerName: "Employee Name", width: 150 },
//   { field: "location", headerName: "Location", width: 200 },
//   { field: "customerLocation", headerName: "Customer Location", width: 200 },
//   { field: "customerContact", headerName: "Customer Contact", width: 200 },
//   { field: "employeeContact", headerName: "Employee Contact", width: 200 },
//   { field: "category", headerName: "Category", width: 120 },
//   { field: "speciality", headerName: "Speciality", width: 200 },
//   { field: "bookedBy", headerName: "Booked By", width: 150 },
//   { field: "date", headerName: "Date", width: 150 },
//   { field: "time", headerName: "Time", width: 150 },
//   { field: "status", headerName: "Status", width: 150 },
// ];

// export default function AllAppointments() {
//   const dispatch = useDispatch();

//   const { allbookings: bookings, loading, error, isDarkMode } = useSelector(
//     (state) => state.bookings
//   );

//   useEffect(() => {
//     dispatch(getAllBookings());
//   }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error loading data: {error}</div>;

//   // Combine rows with additional fields and sort by date and time
//   const combinedRows = [];
//   bookings?.forEach((booking) => {
//     const { customer, employee, _id, date, time, status } = booking; // Using booking's unique `_id`
//     if (customer && employee) {
//       combinedRows.push({
//         id: _id, // Unique booking ID
//         icon: employee.image,
//         picture: customer.image,
//         name: customer.name,
//         serviceName: employee.name,
//         location: employee.address1,
//         customerLocation: customer.address1,
//         customerContact: customer.phone,
//         employeeContact: employee.phone,
//         category: employee.category,
//         speciality: employee.speciality,
//         bookedBy: customer.name,
//         date,
//         time,
//         status,
//       });
//     }
//   });

//   // Sort rows by date and time
//   combinedRows.sort((a, b) => {
//     const dateA = new Date(a.date);
//     const dateB = new Date(b.date);

//     if (dateA.getTime() !== dateB.getTime()) {
//       return dateA - dateB;
//     }

//     const timeA = new Date(`1970-01-01T${a.time}`);
//     const timeB = new Date(`1970-01-01T${b.time}`);

//     return timeA - timeB;
//   });

//   // Apply dark mode styling if enabled
//   const gridStyles = {
//     backgroundColor: isDarkMode ? "#333" : "#fff",
//     color: isDarkMode ? "#fff" : "#000",
//   };

//   return (
//     <Box sx={{ height: 600, width: "100%" }}>
//       <h2 style={{ color: isDarkMode ? "#fff" : "#000" }}>All Appointments</h2>
//       <DataGrid
//         rows={combinedRows}
//         columns={combinedColumns}
//         pageSize={5}
//         rowsPerPageOptions={[5, 10, 20]}
//         checkboxSelection
//         disableSelectionOnClick
//         sx={{
//           "& .MuiDataGrid-cell": {
//             backgroundColor: isDarkMode ? "#1f2937" : "#fff",  // Cell background color
//             color: isDarkMode ? "#fff" : "#000",  // Text color based on dark mode
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: isDarkMode ? "#1f2937" : "#f1f1f1",  // Header background
//             color: isDarkMode ? "#1f2937" : "#000",  // Header text color
//           },
//           "& .MuiDataGrid-footerContainer": {
//             backgroundColor: isDarkMode ? "#555" : "#f1f1f1",  // Footer background
//           },
//         }}
//       />
//     </Box>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { DataGrid } from "@mui/x-data-grid";
// import Avatar from "@mui/material/Avatar";
// import {
//   Box,
//   Button,
//   Modal,
//   Select,
//   MenuItem,
//   Typography,
// } from "@mui/material";
// import { getAllBookings, updateBookingStatus } from "../features/bookingSlice";

// const columns = [
//   {
//     field: "customerPicture",
//     headerName: "Customer",
//     width: 100,
//     renderCell: (params) => (
//       <Avatar alt={params.row.name} src={params.row.picture} />
//     ),
//   },
//   {
//     field: "serviceIcon",
//     headerName: "Service Provider",
//     width: 100,
//     renderCell: (params) => (
//       <Avatar alt={params.row.serviceName} src={params.row.icon} />
//     ),
//   },
//   { field: "name", headerName: "Customer Name", width: 150 },
//   { field: "serviceName", headerName: "Employee Name", width: 150 },
//   { field: "location", headerName: "Location", width: 200 },
//   { field: "customerLocation", headerName: "Customer Location", width: 200 },
//   { field: "customerContact", headerName: "Customer Contact", width: 200 },
//   { field: "employeeContact", headerName: "Employee Contact", width: 200 },
//   { field: "category", headerName: "Category", width: 120 },
//   { field: "speciality", headerName: "Speciality", width: 200 },
//   { field: "bookedBy", headerName: "Booked By", width: 150 },
//   { field: "date", headerName: "Date", width: 150 },
//   { field: "time", headerName: "Time", width: 150 },
//   { field: "status", headerName: "Status", width: 150 },
// ];

// export default function AllAppointments() {
//   const dispatch = useDispatch();
//   const {
//     allbookings: bookings,
//     loading,
//     error,
//     isDarkMode,
//   } = useSelector((state) => state.bookings);

//   const [open, setOpen] = useState(false);
//   const [bookingId, setBookingId] = useState(null);
//   const [status, setStatus] = useState("");

//   useEffect(() => {
//     dispatch(getAllBookings());
//   }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error loading data: {error}</div>;

//   // Handle row click to open modal and set booking ID
//   const handleRowClick = (params) => {
//     const booking = bookings.find((b) => b._id === params.row.id);
//     if (!booking) return;

//     setBookingId(booking._id); // Extract booking ID
//     setStatus(booking.status);
//     setOpen(true);
//   };

//   // Handle status update
//   const handleUpdateStatus = () => {
//     if (!bookingId) return;
  
//     dispatch(updateBookingStatus({ bookingId, status })); // Fix: Use correct key
//     setOpen(false);
//   };
  

//   // Prepare table rows
//   const rows = bookings?.map((booking) => ({
//     id: booking._id, // Extract bookingId from `_id`
//     icon: booking.employee?.image,
//     picture: booking.customer?.image,
//     name: booking.customer?.name,
//     serviceName: booking.employee?.name,
//     location: booking.employee?.address1,
//     customerLocation: booking.customer?.address1,
//     customerContact: booking.customer?.phone,
//     employeeContact: booking.employee?.phone,
//     category: booking.employee?.category,
//     speciality: booking.employee?.speciality,
//     bookedBy: booking.customer?.name,
//     date: booking.date,
//     time: booking.time,
//     status: booking.status,
//   }));

//   return (
//     <Box sx={{ height: 600, width: "100%" }}>
//       <h2 style={{ color: isDarkMode ? "#fff" : "#000" }}>All Appointments</h2>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5, 10, 20]}
//         checkboxSelection
//         disableSelectionOnClick
//         onRowClick={handleRowClick}
//         sx={{
//           "& .MuiDataGrid-cell": {
//             backgroundColor: isDarkMode ? "#1f2937" : "#fff",
//             color: isDarkMode ? "#fff" : "#000",
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: isDarkMode ? "#1f2937" : "#f1f1f1",
//             color: isDarkMode ? "#1f2937" : "#000",
//           },
//           "& .MuiDataGrid-footerContainer": {
//             backgroundColor: isDarkMode ? "#555" : "#f1f1f1",
//           },
//         }}
//       />

//       {/* Floating UI (Modal) */}
//       <Modal open={open} onClose={() => setOpen(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: "10px",
//           }}
//         >
//           <Typography variant="h6">Update Booking Status</Typography>
//           <Select
//             fullWidth
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             sx={{ mt: 2 }}
//           >
//             <MenuItem value="Pending">Pending</MenuItem>
//             <MenuItem value="Accepted">Accepted</MenuItem>
//             <MenuItem value="Completed">Completed</MenuItem>
//             <MenuItem value="Cancelled">Cancelled</MenuItem>
//           </Select>
//           <Button
//             fullWidth
//             variant="contained"
//             sx={{ 
//               mt: 2, 
//               backgroundColor: '#7d66d9', 
//               '&:hover': {
//                 backgroundColor: '#6b5ab8', // Slightly darker shade for hover effect
//               }
//             }}
//             onClick={handleUpdateStatus}
//           >
//             Update Status
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2
import {
  Box,
  Button,
  Modal,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { getAllBookings, updateBookingStatus } from "../features/bookingSlice";

const columns = [
  {
    field: "customerPicture",
    headerName: "Customer",
    width: 100,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.picture} />
    ),
  },
  {
    field: "serviceIcon",
    headerName: "Service Provider",
    width: 100,
    renderCell: (params) => (
      <Avatar alt={params.row.serviceName} src={params.row.icon} />
    ),
  },
  { field: "name", headerName: "Customer Name", width: 150 },
  { field: "serviceName", headerName: "Employee Name", width: 150 },
  { field: "location", headerName: "Location", width: 200 },
  { field: "customerLocation", headerName: "Customer Location", width: 200 },
  { field: "customerContact", headerName: "Customer Contact", width: 200 },
  { field: "employeeContact", headerName: "Employee Contact", width: 200 },
  { field: "category", headerName: "Category", width: 120 },
  { field: "speciality", headerName: "Speciality", width: 200 },
  { field: "bookedBy", headerName: "Booked By", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "time", headerName: "Time", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

export default function AllAppointments() {
  const dispatch = useDispatch();
  const {
    allbookings: bookings,
    loading,
    error,
    isDarkMode,
  } = useSelector((state) => state.bookings);

  const [open, setOpen] = useState(false);
  const [bookingId, setBookingId] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  // ✅ Handle row click (Open Modal for status & Ask to download receipt)
  const handleRowClick = (params) => {
    const booking = bookings.find((b) => b._id === params.row.id);
    if (!booking) return;

    Swal.fire({
      title: "Do you want to download the receipt?",
      text: "This will generate a receipt for this booking.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, download!",
      cancelButtonText: "No, update status",
    }).then((result) => {
      if (result.isConfirmed) {
        downloadReceipt(booking._id); // Call receipt download function
      } else {
        setBookingId(booking._id);
        setStatus(booking.status);
        setOpen(true); // Open update status modal
      }
    });
  };

  // ✅ Function to handle receipt download
  const downloadReceipt = async (bookingId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bookings/download-receipt/${bookingId}`
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a hidden anchor tag to download
      const a = document.createElement("a");
      a.href = url;
      a.download = `Receipt_${bookingId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      Swal.fire("Success!", "Receipt downloaded successfully.", "success");
    } catch (error) {
      Swal.fire("Error!", "Failed to download receipt.", "error");
    }
  };

  // ✅ Handle status update
  const handleUpdateStatus = () => {
    if (!bookingId) return;
    dispatch(updateBookingStatus({ bookingId, status }));
    setOpen(false);
  };

  // ✅ Prepare table rows
  const rows = bookings?.map((booking) => ({
    id: booking._id,
    icon: booking.employee?.image,
    picture: booking.customer?.image,
    name: booking.customer?.name,
    serviceName: booking.employee?.name,
    location: booking.employee?.address1,
    customerLocation: booking.customer?.address1,
    customerContact: booking.customer?.phone,
    employeeContact: booking.employee?.phone,
    category: booking.employee?.category,
    speciality: booking.employee?.speciality,
    bookedBy: booking.customer?.name,
    date: booking.date,
    time: booking.time,
    status: booking.status,
  }));

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <h2 style={{ color: isDarkMode ? "#fff" : "#000" }}>All Appointments</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        onRowClick={handleRowClick}
        sx={{
          "& .MuiDataGrid-cell": {
            backgroundColor: isDarkMode ? "#1f2937" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: isDarkMode ? "#1f2937" : "#f1f1f1",
            color: isDarkMode ? "#fff" : "#000",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: isDarkMode ? "#555" : "#f1f1f1",
          },
        }}
      />

      {/* ✅ Status Update Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6">Update Booking Status</Typography>
          <Select
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            sx={{ mt: 2 }}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#7d66d9",
              "&:hover": { backgroundColor: "#6b5ab8" },
            }}
            onClick={handleUpdateStatus}
          >
            Update Status
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
