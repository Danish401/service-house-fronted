// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import { Email, Phone, LocationOn, ArrowBack } from "@mui/icons-material";
// import { getAllUsers } from "../features/authSlice";
// import cust from "../assets/customer.jpg";

//  function DetailsCustomer() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { allUsers, loading } = useSelector((state) => state.auth);
//   const { isDarkMode } = useSelector((state) => state.bookings);

//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);

//   // ✅ Ensure `id` and `user.id` are compared as strings
//   const customer = allUsers.find(
//     (user) => user.id.toString() === id.toString()
//   );

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!customer) {
//     return (
//       <Box sx={{ textAlign: "center", padding: 4 }}>
//         <Typography color="error">Customer details not found.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: isDarkMode ? "#1E293B" : "#F5F5F5",
//         padding: { xs: 2, md: 4 },
//       }}
//     >
//       <Card
//         sx={{
//           maxWidth: 600,
//           width: "100%",
//           borderRadius: 2,
//           boxShadow: 3,
//           backgroundColor: isDarkMode ? "#111827" : "#fff",
//         }}
//       >
//         <CardMedia
//           component="img"
//           src={customer.image || cust} // ✅ Corrected - Uses `customer.image`
//           alt={customer.name}
//           sx={{ height: 250, objectFit: "cover" }}
//         />
//         <CardContent>
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             sx={{
//               color: isDarkMode ? "#e0e0e0" : "#7d66d9",
//               textAlign: "center",
//             }}
//           >
//             {customer.name}
//           </Typography>

//           <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
//             <Email sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography>{customer.email || "N/A"}</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//             <Phone sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography>{customer.phone || "N/A"}</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//             <LocationOn sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography>
//               {customer.address1 || "N/A"}, {customer.address2 || "N/A"}
//             </Typography>
//           </Box>
//         </CardContent>

//         <Button
//           variant="contained"
//           startIcon={<ArrowBack />}
//           sx={{
//             margin: 2,
//             backgroundColor: "#7d66d9",
//             "&:hover": { backgroundColor: "#9b9ef0" },
//           }}
//           onClick={() => navigate("/dashboard/all-customers")}
//         >
//           Back to List
//         </Button>
//       </Card>
//     </Box>
//   );
// }
// export default DetailsCustomer;




// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import { Email, Phone, LocationOn, ArrowBack, Edit } from "@mui/icons-material";
// import { getAllUsers } from "../features/authSlice";
// import cust from "../assets/customer.jpg";

// function DetailsCustomer() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { allUsers, loading } = useSelector((state) => state.auth);
//   const { isDarkMode } = useSelector((state) => state.bookings);

//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);

//   // ✅ Ensure `id` and `user.id` are compared as strings
//   const customer = allUsers.find((user) => user.id.toString() === id.toString());

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!customer) {
//     return (
//       <Box sx={{ textAlign: "center", padding: 4 }}>
//         <Typography color="error">Customer details not found.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: isDarkMode ? "#1E293B" : "#F5F5F5",
//         padding: { xs: 2, md: 4 },
//       }}
//     >
//       <Card
//         sx={{
//           maxWidth: 600,
//           width: "100%",
//           borderRadius: 2,
//           boxShadow: 3,
//           backgroundColor: isDarkMode ? "#111827" : "#fff",
//         }}
//       >
//         <CardMedia
//           component="img"
//           src={customer.image || cust}
//           alt={customer.name}
//           sx={{ height: 250, objectFit: "cover" }}
//         />
//         <CardContent>
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             sx={{
//               color: isDarkMode ? "#e0e0e0" : "#7d66d9",
//               textAlign: "center",
//             }}
//           >
//             {customer.name}
//           </Typography>

//           <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
//             <Email sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography>{customer.email || "N/A"}</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//             <Phone sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography>{customer.phone || "N/A"}</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//             <LocationOn sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography>
//               {customer.address1 || "N/A"}, {customer.address2 || "N/A"}
//             </Typography>
//           </Box>
//         </CardContent>

//         {/* Buttons: Back & Edit */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
//           <Button
//             variant="contained"
//             startIcon={<ArrowBack />}
//             sx={{
//               backgroundColor: "#7d66d9",
//               "&:hover": { backgroundColor: "#9b9ef0" },
//             }}
//             onClick={() => navigate("/dashboard/all-customers")}
//           >
//             Back to List
//           </Button>

//           {/* Edit Button */}
//           <Button
//             variant="contained"
//             startIcon={<Edit />}
//             sx={{
//               backgroundColor: "#28A745", // Green color for edit button
//               "&:hover": { backgroundColor: "#218838" },
//             }}
//             onClick={() => navigate(`/dashboard/customer-profile/${customer._id}`)}
//           >
//             Edit
//           </Button>
//         </Box>
//       </Card>
//     </Box>
//   );
// }

// export default DetailsCustomer;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   CircularProgress,
//   Grid,
//   Avatar,CardMedia
// } from "@mui/material";
// import { Email, Phone, LocationOn, ArrowBack, Edit } from "@mui/icons-material";
// import { getAllUsers } from "../features/authSlice";
// import cust from "../assets/customer.jpg";

// function DetailsCustomer() {
//   const { id } = useParams(); // Get the customer ID from the URL
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { allUsers, loading } = useSelector((state) => state.auth);
//   const { isDarkMode } = useSelector((state) => state.bookings);

//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);

//   const customer = allUsers.find((user) => user.id.toString() === id.toString());

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!customer) {
//     return (
//       <Box sx={{ textAlign: "center", padding: 4 }}>
//         <Typography color="error">Customer details not found.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box
//     sx={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       width: "100vw",
//       maxWidth: "100%", // ✅ Prevents any unwanted overflow
//       overflowX: "hidden", // ✅ Removes horizontal scrolling
//       overflowY: "auto", // ✅ Keeps vertical scrolling if needed
//       backgroundColor: isDarkMode ? "#1E293B" : "#F5F5F5",
//       padding: { xs: 2, md: 4 }, // Responsive padding
//     }}
//   >
//      <Card
//              sx={{
//                display: "flex",
//                flexDirection: { xs: "column", md: "row" },
//                width: "100%",
//                maxWidth: "1200px",
//                height: { xs: "auto", md: "80vh" },
//                borderRadius: 3,
//                boxShadow: 4,
//                backgroundColor: isDarkMode ? "#1E293B" : "#fff",
//                color: isDarkMode ? "#fff" : "#000",
//                overflow: "hidden", // ✅ Prevents extra scrolling inside the card
//              }}
//            >
//         {/* Left Side: Image and Location */}
//         <Box
//                  sx={{
//                    flex: 1,
//                    display: "flex",
//                    flexDirection: "column",
//                    alignItems: "center",
//                    justifyContent: "center",
//                    padding: 3,
//                    backgroundColor: isDarkMode ? "#2C3E50" : "#F8F9FA",
//                  }}
//                >
//           {/* Profile Image */}
//           <CardMedia
//             component="img"
//             src={customer.image ||cust}
//             alt={customer.name}
//             sx={{
//               height: { xs: 250, md: "70%" },
//               width: { xs: "100%", md: "80%" },
//               objectFit: "cover",
//               borderRadius: 2,
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             }}
//           />
//           {/* Location */}
//           <Box sx={{ display: "flex", alignItems: "center", mt: 2, textAlign: "center" }}>
//             <LocationOn sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography sx={{ fontSize: "1.1rem" }}>
//               {customer.address1 || "N/A"}, {customer.address2 || "N/A"}
//             </Typography>
//           </Box>
//         </Box>

//         {/* Right Side: Customer Details */}
//        <Box
//                  sx={{
//                    flex: 1,
//                    padding: 5,
//                    display: "flex",
//                    flexDirection: "column",
//                    justifyContent: "center",
//                  }}
//                >
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             sx={{
//               color: isDarkMode ? "#e0e0e0" : "#7d66d9",
//               textAlign: "center",
//               mb: 2,
//             }}
//           >
//             {customer.name}
//           </Typography>

//           {/* Contact Information */}
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Email sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography sx={{ fontSize: "1.1rem", fontWeight: "500" }}>
//               {customer.email || "N/A"}
//             </Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Phone sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography sx={{ fontSize: "1.1rem", fontWeight: "500" }}>
//               {customer.phone || "N/A"}
//             </Typography>
//           </Box>

//           {/* Action Buttons */}
//           <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//             <Button
//               variant="contained"
//               startIcon={<ArrowBack />}
//               sx={{
//                 backgroundColor: "#7d66d9",
//                 fontWeight: "bold",
//                 borderRadius: "8px",
//                 "&:hover": { backgroundColor: "#9b9ef0" },
//                 width: "150px",
//                 marginRight: 2,
//               }}
//               onClick={() => navigate("/dashboard/all-customers")}
//             >
//               Back
//             </Button>

//             <Button
//               variant="contained"
//               startIcon={<Edit />}
//               sx={{
//                 backgroundColor: "#7d66d9",
//                 fontWeight: "bold",
//                 borderRadius: "8px",
//                 "&:hover": { backgroundColor: "#9b9ef0" },
//                 width: "150px",
//               }}
//               onClick={() => navigate(`/dashboard/customer-profile/${customer.id}`)}
//             >
//               Edit
//             </Button>
//           </Box>
//         </Box>
//       </Card>
//     </Box>
//   );
// }

// export default DetailsCustomer;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Card,
//   Button,
//   CircularProgress,
//   CardMedia,
// } from "@mui/material";
// import {
//   Email,
//   Phone,
//   LocationOn,
//   ArrowBack,
//   Edit,
//   Delete as DeleteIcon,
// } from "@mui/icons-material";
// import Swal from "sweetalert2"; // ✅ Import SweetAlert2
// import { getAllUsers, deleteUser } from "../features/authSlice";
// import cust from "../assets/customer.jpg";

// function DetailsCustomer() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { allUsers, loading } = useSelector((state) => state.auth);
//   const { isDarkMode } = useSelector((state) => state.bookings);

//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);

//   const customer = allUsers.find((user) => user.id.toString() === id.toString());

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!customer) {
//     return (
//       <Box sx={{ textAlign: "center", padding: 4 }}>
//         <Typography color="error">Customer details not found.</Typography>
//       </Box>
//     );
//   }

//   // ✅ Delete User with SweetAlert2
//   const handleDelete = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d9534f",
//       cancelButtonColor: "#6c757d",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteUser(customer.id))
//           .then(() => {
//             Swal.fire("Deleted!", "User has been deleted.", "success");
//             navigate("/dashboard/all-customers");
//           })
//           .catch((err) => {
//             Swal.fire("Error!", "Failed to delete user.", "error");
//             console.error("Error deleting user:", err);
//           });
//       }
//     });
//   };

//   // ✅ Edit User Confirmation
//   const handleEdit = () => {
//     Swal.fire({
//       title: "Edit User?",
//       text: "Do you want to edit this user’s details?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#7d66d9",
//       cancelButtonColor: "#6c757d",
//       confirmButtonText: "Yes, edit!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate(`/dashboard/customer-profile/${customer.id}`);
//       }
//     });
//   };

//   return (
//     <Box
//     sx={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       width: "100vw",
//       maxWidth: "100%", // ✅ Prevents horizontal overflow
//       overflowX: "hidden", // ✅ Hides horizontal scrolling
//       backgroundColor: isDarkMode ? "#1E293B" : "#F5F5F5",
//       padding: { xs: 2, md: 4 },
//     }}
//   >
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         width: "100%",
//         maxWidth: "1200px",
//         height: { xs: "auto", md: "80vh" },
//         borderRadius: 3,
//         boxShadow: 4,
//         backgroundColor: isDarkMode ? "#1E293B" : "#fff",
//         color: isDarkMode ? "#fff" : "#000",
//         overflowX: "hidden", // ✅ Ensures content doesn't force scrolling
//         overflowY: "auto", // ✅ Allows vertical scrolling if needed
//       }}
//     >
  
//         {/* Left Side: Image and Location */}
//         <Box
//           sx={{
//             flex: 1,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: 3,
//             backgroundColor: isDarkMode ? "#2C3E50" : "#F8F9FA",
//           }}
//         >
//           {/* Profile Image */}
//           <CardMedia
//             component="img"
//             src={customer.image || cust}
//             alt={customer.name}
//             sx={{
//               height: { xs: 250, md: "70%" },
//               width: { xs: "100%", md: "80%" },
//               objectFit: "cover",
//               borderRadius: 2,
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             }}
//           />
//           {/* Location */}
//           <Box sx={{ display: "flex", alignItems: "center", mt: 2, textAlign: "center" }}>
//             <LocationOn sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography sx={{ fontSize: "1.1rem" }}>
//               {customer.address1 || "N/A"}, {customer.address2 || "N/A"}
//             </Typography>
//           </Box>
//         </Box>

//         {/* Right Side: Customer Details */}
//         <Box
//           sx={{
//             flex: 1,
//             padding: 5,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             sx={{
//               color: isDarkMode ? "#e0e0e0" : "#7d66d9",
//               textAlign: "center",
//               mb: 2,
//             }}
//           >
//             {customer.name}
//           </Typography>

//           {/* Contact Information */}
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Email sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography sx={{ fontSize: "1.1rem", fontWeight: "500" }}>
//               {customer.email || "N/A"}
//             </Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Phone sx={{ color: "#7d66d9", mr: 1 }} />
//             <Typography sx={{ fontSize: "1.1rem", fontWeight: "500" }}>
//               {customer.phone || "N/A"}
//             </Typography>
//           </Box>

//           {/* Action Buttons */}
//           <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//             <Button variant="contained" startIcon={<ArrowBack />} onClick={() => navigate("/dashboard/all-customers")} sx={{ backgroundColor: "#7d66d9", "&:hover": { backgroundColor: "#9b9ef0" }, width: "150px", marginRight: 2 }}>Back</Button>

//             <Button variant="contained" startIcon={<Edit />} onClick={handleEdit} sx={{ backgroundColor: "#7d66d9", "&:hover": { backgroundColor: "#9b9ef0" }, width: "150px", marginRight: 2 }}>Edit</Button>

//             <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleDelete} sx={{ backgroundColor: "#d9534f", "&:hover": { backgroundColor: "#c9302c" }, width: "150px" }}>Delete</Button>
//           </Box>
//         </Box>
//       </Card>
//     </Box>
//   );
// }

// export default DetailsCustomer;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  Button,
  CircularProgress,
  CardMedia,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  ArrowBack,
  Edit,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2
import { getAllUsers, deleteUser } from "../features/authSlice";
import cust from "../assets/customer.jpg";

function DetailsCustomer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allUsers, loading } = useSelector((state) => state.auth);
  const { isDarkMode } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const customer = allUsers.find((user) => user.id.toString() === id.toString());

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!customer) {
    return (
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Typography color="error">Customer details not found.</Typography>
      </Box>
    );
  }

  // ✅ Delete User with SweetAlert2
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d9534f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(customer.id))
          .then(() => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            navigate("/dashboard/all-customers");
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete user.", "error");
          });
      }
    });
  };

  // ✅ Edit User Confirmation
  const handleEdit = () => {
    Swal.fire({
      title: "Edit User?",
      text: "Do you want to edit this user’s details?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7d66d9",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, edit!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/dashboard/customer-profile/${customer.id}`);
      }
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        overflowX: "hidden",
        backgroundColor: isDarkMode ? "#1E293B" : "#F5F5F5",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: "1100px",
          borderRadius: 3,
          boxShadow: 4,
          backgroundColor: isDarkMode ? "#1E293B" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
          overflow: "hidden",
        }}
      >
        {/* Left Side: Image & Location */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: 2, md: 3 },
            backgroundColor: isDarkMode ? "#2C3E50" : "#F8F9FA",
          }}
        >
          <CardMedia
            component="img"
            src={customer.image || cust}
            alt={customer.name}
            sx={{
              height: { xs: 200, md: "75%" },
              width: { xs: "90%", md: "80%" },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", mt: 2, textAlign: "center" }}>
            <LocationOn sx={{ color: "#7d66d9", mr: 1 }} />
            <Typography sx={{ fontSize: "1rem" }}>
              {customer.address1 || "N/A"}, {customer.address2 || "N/A"}
            </Typography>
          </Box>
        </Box>

        {/* Right Side: Customer Details */}
        <Box
          sx={{
            flex: 1,
            padding: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: isDarkMode ? "#e0e0e0" : "#7d66d9",
              textAlign: "center",
              mb: 2,
            }}
          >
            {customer.name}
          </Typography>

          {/* Contact Information */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Email sx={{ color: "#7d66d9", mr: 1 }} />
            <Typography sx={{ fontSize: "1rem", fontWeight: "500" }}>
              {customer.email || "N/A"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Phone sx={{ color: "#7d66d9", mr: 1 }} />
            <Typography sx={{ fontSize: "1rem", fontWeight: "500" }}>
              {customer.phone || "N/A"}
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<ArrowBack />}
              onClick={() => navigate("/dashboard/all-customers")}
              sx={{ backgroundColor: "#7d66d9", "&:hover": { backgroundColor: "#9b9ef0" }, width: { xs: "auto", md: "150px" } }}
            />
            <Button
              variant="contained"
              startIcon={<Edit />}
              onClick={handleEdit}
              sx={{
                backgroundColor: "#7d66d9",
                "&:hover": { backgroundColor: "#9b9ef0" },
                width: { xs: "auto", md: "150px" },
              }}
            />
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
              sx={{ backgroundColor: "#d9534f", "&:hover": { backgroundColor: "#c9302c" }, width: { xs: "auto", md: "150px" } }}
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default DetailsCustomer;
