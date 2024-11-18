// import * as React from 'react';
// import { motion } from 'framer-motion'; // Import Framer Motion
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   Typography,
//   Divider,
// } from '@mui/material';
// import '../index.css'; // Import the CSS file
// import { fadeIn } from '../animations/framerMotion'; // Import custom animation
// import { GoogleIcon } from './CustomIcons';
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// const SignUp = () => {
//     const navigate = useNavigate(); // Initialize navigate

//   const [emailError, setEmailError] = React.useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
//   const [passwordError, setPasswordError] = React.useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
//   const [nameError, setNameError] = React.useState(false);
//   const [nameErrorMessage, setNameErrorMessage] = React.useState('');

//   const validateInputs = () => {
//     // Validation logic...
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     validateInputs();
//     // Handle form submission...
//   };

//   return (
//     <motion.div
//       variants={fadeIn}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="flex justify-center mt-9 items-center min-h-screen bg-[#E2DDFE]"
//     >
//       <Box
//         sx={{
//           maxWidth: '400px',
//           p: 4,
//           bgcolor: 'white',
//           borderRadius: 2,
//           boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
//         }}
//       >
//         <Typography variant="h4" align="center" gutterBottom>
//           Sign Up
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//         >
//           <TextField
//             id="name"
//             label="Full Name"
//             error={nameError}
//             helperText={nameErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: '#E2DDFE' }}
//           />
//           <TextField
//             id="email"
//             label="Email"
//             error={emailError}
//             helperText={emailErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: '#E2DDFE' }}
//           />
//           <TextField
//             id="password"
//             label="Password"
//             type="password"
//             error={passwordError}
//             helperText={passwordErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: '#E2DDFE' }}
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
//           >
//             Create Account
//           </Button>
//         </Box>
//         <Divider sx={{ mt: 2, mb: 2 }}>or</Divider>
//         <Button
//           variant="outlined"
//           fullWidth
//           startIcon={<GoogleIcon />}
//           sx={{ color: '#7D66D9', borderColor: '#7D66D9' }}
//           onClick={() => alert('Sign up with Google')}
//         >
//           Sign Up with Google
//         </Button>
//         <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//           Already have an account?
//           <Button
//             variant="text"
//             onClick={() => navigate('/login')}
//             sx={{ color: '#6E6ADE' }}
//           >
//             Login
//           </Button>
//         </Typography>
//       </Box>
//     </motion.div>
//   );
// };

// export default SignUp;

// working fronted fine

// import * as React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   Typography,
//   Divider,
// } from '@mui/material';
// import '../index.css'; // Import the CSS file
// import { fadeIn } from '../animations/framerMotion';
// import { GoogleIcon } from './CustomIcons';
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
// import { toggleDarkMode } from "../features/formSlice"; // Import the action
// import { signUp } from '../api/auth';
// const SignUp = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.form.isDarkMode); // Get dark mode state from Redux

//   const [emailError, setEmailError] = React.useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
//   const [passwordError, setPasswordError] = React.useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
//   const [nameError, setNameError] = React.useState(false);
//   const [nameErrorMessage, setNameErrorMessage] = React.useState('');

//   const validateInputs = () => {
//     // Validation logic...
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     validateInputs();
//     // Handle form submission...
//   };

