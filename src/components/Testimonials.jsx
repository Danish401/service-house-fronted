// import React from "react";
// import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";

// // Import the image directly using ES6 import
// import testimonialImage from "../assets/images/ceo.JPG";

// const Testimonials = () => {
//   const isMobile = useMediaQuery("(max-width:600px)");

//   return (
//     <Box
//       sx={{
//         padding: "3rem 1rem",
//         backgroundColor: "#0F172A", // Dark background
//         color: "#FFFFFF",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Card
//         sx={{
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           maxWidth: "900px",
//           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
//           borderRadius: "1rem",
//         }}
//       >
//         {/* Image Section */}
//         <CardMedia
//           component="img"
//           sx={{
//             width: isMobile ? "100%" : "40%",
//             borderTopLeftRadius: "1rem",
//             borderBottomLeftRadius: isMobile ? "0" : "1rem",
//             height: "auto",
//           }}
//           image={testimonialImage} // Use the imported image
//           alt="Testimonial Person"
//         />

//         {/* Text Section */}
//         <CardContent
//           sx={{
//             backgroundColor: "#1E293B",
//             padding: "2rem",
//             borderTopRightRadius: "1rem",
//             borderBottomRightRadius: isMobile ? "1rem" : "0",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: "bold",
//               marginBottom: "1rem",
//               fontSize: isMobile ? "1.2rem" : "1.5rem",
//             }}
//           >
//             Gravida quam mi erat tortor neque molestie.
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: "#CBD5E1",
//               marginBottom: "2rem",
//             }}
//           >
//             Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et
//             non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus
//             non nibh scelerisque bibendum.
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{
//               fontWeight: "bold",
//               color: "#FFFFFF",
//             }}
//           >
//             Judith Black
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#A0AEC0" }}>
//             CEO of Workcation
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Testimonials;
