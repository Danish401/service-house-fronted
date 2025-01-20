// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
// } from "@mui/material";
// import { green } from "@mui/material/colors";
// import service from "../assets/images/service.jpg";

// const AboutUs = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       {/* Header Section */}
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={5}>
//           <Box textAlign="left">
//             <Typography variant="overline" color="green" fontWeight="bold" fontSize={18}>
//               About Us
//             </Typography>
//             <Typography variant="h3" fontWeight="bold" gutterBottom>
//               Empower Your Business’s Financial Future Effortlessly
//             </Typography>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{ mt: 3, bgcolor: green[500], "&:hover": { bgcolor: green[700] } }}
//             >
//               Get Started
//             </Button>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={7}>
//           <Box>
//             <Typography
//               variant="body1"
//               color="textSecondary"
//               sx={{ maxWidth: 600, margin: "0 auto" }}
//             >
//               Take control of your business’s financial future with effortless strategies that
//               ensure stability and growth. Empower your decisions with expert insights,
//               streamlining your path to long-term success. Focus on what matters most—growing
//               your business.
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       {/* Content Section */}
//       <Grid container spacing={4} alignItems="stretch" sx={{ mt: 4 }}>
//         <Grid item xs={12} md={6}>
//        <Card
//   sx={{
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     minHeight: 300,
//     position: "relative", // Make the Card relative for positioning content over the image
//     overflow: "hidden", // Ensure content stays within bounds
//   }}
// >
//   <CardMedia
//     component="img"
//     height="300"
//     image={service}
//     alt="Our Story"
//     sx={{ filter: "brightness(60%)" }} // Darken the image for better text visibility
//   />
//   <CardContent
//     sx={{
//       position: "absolute",
//       bottom: 0, // Position content at the bottom
//       left: 0, // Align content to the left
//       right: 0, // Align content to the right
//       color: "white", // White font color
//       textAlign: "justify", // Justify the text
//       zIndex: 2, // Ensure content is above the image
//       padding: "16px", // Add some padding from the bottom
//     }}
//   >
//     <Typography variant="h6" fontWeight="bold">
//       Our Story
//     </Typography>
//     <Typography variant="body1" color="inherit">
//       TechInnovate, a leading IT company, revolutionizes the industry with
//       cutting-edge AI solutions, driving innovation and connectivity for
//       businesses worldwide.
//     </Typography>
//   </CardContent>
// </Card>

//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Card sx={{ bgcolor: "#E6F4F1", p: 3, borderRadius: 2, height: "100%", minHeight: 300 }}>
//                 <CardContent sx={{ textAlign: "center" }}>
//                   <Typography variant="h6" fontWeight="bold">
//                     Our Mission
//                   </Typography>
//                   <Typography variant="body1" color="textSecondary">
//                     To deliver innovative IT solutions that empower businesses.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12}>
//               <Card sx={{ bgcolor: "#004D40", p: 3, borderRadius: 2, color: "white", height: "100%", minHeight: 300 }}>
//                 <CardContent sx={{ textAlign: "center" }}>
//                   <Typography variant="h6" fontWeight="bold">
//                     Our Vision
//                   </Typography>
//                   <Typography variant="body1">
//                     To lead in technology and shape a smarter, more connected future.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default AboutUs;
import React from "react";
import HouseServiceSection from "./HouseServiceSection"; // Adjust the path as needed

const AboutUs = () => {
  return <HouseServiceSection />;
};

export default AboutUs;
