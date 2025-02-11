import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Input,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { fadeIn } from "../animations/framerMotion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../features/authSlice"; // Assuming you have an addCustomer action

const AddCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [image, setImage] = useState(null);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateInputs = () => {
    let valid = true;

    if (!name) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (!email) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page.

    if (!validateInputs()) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = {
      name,
      email,
      password,
      phone,
      address1,
      address2,
      image, // Optional: Include this if you plan to handle image uploads.
    };

    try {
      // Dispatch add customer action (Assuming you have an addCustomer action in customerSlice)
      await dispatch(signupUser(formData));
      alert("Customer added successfully!");
      navigate("/dashboard/all-customers");
    } catch (err) {
      alert("Adding customer failed. Please try again.");
      console.error("Error:", err);
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex justify-center mt-9 items-center min-h-screen bg-[#ffffff]"
    >
      <Box
        sx={{
          maxWidth: "500px",
          p: 4,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Add Customer
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
            <Typography variant="body2" sx={{ mb: 1 }}>
              Upload Profile Picture
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #7D66D9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#E2DDFE",
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
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography component="span" sx={{ fontSize: "14px" }}>
                    <i className="fas fa-upload"></i>
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Upload
                  </Typography>
                </Box>
              )}
              <Input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
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
            error={nameError}
            helperText={nameError && "Full Name is required"}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError && "Email is required"}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordError && "Password is required"}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            fullWidth
            label="Address Line 1"
            variant="outlined"
            margin="normal"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          <TextField
            fullWidth
            label="Address Line 2"
            variant="outlined"
            margin="normal"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I want to receive updates via email."
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#6E6ADE", color: "white" }}
          >
            Create Customer
          </Button>
        </form>
        

    
      </Box>
    </motion.div>
  );
};

export default AddCustomer;
