// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   Grid,
// } from "@mui/material";

// export const Customer = [
//   {
//     id: 1,
//     name: "James Smith",
//     category: "Customer",
//     icon: "https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg",
//     location: "45 West Avenue, New York, NY",
//     email: "james.smith@example.com",
//     contact: "+1 555-123-4567",
//   },
//   {
//     id: 2,
//     name: "Olivia Johnson",
//     category: "Customer",
//     icon: "https://i.pinimg.com/736x/bd/4a/ac/bd4aac6fa6f48e720d3ea9bd952c1226.jpg",
//     location: "108 Beach St, Miami, FL",
//     email: "olivia.johnson@example.com",
//     contact: "+1 555-987-6543",
//   },
//   {
//     id: 3,
//     name: "Liam Brown",
//     category: "Customer",
//     icon: "https://th.bing.com/th/id/OIP.Cf3rSUAqoBhMkJ-HTHq2aAHaLH?rs=1&pid=ImgDetMain",
//     location: "567 Sunset Blvd, Los Angeles, CA",
//     email: "liam.brown@example.com",
//     contact: "+1 555-765-4321",
//   },
//   {
//     id: 4,
//     name: "Emma Davis",
//     category: "Customer",
//     icon: "https://images.news18.com/optimize/lb0X1pyUI-HiLWIIFQatWuhFGG8=/877x0/images.news18.com/ibnlive/uploads/877x0/jpg/2011/08/mattdamon_final.jpg",
//     location: "900 Oak St, San Francisco, CA",
//     email: "emma.davis@example.com",
//     contact: "+1 555-234-5678",
//   },
//   {
//     id: 5,
//     name: "Noah Wilson",
//     category: "Customer",
//     icon: "https://th.bing.com/th/id/OIP.0otQuAFj4hPeK9owkXIP1gHaKF?rs=1&pid=ImgDetMain",
//     location: "321 Pine Lane, Chicago, IL",
//     email: "noah.wilson@example.com",
//     contact: "+1 555-678-1234",
//   },
//   {
//     id: 6,
//     name: "Ava Martinez",
//     category: "Customer",
//     icon: "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-actors4.png",
//     location: "123 Elm Ave, Austin, TX",
//     email: "ava.martinez@example.com",
//     contact: "+1 555-432-5678",
//   },
//   {
//     id: 7,
//     name: "Elijah Garcia",
//     category: "Customer",
//     icon: "https://th.bing.com/th/id/OIP.GlbtcE6t3cQ-DS3RdpH59QHaFj?rs=1&pid=ImgDetMain",
//     location: "789 Maple St, Denver, CO",
//     email: "elijah.garcia@example.com",
//     contact: "+1 555-876-5432",
//   },
//   {
//     id: 8,
//     name: "Sophia Rodriguez",
//     category: "Customer",
//     icon: "https://i.pinimg.com/736x/6e/c1/a8/6ec1a8e0293e0ccda77a99bd33d89044.jpg",
//     location: "654 Cedar Rd, Seattle, WA",
//     email: "sophia.rodriguez@example.com",
//     contact: "+1 555-345-6789",
//   },
//   {
//     id: 9,
//     name: "Benjamin Martinez",
//     category: "Customer",
//     icon: "https://th.bing.com/th/id/OIP.n9cm7vjWoLEiThd7dRTMhQHaE8?rs=1&pid=ImgDetMain",
//     location: "234 Birch Ave, Boston, MA",
//     email: "benjamin.martinez@example.com",
//     contact: "+1 555-654-7890",
//   },
//   {
//     id: 10,
//     name: "Mia Lee",
//     category: "Customer",
//     icon: "https://th.bing.com/th/id/OIP.9dQ95JLj2xjP90W7MjOZQwHaEK?rs=1&pid=ImgDetMain",
//     location: "876 Willow St, Phoenix, AZ",
//     email: "mia.lee@example.com",
//     contact: "+1 555-987-3210",
//   },
// ];

