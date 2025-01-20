//31/12/24

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion"; // Import Framer Motion
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   Typography,
//   Divider,
// } from "@mui/material";

// import { useLocation } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify"; // Import toast from react-toastify
// import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
// import { fadeIn } from "../animations/framerMotion"; // Import custom animation
// import { GoogleIcon } from "./CustomIcons";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
// import { toggleDarkMode } from "../features/bookingSlice";

// import axios from "axios"; // Import axios
// import ForgotPassword from "./ForgotPassword";
// import { loginStart, loginSuccess, loginFailure } from "../features/authSlice";
// import { notifySuccess, notifyError } from "./ToastNotification";
// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state from Redux
//   const location = useLocation();
//   // State variables for inputs and validation errors
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = useState("");
//   const [passwordError, setPasswordError] = useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [userData, setUserdata] = useState(null);

//   const handleForgotPasswordClick = () => {
//     navigate("/forgot-password"); // Navigate to the ForgotPassword component
//   };
//   const authState = useSelector((state) => state.auth);
//   // Ensure this part of the code receives a valid setToggle function

//   // Input validation logic
//   const validateInputs = () => {
//     let valid = true;

//     // Check if email is provided
//     if (!email) {
//       setEmailError(true);
//       setEmailErrorMessage("Email is required");
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError(true);
//       setEmailErrorMessage("Invalid email format");
//       valid = false;
//     } else {
//       setEmailError(false);
//       setEmailErrorMessage("");
//     }

//     // Check if password is provided
//     if (!password) {
//       setPasswordError(true);
//       setPasswordErrorMessage("Password is required");
//       valid = false;
//     } else {
//       setPasswordError(false);
//       setPasswordErrorMessage("");
//     }

//     return valid;
//   };

//   // Handle form submission
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   // Validate inputs before submission
//   //   if (!validateInputs()) return;

//   //   try {
//   //     // Make a POST request to the backend to login the user
//   //     const response = await axios.post(
//   //       "http://localhost:5000/api/auth/login",
//   //       { email, password }
//   //     );

//   //     console.log("Login successful", response.data);
//   //     // Redirect to the dashboard on success
//   //     navigate("/");
//   //   } catch (error) {
//   //     console.error("Login failed", error.response?.data || error.message);
//   //     setEmailError(true);
//   //     setEmailErrorMessage("Invalid credentials");
//   //   }
//   // };
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   // Validate inputs before submission
//   //   if (!validateInputs()) return;

//   //   try {
//   //     // Make a POST request to the backend to login the user
//   //     const response = await axios.post(
//   //       "http://localhost:5000/api/auth/login",
//   //       { email, password }
//   //     );

//   //     console.log("Login successful", response.data);

//   //     // Set user data from the response
//   //     setUserData(response.data.user);

//   //     // Optionally, store the token if needed
//   //     localStorage.setItem("token", response.data.token);

//   //     // Redirect to the dashboard on success
//   //     navigate("/");
//   //   } catch (error) {
//   //     console.error("Login failed", error.response?.data || error.message);
//   //     setEmailError(true);
//   //     setEmailErrorMessage("Invalid credentials");
//   //   }
//   // };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   // Validate inputs before submission
//   //   if (!validateInputs()) return;

//   //   try {
//   //     // Make a POST request to the backend to login the user
//   //     const response = await axios.post("http://localhost:5000/login", {
//   //       email,
//   //       password,
//   //     });

//   //     // Check if the response contains the user and token
//   //     if (response.data && response.data.user) {
//   //       // Store user data in local storage
//   //       const { user } = response.data;
//   //       localStorage.setItem("user", JSON.stringify(user));

//   //       // Set user data in state (optional)
//   //       setUserdata(user);

//   //       console.log("Login successful", response.data);

