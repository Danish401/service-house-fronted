import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  Avatar,
  TextareaAutosize,
  CircularProgress,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  updateFormValue,
  resetForm,
  setImage,
  registerEmployee,
} from "../features/employeeRegisterSlice";

function EmployeeRegister() {
  const { formValues, image, loading, error, isAuthenticated } = useSelector(
    (state) => state.employeeRegister
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const categoryOptions = {
    Mason: ["Bricklayer", "Concrete Mason", "Stonemason"],
    Gardner: ["Landscape Gardener", "Horticulturist", "Floral Designer"],
    Labour: ["General Labourer", "Skilled Labourer"],
    Chef: ["Sous Chef", "Pastry Chef", "Head Chef"],
    Carpenter: ["Furniture Carpenter", "Finish Carpenter", "Rough Carpenter"],
    Shifting: ["Packers and Movers", "Furniture Movers"],
    Electrician: [
      "AC Repair",
      "House Electrician",
      "Washing Machine Electrician",
    ],
    Plumber: ["Residential Plumber", "Commercial Plumber"],
    Painter: ["Interior Painter", "Exterior Painter"],
    Cleaning: ["House Cleaning", "Office Cleaning", "Window Cleaning"],
  };

  // Get current location using GPS and fill Address 1
  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ff4d4d", color: "#fff" },
      });
      return;
    }

    setIsLoadingLocation(true);
    toast.info("Requesting location access... Please allow GPS access when prompted.", {
      theme: "dark",
      autoClose: 3000,
    });

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Use free Nominatim API for reverse geocoding
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                'User-Agent': 'HouseServiceApp/1.0'
              }
            }
          );
          
          const data = await response.json();
          
          if (data && data.display_name) {
            dispatch(updateFormValue({ name: "address1", value: data.display_name }));
            toast.success("Address captured successfully!", {
              theme: "colored",
              autoClose: 3000,
              style: { backgroundColor: "#4caf50", color: "#fff" },
            });
          } else {
            // Fallback: Use coordinates if address not found
            dispatch(updateFormValue({ name: "address1", value: `${latitude}, ${longitude}` }));
            toast.warning("Could not get full address. Using coordinates.", {
              theme: "colored",
              autoClose: 3000,
            });
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          toast.error("Failed to get address. Please enter manually.", {
            theme: "colored",
            autoClose: 3000,
            style: { backgroundColor: "#ff4d4d", color: "#fff" },
          });
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        setIsLoadingLocation(false);
        let errorMessage = "Failed to get your location.";
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable GPS in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out. Please try again.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
            break;
        }
        
        toast.error(errorMessage, {
          theme: "colored",
          autoClose: 4000,
          style: { backgroundColor: "#ff4d4d", color: "#fff" },
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  // Real-time validation on blur
  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    
    switch (fieldName) {
      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[a-z][a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)) {
          newErrors.email = "Invalid email format (must start lowercase & contain '@')";
        } else if (!value.includes("@")) {
          newErrors.email = "Email must contain '@' symbol";
        } else if (!value.includes(".")) {
          newErrors.email = "Email must contain a domain (e.g., .com, .org)";
        } else {
          delete newErrors.email;
        }
        break;
      case "password":
        if (!value.trim()) {
          newErrors.password = "Password is required";
        } else if (value.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        } else if (!/(?=.*[A-Z])/.test(value)) {
          newErrors.password = "Password must contain at least one uppercase letter";
        } else if (!/(?=.*\d)/.test(value)) {
          newErrors.password = "Password must contain at least one number";
        } else if (!/(?=.*[@$!%*?&])/.test(value)) {
          newErrors.password = "Password must contain at least one special character (@$!%*?&)";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormValue({ name, value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate image immediately on selection
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        toast.error("❌ Invalid image format! Only JPEG, PNG, GIF, and WebP are allowed", {
          theme: "colored",
          autoClose: 3000,
          style: { backgroundColor: "#abbdf9", color: "#000" },
        });
        event.target.value = ""; // Clear the input
        return;
      }
      
      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > 2) {
        toast.error("❌ Image too large! Max size: 2MB", {
          theme: "colored",
          autoClose: 3000,
          style: { backgroundColor: "#abbdf9", color: "#000" },
        });
        event.target.value = ""; // Clear the input
        return;
      }
      
      const imageUrl = URL.createObjectURL(file); // Generate a preview URL
      dispatch(setImage(file)); // Store the file in Redux state (no quality reduction)
      dispatch(updateFormValue({ name: "imagePreview", value: imageUrl })); // Update the preview URL in formValues
    }
  };

  const validateInputs = () => {
    const newErrors = {};
  
    // Name Validation
    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
      toast.error("⚠️ Name is required!", { theme: "dark", autoClose: 3000, style: { backgroundColor: "#9b9ef0", color: "#fff" } });
    }
  
    // Email Validation
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
      toast.error("⚠️ Email is required!", { theme: "dark", autoClose: 3000, style: { backgroundColor: "#ffd700", color: "#000" } });
    } else if (!/^[a-z][a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formValues.email)) {
      newErrors.email = "Invalid email format (must start lowercase & contain '@')";
      toast.error("❌ Invalid Email! Use lowercase & include '@'", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#4f46e5", color: "#fff" },
      });
    } else if (!formValues.email.includes("@")) {
      newErrors.email = "Email must contain '@' symbol";
      toast.error("❌ Email must contain '@' symbol", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#4f46e5", color: "#fff" },
      });
    } else if (!formValues.email.includes(".")) {
      newErrors.email = "Email must contain a domain (e.g., .com, .org)";
      toast.error("❌ Invalid email domain", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#4f46e5", color: "#fff" },
      });
    }
  
    // Password Validation
    if (!formValues.password.trim()) {
      newErrors.password = "Password is required";
      toast.error("⚠️ Password is required!", { theme: "dark", autoClose: 3000, style: { backgroundColor: "#9b9ef0", color: "#fff" } });
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      toast.error("❌ Password must be at least 6 characters", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ffd700", color: "#000" },
      });
    } else if (!/(?=.*[A-Z])/.test(formValues.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
      toast.error("❌ Password must contain at least one uppercase letter", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ffd700", color: "#000" },
      });
    } else if (!/(?=.*\d)/.test(formValues.password)) {
      newErrors.password = "Password must contain at least one number";
      toast.error("❌ Password must contain at least one number", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ffd700", color: "#000" },
      });
    } else if (!/(?=.*[@$!%*?&])/.test(formValues.password)) {
      newErrors.password = "Password must contain at least one special character (@$!%*?&)";
      toast.error("❌ Password must contain at least one special character", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ffd700", color: "#000" },
      });
    }

    // Image Validation
    if (image) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
      if (!allowedTypes.includes(image.type)) {
        newErrors.image = "Only JPEG, PNG, GIF, and WebP images are allowed";
        toast.error("❌ Invalid image format! Only JPEG, PNG, GIF, and WebP are allowed", {
          theme: "colored",
          autoClose: 3000,
          style: { backgroundColor: "#abbdf9", color: "#000" },
        });
      } else {
        const fileSizeInMB = image.size / (1024 * 1024);
        if (fileSizeInMB > 2) {
          newErrors.image = "Image size should not exceed 2MB";
          toast.error("❌ Image too large! Max size: 2MB", {
            theme: "colored",
            autoClose: 3000,
            style: { backgroundColor: "#abbdf9", color: "#000" },
          });
        }
      }
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateInputs()) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    const formData = {
      ...formValues,
      image,
    };
    dispatch(registerEmployee(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Registration successful! Check your email for confirmation.", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#4caf50", color: "#fff" },
      });
      navigate("/user/home-employee");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ff4d4d", color: "#fff" },
      });
    }
  }, [error]);

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: "90%", md: "800px" },
        margin: "auto",
        padding: { xs: 2, sm: 3, md: 4 },
        boxShadow: { xs: 0, sm: 3 },
        borderRadius: { xs: 0, sm: 2 },
        backgroundColor: "#ffffff",
        color: "#333",
        mt: { xs: 2, sm: 4, md: 8 },
        mb: { xs: 4, sm: 4, md: 4 },
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: 600,
          color: "#7d66d9",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
        }}
      >
        Employee Registration
      </Typography>

      {/* Image Upload Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        mb={3}
        gap={2}
      >
        <Box
          sx={{
            width: { xs: 100, sm: 120 },
            height: { xs: 100, sm: 120 },
            borderRadius: "50%",
            backgroundColor: "#E2DDFE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
            border: "2px solid #7d66d9",
            overflow: "hidden",
          }}
        >
          <input
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="icon-button-file" style={{ cursor: "pointer", width: "100%", height: "100%" }}>
            <IconButton component="span" sx={{ width: "100%", height: "100%" }}>
              {image ? (
                <Avatar
                  src={formValues.imagePreview || ""}
                  sx={{ width: "100%", height: "100%" }}
                />
              ) : (
                <AddAPhotoIcon sx={{ fontSize: { xs: 40, sm: 50 }, color: "#7d66d9" }} />
              )}
            </IconButton>
          </label>
        </Box>
        <Box textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" sx={{ fontWeight: 500, color: "#333" }}>
            Upload Employee Picture
          </Typography>
          <Typography variant="caption" sx={{ color: "#666", fontSize: "0.75rem" }}>
            Max size: 2MB (JPEG, PNG, GIF, WebP)
          </Typography>
        </Box>
      </Box>

      {/* Form fields - Mobile Responsive Grid */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "repeat(2, 1fr)" }}
        gap={{ xs: 2, sm: 2, md: 2 }}
      >
        <TextField
          label="Employee Name"
          variant="outlined"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.name}
          helperText={errors.name}
          sx={{
            backgroundColor: "#E2DDFE",
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE",
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          onBlur={(e) => validateField("email", e.target.value)}
          fullWidth
          required
          error={!!errors.email}
          helperText={errors.email}
          sx={{
            backgroundColor: "#E2DDFE",
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE",
            },
          }}
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE",
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE",
            },
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          onBlur={(e) => validateField("password", e.target.value)}
          fullWidth
          required
          error={!!errors.password}
          helperText={errors.password}
          sx={{
            backgroundColor: "#E2DDFE",
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE",
            },
          }}
        />
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={formValues.category}
            onChange={handleChange}
            sx={{
              backgroundColor: "#E2DDFE",
              "& .MuiInputBase-root": {
                backgroundColor: "#E2DDFE",
              },
            }}
          >
            {Object.keys(categoryOptions).map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Speciality</InputLabel>
          <Select
            name="speciality"
            value={formValues.speciality}
            onChange={handleChange}
            disabled={!formValues.category}
            sx={{
              backgroundColor: "#E2DDFE",
              "& .MuiInputBase-root": {
                backgroundColor: "#E2DDFE",
              },
            }}
          >
            {(categoryOptions[formValues.category] || []).map((speciality) => (
              <MenuItem key={speciality} value={speciality}>
                {speciality}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Experience"
          variant="outlined"
          name="experience"
          value={formValues.experience}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE",
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE",
            },
          }}
        />
        <TextField
          label="Fees"
          variant="outlined"
          name="fees"
          type="number"
          value={formValues.fees}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE",
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE",
            },
          }}
        />
        
        {/* Address Line 1 with GPS Button */}
        <Box sx={{ gridColumn: { xs: "1", sm: "span 2" } }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start", flexDirection: { xs: "column", sm: "row" } }}>
            <TextField
              fullWidth
              label="Address Line 1"
              variant="outlined"
              name="address1"
              value={formValues.address1}
              onChange={handleChange}
              placeholder="Enter address or use GPS button"
              sx={{
                backgroundColor: "#E2DDFE",
                "& .MuiInputBase-root": {
                  backgroundColor: "#E2DDFE",
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleGetCurrentLocation}
              disabled={isLoadingLocation}
              startIcon={
                isLoadingLocation ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : (
                  <LocationOnIcon />
                )
              }
              sx={{
                minWidth: { xs: "100%", sm: "140px" },
                height: "56px",
                backgroundColor: "#7d66d9",
                "&:hover": {
                  backgroundColor: "#9b9ef0",
                },
                "&:disabled": {
                  backgroundColor: "#ccc",
                },
              }}
            >
              {isLoadingLocation ? "Loading..." : "Use GPS"}
            </Button>
          </Box>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 0.5,
              ml: 1.5,
              fontSize: "0.75rem",
              color: "#666",
              fontStyle: "italic",
            }}
          >
            💡 Click the "Use GPS" button to automatically fill your current address
          </Typography>
        </Box>

        <TextField
          label="Address Line 2"
          variant="outlined"
          name="address2"
          value={formValues.address2}
          onChange={handleChange}
          fullWidth
          sx={{
            gridColumn: { xs: "1", sm: "span 2" },
            backgroundColor: "#E2DDFE",
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE",
            },
          }}
        />

        <Box sx={{ gridColumn: { xs: "1", sm: "span 2" } }}>
          <TextareaAutosize
            minRows={3}
            placeholder="About"
            name="about"
            value={formValues.about}
            onChange={handleChange}
            style={{
              width: "100%",
              fontSize: "16px",
              padding: "10px",
              borderRadius: "5px",
              borderColor: "#ccc",
              backgroundColor: "#E2DDFE",
              border: "1px solid #D1C9F3",
            }}
          />
        </Box>
      </Box>

      {/* Submit Button */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#7d66d9",
            minWidth: { xs: "100%", sm: "200px" },
            padding: { xs: "12px 24px", sm: "14px 28px" },
            fontSize: { xs: "0.9rem", sm: "1rem" },
            "&:hover": {
              backgroundColor: "#9b9ef0",
            },
          }}
          onClick={handleSubmit}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : null}
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </Box>

      {/* Login Link */}
      <Typography variant="body2" align="center" sx={{ mt: 2, color: "#666" }}>
        Already registered?{" "}
        <Button
          variant="text"
          onClick={() => navigate("/user/Employee-login")}
          sx={{
            color: "#7d66d9",
            textTransform: "none",
            "&:hover": {
              color: "#9b9ef0",
              backgroundColor: "transparent",
            },
          }}
        >
          Login
        </Button>
      </Typography>
    </Box>
  );
}

export default EmployeeRegister;