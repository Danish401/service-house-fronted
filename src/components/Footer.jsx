// import React from "react";
// import { Box, Grid, Typography, Button, Link } from "@mui/material";
// import { Facebook, Instagram, GitHub, YouTube ,LinkedIn} from "@mui/icons-material";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: "#7D66D9",
//         color: "#FFFFFF",
//         padding: "2rem 1rem",
//         textAlign: "center",
//         fontFamily: "'Poppins', sans-serif", // Attractive font
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: "bold",
//           marginBottom: "1rem",
//         }}
//       >
//         Boost your productivity. Start using our app today.
//       </Typography>
//       <Typography
//         variant="body1"
//         sx={{
//           color: "#E2DDFE",
//           marginBottom: "2rem",
//           maxWidth: "600px",
//           margin: "0 auto",
//         }}
//       >
//         Bridging customers and skilled professionals, our house service platform
//         connects you with trusted carpenters, painters, electricians, masons,
//         and more, ensuring top-quality work and seamless experiences for all.
//       </Typography>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: "#FFFFFF",
//           color: "#7D66D9",
//           fontWeight: "bold",
//           "&:hover": { backgroundColor: "#E2DDFE", color: "#7D66D9" },
//         }}
//       >
//         Get started
//       </Button>
//       <Grid container spacing={4} sx={{ marginTop: "3rem" }}>
//         <Grid item xs={6} sm={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Solutions
//           </Typography>
//           {["Marketing", "Analytics", "Automation", "Commerce", "Insights"].map(
//             (item) => (
//               <Link
//                 key={item}
//                 href="#"
//                 sx={{
//                   display: "block",
//                   color: "#FFFFFF",
//                   marginBottom: "0.5rem",
//                   textDecoration: "none",
//                   "&:hover": { color: "#E2DDFE" },
//                 }}
//               >
//                 {item}
//               </Link>
//             )
//           )}
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Support
//           </Typography>
//           {["Submit ticket", "Documentation", "Guides"].map((item) => (
//             <Link
//               key={item}
//               href="#"
//               sx={{
//                 display: "block",
//                 color: "#FFFFFF",
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": { color: "#E2DDFE" },
//               }}
//             >
//               {item}
//             </Link>
//           ))}
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Company
//           </Typography>
//           {["About", "Blog", "Jobs", "Press"].map((item) => (
//             <Link
//               key={item}
//               href="#"
//               sx={{
//                 display: "block",
//                 color: "#FFFFFF",
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": { color: "#E2DDFE" },
//               }}
//             >
//               {item}
//             </Link>
//           ))}
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Legal
//           </Typography>
//           {["Terms of service", "Privacy policy", "License"].map((item) => (
//             <Link
//               key={item}
//               href="#"
//               sx={{
//                 display: "block",
//                 color: "#FFFFFF",
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": { color: "#E2DDFE" },
//               }}
//             >
//               {item}
//             </Link>
//           ))}
//         </Grid>
//       </Grid>
//       <Box
//         sx={{
//           marginTop: "3rem",
//           display: "flex",
//           justifyContent: "center",
//           gap: "1rem",
//         }}
//       >
//         <Link
//           href="www.linkedin.com/in/danish-ali-7886a024a"
//           sx={{
//             color: "#FFFFFF",
//             "&:hover": { color: "#E2DDFE" },
//           }}
//         >
//           <LinkedIn />
//         </Link>
//         <Link
//           href="https://www.instagram.com/danish.ali0209/"
//           sx={{
//             color: "#FFFFFF",
//             "&:hover": { color: "#E2DDFE" },
//           }}
//         >
//           <Instagram />
//         </Link>
//         <Link
//           href="https://github.com/Danish401"
//           sx={{
//             color: "#FFFFFF",
//             "&:hover": { color: "#E2DDFE" },
//           }}
//         >
//           <GitHub />
//         </Link>
//         <Link
//           href="https://www.youtube.com/@alid0021"
//           sx={{
//             color: "#FFFFFF",
//             "&:hover": { color: "#E2DDFE" },
//           }}
//         >
//           <YouTube />
//         </Link>
//       </Box>
//       <Typography
//         variant="body2"
//         sx={{
//           marginTop: "2rem",
//           color: "#E2DDFE",
//           borderTop: "1px solid #FFFFFF",
//           paddingTop: "1rem",
//         }}
//       >
//      ALI.   © 2024 Your Company, Inc. All rights reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;