//   //       // Redirect to the dashboard or home page on success
//   //       navigate("/");
//   //     } else {
//   //       // Handle the case where login fails but no specific error is provided
//   //       console.log("Login failed: No user data found");
//   //       setEmailError(true);
//   //       setEmailErrorMessage("Login failed");
//   //     }
//   //   } catch (error) {
//   //     console.error("Login failed:", error.response ? error.response.data : error.message);

//   //     // Set error state for displaying error message
//   //     setEmailError(true);
//   //     setEmailErrorMessage("Invalid credentials");
//   //   }
//   // };
//   //work fine
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   // Validate inputs before submission
//   //   if (!validateInputs()) return;

//   //   try {
//   //     dispatch(loginStart()); // Dispatch loginStart action

//   //     // Make a POST request to the backend to login the user
//   //     const response = await axios.post("http://localhost:5000/login", {
//   //       email,
//   //       password,
//   //     });

//   //     // Check if the response contains the user and token
//   //     if (response.data && response.data.user && response.data.token) {
//   //       const { user, token } = response.data;

//   //       // Store user data and token in Redux
//   //       dispatch(loginSuccess({ user, token }));

//   //       // Optionally, store the token in localStorage for persistence
//   //       localStorage.setItem("token", token);
//   //       localStorage.setItem("user", JSON.stringify(user));

//   //       console.log("Login successful", response.data);

//   //       // Redirect to the dashboard or home page on success
//   //       navigate("/");
//   //     } else {
//   //       // Handle the case where login fails but no specific error is provided
//   //       console.log("Login failed: No user data found");
//   //       dispatch(loginFailure("Login failed: No user data found"));
//   //       setEmailError(true);
//   //       setEmailErrorMessage("Login failed");
//   //     }
//   //   } catch (error) {
//   //     console.error("Login failed:", error.response ? error.response.data : error.message);

//   //     // Dispatch loginFailure with error message
//   //     const errorMsg = error.response?.data?.message || "Invalid credentials";
//   //     dispatch(loginFailure(errorMsg));

//   //     // Set error state for displaying error message
//   //     setEmailError(true);
//   //     setEmailErrorMessage(errorMsg);
//   //   }
//   // };
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate inputs before submission
//     if (!validateInputs()) return;

//     try {
//       dispatch(loginStart()); // Dispatch loginStart action

//       // Make a POST request to the backend to login the user
//       const response = await axios.post("http://localhost:5000/login", {
//         email,
//         password,
//       });

//       // Check if the response contains the user and token
//       if (response.data && response.data.user && response.data.token) {
//         const { user, token } = response.data;

//         // Store user data and token in Redux
//         dispatch(loginSuccess({ user, token }));

//         // Optionally, store the token in localStorage for persistence
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user));

//         // Show success toast notification
//         toast.success("Login successful!");

//         // Redirect to the dashboard or home page on success
//         navigate("/");
//       } else {
//         // Handle the case where login fails but no specific error is provided
//         console.log("Login failed: No user data found");
//         dispatch(loginFailure("Login failed: No user data found"));
//         setEmailError(true);
//         setEmailErrorMessage("Login failed");
//       }
//     } catch (error) {
//       console.error(
//         "Login failed:",
//         error.response ? error.response.data : error.message
//       );

//       // Dispatch loginFailure with error message
//       const errorMsg = error.response?.data?.message || "Invalid credentials";
//       dispatch(loginFailure(errorMsg));

//       // Set error state for displaying error message
//       setEmailError(true);
//       setEmailErrorMessage(errorMsg);
//     }
//   };
//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const signupStatus = query.get("signup");

//     if (signupStatus === "success") {
//       toast.success("Signup successful with Google!");
//     } else if (signupStatus === "failure") {
//       toast.error("Signup failed. Please try again.");
//     }
//   }, [location]);
//   const handleGoogleSignup = async () => {
//     // Show a toast notification indicating the signup process has started
//     toast.info("Redirecting to Google for login...");

//     // Open Google Auth in the same window
//     window.open("http://localhost:5000/auth/google/callback", "_self");
//   };

