// //13/1/25
// import * as React from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   Typography,
//   Divider,
//   Input,
// } from "@mui/material";
// import { fadeIn } from "../animations/framerMotion";
// import { GoogleIcon } from "./CustomIcons";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../features/bookingSlice";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import { loginUser, signupUser, logoutUser } from "../features/authSlice";
// const SignUp = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
//   const location = useLocation();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");
//   const [image, setImage] = useState(null);

//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const { user, isAuthenticated, loading, error } = useSelector(
//     (state) => state.auth
//   );
//   const validateInputs = () => {
//     let valid = true;

//     if (!name) {
//       setNameError(true);
//       valid = false;
//     } else {
//       setNameError(false);
//     }

//     if (!email) {
//       setEmailError(true);
//       valid = false;
//     } else {
//       setEmailError(false);
//     }

//     if (!password) {
//       setPasswordError(true);
//       valid = false;
//     } else {
//       setPasswordError(false);
//     }

//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the form from refreshing the page.

//     if (!validateInputs()) {
//       toast.error("Please fill all required fields.");
//       return;
//     }

//     const formData = {
//       name,
//       email,
//       password,
//       phone,
//       address1,
//       address2,
//       image, // Optional: Include this if you plan to handle image uploads.
//     };

//     try {
//       await dispatch(signupUser(formData));
//       toast.success("Signup successful!");
//       navigate("/login");
//     } catch (err) {
//       toast.error("Signup failed. Please try again.");
//       console.error("Signup error:", err);
//     }
//   };

//   const handleGoogleSignup = () => {
//     toast.info("Redirecting to Google for Signup...");
//     window.open("http://localhost:5000/auth/google/callback", "_self");
//   };

//   return (
//     <motion.div
//       variants={fadeIn}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className={`flex justify-center mt-9 items-center min-h-screen ${
//         isDarkMode ? "bg-[#121212]" : "bg-[#E2DDFE]"
//       }`}
//     >
//       <Box
//         sx={{
//           maxWidth: "500px",
//           p: 4,
//           bgcolor: isDarkMode ? "#1e1e1e" : "white",
//           borderRadius: 2,
//           boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           color={isDarkMode ? "white" : "black"}
//         >
//           Sign Up
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
//         <form onSubmit={handleSubmit}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               mt: 2,
//               mb: 2,
//             }}
//           >
//             <Typography
//               variant="body2"
//               color={isDarkMode ? "white" : "black"}
//               sx={{ mb: 1 }}
//             >
//               Upload Profile Picture
//             </Typography>
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100px",
//                 height: "100px",
//                 borderRadius: "50%",
//                 overflow: "hidden",
//                 border: `2px solid ${isDarkMode ? "#6E6ADE" : "#7D66D9"}`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundColor: isDarkMode ? "#424242" : "#E2DDFE",
//                 cursor: "pointer",
//               }}
//             >
//               {image ? (
//                 <img
//                   src={URL.createObjectURL(image)}
//                   alt="Profile"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               ) : (
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography
//                     component="span"
//                     color={isDarkMode ? "white" : "black"}
//                     sx={{ fontSize: "14px" }}
//                   >
//                     <i className="fas fa-upload"></i>
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color={isDarkMode ? "white" : "black"}
//                     sx={{ mt: 1 }}
//                   >
//                     Upload
//                   </Typography>
//                 </Box>
//               )}
//               <Input
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   opacity: 0,
//                   cursor: "pointer",
//                 }}
//               />
//             </Box>
//           </Box>

//           <TextField
//             fullWidth
//             label="Full Name"
//             variant="outlined"
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             error={nameError}
//             helperText={nameError && "Full Name is required"}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={emailError}
//             helperText={emailError && "Email is required"}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={passwordError}
//             helperText={passwordError && "Password is required"}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Phone"
//             variant="outlined"
//             margin="normal"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Address Line 1"
//             variant="outlined"
//             margin="normal"
//             value={address1}
//             onChange={(e) => setAddress1(e.target.value)}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Address Line 2"
//             variant="outlined"
//             margin="normal"
//             value={address2}
//             onChange={(e) => setAddress2(e.target.value)}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />

//           <FormControlLabel
//             control={<Checkbox color="primary" />}
//             label="I want to receive updates via email."
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             className="bg-[#6E6ADE] text-white hover:bg-[#7D66D9]"
//             sx={{ mt: 2 }}
//           >
//             Create Account
//           </Button>
//         </form>
//         <Divider sx={{ mt: 2, mb: 2 }}>or</Divider>
//         <Button
//           variant="outlined"
//           fullWidth
//           startIcon={<GoogleIcon />}
//           sx={{ color: "#7D66D9", borderColor: "#7D66D9" }}
//           onClick={handleGoogleSignup}
//         >
//           Sign Up with Google
//         </Button>
//         <Typography
//           variant="body2"
//           align="center"
//           sx={{ mt: 2, color: isDarkMode ? "white" : "black" }}
//         >
//           Already have an account?
//           <Button
//             variant="text"
//             onClick={() => navigate("/login")}
//             sx={{ color: "#6E6ADE" }}
//           >
//             Log In
//           </Button>
//         </Typography>
//       </Box>
//     </motion.div>
//   );
// };

// export default SignUp;



//13/1/25
// import * as React from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   Typography,
//   Divider,
//   Input,
// } from "@mui/material";
// import { fadeIn } from "../animations/framerMotion";
// import { GoogleIcon } from "./CustomIcons";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../features/bookingSlice";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import { loginUser, signupUser} from "../features/authSlice";
// const SignUp = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
//   const location = useLocation();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");
//   const [image, setImage] = useState(null);

//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

