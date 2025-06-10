

// import React, { useState, useEffect } from "react";
// import ZohoLeadForm from "./ZohoLeadForm";
// import {
//   Box,
//   Button,
//   Typography,
//   Grid,
//   Skeleton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   IconButton,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import CloseIcon from "@mui/icons-material/Close";
// import cl4 from "../assets/images/cl4.jpg";

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
//   const [loading, setLoading] = useState(true);

//   const [openForm, setOpenForm] = useState(false); // Contact form dialog

//   const [openForm, setOpenForm] = useState(false); // controls Dialog open/close


//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const Container = styled(Box)(({ theme }) => ({
//     backgroundColor: isDarkMode ? "#1f2937" : "#e6e7ff",
//     padding: "2rem",
//     textAlign: "center",
//     [theme.breakpoints.up("md")]: {
//       textAlign: "left",
//       padding: "4rem",
//     },
//   }));

//   const Title = styled(Typography)({
//     fontWeight: 700,
//     fontSize: "2.5rem",
//     color: isDarkMode ? "#FFDD57" : "#7d66d9",
//     marginBottom: "1rem",
//   });

//   const SubText = styled(Typography)({
//     fontSize: "1rem",
//     color: isDarkMode ? "#ccc" : "#555",
//     marginBottom: "2rem",
//   });

//   const StyledButton = styled(Button)(({ theme }) => ({
//     margin: "0.5rem",
//     padding: "0.8rem 1.5rem",
//     fontSize: "0.9rem",
//     borderRadius: "20px",
//     color: "#fff",
//     [theme.breakpoints.down("sm")]: {
//       padding: "0.5rem 1rem",
//     },
//   }));

//   return (
//     <>
//       <Container>
//         <Grid container alignItems="center" spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Box>
//               {loading ? (
//                 <>
//                   <Skeleton variant="text" width="80%" height={30} />
//                   <Skeleton variant="text" width="60%" height={20} />
//                   <Skeleton variant="rectangular" width="100%" height={300} />
//                   <Skeleton variant="rectangular" width={150} height={50} />
//                 </>
//               ) : (
//                 <>
//                   <Button
//                     variant="contained"
//                     sx={{
//                       backgroundColor: "#5B5BD6",
//                       borderRadius: "20px",
//                       textTransform: "none",
//                       fontSize: "1rem",
//                       padding: "0.6rem 1.2rem",
//                       color: "#fff",
//                       boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//                     }}
//                   >
//                     25% off for new clients
//                   </Button>
//                   <Title
//                     variant="h2"
//                     sx={{ fontSize: "3.5rem", marginTop: "1rem" }}
//                   >
//                     We Love The Job You Hate!
//                   </Title>
//                   <Typography
//                     sx={{
//                       fontSize: "1.2rem",
//                       margin: "1rem 0",
//                       fontWeight: "500",
//                       lineHeight: "1.6",
//                       color: isDarkMode ? "#aaa" : "#555",
//                     }}
//                   >
//                     Transform your home with our reliable and professional house
//                     services. From cleaning to maintenance, we handle it all!
//                   </Typography>
//                   <SubText>
//                     Transform your home with our reliable and professional house
//                     services. From cleaning to maintenance, we handle it all!
//                   </SubText>

//                   <StyledButton
//                     variant="contained"
//                     style={{
//                       backgroundColor: "#FFDD57",
//                       color: "#000",
//                     }}
//                     onClick={() => navigate("/about")}
//                   >
//                     More About Us
//                   </StyledButton>

//                   <StyledButton
//                     variant="outlined"
//                     style={{
//                       color: isDarkMode ? "#FFDD57" : "#5B5BD6",
//                       borderColor: isDarkMode ? "#FFDD57" : "#5B5BD6",
//                     }}

//                     onClick={() => navigate("/premium")} // ✅ navigate to Premium page

//                   >
//                     Get A Service
//                   </StyledButton>