// import React from "react";
// import { Box, Grid, Typography, Button, Link } from "@mui/material";
// import { Facebook, Instagram, GitHub, YouTube, LinkedIn } from "@mui/icons-material";
// import { useSelector } from "react-redux";

// const Footer = () => {
//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Accessing dark mode state

//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: isDarkMode ? "#1F2937" : "#7D66D9", // Change background color based on dark mode
//         color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Change text color based on dark mode
//         padding: "2rem 1rem",
//         textAlign: "center",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: "bold",
//           marginBottom: "1rem",
//         }}
//       >
//         Boost your productivity. Start using our app today.
//       </Typography>
//       <Typography
//         variant="body1"
//         sx={{
//           color: isDarkMode ? "#7D66D9" : "#E2DDFE", // Adjust color for dark mode
//           marginBottom: "2rem",
//           maxWidth: "600px",
//           margin: "0 auto",
//         }}
//       >
//         Bridging customers and skilled professionals, our house service platform
//         connects you with trusted carpenters, painters, electricians, masons,
//         and more, ensuring top-quality work and seamless experiences for all.
//       </Typography>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: isDarkMode ? "#FFDD57" : "#FFFFFF", // Adjust button color for dark mode
//           color: isDarkMode ? "#1F2937" : "#7D66D9", // Adjust button text color for dark mode
//           fontWeight: "bold",
//           "&:hover": {
//             backgroundColor: isDarkMode ? "#E2DDFE" : "#E2DDFE",
//             color: isDarkMode ? "#1F2937" : "#7D66D9", // Adjust hover color for dark mode
//           },
//         }}
//       >
//         Get started
//       </Button>
//       <Grid container spacing={4} sx={{ marginTop: "3rem" }}>
//         <Grid item xs={6} sm={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Solutions
//           </Typography>
//           {["Marketing", "Analytics", "Automation", "Commerce", "Insights"].map(
//             (item) => (
//               <Link
//                 key={item}
//                 href="#"
//                 sx={{
//                   display: "block",
//                   color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Link color for dark mode
//                   marginBottom: "0.5rem",
//                   textDecoration: "none",
//                   "&:hover": {
//                     color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
//                   },
//                 }}
//               >
//                 {item}
//               </Link>
//             )
//           )}
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Support
//           </Typography>
//           {["Submit ticket", "Documentation", "Guides"].map((item) => (
//             <Link
//               key={item}
//               href="#"
//               sx={{
//                 display: "block",
//                 color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Link color for dark mode
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": {
//                   color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
//                 },
//               }}
//             >
//               {item}
//             </Link>
//           ))}
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Company
//           </Typography>
//           {["About", "Blog", "Jobs", "Press"].map((item) => (
//             <Link
//               key={item}
//               href="#"
//               sx={{
//                 display: "block",
//                 color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Link color for dark mode
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": {
//                   color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
//                 },
//               }}
//             >
//               {item}
//             </Link>
//           ))}
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Legal
//           </Typography>
//           {["Terms of service", "Privacy policy", "License"].map((item) => (
//             <Link
//               key={item}
//               href="#"
//               sx={{
//                 display: "block",
//                 color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Link color for dark mode
//                 marginBottom: "0.5rem",
//                 textDecoration: "none",
//                 "&:hover": {
//                   color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
//                 },
//               }}
//             >
//               {item}
//             </Link>
//           ))}
//         </Grid>
//       </Grid>
//       <Box
//         sx={{
//           marginTop: "3rem",
//           display: "flex",
//           justifyContent: "center",
//           gap: "1rem",
//         }}
//       >
//         <Link
//           href="www.linkedin.com/in/danish-ali-7886a024a"
//           sx={{
//             color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Icon color for dark mode
//             "&:hover": { color: isDarkMode ? "#E2DDFE" : "#E2DDFE" },
//           }}
//         >
//           <LinkedIn />
//         </Link>
//         <Link
//           href="https://www.instagram.com/danish.ali0209/"
//           sx={{
//             color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Icon color for dark mode
//             "&:hover": { color: isDarkMode ? "#E2DDFE" : "#E2DDFE" },
//           }}
//         >
//           <Instagram />
//         </Link>
//         <Link
//           href="https://github.com/Danish401"
//           sx={{
//             color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Icon color for dark mode
//             "&:hover": { color: isDarkMode ? "#E2DDFE" : "#E2DDFE" },
//           }}
//         >
//           <GitHub />
//         </Link>
//         <Link
//           href="https://www.youtube.com/@alid0021"
//           sx={{
//             color: isDarkMode ? "#FFDD57" : "#FFFFFF", // Icon color for dark mode
//             "&:hover": { color: isDarkMode ? "#E2DDFE" : "#E2DDFE" },
//           }}
//         >
//           <YouTube />
//         </Link>
//       </Box>
//       <Typography
//         variant="body2"
//         sx={{
//           marginTop: "2rem",
//           color: isDarkMode ? "#E2DDFE" : "#E2DDFE", // Footer text color
//           borderTop: "1px solid #FFFFFF",
//           paddingTop: "1rem",
//         }}
//       >
//         ALI. © 2024 Your Company, Inc. All rights reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Accessing dark mode state
  const navigate = useNavigate();

  // Handle navigation for internal links
  const handleNavigate = () => {
    navigate("/not-found");
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: isDarkMode ? "#1F2937" : "#7D66D9",
        color: isDarkMode ? "#FFDD57" : "#FFFFFF",
        padding: "2rem 1rem",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Boost your productivity. Start using our app today.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: isDarkMode ? "#7D66D9" : "#E2DDFE",
          marginBottom: "2rem",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Bridging customers and skilled professionals, our house service platform
        connects you with trusted carpenters, painters, electricians, masons,
        and more, ensuring top-quality work and seamless experiences for all.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: isDarkMode ? "#FFDD57" : "#FFFFFF",
          color: isDarkMode ? "#1F2937" : "#7D66D9",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: isDarkMode ? "#E2DDFE" : "#E2DDFE",
            color: isDarkMode ? "#1F2937" : "#7D66D9",
          },
        }}
      >
        Get started
      </Button>
      <Grid container spacing={4} sx={{ marginTop: "3rem" }}>
        <Grid item xs={6} sm={3}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Solutions
          </Typography>
          {["Marketing", "Analytics", "Automation", "Commerce", "Insights"].map(
            (item) => (
              <Link
                key={item}
                onClick={handleNavigate}
                sx={{
                  display: "block",
                  color: isDarkMode ? "#FFDD57" : "#FFFFFF",
                  marginBottom: "0.5rem",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
                  },
                }}
              >
                {item}
              </Link>
            )
          )}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Support
          </Typography>
          {["Submit ticket", "Documentation", "Guides"].map((item) => (
            <Link
              key={item}
              onClick={handleNavigate}
              sx={{
                display: "block",
                color: isDarkMode ? "#FFDD57" : "#FFFFFF",
                marginBottom: "0.5rem",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
                },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Company
          </Typography>
          {["About", "Blog", "Jobs", "Press"].map((item) => (
            <Link
              key={item}
              onClick={handleNavigate}
              sx={{
                display: "block",
                color: isDarkMode ? "#FFDD57" : "#FFFFFF",
                marginBottom: "0.5rem",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
                },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Legal
          </Typography>
          {["Terms of service", "Privacy policy", "License"].map((item) => (
            <Link
              key={item}
              onClick={handleNavigate}
              sx={{
                display: "block",
                color: isDarkMode ? "#FFDD57" : "#FFFFFF",
                marginBottom: "0.5rem",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
                },
              }}
            >
                {item}
            </Link>
          ))}
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        sx={{
          marginTop: "2rem",
          color: isDarkMode ? "#E2DDFE" : "#E2DDFE",
          borderTop: "1px solid #FFFFFF",
          paddingTop: "1rem",
        }}
      >
        ALI. © 2024 Your Company, Inc. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