// function CustomerList({ customer = Customer, title }) {
//   return (
//     <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ color: "#7d66d9", textAlign: "center" }}
//       >
//         {title}
//       </Typography>
//       <Grid container spacing={3}>
//         {customer.length > 0
//           ? customer.map((user) => (
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
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     src={user.icon}
//                     alt={user.name}
//                     sx={{
//                       height: { xs: 150, md: 200 },
//                       objectFit: "cover",
//                     }}
//                   />
//                   <CardContent>
//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       sx={{ color: "#7d66d9" }}
//                     >
//                       {user.name}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           : Array.from({ length: 8 }, (_, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Box
//                   className="animate-pulse"
//                   sx={{
//                     width: "100%",
//                     height: { xs: 150, md: 200 },
//                     backgroundColor: "#e0e0e0",
//                     borderRadius: 2,
//                   }}
//                 />
//               </Grid>
//             ))}
//       </Grid>
//     </Box>
//   );
// }

// export default CustomerList;





  
 


//   import React from "react";
// import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";
// export const Customer = [
//     {
//       id: 1,
//       name: "James Smith",
//       category: "Customer",
//       icon: "https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg",
//       location: "45 West Avenue, New York, NY",
//       email: "james.smith@example.com",
//       contact: "+1 555-123-4567",
//     },
//     {
//       id: 2,
//       name: "Olivia Johnson",
//       category: "Customer",
//       icon: "https://i.pinimg.com/736x/bd/4a/ac/bd4aac6fa6f48e720d3ea9bd952c1226.jpg",
//       location: "108 Beach St, Miami, FL",
//       email: "olivia.johnson@example.com",
//       contact: "+1 555-987-6543",
//     },
//     {
//       id: 3,
//       name: "Liam Brown",
//       category: "Customer",
//       icon: "https://th.bing.com/th/id/OIP.Cf3rSUAqoBhMkJ-HTHq2aAHaLH?rs=1&pid=ImgDetMain",
//       location: "567 Sunset Blvd, Los Angeles, CA",
//       email: "liam.brown@example.com",
//       contact: "+1 555-765-4321",
//     },
//     {
//       id: 4,
//       name: "Emma Davis",
//       category: "Customer",
//       icon: "https://images.news18.com/optimize/lb0X1pyUI-HiLWIIFQatWuhFGG8=/877x0/images.news18.com/ibnlive/uploads/877x0/jpg/2011/08/mattdamon_final.jpg",
//       location: "900 Oak St, San Francisco, CA",
//       email: "emma.davis@example.com",
//       contact: "+1 555-234-5678",
//     },
//     {
//       id: 5,
//       name: "Noah Wilson",
//       category: "Customer",
//       icon: "https://th.bing.com/th/id/OIP.0otQuAFj4hPeK9owkXIP1gHaKF?rs=1&pid=ImgDetMain",
//       location: "321 Pine Lane, Chicago, IL",
//       email: "noah.wilson@example.com",
//       contact: "+1 555-678-1234",
//     },
//     {
//       id: 6,
//       name: "Ava Martinez",
//       category: "Customer",
//       icon: "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-actors4.png",
//       location: "123 Elm Ave, Austin, TX",
//       email: "ava.martinez@example.com",
//       contact: "+1 555-432-5678",
//     },
//     {
//       id: 7,
//       name: "Elijah Garcia",
//       category: "Customer",
//       icon: "https://th.bing.com/th/id/OIP.GlbtcE6t3cQ-DS3RdpH59QHaFj?rs=1&pid=ImgDetMain",
//       location: "789 Maple St, Denver, CO",
//       email: "elijah.garcia@example.com",
//       contact: "+1 555-876-5432",
//     },
//     {
//       id: 8,
//       name: "Sophia Rodriguez",
//       category: "Customer",
//       icon: "https://i.pinimg.com/736x/6e/c1/a8/6ec1a8e0293e0ccda77a99bd33d89044.jpg",
//       location: "654 Cedar Rd, Seattle, WA",
//       email: "sophia.rodriguez@example.com",
//       contact: "+1 555-345-6789",
//     },
//     {
//       id: 9,
//       name: "Benjamin Martinez",
//       category: "Customer",
//       icon: "https://th.bing.com/th/id/OIP.n9cm7vjWoLEiThd7dRTMhQHaE8?rs=1&pid=ImgDetMain",
//       location: "234 Birch Ave, Boston, MA",
//       email: "benjamin.martinez@example.com",
//       contact: "+1 555-654-7890",
//     },
//     {
//       id: 10,
//       name: "Mia Lee",
//       category: "Customer",
//       icon: "https://th.bing.com/th/id/OIP.9dQ95JLj2xjP90W7MjOZQwHaEK?rs=1&pid=ImgDetMain",
//       location: "876 Willow St, Phoenix, AZ",
//       email: "mia.lee@example.com",
//       contact: "+1 555-987-3210",
//     },
//   ];
  


