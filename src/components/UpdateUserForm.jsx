

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUser } from "../features/authSlice";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
  Alert,
  Avatar,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const UpdateUserForm = () => {
  const dispatch = useDispatch();
  const { user, loading, error, token } = useSelector((state) => state.auth);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    image: null, // For file uploads or existing URL
  });

  // Theme setup
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    return () => {
      if (formData.image instanceof File) {
        URL.revokeObjectURL(formData.image);
      }
    };
  }, [formData.image]);

  useEffect(() => {
    if (token) {
      dispatch(getUserById(user?.id));
    }
  }, [token, user?.id, dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address1: user.address1 || "",
        address2: user.address2 || "",
        image: user.image || null,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    for (const key in formData) {
      formPayload.append(key, formData[key]);
    }
    dispatch(updateUser(formPayload));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "background.default",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 800,
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              textAlign: "center",
              color: isDarkMode ? "#E0E0E0" : "#7D66D9",
            }}
          >
            User Profile
          </Typography>
          {loading && <CircularProgress sx={{ display: "block", mx: "auto" }} />}
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                {formData.image ? (
                  <Avatar
                    src={
                      formData.image instanceof File
                        ? URL.createObjectURL(formData.image)
                        : formData.image
                    }
                    alt="User Image"
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 2,
                    }}
                  />
                ) : (
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 2,
                      bgcolor: "#7D66D9",
                    }}
                  >
                    <PhotoCamera sx={{ fontSize: 50, color: "white" }} />
                  </Avatar>
                )}
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    bgcolor: "#7D66D9",
                    color: "white",
                  }}
                >
                  Upload Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Button>
              </Box>

              <Box sx={{ flex: 1 }}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Address Line 1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Address Line 2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    bgcolor: "#7D66D9",
                    color: "white",
                  }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default UpdateUserForm;
