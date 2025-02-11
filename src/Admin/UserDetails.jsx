// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getEmployeeById } from "../features/employeeRegisterSlice";
// import { useParams, useNavigate } from "react-router-dom";
// import { Box, Typography, Button, Avatar, CircularProgress } from "@mui/material";

// const UserDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { employee, loading, error } = useSelector((state) => state.employeeRegister);

//   useEffect(() => {
//     dispatch(getEmployeeById(id));
//   }, [dispatch, id]);

//   if (loading) {
//     return (
//       <Box sx={{ textAlign: "center", padding: 4 }}>
//         <CircularProgress />
//         <Typography>Loading...</Typography>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ textAlign: "center", padding: 4 }}>
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   // ✅ Prevent accessing `employee` if it's null
//   if (!employee) {
//     return (
//       <Box sx={{ textAlign: "center", padding: 4 }}>
//         <Typography color="error">Employee details not found.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ padding: 4, maxWidth: 600, margin: "auto", textAlign: "center" }}>
//       <Avatar src={employee.image} sx={{ width: 100, height: 100, margin: "auto", mb: 2 }} />
//       <Typography variant="h4">{employee.name}</Typography>
//       <Typography>Email: {employee.email}</Typography>
//       <Typography>Phone: {employee.phone || "N/A"}</Typography>
//       <Typography>Address: {employee.address1}, {employee.address2}</Typography>

//       <Button
//         variant="contained"
//         sx={{ mt: 2 }}
//         onClick={() => navigate(`/dashboard/profile-update/${employee._id}`)}
//       >
//         Edit Profile
//       </Button>
//     </Box>
//   );
// };

// export default UserDetail;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getEmployeeById } from "../features/employeeRegisterSlice";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   CircularProgress,
// } from "@mui/material";
// import { Email, Phone, LocationOn, Edit } from "@mui/icons-material";

// const UserDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { employee, loading, error } = useSelector(
//     (state) => state.employeeRegister
//   );
//   const { isDarkMode } = useSelector((state) => state.bookings);

//   useEffect(() => {
//     dispatch(getEmployeeById(id));
//   }, [dispatch, id]);

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           overflow: "hidden",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box
//         sx={{
//           textAlign: "center",
//           padding: 4,
//           height: "100vh",
//           overflow: "hidden",
//         }}
//       >
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   if (!employee) {
//     return (
//       <Box
//         sx={{
//           textAlign: "center",
//           padding: 4,
//           height: "100vh",
//           overflow: "hidden",
//         }}
//       >
//         <Typography color="error">Employee details not found.</Typography>
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

//       <Card
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           width: "100%",
//           maxWidth: "1200px",
//           height: { xs: "auto", md: "80vh" },
//           borderRadius: 3,
//           boxShadow: 4,
//           backgroundColor: isDarkMode ? "#1E293B" : "#fff",
//           color: isDarkMode ? "#fff" : "#000",
//           overflow: "hidden", // ✅ Prevents extra scrolling inside the card
//         }}
//       >
//         {/* Left Side - Image, Location, About */}
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
//           <CardMedia
//             component="img"
//             src={employee.image}
//             alt={employee.name}
//             sx={{
//               height: { xs: 250, md: "70%" },
//               width: { xs: "100%", md: "80%" },
//               objectFit: "cover",
//               borderRadius: 2,
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             }}
//           />

//           {/* Location */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
//             <LocationOn sx={{ color: "#7d66d9" }} />
//             <Typography
//               sx={{ fontSize: 14, color: isDarkMode ? "#bbb" : "#777" }}
//             >
//               {employee.address1}, {employee.address2}
//             </Typography>
//           </Box>

//           {/* About */}
//           <Box sx={{ mt: 2, textAlign: "center", width: "80%" }}>

//             <Typography
//               sx={{
//                 fontSize: 14,
//                 color: isDarkMode ? "#ccc" : "#555",
//                 lineHeight: 1.6,
//                 textAlign: "justify",
//                 padding: 1,
//                 backgroundColor: isDarkMode ? "#2C3E50" : "#f5f5f5",
//                 borderRadius: 1,
//               }}
//             >
//                  <Typography
//               variant="h6"
//               fontWeight="bold"
//               sx={{ color: isDarkMode ? "#bbb" : "#444" }}
//             >
//               About
//             </Typography>
//               {employee.about || "No information available"}
//             </Typography>
//           </Box>
//         </Box>

//         {/* Right Side - Name, Email, Phone, Category, Speciality */}
//         <Box
//           sx={{
//             flex: 1,
//             padding: 5,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="h3" fontWeight="bold" textAlign="center">
//             {employee.name}
//           </Typography>