//   return (
//     <motion.div
//       variants={fadeIn}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className={`flex justify-center mt-9 items-center min-h-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#E2DDFE]'}`}
//     >
//       <Box
//         sx={{
//           maxWidth: '400px',
//           p: 4,
//           bgcolor: isDarkMode ? '#1e1e1e' : 'white', // Change background color based on dark mode
//           borderRadius: 2,
//           boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
//         }}
//       >
//         <Typography variant="h4" align="center" gutterBottom color={isDarkMode ? 'white' : 'black'}>
//           Sign Up
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//         >
//           <TextField
//             id="name"
//             label="Full Name"
//             error={nameError}
//             helperText={nameErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: isDarkMode ? '#424242' : '#E2DDFE', color: isDarkMode ? 'white' : 'black' }} // Update colors
//           />
//           <TextField
//             id="email"
//             label="Email"
//             error={emailError}
//             helperText={emailErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: isDarkMode ? '#424242' : '#E2DDFE', color: isDarkMode ? 'white' : 'black' }} // Update colors
//           />
//           <TextField
//             id="password"
//             label="Password"
//             type="password"
//             error={passwordError}
//             helperText={passwordErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: isDarkMode ? '#424242' : '#E2DDFE', color: isDarkMode ? 'white' : 'black' }} // Update colors
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
//           >
//             Create Account
//           </Button>
//         </Box>
//         <Divider sx={{ mt: 2, mb: 2 }}>or</Divider>
//         <Button
//           variant="outlined"
//           fullWidth
//           startIcon={<GoogleIcon />}
//           sx={{ color: '#7D66D9', borderColor: '#7D66D9' }}
//           onClick={() => alert('Sign up with Google')}
//         >
//           Sign Up with Google
//         </Button>
//         <Typography variant="body2" align="center" sx={{ mt: 2, color: isDarkMode ? 'white' : 'black' }}>
//           Already have an account?
//           <Button
//             variant="text"
//             onClick={() => navigate('/login')}
//             sx={{ color: '#6E6ADE' }}
//           >
//             Log In
//           </Button>
//         </Typography>
//       </Box>
//     </motion.div>
//   );
// };

// export default SignUp;

// import * as React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   Typography,
//   Divider,
// } from '@mui/material';
// import '../index.css'; // Import the CSS file
// import { fadeIn } from '../animations/framerMotion';
// import { GoogleIcon } from './CustomIcons';
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
// import { toggleDarkMode } from "../features/formSlice"; // Import the action
// import { signUp } from '../api/auth';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.form.isDarkMode); // Get dark mode state from Redux

//   // State variables for form fields
//   const [formData, setFormData] = React.useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   // Error states for validation
//   const [nameError, setNameError] = React.useState(false);
//   const [nameErrorMessage, setNameErrorMessage] = React.useState('');
//   const [emailError, setEmailError] = React.useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
//   const [passwordError, setPasswordError] = React.useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const validateInputs = () => {
//     let isValid = true;
//     // Reset error states
//     setNameError(false);
//     setEmailError(false);
//     setPasswordError(false);

//     // Name validation
//     if (!formData.name) {
//       setNameError(true);
//       setNameErrorMessage('Name is required');
//       isValid = false;
//     }

//     // Email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email || !emailPattern.test(formData.email)) {
//       setEmailError(true);
//       setEmailErrorMessage('Enter a valid email');
//       isValid = false;
//     }

