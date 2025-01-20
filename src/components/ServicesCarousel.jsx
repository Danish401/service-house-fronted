
//without mode
// import React, { useState } from "react";
// import { Box, Typography, Card, CardContent, IconButton, Grid } from "@mui/material";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// // Importing icons
// import MasonIcon from "../assets/icons/Mason.png";
// import GardnerIcon from "../assets/icons/Gardner.png";
// import LabourIcon from "../assets/icons/Labour.png";
// import ChefIcon from "../assets/icons/Chef.png";
// import CarpenterIcon from "../assets/icons/Carpenter.png";
// import ElectricianIcon from "../assets/icons/Electrician.png";
// import PlumberIcon from "../assets/icons/Plumber.png";
// import PainterIcon from "../assets/icons/Painter.png";
// import CleaningIcon from "../assets/icons/Cleaning.png";
// import ShiftingIcon from "../assets/icons/Shifting.png";

// const services = [
//   { icon: CleaningIcon, title: "Window Cleaning", description: "Professional window cleaning service for a clear and shiny view." },
//   { icon: LabourIcon, title: "Carpet Cleaning", description: "Deep cleaning of carpets to remove dirt and stains." },
//   { icon: ChefIcon, title: "Home Cleaning", description: "Thorough cleaning for a spotless and fresh home." },
//   { icon: CarpenterIcon, title: "Carpenter", description: "Expert carpentry services for all your wooden needs." },
//   { icon: ElectricianIcon, title: "Electrician", description: "Reliable electrical services for homes and offices." },
//   { icon: PlumberIcon, title: "Plumber", description: "Quick plumbing solutions for leaks and installations." },
//   { icon: PainterIcon, title: "Painter", description: "Professional painting services for homes and buildings." },
//   { icon: ShiftingIcon, title: "Shifting", description: "Hassle-free shifting and moving services." },
// ];

// const ServicesCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <Box sx={{ maxWidth: "100%", textAlign: "center", padding: 2 ,backgroundColor:"#e6e7ff"}}>
//       <Typography variant="h6" color="#7d66d9" gutterBottom>
//         WHAT WE DO
//       </Typography>
//       <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
//         The Services we provide for our customer
//       </Typography>
//       <Grid container spacing={3} justifyContent="center" alignItems="center">
//         <Grid item>
//           <IconButton onClick={handlePrev} color="#6b7280">
//             <ArrowBackIosNewIcon />
//           </IconButton>
//         </Grid>
//         {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
//           <Grid item key={index} xs={12} sm={4}>
//             <Card sx={{ border: "1px solid #e0e0e0", boxShadow: 3, textAlign: "center",  }}>
//               <CardContent>
//                 {/* Display the imported image */}
//                 <Box
//                   component="img"
//                   src={service.icon}
//                   alt={service.title}
//                   sx={{
//                     width: "80px",
//                     height: "80px",
//                     margin: "0 auto",
//                     marginBottom: 2,
                
//                   }}
//                 />
//                 <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
//                   {service.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "text.secondary", marginTop: 1 }}>
//                   {service.description}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#7d66d9", marginTop: 2 }}>
//                   Read More
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//         <Grid item>
//           <IconButton onClick={handleNext} color="#6b7280">
//             <ArrowForwardIosIcon />
//           </IconButton>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ServicesCarousel;


import React, { useState } from "react";
import { Box, Typography, Card, CardContent, IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";

// Importing icons
import MasonIcon from "../assets/icons/Mason.png";
import GardnerIcon from "../assets/icons/Gardner.png";
import LabourIcon from "../assets/icons/Labour.png";
import ChefIcon from "../assets/icons/Chef.png";
import CarpenterIcon from "../assets/icons/Carpenter.png";
import ElectricianIcon from "../assets/icons/Electrician.png";
import PlumberIcon from "../assets/icons/Plumber.png";
import PainterIcon from "../assets/icons/Painter.png";
import CleaningIcon from "../assets/icons/Cleaning.png";
import ShiftingIcon from "../assets/icons/Shifting.png";

const services = [
  { icon: CleaningIcon, title: "Window Cleaning", description: "Professional window cleaning service for a clear and shiny view." },
  { icon: LabourIcon, title: "Carpet Cleaning", description: "Deep cleaning of carpets to remove dirt and stains." },
  { icon: ChefIcon, title: "Home Cleaning", description: "Thorough cleaning for a spotless and fresh home." },
  { icon: CarpenterIcon, title: "Carpenter", description: "Expert carpentry services for all your wooden needs." },
  { icon: ElectricianIcon, title: "Electrician", description: "Reliable electrical services for homes and offices." },
  { icon: PlumberIcon, title: "Plumber", description: "Quick plumbing solutions for leaks and installations." },
  { icon: PainterIcon, title: "Painter", description: "Professional painting services for homes and buildings." },
  { icon: ShiftingIcon, title: "Shifting", description: "Hassle-free shifting and moving services." },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ maxWidth: "100%", textAlign: "center", padding: 2, backgroundColor: isDarkMode ? "#1f2937" : "#e6e7ff" }}>
      <Typography variant="h6" color={isDarkMode ? "#FFF" : "#7d66d9"} gutterBottom>
        WHAT WE DO
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4, color: isDarkMode ? "#FFF" : "inherit" }}>
        The Services we provide for our customer
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item>
          <IconButton onClick={handlePrev} sx={{ color: isDarkMode ? "#FFF" : "#6b7280" }}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Card sx={{ border: "1px solid #e0e0e0", boxShadow: 3, textAlign: "center", backgroundColor: isDarkMode ? "#111827" : "#FFF" }}>
              <CardContent>
                {/* Display the imported image */}
                <Box
                  component="img"
                  src={service.icon}
                  alt={service.title}
                  sx={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2, color: isDarkMode ? "#FFF" : "#2E3239" }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: isDarkMode ? "#CCC" : "text.secondary", marginTop: 1 }}>
                  {service.description}
                </Typography>
                <Typography variant="body2" sx={{ color: isDarkMode ? "#FFDD57" : "#7d66d9", marginTop: 2 }}>
                  Read More
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item>
          <IconButton onClick={handleNext} sx={{ color: isDarkMode ? "#FFF" : "#6b7280" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesCarousel;