// function CustomerList({ customer = Customer, title }) {
//   return (
//     <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ color: "#7d66d9", textAlign: "center" }}
//       >
//         {title}
//       </Typography>
//       <Grid container spacing={3} sx={{ mt: 2 }}>
//         {customer.length > 0
//           ? customer.map((user, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
               
//                   <Card
//                     sx={{
//                       borderRadius: 2,
//                       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//                       transition: "0.3s",
//                       "&:hover": {
//                         boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
//                         transform: "scale(1.05)",
//                         borderColor: "#7D66D9",
//                         backgroundColor: "#7D66D9/10",
//                       },
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       src={user.icon || "/placeholder-image.png"}
//                       alt={user.name}
//                       sx={{
//                         height: { xs: 150, md: 200 },
//                         width: "100%",
//                         objectFit: "cover",
//                         borderRadius: "8px 8px 0 0",
//                       }}
//                     />
//                     <CardContent sx={{ textAlign: "left", padding: 2 }}>
//                       <Typography
//                         variant="subtitle2"
//                         sx={{
//                           backgroundColor: "#e1bee7",
//                           color: "#7D66D9",
//                           borderRadius: "12px",
//                           padding: "2px 8px",
//                           display: "inline-block",
//                           fontSize: "12px",
//                         }}
//                       >
//                         {user.category || "Unknown Category"}
//                       </Typography>
//                       <Typography
//                         variant="h6"
//                         fontWeight="bold"
//                         sx={{ color: "#333", mt: 1 }}
//                       >
//                         {user.name}
//                       </Typography>
//                       <Typography variant="body2" color="textSecondary">
//                         {user.location || "No Address Provided"}
//                       </Typography>
//                     </CardContent>
//                   </Card>
              
//               </Grid>
//             ))
//           : Array.from({ length: 8 }, (_, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Box
//                   className="animate-pulse"
//                   sx={{
//                     width: "100%",
//                     height: { xs: 150, md: 200 },
//                     backgroundColor: "#e0e0e0",
//                     borderRadius: 2,
//                   }}
//                 />
//               </Grid>
//             ))}
//       </Grid>
//     </Box>
//   );
// }

// export default CustomerList;




// import React from "react";
// import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";

  


// function CustomerList() {
//   return (
//     <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ color: "#7d66d9", textAlign: "center" }}
//       >
//         {title}
//       </Typography>
//       <Grid container spacing={3} sx={{ mt: 2 }}>
//         {customer.length > 0
//           ? customer.map((user, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
               
//                   <Card
//                     sx={{
//                       borderRadius: 2,
//                       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//                       transition: "0.3s",
//                       "&:hover": {
//                         boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
//                         transform: "scale(1.05)",
//                         borderColor: "#7D66D9",
//                         backgroundColor: "#7D66D9/10",
//                       },
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       src={user.icon || "/placeholder-image.png"}
//                       alt={user.name}
//                       sx={{
//                         height: { xs: 150, md: 200 },
//                         width: "100%",
//                         objectFit: "cover",
//                         borderRadius: "8px 8px 0 0",
//                       }}
//                     />
//                     <CardContent sx={{ textAlign: "left", padding: 2 }}>
//                       <Typography
//                         variant="subtitle2"
//                         sx={{
//                           backgroundColor: "#e1bee7",
//                           color: "#7D66D9",
//                           borderRadius: "12px",
//                           padding: "2px 8px",
//                           display: "inline-block",
//                           fontSize: "12px",
//                         }}
//                       >
//                         {user.category || "Unknown Category"}
//                       </Typography>
//                       <Typography
//                         variant="h6"
//                         fontWeight="bold"
//                         sx={{ color: "#333", mt: 1 }}
//                       >
//                         {user.name}
//                       </Typography>
//                       <Typography variant="body2" color="textSecondary">
//                         {user.location || "No Address Provided"}
//                       </Typography>
//                     </CardContent>
//                   </Card>
              