//   return (
//     <>
//       <motion.div
//         variants={fadeIn}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         className={`flex justify-center items-center mt-5 min-h-screen ${
//           isDarkMode ? "bg-gray-900" : "bg-[#E2DDFE]"
//         }`}
//       >
//         <Box
//           sx={{
//             maxWidth: "400px",
//             p: 4,
//             bgcolor: isDarkMode ? "#2D2D2D" : "white", // Change background color based on dark mode
//             borderRadius: 2,
//             boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//             color: isDarkMode ? "white" : "black", // Change text color based on dark mode
//           }}
//         >
//           <Typography variant="h4" align="center" gutterBottom>
//             Log In
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//           >
//             <TextField
//               id="email"
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               error={emailError}
//               helperText={emailErrorMessage}
//               fullWidth
//               variant="outlined"
//               sx={{
//                 backgroundColor: isDarkMode ? "#3E3E3E" : "#E2DDFE",
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: isDarkMode ? "#6E6ADE" : "rgba(0, 0, 0, 0.23)",
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: isDarkMode ? "#7D66D9" : "rgba(0, 0, 0, 0.87)",
//                 },
//               }}
//             />
//             <TextField
//               id="password"
//               label="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               error={passwordError}
//               helperText={passwordErrorMessage}
//               fullWidth
//               variant="outlined"
//               sx={{
//                 backgroundColor: isDarkMode ? "#3E3E3E" : "#E2DDFE",
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: isDarkMode ? "#6E6ADE" : "rgba(0, 0, 0, 0.23)",
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: isDarkMode ? "#7D66D9" : "rgba(0, 0, 0, 0.87)",
//                 },
//               }}
//             />
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="I want to receive updates via email."
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               className={`bg-[#6E6ADE] text-white hover:bg-[#7D66D9]`}
//               disabled={authState.loading} // Disable button while loading
//             >
//               {authState.loading ? "Logging In..." : "Log In"}
//             </Button>
//             {userData && (
//               <div>
//                 <h2>Welcome, {userData.name}!</h2>
//                 <p>Email: {userData.email}</p>
//               </div>
//             )}
//           </Box>

//           <Divider sx={{ mt: 2, mb: 2 }}>or</Divider>
//           <Button
//             variant="outlined"
//             fullWidth
//             startIcon={<GoogleIcon />}
//             sx={{ color: "#7D66D9", borderColor: "#7D66D9" }}
//             onClick={handleGoogleSignup}
//           >
//             Log In with Google
//           </Button>
//           <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//             Don't have an account?
//             <Button
//               variant="text"
//               onClick={() => navigate("/signup")}
//               sx={{ color: "#6E6ADE" }}
//             >
//               Sign Up
//             </Button>
//           </Typography>
//           <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//             <div>
//               <Button
//                 variant="text"
//                 onClick={handleForgotPasswordClick}
//                 sx={{ color: "#6E6ADE" }}
//               >
//                 Forgot Password?
//               </Button>

//               {showForgotPassword && <ForgotPassword />}
//             </div>
//           </Typography>
//         </Box>
//       </motion.div>
//     </>
//   );
// };

// export default Login;




