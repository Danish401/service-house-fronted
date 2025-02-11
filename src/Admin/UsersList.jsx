

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllEmployees } from "../features/employeeRegisterSlice";
// import { Box, Typography, Card, CardMedia, CardContent, Grid, Skeleton } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person"; // Import the Person icon
// import profile from "../assets/profile.jpg"
// function UsersList() {
//   const dispatch = useDispatch();
//   const { employees, loading, error } = useSelector((state) => state.employeeRegister);
//   const { isDarkMode } = useSelector((state) => state.bookings); // Assuming isDarkMode is part of bookings state

//   useEffect(() => {
//     dispatch(getAllEmployees());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box sx={{ padding: 4, backgroundColor: isDarkMode ? "#333" : "#f5f5f5" }}>
//         <Typography variant="h6" textAlign="center" sx={{ color: isDarkMode ? "#fff" : "#7d66d9", marginTop: 4 }}>
//           Loading users...
//         </Typography>
//         <Grid container spacing={3}>
//           {Array.from({ length: 8 }, (_, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//               <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ padding: 4, backgroundColor: isDarkMode ? "#333" : "#f5f5f5" }}>
//         <Typography variant="h6" textAlign="center" sx={{ color: "red", marginTop: 4 }}>
//           Error: {error}
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ padding: 4, backgroundColor: isDarkMode ? "#1f2937" : "#f5f5f5" }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ color: isDarkMode ? "#fff" : "#7d66d9", textAlign: "center" }}
//       >
//         Users List
//       </Typography>
//       <Grid container spacing={3}>
//         {employees.length > 0
//           ? employees.map((user) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
//                 <Card
//                   sx={{
//                     borderRadius: 2,
//                     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//                     transition: "0.3s",
//                     "&:hover": {
//                       boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
//                       transform: "scale(1.02)",
//                     },
//                     backgroundColor: isDarkMode ? "#111827" : "#fff",
//                   }}
//                 >


// <CardMedia
//   component="div"
//   sx={{
//     height: { xs: 150, md: 200 },
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#111827", // Optional: Background color to match the shape of an image
//   }}
// >
//   {user.image ? (
//     <img
//       src={user.image}
//       alt={user.name}
//       style={{
//         height: "100%",
//         width: "100%",
//         objectFit: "cover",
//       }}
//     />
//   ) : (
//     <img
//       src={profile} // Display the fallback profile image when no user image
//       alt="Profile"
//       style={{
//         height: "100%",
//         width: "100%",
//         objectFit: "cover",
//       }}
//     />
//   )}
// </CardMedia>

//                   <CardContent>
//                     <Typography variant="h6" fontWeight="bold" sx={{ color: isDarkMode ? "#fff" : "#7d66d9" }}>
//                       {user.name}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: isDarkMode ? "#aaa" : "#555", fontStyle: "italic" }}>
//                       {user.category} - {user.speciality}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: isDarkMode ? "#ccc" : "#777", mt: 1 }}>
//                       {user.address1}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           : null}
//       </Grid>
//     </Box>
//   );
// }

// export default UsersList;



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../features/employeeRegisterSlice";
import { Box, Typography, Card, CardMedia, CardContent, Grid, Skeleton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";

function UsersList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employees, loading, error } = useSelector((state) => state.employeeRegister);
  const { isDarkMode } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ padding: 4, backgroundColor: isDarkMode ? "#333" : "#f5f5f5" }}>
        <Typography variant="h6" textAlign="center" sx={{ color: isDarkMode ? "#fff" : "#7d66d9", marginTop: 4 }}>
          Loading users...
        </Typography>
        <Grid container spacing={3}>
          {Array.from({ length: 8 }, (_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ padding: 4, backgroundColor: isDarkMode ? "#333" : "#f5f5f5" }}>
        <Typography variant="h6" textAlign="center" sx={{ color: "red", marginTop: 4 }}>
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: isDarkMode ? "#1f2937" : "#f5f5f5" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: isDarkMode ? "#fff" : "#7d66d9", textAlign: "center" }}>
    
      </Typography>
      <Grid container spacing={3}>
        {employees.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user._id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                  transform: "scale(1.02)",
                },
                backgroundColor: isDarkMode ? "#111827" : "#fff",
              }}
            >
              {/* Click Image to Open User Details */}
              <CardMedia
                component="div"
                onClick={() => navigate(`/dashboard/user-detail/${user._id}`)} // ✅ Navigate to detail page
                sx={{
                  height: { xs: 150, md: 200 },
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#111827",
                  cursor: "pointer",
                }}
              >
                <img
                  src={user.image || profile}
                  alt={user.name}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>

              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ color: isDarkMode ? "#fff" : "#7d66d9" }}>
                  {user.name}
                </Typography>
                <Typography variant="body2" sx={{ color: isDarkMode ? "#aaa" : "#555", fontStyle: "italic" }}>
                  {user.category} - {user.speciality}
                </Typography>
                <Typography variant="body2" sx={{ color: isDarkMode ? "#ccc" : "#777", mt: 1 }}>
                  {user.address1}
                </Typography>

                {/* Edit Button */}
               
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UsersList;