//     // Password validation
//     if (!formData.password || formData.password.length < 6) {
//       setPasswordError(true);
//       setPasswordErrorMessage('Password must be at least 6 characters long');
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateInputs()) {
//       try {
//         console.log(formData); // Log formData before making the request
//         const { data } = await signUp(formData); // Use the signUp API call
//         localStorage.setItem('token', data.token); // Store the token in localStorage
//         navigate('/login'); // Redirect to dashboard or other secure route
//       } catch (error) {
//         console.error('Error during sign-up:', error.response?.data || error.message);
//       }
//     }
//   };
//   const handleGoogleSignUp = () => {
//     // Redirect to the Google OAuth route on your backend
//     window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
//   };

//   return (
//     <motion.div
//       variants={fadeIn}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className={`flex justify-center mt-9 items-center min-h-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-[#E2DDFE]'}`}
//     >
//       <Box
//         sx={{
//           maxWidth: '400px',
//           p: 4,
//           bgcolor: isDarkMode ? '#1e1e1e' : 'white', // Change background color based on dark mode
//           borderRadius: 2,
//           boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
//         }}
//       >
//         <Typography variant="h4" align="center" gutterBottom color={isDarkMode ? 'white' : 'black'}>
//           Sign Up
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//         >
//           <TextField
//             id="name"
//             label="Full Name"
//             value={formData.name}
//             onChange={handleInputChange}
//             error={nameError}
//             helperText={nameErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: isDarkMode ? '#424242' : '#E2DDFE', color: isDarkMode ? 'white' : 'black' }}
//           />
//           <TextField
//             id="email"
//             label="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//             error={emailError}
//             helperText={emailErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: isDarkMode ? '#424242' : '#E2DDFE', color: isDarkMode ? 'white' : 'black' }}
//           />
//           <TextField
//             id="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             error={passwordError}
//             helperText={passwordErrorMessage}
//             fullWidth
//             variant="outlined"
//             sx={{ backgroundColor: isDarkMode ? '#424242' : '#E2DDFE', color: isDarkMode ? 'white' : 'black' }}
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
//           >
//             Create Account
//           </Button>
//         </Box>
//         <Divider sx={{ mt: 2, mb: 2 }}>or</Divider>
//         <Button
//           variant="outlined"
//           fullWidth
//           startIcon={<GoogleIcon />}
//           sx={{ color: '#7D66D9', borderColor: '#7D66D9' }}
//           onClick={handleGoogleSignUp}
//         >
//           Sign Up with Google
//         </Button>
//         <Typography variant="body2" align="center" sx={{ mt: 2, color: isDarkMode ? 'white' : 'black' }}>
//           Already have an account?
//           <Button
//             variant="text"
//             onClick={() => navigate('/login')}
//             sx={{ color: '#6E6ADE' }}
//           >
//             Log In
//           </Button>
//         </Typography>
//       </Box>
//     </motion.div>
//   );
// };

// export default SignUp;

import * as React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import "../index.css"; // Import the CSS file
import { fadeIn } from "../animations/framerMotion";
import { GoogleIcon } from "./CustomIcons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { toggleDarkMode } from "../features/bookingSlice";

import axios from "axios"; // Import axios
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state from Redux
  const location = useLocation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");

  // Input validation
  const validateInputs = () => {
    let valid = true;

    if (!name) {
      setNameError(true);
      setNameErrorMessage("Full Name is required");
      valid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    if (!email) {
      setEmailError(true);
      setEmailErrorMessage("Email is required");
      valid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password) {
      setPasswordError(true);
      setPasswordErrorMessage("Password is required");
      valid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return valid;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate inputs
    if (!validateInputs()) return;

    try {
      // Make a POST request to the backend to create the user
      const response = await axios.post("http://localhost:5000/signup", {
        name: name,
        email,
        password,
      });
      toast.success("Signup successful!", {
        style: {
          backgroundColor: "#9b9ef0", // Change this to your desired color
          color: "#ffffff", // Text color
        },
      });

      console.log("Signup successful", response.data);
      navigate("/login"); // Redirect to the dashboard on success
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  // Handle Google Signup
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const signupStatus = query.get("signup");

    if (signupStatus === "success") {
      toast.success("Signup successful with Google!");
    } else if (signupStatus === "failure") {
      toast.error("Signup failed. Please try again.");
    }
  }, [location]);
  const handleGoogleSignup = async () => {
    // Show a toast notification indicating the signup process has started
    toast.info("Redirecting to Google for Signup...");

    // Open Google Auth in the same window
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex justify-center mt-9 items-center min-h-screen ${
        isDarkMode ? "bg-[#121212]" : "bg-[#E2DDFE]"
      }`}
    >
      <Box
        sx={{
          maxWidth: "400px",
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
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameErrorMessage}
            sx={{
              backgroundColor: isDarkMode ? "#424242" : "#E2DDFE",
              color: isDarkMode ? "white" : "black",
            }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailErrorMessage}
            sx={{
              backgroundColor: isDarkMode ? "#424242" : "#E2DDFE",
              color: isDarkMode ? "white" : "black",
            }}
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
            helperText={passwordErrorMessage}
            sx={{
              backgroundColor: isDarkMode ? "#424242" : "#E2DDFE",
              color: isDarkMode ? "white" : "black",
            }}
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
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ color: "#7D66D9", borderColor: "#7D66D9" }}
          onClick={handleGoogleSignup}
        >
          Sign Up with Google
        </Button>
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