import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import { fadeIn } from "../animations/framerMotion"; // Import custom animation
import { GoogleIcon } from "./CustomIcons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { toggleDarkMode } from "../features/bookingSlice";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios"; // Import axios
import ForgotPassword from "./ForgotPassword";
import { loginUser,loginWithGoogle} from "../features/authSlice";
import { notifySuccess, notifyError } from "./ToastNotification";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state from Redux
  const location = useLocation();
  // State variables for inputs and validation errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [userData, setUserdata] = useState(null);

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password"); // Navigate to the ForgotPassword component
  };
  const authState = useSelector((state) => state.auth);
  // Ensure this part of the code receives a valid setToggle function

  // Input validation logic
  const validateInputs = () => {
    let valid = true;

    // Check if email is provided
    if (!email) {
      setEmailError(true);
      setEmailErrorMessage("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Invalid email format");
      valid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    // Check if password is provided
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


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate inputs before submission
    if (!validateInputs()) return;

    // Dispatch loginUser thunk
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Login successful!");
        navigate("/"); // Redirect to the desired route on success
      })
      .catch((error) => {
        toast.error(error || "Invalid credentials");
      });
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const signupStatus = query.get("signup");

    if (signupStatus === "success") {
      toast.success("Signup successful with Google!");
    } else if (signupStatus === "failure") {
      toast.error("Signup failed. Please try again.");
    }
  }, [location]);


  useEffect(() => {
    // Wait until Google API is fully loaded
    const loadGoogleLogin = () => {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        google.accounts.id.initialize({
          client_id: "471401185949-utp31ehr4tu0vldsi7p3i9s6bhotklte.apps.googleusercontent.com", 
          callback: handleGoogleLogin,
        });
        google.accounts.id.renderButton(document.getElementById("googleLoginButton"), {
          theme: "outline",
          size: "large",
        });
      }
    };
  
    // If the script is already loaded, initialize immediately
    if (window.google && window.google.accounts && window.google.accounts.id) {
      loadGoogleLogin();
    } else {
      // Otherwise, load the script dynamically
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = loadGoogleLogin;
      document.body.appendChild(script);
    }
  }, []);
  // const handleGoogleLogin = async (googleResponse) => {
  //   const idToken = googleResponse.credential;
  
  //   if (idToken) {
  //     try {
  //       const response = await axios.post("http://localhost:5000/api/google/google-login", {
  //         idToken: idToken,  // Send token as expected by the backend
  //       });
  //       console.log("Backend response:", response.data);
  //     } catch (error) {
  //       console.error("Error during Google login:", error);
  //     }
  //   } else {
  //     console.error("Google token is missing");
  //   }
  // };
  


  const handleGoogleLogin = async () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  


  return (
    <>
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`flex justify-center items-center mt-5 min-h-screen ${
          isDarkMode ? "bg-gray-900" : "bg-[#E2DDFE]"
        }`}
      >
        <Box
          sx={{
            maxWidth: "400px",
            p: 4,
            bgcolor: isDarkMode ? "#2D2D2D" : "white", // Change background color based on dark mode
            borderRadius: 2,
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            color: isDarkMode ? "white" : "black", // Change text color based on dark mode
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailErrorMessage}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: isDarkMode ? "#3E3E3E" : "#E2DDFE",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#6E6ADE" : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#7D66D9" : "rgba(0, 0, 0, 0.87)",
                },
              }}
            />
            <TextField
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              error={passwordError}
              helperText={passwordErrorMessage}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: isDarkMode ? "#3E3E3E" : "#E2DDFE",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#6E6ADE" : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#7D66D9" : "rgba(0, 0, 0, 0.87)",
                },
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
              className={`bg-[#6E6ADE] text-white hover:bg-[#7D66D9]`}
              disabled={authState.loading} // Disable button while loading
            >
              {authState.loading ? "Logging In..." : "Log In"}
            </Button>
            {userData && (
              <div>
                <h2>Welcome, {userData.name}!</h2>
                <p>Email: {userData.email}</p>
              </div>
            )}
          </Box>

          <Divider sx={{ mt: 2, mb: 2 }}>or</Divider>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{ color: "#7D66D9", borderColor: "#7D66D9" }}
            onClick={handleGoogleLogin}
          >
            Log In with Google
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account?
            <Button
              variant="text"
              onClick={() => navigate("/signup")}
              sx={{ color: "#6E6ADE" }}
            >
              Sign Up
            </Button>
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            <div>
              <Button
                variant="text"
                onClick={handleForgotPasswordClick}
                sx={{ color: "#6E6ADE" }}
              >
                Forgot Password?
              </Button>

              {showForgotPassword && <ForgotPassword />}
            </div>
          </Typography>
        </Box>
      </motion.div>
    </>
  );
};

export default Login;