//   // Handle Google signup
//   const handleGoogleSignup = () => {
//     toast.info("Redirecting to Google for Signup...");
//     window.open("http://localhost:5000/auth/google", "_self");
//   };

//   // Handle state changes after successful Google login (if authenticated)

//   const validateInputs = () => {
//     let valid = true;

//     if (!name) {
//       setNameError(true);
//       valid = false;
//     } else {
//       setNameError(false);
//     }

//     if (!email) {
//       setEmailError(true);
//       valid = false;
//     } else {
//       setEmailError(false);
//     }

//     if (!password) {
//       setPasswordError(true);
//       valid = false;
//     } else {
//       setPasswordError(false);
//     }

//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the form from refreshing the page.

//     if (!validateInputs()) {
//       toast.error("Please fill all required fields.");
//       return;
//     }

//     const formData = {
//       name,
//       email,
//       password,
//       phone,
//       address1,
//       address2,
//       image, // Optional: Include this if you plan to handle image uploads.
//     };

//     try {
//       await dispatch(signupUser(formData));
//       toast.success("Signup successful!");
//       navigate("/login");
//     } catch (err) {
//       toast.error("Signup failed. Please try again.");
//       console.error("Signup error:", err);
//     }
//   };



//   return (
//     <motion.div
//       variants={fadeIn}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className={`flex justify-center mt-9 items-center min-h-screen ${
//         isDarkMode ? "bg-[#121212]" : "bg-[#E2DDFE]"
//       }`}
//     >
//       <Box
//         sx={{
//           maxWidth: "500px",
//           p: 4,
//           bgcolor: isDarkMode ? "#1e1e1e" : "white",
//           borderRadius: 2,
//           boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           color={isDarkMode ? "white" : "black"}
//         >
//           Sign Up
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
//         <form onSubmit={handleSubmit}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               mt: 2,
//               mb: 2,
//             }}
//           >
//             <Typography
//               variant="body2"
//               color={isDarkMode ? "white" : "black"}
//               sx={{ mb: 1 }}
//             >
//               Upload Profile Picture
//             </Typography>
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100px",
//                 height: "100px",
//                 borderRadius: "50%",
//                 overflow: "hidden",
//                 border: `2px solid ${isDarkMode ? "#6E6ADE" : "#7D66D9"}`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundColor: isDarkMode ? "#424242" : "#E2DDFE",
//                 cursor: "pointer",
//               }}
//             >
//               {image ? (
//                 <img
//                   src={URL.createObjectURL(image)}
//                   alt="Profile"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               ) : (
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography
//                     component="span"
//                     color={isDarkMode ? "white" : "black"}
//                     sx={{ fontSize: "14px" }}
//                   >
//                     <i className="fas fa-upload"></i>
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color={isDarkMode ? "white" : "black"}
//                     sx={{ mt: 1 }}
//                   >
//                     Upload
//                   </Typography>
//                 </Box>
//               )}
//               <Input
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   opacity: 0,
//                   cursor: "pointer",
//                 }}
//               />
//             </Box>
//           </Box>

//           <TextField
//             fullWidth
//             label="Full Name"
//             variant="outlined"
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             error={nameError}
//             helperText={nameError && "Full Name is required"}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={emailError}
//             helperText={emailError && "Email is required"}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={passwordError}
//             helperText={passwordError && "Password is required"}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Phone"
//             variant="outlined"
//             margin="normal"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Address Line 1"
//             variant="outlined"
//             margin="normal"
//             value={address1}
//             onChange={(e) => setAddress1(e.target.value)}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />
//           <TextField
//             fullWidth
//             label="Address Line 2"
//             variant="outlined"
//             margin="normal"
//             value={address2}
//             onChange={(e) => setAddress2(e.target.value)}
//             sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
//           />

//           <FormControlLabel
//             control={<Checkbox color="primary" />}
//             label="I want to receive updates via email."
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             className="bg-[#6E6ADE] text-white hover:bg-[#7D66D9]"
//             sx={{ mt: 2 }}
//           >
//             Create Account
//           </Button>
//         </form>
//         <Divider sx={{ mt: 2, mb: 2 }}>or</Divider>
//         <Button
//           variant="outlined"
//           fullWidth
//           startIcon={<GoogleIcon />}
//           sx={{ color: "#7D66D9", borderColor: "#7D66D9" }}
//           onClick={handleGoogleSignup}
//         >
//           Sign Up with Google
//         </Button>
//         <Typography
//           variant="body2"
//           align="center"
//           sx={{ mt: 2, color: isDarkMode ? "white" : "black" }}
//         >
//           Already have an account?
//           <Button
//             variant="text"
//             onClick={() => navigate("/login")}
//             sx={{ color: "#6E6ADE" }}
//           >
//             Log In
//           </Button>
//         </Typography>
//       </Box>
//     </motion.div>
//   );
// };

// export default SignUp;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, Divider, Input } from "@mui/material";
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
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

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
      toast.error("Please fill all required fields.");
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
      await dispatch(signupUser(formData));
      toast.success("Signup successful!");
      navigate("/login");
    } catch (err) {
      toast.error("Signup failed. Please try again.");
      console.error("Signup error:", err);
    }
  };
const handleLogout = async () => {
  try {
    const response = await fetch("http://localhost:5000/logout", {
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
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };


  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex justify-center mt-9 items-center min-h-screen ${isDarkMode ? "bg-[#1f2937]" : "bg-[#E2DDFE]"}`}
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
        <Typography variant="h4" align="center" gutterBottom color={isDarkMode ? "white" : "black"}>
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
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
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
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
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
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
          />
          <TextField
            fullWidth
            label="Address Line 1"
            variant="outlined"
            margin="normal"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            sx={{ backgroundColor: isDarkMode ? "#424242" : "#E2DDFE" }}
          />
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