//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Email sx={{ color: "#7d66d9" }} />
//             <Typography
//               sx={{ fontSize: 18, color: isDarkMode ? "#bbb" : "#777" }}
//             >
//               {employee.email}
//             </Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Phone sx={{ color: "#7d66d9" }} />
//             <Typography
//               sx={{ fontSize: 18, color: isDarkMode ? "#bbb" : "#777" }}
//             >
//               {employee.phone || "N/A"}
//             </Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Typography
//               variant="subtitle1"
//               fontWeight="bold"
//               sx={{ color: isDarkMode ? "#7d66d9" : "#7d66d9" }}
//             >
//               Category:
//             </Typography>
//             <Typography
//               sx={{ fontSize: 18, color: isDarkMode ? "#bbb" : "#777" }}
//             >
//               {employee.category}
//             </Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Typography
//               variant="subtitle1"
//               fontWeight="bold"
//               sx={{ color: isDarkMode ? "#7d66d9" : "#7d66d9" }}
//             >
//               Speciality:
//             </Typography>
//             <Typography
//               sx={{ fontSize: 18, color: isDarkMode ? "#bbb" : "#777" }}
//             >
//               {employee.speciality}
//             </Typography>
//           </Box>

//           {/* Edit Button */}
//           <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
//             <Button
//               variant="contained"
//               startIcon={<Edit />}
//               sx={{
//                 backgroundColor: "#7d66d9",
//                 "&:hover": { backgroundColor: "#9b9ef0" },
//                 fontSize: 18,
//                 padding: "10px 20px",
//               }}
//               onClick={() =>
//                 navigate(`/dashboard/profile-update/${employee._id}`)
//               }
//             >
//               Edit Profile
//             </Button>
//           </Box>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default UserDetail;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getEmployeeById, deleteEmployee } from "../features/employeeRegisterSlice";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardMedia,
//   CircularProgress,
// } from "@mui/material";
// import { Email, Phone, LocationOn, Edit, Delete as DeleteIcon } from "@mui/icons-material";
// import Swal from "sweetalert2"; // ✅ Import SweetAlert2

// const UserDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { employee, loading, error } = useSelector((state) => state.employeeRegister);
//   const { isDarkMode } = useSelector((state) => state.bookings);

//   useEffect(() => {
//     dispatch(getEmployeeById(id));
//   }, [dispatch, id]);

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error || !employee) {
//     return (
//       <Box sx={{ textAlign: "center", padding: 4, height: "100vh" }}>
//         <Typography color="error">{error || "Employee details not found."}</Typography>
//       </Box>
//     );
//   }

//   // ✅ Delete Employee with SweetAlert2
//   const handleDelete = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This employee will be permanently deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d9534f",
//       cancelButtonColor: "#6c757d",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteEmployee(employee._id))
//           .then(() => {
//             Swal.fire("Deleted!", "Employee has been deleted.", "success");
//             navigate("/dashboard/all-users"); // Redirect after deletion
//           })
//           .catch(() => {
//             Swal.fire("Error!", "Failed to delete employee.", "error");
//           });
//       }
//     });
//   };

//   // ✅ Edit Employee with SweetAlert2 Confirmation
//   const handleEdit = () => {
//     Swal.fire({
//       title: "Edit Employee?",
//       text: "Do you want to edit this employee’s details?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#7d66d9",
//       cancelButtonColor: "#6c757d",
//       confirmButtonText: "Yes, edit!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate(`/dashboard/profile-update/${employee._id}`);
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

//         {/* Left Side - Image, Location, About */}
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
//           <CardMedia
//             component="img"
//             src={employee.image}
//             alt={employee.name}
//             sx={{
//               height: { xs: 250, md: "70%" },
//               width: { xs: "100%", md: "80%" },
//               objectFit: "cover",
//               borderRadius: 2,
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             }}
//           />
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
//             <LocationOn sx={{ color: "#7d66d9" }} />
//             <Typography sx={{ fontSize: 14 }}>{employee.address1}, {employee.address2}</Typography>
//           </Box>
//         </Box>

//         {/* Right Side - Name, Email, Phone, Category, Speciality */}
//         <Box sx={{ flex: 1, padding: 5, display: "flex", flexDirection: "column", justifyContent: "center" }}>
//           <Typography variant="h3" fontWeight="bold" textAlign="center">{employee.name}</Typography>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Email sx={{ color: "#7d66d9" }} />
//             <Typography sx={{ fontSize: 18 }}>{employee.category}</Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Email sx={{ color: "#7d66d9" }} />
//             <Typography sx={{ fontSize: 18 }}>{employee.speciality}</Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Email sx={{ color: "#7d66d9" }} />
//             <Typography sx={{ fontSize: 18 }}>{employee.education}</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Email sx={{ color: "#7d66d9" }} />
//             <Typography sx={{ fontSize: 18 }}>{employee.email}</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Phone sx={{ color: "#7d66d9" }} />
//             <Typography sx={{ fontSize: 18 }}>{employee.phone || "N/A"}</Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 3 }}>
//             <Email sx={{ color: "#7d66d9" }} />
//             <Typography sx={{ fontSize: 18 }}>{employee.about}</Typography>
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "center", mt: 5, gap: 2 }}>
//             <Button
//               variant="contained"
//               startIcon={<Edit />}
//               onClick={handleEdit}
//               sx={{ backgroundColor: "#7d66d9", "&:hover": { backgroundColor: "#9b9ef0" }, fontSize: 18 }}
//             >
//               Edit Profile
//             </Button>

