

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { getAllBookings } from "../features/bookingSlice";

const combinedColumns = [
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

  const { allbookings: bookings, loading, error, isDarkMode } = useSelector(
    (state) => state.bookings
  );

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  // Combine rows with additional fields and sort by date and time
  const combinedRows = [];
  bookings?.forEach((booking) => {
    const { customer, employee, _id, date, time, status } = booking; // Using booking's unique `_id`
    if (customer && employee) {
      combinedRows.push({
        id: _id, // Unique booking ID
        icon: employee.image,
        picture: customer.image,
        name: customer.name,
        serviceName: employee.name,
        location: employee.address1,
        customerLocation: customer.address1,
        customerContact: customer.phone,
        employeeContact: employee.phone,
        category: employee.category,
        speciality: employee.speciality,
        bookedBy: customer.name,
        date,
        time,
        status,
      });
    }
  });

  // Sort rows by date and time
  combinedRows.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA.getTime() !== dateB.getTime()) {
      return dateA - dateB;
    }

    const timeA = new Date(`1970-01-01T${a.time}`);
    const timeB = new Date(`1970-01-01T${b.time}`);

    return timeA - timeB;
  });

  // Apply dark mode styling if enabled
  const gridStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
  };

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <h2 style={{ color: isDarkMode ? "#fff" : "#000" }}>All Appointments</h2>
      <DataGrid
        rows={combinedRows}
        columns={combinedColumns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          "& .MuiDataGrid-cell": {
            backgroundColor: isDarkMode ? "#1f2937" : "#fff",  // Cell background color
            color: isDarkMode ? "#fff" : "#000",  // Text color based on dark mode
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: isDarkMode ? "#1f2937" : "#f1f1f1",  // Header background
            color: isDarkMode ? "#1f2937" : "#000",  // Header text color
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: isDarkMode ? "#555" : "#f1f1f1",  // Footer background
          },
        }}
      />
    </Box>
  );
}
