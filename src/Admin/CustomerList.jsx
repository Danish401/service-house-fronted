
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