//             <Button
//               variant="contained"
//               startIcon={<DeleteIcon />}
//               onClick={handleDelete}
//               sx={{ backgroundColor: "#d9534f", "&:hover": { backgroundColor: "#c9302c" }, fontSize: 18 }}
//             >
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default UserDetail;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeById,
  deleteEmployee,
} from "../features/employeeRegisterSlice";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Edit,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import Swal from "sweetalert2";
import { MdRoundaboutRight } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import InfoIcon from "@mui/icons-material/Info";
import { FcAbout } from "react-icons/fc";
import SchoolIcon from '@mui/icons-material/School';
const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employee, loading, error } = useSelector(
    (state) => state.employeeRegister
  );
  const { isDarkMode } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error || !employee) {
    return (
      <Box sx={{ textAlign: "center", padding: 4, height: "100vh" }}>
        <Typography color="error">
          {error || "Employee details not found."}
        </Typography>
      </Box>
    );
  }

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This employee will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d9534f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteEmployee(employee._id))
          .then(() => {
            Swal.fire("Deleted!", "Employee has been deleted.", "success");
            navigate("/dashboard/all-users");
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete employee.", "error");
          });
      }
    });
  };

  const handleEdit = () => {
    Swal.fire({
      title: "Edit Employee?",
      text: "Do you want to edit this employee’s details?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7d66d9",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, edit!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/dashboard/profile-update/${employee._id}`);
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
          flexDirection: { xs: "column", md: "row" }, // ✅ Column on mobile, row on desktop
          width: "100%",
          maxWidth: "1200px",
          height: { xs: "auto", md: "80vh" },
          borderRadius: 3,
          boxShadow: 4,
          backgroundColor: isDarkMode ? "#1E293B" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Left Side - Image, Location, About */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: 2, md: 3 }, // ✅ More padding on desktop
            backgroundColor: isDarkMode ? "#2C3E50" : "#F8F9FA",
          }}
        >
          <CardMedia
            component="img"
            src={employee.image}
            alt={employee.name}
            sx={{
              height: { xs: 200, sm: 250, md: "70%" }, // ✅ Responsive image height
              width: { xs: "90%", sm: "80%", md: "80%" },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
            <LocationOn sx={{ color: "#7d66d9" }} />
            <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
              {employee.address1}, {employee.address2}
            </Typography>
          </Box>
        </Box>

        {/* Right Side - Name, Email, Phone, Category, Speciality */}
        <Box
          sx={{
            flex: 1,
            padding: { xs: 3, md: 5 }, // ✅ Adjusted padding for mobile and desktop
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            {employee.name}
          </Typography>

          {[
            {
              icon: <Email />,
              label: employee.email,
            },
            {
              icon: <Phone />,
              label: employee.phone || "N/A",
            },
            {
              icon: <MdCategory />,
              label: employee.category,
            },
            {
              icon: <InfoIcon />,
              label: employee.about,
            },
            
            { icon : <SchoolIcon/> ,label: employee.education },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}
            >
              {item.icon && (
                <Box sx={{ fontSize: 24, color: "#7d66d9", display: "flex" }}>
                  {React.cloneElement(item.icon, {
                    fontSize: "inherit",
                    color: "inherit",
                  })}
                </Box>
              )}
              <Typography sx={{ fontSize: { xs: 16, md: 18 } }}>
                {item.label}
              </Typography>
            </Box>
          ))}

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 5 },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              startIcon={<Edit />}
              onClick={handleEdit}
              sx={{
                backgroundColor: "#7d66d9",
                "&:hover": { backgroundColor: "#9b9ef0" },
                fontSize: { xs: 14, md: 18 },
                padding: { xs: "8px 16px", md: "10px 20px" },
                minWidth: "100px", // Minimum width to ensure the button doesn’t shrink too much
                display: { xs: "flex", sm: "inline-flex" }, // Show icon+text on larger screens
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <span className="text" style={{ display: "none" }}>
                Edit Profile
              </span>
            </Button>

            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
              sx={{
                backgroundColor: "#d9534f",
                "&:hover": { backgroundColor: "#c9302c" },
                fontSize: { xs: 14, md: 18 },
                padding: { xs: "8px 16px", md: "10px 20px" },
                minWidth: "100px", // Minimum width to ensure the button doesn’t shrink too much
                display: { xs: "flex", sm: "inline-flex" }, // Show icon+text on larger screens
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <span className="text" style={{ display: "none" }}>
                Delete
              </span>
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default UserDetail;
