import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateUser } from "../features/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
  Alert,
  Avatar,
} from "@mui/material";
import { PhotoCamera, ArrowBack } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function CustomerProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Extract customer ID from the URL
  const { id } = useParams();
  
  // Get the state (all users, loading, etc.)
  const { allUsers, loading, error } = useSelector((state) => state.auth);
  const { isDarkMode } = useSelector((state) => state.bookings);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    image: null,
  });

  // Theme setup
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    dispatch(getAllUsers()); // Load all users
  }, [dispatch]);

  // Fetch the specific customer's data based on `id`
  useEffect(() => {
    const customer = allUsers.find((user) => user.id === id);
    if (customer) {
      setFormData({
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
        address1: customer.address1 || "",
        address2: customer.address2 || "",
        image: customer.image || null,
      });
    }
  }, [allUsers, id]);

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
    dispatch(updateUser({ id, formData: formPayload })); // Update the user with the given id
    navigate("/dashboard/all-customers"); // Redirect to customer details page
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
            Edit Customer Profile
          </Typography>

          {/* Loading & Error Handling */}
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
              {/* Image Upload */}
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

              {/* Input Fields */}
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

                {/* Update & Back Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#7D66D9",
                      color: "white",
                    }}
                    type="submit"
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#d9534f",
                      "&:hover": { bgcolor: "#c9302c" },
                    }}
                    onClick={() => navigate("/dashboard/all-customers")}
                    startIcon={<ArrowBack />}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CustomerProfile;
