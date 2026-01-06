import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Divider,
  Input,
} from "@mui/material";
import { fadeIn } from "../animations/framerMotion";
import { GoogleIcon } from "./CustomIcons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/bookingSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { loginUser, signupUser } from "../features/authSlice";
import { GoogleLogin } from "@react-oauth/google";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const BACKEND_URL =
    process.env.NODE_ENV === "production"
      ? "https://servicehouse.onrender.com"
      : "http://localhost:5000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

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
            setAddress1(data.display_name);
            toast.success("Address captured successfully!", {
              theme: "colored",
              autoClose: 3000,
              style: { backgroundColor: "#4caf50", color: "#fff" },
            });
          } else {
            // Fallback: Use coordinates if address not found
            setAddress1(`${latitude}, ${longitude}`);
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
          newErrors.email = "Invalid email format";
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
          newErrors.password = "Password must contain at least one special character";
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
  };
  // const [nameError, setNameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  

  const validateInputs = () => {
    const newErrors = {};
  
    // Name Validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
      toast.error("⚠️ Name is required!", { theme: "dark", autoClose: 3000, style: { backgroundColor: "#9b9ef0", color: "#fff" } });
    }
  
    // Email Validation: Must be lowercase and contain '@' - MANDATORY
    if (!email.trim()) {
      newErrors.email = "Email is required";
      toast.error("⚠️ Email is required!", { theme: "dark", autoClose: 3000, style: { backgroundColor: "#ffd700", color: "#000" } });
    } else if (!/^[a-z][a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format (must start lowercase & contain '@')";
      toast.error("❌ Invalid Email! Use lowercase & include '@'", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#4f46e5", color: "#fff" },
      });
    } else if (!email.includes("@")) {
      newErrors.email = "Email must contain '@' symbol";
      toast.error("❌ Email must contain '@' symbol", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#4f46e5", color: "#fff" },
      });
    } else if (!email.includes(".")) {
      newErrors.email = "Email must contain a domain (e.g., .com, .org)";
      toast.error("❌ Invalid email domain", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#4f46e5", color: "#fff" },
      });
    }
  
    // Password Validation - MANDATORY
    if (!password.trim()) {
      newErrors.password = "Password is required";
      toast.error("⚠️ Password is required!", { theme: "dark", autoClose: 3000, style: { backgroundColor: "#9b9ef0", color: "#fff" } });
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      toast.error("❌ Password must be at least 6 characters", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ffd700", color: "#000" },
      });
    } else if (!/(?=.*[A-Z])/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
      toast.error("❌ Password must contain at least one uppercase letter", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ffd700", color: "#000" },
      });
    } else if (!/(?=.*\d)/.test(password)) {
      newErrors.password = "Password must contain at least one number";
      toast.error("❌ Password must contain at least one number", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ffd700", color: "#000" },
      });
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      newErrors.password = "Password must contain at least one special character (@$!%*?&)";
      toast.error("❌ Password must contain at least one special character", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ffd700", color: "#000" },
      });
    }
  
    // Phone Validation: Exactly 10 digits
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      toast.error("⚠️ Phone number is required!", { theme: "dark", autoClose: 3000, style: { backgroundColor: "#4f46e5", color: "#fff" } });
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
      toast.error("❌ Invalid Phone! Must be exactly 10 digits", {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#abbdf9", color: "#000" },
      });
    }
  
    // Image Validation: Standard size (500KB - 2MB recommended) and format check
    if (image) {
      // Check file type
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
      if (!allowedTypes.includes(image.type)) {
        newErrors.image = "Only JPEG, PNG, GIF, and WebP images are allowed";
        toast.error("❌ Invalid image format! Only JPEG, PNG, GIF, and WebP are allowed", {
          theme: "colored",
          autoClose: 3000,
          style: { backgroundColor: "#abbdf9", color: "#000" },
        });
      } else {
        // Check file size - Standard size: 500KB to 2MB (without quality reduction)
        const fileSizeInKB = image.size / 1024; // Convert bytes to KB
        const fileSizeInMB = image.size / (1024 * 1024); // Convert bytes to MB
        
        if (fileSizeInKB < 50) {
          newErrors.image = "Image size is too small (minimum 50KB)";
          toast.error("❌ Image too small! Minimum size: 50KB", {
            theme: "colored",
            autoClose: 3000,
            style: { backgroundColor: "#abbdf9", color: "#000" },
          });
        } else if (fileSizeInMB > 2) {
          newErrors.image = "Image size should not exceed 2MB (standard size)";
          toast.error("❌ Image too large! Max size: 2MB (standard size)", {
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
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page.

    if (!validateInputs()) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    // Create FormData for file upload
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("address1", address1 || "");
    formData.append("address2", address2 || "");
    
    // Append image only if it exists
    if (image) {
      formData.append("image", image);
    }

    try {
      await dispatch(signupUser(formData));
      toast.success("Signup successful! Check your email for confirmation.");
      navigate("/");
    } catch (err) {
      const errorMessage = err.message || err.error?.message || "Signup failed. Please try again.";
      toast.error(`⚠️ ${errorMessage}`, {
        theme: "colored",
        autoClose: 3000,
        style: { backgroundColor: "#ff4d4d", color: "#fff" },
      });
      console.error("Signup error:", err);
    }
  };
  const handleLogout = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}logout`, {
        method: "GET",
        credentials: "include", // Important for sending cookies
      });
      const result = await response.json();
      if (result.success) {
        console.log(result.message); // "Logged out successfully"
        // Redirect to login page or clear local state
        window.location.href = "/login";
      } else {
        console.error("Logout failed:", result.message);
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleGoogleSignup = async () => {
    window.open(`${BACKEND_URL}/auth/google/callback`, "_self");
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex justify-center mt-9 items-center min-h-screen ${
        isDarkMode ? "bg-[#1f2937]" : "bg-[#E2DDFE]"
      }`}
    >
      <Box
        sx={{
          maxWidth: "500px",
          p: 4,
          bgcolor: isDarkMode ? "#1e1e1e" : "white",
          borderRadius: 2,
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color={isDarkMode ? "white" : "black"}
        >
          Sign Up
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
              mb: 2,
            }}
          >
            <Typography
              variant="body2"
              color={isDarkMode ? "white" : "black"}
              sx={{ mb: 1 }}
            >
              Upload Profile Picture
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                border: `2px solid ${isDarkMode ? "#6E6ADE" : "#7D66D9"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isDarkMode ? "#424242" : "#E2DDFE",
                cursor: "pointer",
              }}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="span"
                    color={isDarkMode ? "white" : "black"}
                    sx={{ fontSize: "14px" }}
                  >
                    <i className="fas fa-upload"></i>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDarkMode ? "white" : "black"}
                    sx={{ mt: 1 }}
                  >
                    Upload
                  </Typography>
                </Box>
              )}
              <Input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    // Validate image immediately on selection
                    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
                    if (!allowedTypes.includes(file.type)) {
                      toast.error("❌ Invalid image format! Only JPEG, PNG, GIF, and WebP are allowed", {
                        theme: "colored",
                        autoClose: 3000,
                        style: { backgroundColor: "#abbdf9", color: "#000" },
                      });
                      e.target.value = ""; // Clear the input
                      return;
                    }
                    const fileSizeInMB = file.size / (1024 * 1024);
                    if (fileSizeInMB > 2) {
                      toast.error("❌ Image too large! Max size: 2MB", {
                        theme: "colored",
                        autoClose: 3000,
                        style: { backgroundColor: "#abbdf9", color: "#000" },
                      });
                      e.target.value = ""; // Clear the input
                      return;
                    }
                    setImage(file);
                  }
                }}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>

          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
          helperText={errors.name}
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // Clear error when user starts typing
              if (errors.email) {
                setErrors({ ...errors, email: "" });
              }
            }}
            onBlur={(e) => validateField("email", e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            required
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // Clear error when user starts typing
              if (errors.password) {
                setErrors({ ...errors, password: "" });
              }
            }}
            onBlur={(e) => validateField("password", e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            required
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
            value={phone}
            error={!!errors.phone}
            helperText={errors.phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
          />
    
          <Box sx={{ width: "100%", mt: 2 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
              <TextField
                fullWidth
                label="Address Line 1"
                variant="outlined"
                margin="normal"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="Enter address or use GPS button"
                sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
              />
              <Button
                variant="contained"
                onClick={handleGetCurrentLocation}
                disabled={isLoadingLocation}
                sx={{
                  mt: 2,
                  minWidth: "120px",
                  height: "56px",
                  backgroundColor: isDarkMode ? "#6E6ADE" : "#7D66D9",
                  color: "white",
                  "&:hover": {
                    backgroundColor: isDarkMode ? "#7D66D9" : "#6E6ADE",
                  },
                  "&:disabled": {
                    backgroundColor: isDarkMode ? "#424242" : "#ccc",
                  },
                }}
                startIcon={
                  isLoadingLocation ? (
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        width: "16px",
                        height: "16px",
                        border: "2px solid",
                        borderColor: "white",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                        "@keyframes spin": {
                          "0%": { transform: "rotate(0deg)" },
                          "100%": { transform: "rotate(360deg)" },
                        },
                      }}
                    />
                  ) : (
                    <i className="fas fa-map-marker-alt" />
                  )
                }
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
                color: isDarkMode ? "#9e9e9e" : "#666",
                fontStyle: "italic",
              }}
            >
              💡 Click the "Use GPS" button to automatically fill your current address
            </Typography>
          </Box>
          <TextField
            fullWidth
            label="Address Line 2"
            variant="outlined"
            margin="normal"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I want to receive updates via email."
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-[#6E6ADE] text-white hover:bg-[#7D66D9]"
            sx={{ mt: 2 }}
          >
            Create Account
          </Button>
        </form>
        <Divider sx={{ mt: 2, mb: 2 }}>or</Divider>

        <GoogleLogin
          onSuccess={handleGoogleSignup}
          onError={() => toast.error("Google Sign Up failed.")}
          useOneTap
          theme="filled_blue"
          size="large"
        />

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: isDarkMode ? "white" : "black" }}
        >
          Already have an account?
          <Button
            variant="text"
            onClick={() => navigate("/login")}
            sx={{ color: "#6E6ADE" }}
          >
            Log In
          </Button>
        </Typography>
      </Box>
    </motion.div>
  );
};

export default SignUp;
