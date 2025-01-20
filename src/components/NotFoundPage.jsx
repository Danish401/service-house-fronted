import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
  backgroundColor: "#f5f5f5",
  color: "#333",
  padding: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: "#9B9EF0",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#5B5BD6",
  },
}));

const NotFoundPage = () => {
  const handleGoBack = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <Container maxWidth="md">
      <StyledBox>
        <Typography variant="h1" fontWeight="bold">
          404
        </Typography>
        <Typography variant="h4" mt={2}>
          Not Found
        </Typography>
        <Typography variant="body1" mt={2}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Typography variant="h6" mt={3} color="#7F57F1">
          Coming Soon
        </Typography>
        <StyledButton variant="contained" onClick={handleGoBack}>
          Go Back
        </StyledButton>
      </StyledBox>
    </Container>
  );
};

export default NotFoundPage;