//                   <StyledButton
//                     variant="contained"
//                     style={{
//                       backgroundColor: "#00A3F3",
//                       color: "#fff",
//                     }}
//                     onClick={() => setOpenForm(true)}
//                   >
//                     Contact Us
//                   </StyledButton>
//                 </>
//               )}
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             {loading ? (
//               <Skeleton variant="rectangular" width="100%" height={300} />
//             ) : (
//               <Box
//                 component="img"
//                 src={cl4}
//                 alt="Cleaning Lady"
//                 sx={{
//                   maxWidth: "100%",
//                   height: "auto",
//                   borderRadius: "10px",
//                   boxShadow: isDarkMode
//                     ? "0px 8px 20px rgba(255, 255, 255, 0.2)"
//                     : "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                 }}
//               />
//             )}
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Contact Form Dialog */}
//       <Dialog
//         open={openForm}
//         onClose={() => setOpenForm(false)}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{
//           style: {
//             borderRadius: "20px",
//             padding: "1rem",
//           },
//         }}
//       >
//         <DialogTitle>
//           Contact Us
//           <IconButton
//             onClick={() => setOpenForm(false)}
//             sx={{ position: "absolute", right: 8, top: 8 }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <ZohoLeadForm />
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from "react";
import ZohoLeadForm from "./ZohoLeadForm";
import {
  Box,
  Button,
  Typography,
  Grid,
  Skeleton,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import cl4 from "../assets/images/cl4.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false); // ✅ Corrected: no duplicate

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const Container = styled(Box)(({ theme }) => ({
    backgroundColor: isDarkMode ? "#1f2937" : "#e6e7ff",
    padding: "2rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      padding: "4rem",
    },
  }));

  const Title = styled(Typography)({
    fontWeight: 700,
    fontSize: "2.5rem",
    color: isDarkMode ? "#FFDD57" : "#7d66d9",
    marginBottom: "1rem",
  });

  const SubText = styled(Typography)({
    fontSize: "1rem",
    color: isDarkMode ? "#ccc" : "#555",
    marginBottom: "2rem",
  });

  const StyledButton = styled(Button)(({ theme }) => ({
    margin: "0.5rem",
    padding: "0.8rem 1.5rem",
    fontSize: "0.9rem",
    borderRadius: "20px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem",
    },
  }));

  return (
    <>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              {loading ? (
                <>
                  <Skeleton variant="text" width="80%" height={30} />
                  <Skeleton variant="text" width="60%" height={20} />
                  <Skeleton variant="rectangular" width="100%" height={300} />
                  <Skeleton variant="rectangular" width={150} height={50} />
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5B5BD6",
                      borderRadius: "20px",
                      textTransform: "none",
                      fontSize: "1rem",
                      padding: "0.6rem 1.2rem",
                      color: "#fff",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    25% off for new clients
                  </Button>

                  <Title
                    variant="h2"
                    sx={{ fontSize: "3.5rem", marginTop: "1rem" }}
                  >
                    We Love The Job You Hate!
                  </Title>

                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      margin: "1rem 0",
                      fontWeight: "500",
                      lineHeight: "1.6",
                      color: isDarkMode ? "#aaa" : "#555",
                    }}
                  >
                    Transform your home with our reliable and professional house
                    services. From cleaning to maintenance, we handle it all!
                  </Typography>

                  <SubText>
                    Transform your home with our reliable and professional house
                    services. From cleaning to maintenance, we handle it all!
                  </SubText>

                  <StyledButton
                    variant="contained"
                    style={{
                      backgroundColor: "#FFDD57",
                      color: "#000",
                    }}
                    onClick={() => navigate("/about")}
                  >
                    More About Us
                  </StyledButton>

                  <StyledButton
                    variant="outlined"
                    style={{
                      color: isDarkMode ? "#FFDD57" : "#5B5BD6",
                      borderColor: isDarkMode ? "#FFDD57" : "#5B5BD6",
                    }}
                    onClick={() => navigate("/premium")}
                  >
                    Get A Service
                  </StyledButton>

                  <StyledButton
                    variant="contained"
                    style={{
                      backgroundColor: "#00A3F3",
                      color: "#fff",
                    }}
                    onClick={() => setOpenForm(true)}
                  >
                    Contact Us
                  </StyledButton>
                </>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={300} />
            ) : (
              <Box
                component="img"
                src={cl4}
                alt="Cleaning Lady"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: isDarkMode
                    ? "0px 8px 20px rgba(255, 255, 255, 0.2)"
                    : "0px 8px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Contact Form Dialog */}
      <Dialog
        open={openForm}
        onClose={() => setOpenForm(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "20px",
            padding: "1rem",
          },
        }}
      >
        <DialogTitle>
          Contact Us
          <IconButton
            onClick={() => setOpenForm(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ZohoLeadForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroSection;