//               </Grid>
//             ))
//           : Array.from({ length: 8 }, (_, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Box
//                   className="animate-pulse"
//                   sx={{
//                     width: "100%",
//                     height: { xs: 150, md: 200 },
//                     backgroundColor: "#e0e0e0",
//                     borderRadius: 2,
//                   }}
//                 />
//               </Grid>
//             ))}
//       </Grid>
//     </Box>
//   );
// }

// export default CustomerList;

//wom
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Skeleton,
// } from "@mui/material";
// import { getAllUsers } from "../features/authSlice";

// function CustomerList() {
//   const dispatch = useDispatch();
//   const { allUsers, loading } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(getAllUsers());
//   }, [dispatch]);

//   return (
//     <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ color: "#7d66d9", textAlign: "center" }}
//       >
//         Customer List
//       </Typography>
//       <Grid container spacing={3} sx={{ mt: 2 }}>
//         {loading
//           ? Array.from({ length: 8 }, (_, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Skeleton
//                   variant="rectangular"
//                   width="100%"
//                   height={200}
//                   sx={{ borderRadius: 2 }}
//                 />
//               </Grid>
//             ))
//           : allUsers.map((user, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Card
//                   sx={{
//                     borderRadius: 2,
//                     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
//                     transition: "0.3s",
//                     "&:hover": {
//                       boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
//                       transform: "scale(1.05)",
//                       borderColor: "#7D66D9",
//                       backgroundColor: "#7D66D9/10",
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     src={user.image || "/placeholder-image.png"}
//                     alt={user.name}
//                     sx={{
//                       height: { xs: 150, md: 200 },
//                       width: "100%",
//                       objectFit: "cover",
//                       borderRadius: "8px 8px 0 0",
//                     }}
//                   />
//                   <CardContent sx={{ textAlign: "left", padding: 2 }}>
//                     <Typography
//                       variant="subtitle2"
//                       sx={{
//                         backgroundColor: "#e1bee7",
//                         color: "#7D66D9",
//                         borderRadius: "12px",
//                         padding: "2px 8px",
//                         display: "inline-block",
//                         fontSize: "12px",
//                       }}
//                     >
//                       { "Customer"}
//                     </Typography>
//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       sx={{ color: "#333", mt: 1 }}
//                     >
//                       {user.name}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {user.address1 || "No Address Provided"}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//       </Grid>
//     </Box>
//   );
// }

// export default CustomerList;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";
import { getAllUsers } from "../features/authSlice";
import cust from "../assets/customer.jpg"
function CustomerList() {
  const dispatch = useDispatch();
  const { allUsers, loading } = useSelector((state) => state.auth);
  const { isDarkMode } = useSelector((state) => state.bookings); // Get dark mode state

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: isDarkMode ? "#1f2937" : "#f5f5f5", // Background color based on dark mode
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: isDarkMode ? "#e0e0e0" : "#7d66d9", // Text color based on dark mode
          textAlign: "center",
        }}
      >
        Customer List
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {loading
          ? Array.from({ length: 8 }, (_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: isDarkMode ? "#111827" : "#e0e0e0", // Skeleton background based on dark mode
                  }}
                />
              </Grid>
            ))
          : allUsers.map((user, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                      transform: "scale(1.05)",
                      borderColor: "#7D66D9",
                      backgroundColor: "#7D66D9/10",
                    },
                    backgroundColor: isDarkMode ? "#111827" : "#fff", // Card background based on dark mode
                  }}
                >
             <CardMedia
  component="div"
  sx={{
    height: { xs: 150, md: 200 },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0", // Optional: Background color to match the shape of an image
  }}
>
  {user.image ? (
    <img
      src={user.image}
      alt={user.name}
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
      }}
    />
  ) : (
    <img
      src={cust} // Display the fallback profile image when no user image
      alt="Profile"
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
      }}
    />
  )}
</CardMedia>
                  <CardContent sx={{ textAlign: "left", padding: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        backgroundColor: "#e1bee7",
                        color: "#7D66D9",
                        borderRadius: "12px",
                        padding: "2px 8px",
                        display: "inline-block",
                        fontSize: "12px",
                      }}
                    >
                      {"Customer"}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: isDarkMode ? "#e0e0e0" : "#333", // Text color for name based on dark mode
                        mt: 1,
                      }}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isDarkMode ? "#b0b0b0" : "textSecondary", // Address text color based on dark mode
                      }}
                    >
                      {user.address1 || "No Address Provided"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}

export default CustomerList;
