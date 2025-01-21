


import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid, Skeleton } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import clean from "../assets/images/clean.jpg";
import cl2 from "../assets/images/cl2.jpg";
import cl3 from "../assets/images/cl3.jpg";
import cl4 from "../assets/images/cl4.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 2000); // 2-second delay to simulate loading
    return () => clearTimeout(timer);
  }, []);

  const Container = styled(Box)(({ theme }) => ({
    backgroundColor: isDarkMode ? "#1f2937" : "#e6e7ff", // Dark mode support
    padding: "2rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      padding: "4rem",
    },
  }));

  const Title = styled(Typography)(({
    fontWeight: 700,
    fontSize: "2.5rem",
    color: isDarkMode ? "#FFDD57" : "#7d66d9", // Adjust color for dark mode
    marginBottom: "1rem",
  }));

  const SubText = styled(Typography)(({
    fontSize: "1rem",
    color: isDarkMode ? "#ccc" : "#555", // Adjust color for dark mode
    marginBottom: "2rem",
  }));

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
    <Container>
      <Grid container alignItems="center" spacing={2}>
        {/* Text Section */}
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
                    fontSize: "1rem", // Slightly larger button text
                    padding: "0.6rem 1.2rem",
                    color: "#fff",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  25% off for new clients
                </Button>
                <Title variant="h2" sx={{ fontSize: "3.5rem", marginTop: "1rem" }}>
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
                  Transform your home with our reliable and professional house services. From cleaning to maintenance, we handle it all!
                </Typography>
                <SubText>
                  Transform your home with our reliable and professional house services. From cleaning to maintenance, we handle it all!
                </SubText>
                <StyledButton
                  variant="contained"
                  style={{
                    backgroundColor: "#FFDD57", // Eye-catching yellow for the primary button
                    color: "#000",
                  }}
                  onClick={() => navigate("/about")} // Add navigation
                >
                  More About Us
                </StyledButton>
                <StyledButton
                  variant="outlined"
                  style={{
                    color: isDarkMode ? "#FFDD57" : "#5B5BD6", // Adjust border color for dark mode
                    borderColor: isDarkMode ? "#FFDD57" : "#5B5BD6",
                    fontSize: "1rem",
                    padding: "0.8rem 1.5rem",
                  }}
                >
                  Get A Service
                </StyledButton>
              </>
            )}
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={300} />
          ) : (
            <Box
              component="img"
              src={cl4} // Replace with an actual image link
              alt="Cleaning Lady"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: isDarkMode
                  ? "0px 8px 20px rgba(255, 255, 255, 0.2)"
                  : "0px 8px 20px rgba(0, 0, 0, 0.2)", // Adjust shadow for dark mode
              }}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
