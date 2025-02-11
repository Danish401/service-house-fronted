// import React, { useState } from "react";
// import axios from "axios";
// import { MuiOtpInput } from "mui-one-time-password-input";
// import {
//   Button,
//   TextField,
//   Typography,
//   Snackbar,
//   Alert,
//   Card,
//   CardContent,
// } from "@mui/material";
// import { styled } from "@mui/material/styles"; // Ensure this is included
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// const BACKEND_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://houseservicebackend.onrender.com/"
//     : "http://localhost:5000/";
// const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
//   marginBottom: "15px",
//   "& .MuiOtpInput-input": {
//     backgroundColor: "#e2ddfe", // Set background color
//     borderColor: "#9b9ef0",
//     "&:focus": {
//       borderColor: "#7d66d9",
//     },
//   },
// }));

// const AnimatedCard = styled(motion(Card))({
//   maxWidth: "400px",
//   width: "100%",
//   backgroundColor: "#ffffff",
//   boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//   borderRadius: "8px",
//   padding: "16px",
// });

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [step, setStep] = useState(1);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post(`${BACKEND_URL}auth/forgot-password`, {
//         email,
//       });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       setStep(2);
//     } catch (error) {
//       setSnackbarMessage("Failed to send OTP. Please try again.");
//       setOpenSnackbar(true);
//     }
//   };

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post(`${BACKEND_URL}auth/reset-password`, {
//         email,
//         otp,
//         newPassword,
//       });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//     } catch (error) {
//       setSnackbarMessage(
//         "Failed to reset password. Please check your OTP and try again."
//       );
//       setOpenSnackbar(true);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <div className="flex items-center justify-center p-16 mb-16">
//       <AnimatedCard
//         variant="outlined"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//       >
//         <CardContent>
//           {step === 1 && (
//             <div>
//               <Typography
//                 variant="h5"
//                 align="center"
//                 gutterBottom
//                 color="#7d66d9"
//               >
//                 Forgot Password
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 sx={{ mb: 2 }}
//                 className="bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300" // Apply Tailwind CSS classes
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleSendOtp}
//                 className="bg-[#7d66d9] text-white hover:bg-[#6e6ade] transition duration-300"
//               >
//                 Send OTP
//               </Button>
//             </div>
//           )}
//           {step === 2 && (
//             <div>
//               <Typography
//                 variant="h5"
//                 align="center"
//                 gutterBottom
//                 color="#7d66d9"
//               >
//                 Reset Password
//               </Typography>
//               <OtpInputStyled value={otp} onChange={setOtp} length={6} />
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 type="password"
//                 label="Enter new password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 sx={{ mb: 2 }}
//                 className="bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300" // Apply Tailwind CSS classes
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleResetPassword}
//                 className="bg-[#7d66d9] text-white hover:bg-[#6e6ade] transition duration-300"
//               >
//                 Reset Password
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </AnimatedCard>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default ForgotPassword;
// import React, { useState } from "react";
// import axios from "axios";
// import { MuiOtpInput } from "mui-one-time-password-input";
// import {
//   Button,
//   TextField,
//   Typography,
//   Snackbar,
//   Alert,
//   Card,
//   CardContent,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const BACKEND_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://houseservicebackend.onrender.com/"
//     : "http://localhost:5000/";

// // ✅ Styled OTP Input
// const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
//   marginBottom: "15px",
//   "& .MuiOtpInput-input": {
//     backgroundColor: "#e2ddfe",
//     borderColor: "#9b9ef0",
//     "&:focus": {
//       borderColor: "#7d66d9",
//     },
//   },
// }));

// // ✅ Animated Card Wrapper
// const AnimatedCard = styled(motion(Card))({
//   maxWidth: "400px",
//   width: "100%",
//   backgroundColor: "#ffffff",
//   boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//   borderRadius: "8px",
//   padding: "16px",
// });

// const ForgotPassword = () => {
//   const [identifier, setIdentifier] = useState(""); // Email or Phone
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [step, setStep] = useState(1);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const navigate = useNavigate();

//   // ✅ Send OTP API Call (Supports Email or Phone)
//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post(`${BACKEND_URL}auth/forgot-password`, {
//         email: identifier.includes("@") ? identifier : undefined,
//         phone: identifier.match(/^\d+$/) ? identifier : undefined,
//       });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       setStep(2);
//     } catch (error) {
//       setSnackbarMessage("Failed to send OTP. Please try again.");
//       setOpenSnackbar(true);
//     }
//   };

//   // ✅ Reset Password API Call
//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post(`${BACKEND_URL}auth/reset-password`, {
//         email: identifier.includes("@") ? identifier : undefined,
//         phone: identifier.match(/^\d+$/) ? identifier : undefined,
//         otp,
//         newPassword,
//       });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//     } catch (error) {
//       setSnackbarMessage(
//         "Failed to reset password. Please check your OTP and try again."
//       );
//       setOpenSnackbar(true);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <div className="flex items-center justify-center p-8 min-h-screen bg-gray-100">
//       <AnimatedCard
//         variant="outlined"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//       >
//         <CardContent>
//           {step === 1 && (
//             <div>
//               <Typography
//                 variant="h5"
//                 align="center"
//                 gutterBottom
//                 color="#7d66d9"
//               >
//                 Forgot Password
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Enter Email or Phone"
//                 value={identifier}
//                 onChange={(e) => setIdentifier(e.target.value)}
//                 sx={{ mb: 2 }}
//                 className="bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300"
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleSendOtp}
//                 className="bg-[#7d66d9] text-white hover:bg-[#6e6ade] transition duration-300"
//               >
//                 Send OTP
//               </Button>
//             </div>
//           )}
//           {step === 2 && (
//             <div>
//               <Typography
//                 variant="h5"
//                 align="center"
//                 gutterBottom
//                 color="#7d66d9"
//               >
//                 Reset Password
//               </Typography>
//               <OtpInputStyled value={otp} onChange={setOtp} length={6} />
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 type="password"
//                 label="Enter new password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 sx={{ mb: 2 }}
//                 className="bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300"
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleResetPassword}
//                 className="bg-[#7d66d9] text-white hover:bg-[#6e6ade] transition duration-300"
//               >
//                 Reset Password
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </AnimatedCard>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default ForgotPassword;

// import React, { useState } from "react";
// import axios from "axios";
// import { MuiOtpInput } from "mui-one-time-password-input";
// import {
//   Button,
//   TextField,
//   Typography,
//   Snackbar,
//   Alert,
//   Card,
//   CardContent,
//   Box,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import emailImg from "../assets/clean.jpg"; // Add relevant image
// import clean2 from "../assets/clean2.jpg"; // Add relevant image

// const BACKEND_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://houseservicebackend.onrender.com/"
//     : "http://localhost:5000/";

// // ✅ Styled Components
// const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
//   marginBottom: "15px",
//   "& .MuiOtpInput-input": {
//     backgroundColor: "#e2ddfe",
//     borderColor: "#9b9ef0",
//     textAlign: "center",
//     fontSize: "1.2rem",
//     padding: "10px",
//     borderRadius: "8px",
//     "&:focus": {
//       borderColor: "#7d66d9",
//     },
//   },
// }));

// const AnimatedCard = styled(motion(Card))({
//   maxWidth: "450px",
//   width: "100%",
//   minHeight: "550px", // Increased card height
//   backgroundColor: "#ffffff",
//   boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
//   borderRadius: "15px",
//   padding: "25px",
// });

// const Keypad = styled(Box)({
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gap: "10px",
//   maxWidth: "250px",
//   margin: "15px auto",
// });

// const KeypadButton = styled(Button)({
//   fontSize: "1.5rem",
//   width: "60px",
//   height: "60px",
//   borderRadius: "50%",
//   backgroundColor: "#e2ddfe",
//   color: "#7d66d9",
//   "&:hover": {
//     backgroundColor: "#d3d0fc",
//   },
// });

// const ForgotPassword = () => {
//   const [identifier, setIdentifier] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [step, setStep] = useState(1);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const navigate = useNavigate();

//   // ✅ Send OTP
//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post(`${BACKEND_URL}auth/forgot-password`, {
//         email: identifier.includes("@") ? identifier : undefined,
//         phone: identifier.match(/^\d+$/) ? identifier : undefined,
//       });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       setStep(2);
//     } catch (error) {
//       setSnackbarMessage("Failed to send OTP. Please try again.");
//       setOpenSnackbar(true);
//     }
//   };

//   // ✅ Reset Password
//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post(`${BACKEND_URL}auth/reset-password`, {
//         email: identifier.includes("@") ? identifier : undefined,
//         phone: identifier.match(/^\d+$/) ? identifier : undefined,
//         otp,
//         newPassword,
//       });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//     } catch (error) {
//       setSnackbarMessage("Failed to reset password. Please check your OTP and try again.");
//       setOpenSnackbar(true);
//     }
//   };

//   // ✅ Handle Virtual Keypad Input
//   const handleKeypadPress = (num) => {
//     if (otp.length < 6) {
//       setOtp(otp + num);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center p-6 min-h-screen bg-gray-100">
//       <AnimatedCard
//         variant="outlined"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//       >
//         <CardContent>
//           {step === 1 && (
//             <div className="text-center">
//               <img src={emailImg} alt="Email" className="w-32 mx-auto mb-4 rounded-lg" />
//               <Typography variant="h5" color="#7d66d9" gutterBottom>
//                 Forgot Password
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Enter Email or Phone"
//                 value={identifier}
//                 onChange={(e) => setIdentifier(e.target.value)}
//                 sx={{ mb: 3 }}
//                 className="bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300"
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleSendOtp}
//                 className="bg-[#7d66d9] text-white hover:bg-[#6e6ade] transition duration-300"
//               >
//                 Send OTP
//               </Button>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="text-center">
//               <img src={clean2} alt="OTP" className="w-32 mx-auto mb-4 rounded-lg" />
//               <Typography variant="h5" color="#7d66d9" gutterBottom>
//                 Reset Password
//               </Typography>
//               <OtpInputStyled
//                 value={otp}
//                 onChange={setOtp}
//                 length={6}
//                 autoFocus
//                 inputMode="numeric"
//               />
//               {/* ✅ Virtual Keypad Below OTP */}
//               <Keypad>
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "←"].map((num, index) => (
//                   <KeypadButton
//                     key={index}
//                     onClick={() => num === "←" ? setOtp(otp.slice(0, -1)) : handleKeypadPress(num)}
//                     disabled={num === ""}
//                   >
//                     {num}
//                   </KeypadButton>
//                 ))}
//               </Keypad>

//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 type="password"
//                 label="Enter New Password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 sx={{ mb: 3 }}
//                 className="bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300"
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 onClick={handleResetPassword}
//                 className="bg-[#7d66d9] text-white hover:bg-[#6e6ade] transition duration-300"
//               >
//                 Reset Password
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </AnimatedCard>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={() => setOpenSnackbar(false)}
//       >
//         <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useState } from "react";
import axios from "axios";
import { MuiOtpInput } from "mui-one-time-password-input";
import {
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector for Dark Mode
import emailImg from "../assets/clean.jpg"; // Add relevant image
import clean2 from "../assets/clean2.jpg"; // Add relevant image
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://houseservicebackend.onrender.com/"
    : "http://localhost:5000/";

// ✅ Styled Components
const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
  marginBottom: "15px",
  "& .MuiOtpInput-input": {
    backgroundColor: "#e2ddfe",
    borderColor: "#9b9ef0",
    textAlign: "center",
    fontSize: "1.2rem",
    padding: "10px",
    borderRadius: "8px",
    "&:focus": {
      borderColor: "#7d66d9",
    },
  },
}));

const AnimatedCard = styled(motion(Card))(({ isDarkMode }) => ({
  maxWidth: "450px",
  width: "100%",
  minHeight: "550px", // Increased card height
  backgroundColor: isDarkMode ? "#1F2937" : "#ffffff",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "15px",
  padding: "25px",
  color: isDarkMode ? "#FFD700" : "#000000",
}));

const Keypad = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  maxWidth: "250px",
  margin: "15px auto",
});

const KeypadButton = styled(Button)(({ isDarkMode }) => ({
  fontSize: "1.5rem",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: isDarkMode ? "#374151" : "#e2ddfe",
  color: "#FFD700",
  "&:hover": {
    backgroundColor: isDarkMode ? "#4B5563" : "#d3d0fc",
  },
}));

const ForgotPassword = () => {
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
   const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const showSnackbar = (message, severity = "info") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };
  // ✅ Send OTP
  const handleSendOtp = async () => {
        if (!identifier) {
      showSnackbar("Please enter Email or Phone!", "error");
      return;
    }
    try {
      const response = await axios.post(`${BACKEND_URL}auth/forgot-password`, {
        email: identifier.includes("@") ? identifier : undefined,
        phone: identifier.match(/^\d+$/) ? identifier : undefined,
      });
      showSnackbar("OTP is sent to your email/phone. Please check!", "success");
      setSnackbarMessage(response.data.message);
      
      setStep(2);
    } catch (error) {
      showSnackbar("Failed to send OTP. Please try again.", "error");
      
    }
  };

  // ✅ Reset Password
  const handleResetPassword = async () => {
        if (!otp || !newPassword) {
      showSnackbar("Please enter OTP and new password!", "error");
      return;
    }
    try {
      const response = await axios.post(`${BACKEND_URL}auth/reset-password`, {
        email: identifier.includes("@") ? identifier : undefined,
        phone: identifier.match(/^\d+$/) ? identifier : undefined,
        otp,
        newPassword,
      });
      setSnackbarMessage(response.data.message);
      showSnackbar("Password updated successfully!", "success");
      
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      showSnackbar("Invalid OTP. Please try again.", "error");
    }
  };

  // ✅ Handle Virtual Keypad Input
  const handleKeypadPress = (num) => {
    if (otp.length < 6) {
      setOtp(otp + num);
    }
  };

  return (
    <div
      className={`flex items-center justify-center p-6 min-h-screen ${
        isDarkMode ? "bg-[#1F2937]" : "bg-gray-100"
      }`}
    >
      <AnimatedCard
        variant="outlined"
        isDarkMode={isDarkMode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <CardContent>
          {step === 1 && (
            <div className="text-center">
              <img
                src={emailImg}
                alt="Email"
                className="w-32 mx-auto mb-4 rounded-lg"
              />
              <Typography
                variant="h5"
                sx={{ color: isDarkMode ? "#FFD700" : "#7d66d9" }}
                gutterBottom
              >
                Forgot Password
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                label="Enter Email or Phone"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                sx={{ mb: 3 }}
                className={`bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300 ${
                  isDarkMode ? "text-[#FFD700]" : ""
                }`}
              />
              <Button
                variant="contained"
                fullWidth
                onClick={handleSendOtp}
                sx={{
                  backgroundColor: "#5B5BD6",
                  color: "white",
                  "&:hover": { backgroundColor: "#4B50C6" },
                }}
              >
                Send OTP
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <img
                src={clean2}
                alt="OTP"
                className="w-32 mx-auto mb-4 rounded-lg"
              />
              <Typography
                variant="h5"
                sx={{ color: isDarkMode ? "#FFD700" : "#7d66d9" }}
                gutterBottom
              >
                Reset Password
              </Typography>
              <OtpInputStyled
                value={otp}
                onChange={setOtp}
                length={6}
                autoFocus
                inputMode="numeric"
                sx={{
                  "& .MuiOtpInput-input": {
                    color: isDarkMode ? "#FFD700" : "#4B5563", // Gold in dark mode, Gray in light mode
                    backgroundColor: isDarkMode ? "#374151" : "#e2ddfe",
                    borderColor: isDarkMode ? "#FFD700" : "#9b9ef0",
                    "&:focus": {
                      borderColor: isDarkMode ? "#FFD700" : "#7d66d9",
                    },
                  },
                }}
              />

              {/* ✅ Virtual Keypad Below OTP */}
              <Keypad>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "←"].map((num, index) => (
                  <KeypadButton
                    key={index}
                    isDarkMode={isDarkMode}
                    onClick={() =>
                      num === "←"
                        ? setOtp(otp.slice(0, -1))
                        : handleKeypadPress(num)
                    }
                    disabled={num === ""}
                    sx={{
                      color: isDarkMode ? "#FFD700" : "#4B5563", // Gold in dark mode, Gray in light mode
                      backgroundColor: isDarkMode ? "#374151" : "#e2ddfe",
                      "&:hover": {
                        backgroundColor: isDarkMode ? "#4B5563" : "#d3d0fc",
                      },
                    }}
                  >
                    {num}
                  </KeypadButton>
                ))}
              </Keypad>

              <TextField
  variant="outlined"
  fullWidth
  type={showPassword ? "text" : "password"}
  label="Enter New Password"
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
  sx={{
    mb: 3,
    "& .MuiInputBase-input": {
      color: isDarkMode ? "#FFD700" : "#4B5563", // Gold in dark mode, Gray in light mode
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: isDarkMode ? "#374151" : "#e2ddfe",
      borderColor: isDarkMode ? "#FFD700" : "#9b9ef0",
      "&:hover": {
        borderColor: isDarkMode ? "#FFD700" : "#7d66d9",
      },
      "&.Mui-focused": {
        borderColor: isDarkMode ? "#FFD700" : "#7d66d9",
      },
    },
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={() => setShowPassword(!showPassword)}
          edge="end"
          sx={{ color: isDarkMode ? "#FFD700" : "#4B5563" }}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#5B5BD6", color: "white" }}
                onClick={handleResetPassword}
              >
                Reset Password
              </Button>
            </div>
          )}
        </CardContent>
      </AnimatedCard>
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
       <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: "100%" }}>
           {snackbarMessage}
         </Alert>
      </Snackbar>
    </div>
  );
};

export default ForgotPassword;

// import React, { useState } from "react";
// import axios from "axios";
// import { MuiOtpInput } from "mui-one-time-password-input";
// import {
//   Button,
//   TextField,
//   Typography,
//   Snackbar,
//   Alert,
//   Card,
//   CardContent,
//   Box,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import emailImg from "../assets/clean.jpg"; // Add relevant image
// import clean2 from "../assets/clean2.jpg"; // Add relevant image
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const BACKEND_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://houseservicebackend.onrender.com/"
//     : "http://localhost:5000/";

// // ✅ Styled Components
// const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
//   marginBottom: "15px",
//   "& .MuiOtpInput-input": {
//     textAlign: "center",
//     fontSize: "1.2rem",
//     padding: "10px",
//     borderRadius: "8px",
//   },
// }));

// const AnimatedCard = styled(motion(Card))(({ isDarkMode }) => ({
//   maxWidth: "450px",
//   width: "100%",
//   minHeight: "550px",
//   backgroundColor: isDarkMode ? "#1F2937" : "#ffffff",
//   boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
//   borderRadius: "15px",
//   padding: "25px",
//   color: isDarkMode ? "#FFD700" : "#000000",
// }));

// const Keypad = styled(Box)({
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gap: "10px",
//   maxWidth: "250px",
//   margin: "15px auto",
// });

// const KeypadButton = styled(Button)(({ isDarkMode }) => ({
//   fontSize: "1.5rem",
//   width: "60px",
//   height: "60px",
//   borderRadius: "50%",
//   backgroundColor: isDarkMode ? "#374151" : "#e2ddfe",
//   color: isDarkMode ? "#FFD700" : "#4B5563",
//   "&:hover": {
//     backgroundColor: isDarkMode ? "#4B5563" : "#d3d0fc",
//   },
// }));

// const ForgotPassword = () => {
//   const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
//   const [identifier, setIdentifier] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [step, setStep] = useState(1);
//   const [showPassword, setShowPassword] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("info");
//   const navigate = useNavigate();

//   // ✅ Show Snackbar Function
//   const showSnackbar = (message, severity = "info") => {
//     setSnackbarMessage(message);
//     setSnackbarSeverity(severity);
//     setOpenSnackbar(true);
//   };

//   // ✅ Send OTP
//   const handleSendOtp = async () => {
//     if (!identifier) {
//       showSnackbar("Please enter Email or Phone!", "error");
//       return;
//     }

//     try {
//       const response = await axios.post(`${BACKEND_URL}auth/forgot-password`, {
//         email: identifier.includes("@") ? identifier : undefined,
//         phone: identifier.match(/^\d+$/) ? identifier : undefined,
//       });
//       showSnackbar("OTP is sent to your email/phone. Please check!", "success");
//       setStep(2);
//     } catch (error) {
//       showSnackbar("Failed to send OTP. Please try again.", "error");
//     }
//   };

//   // ✅ Reset Password
//   const handleResetPassword = async () => {
//     if (!otp || !newPassword) {
//       showSnackbar("Please enter OTP and new password!", "error");
//       return;
//     }

//     try {
//       const response = await axios.post(`${BACKEND_URL}auth/reset-password`, {
//         email: identifier.includes("@") ? identifier : undefined,
//         phone: identifier.match(/^\d+$/) ? identifier : undefined,
//         otp,
//         newPassword,
//       });
//       showSnackbar("Password updated successfully!", "success");
//       setTimeout(() => navigate("/login"), 1000);
//     } catch (error) {
//       showSnackbar("Invalid OTP. Please try again.", "error");
//     }
//   };

//   return (
//     <div className={`flex items-center justify-center p-6 min-h-screen ${isDarkMode ? "bg-[#1F2937]" : "bg-gray-100"}`}>
//       <AnimatedCard variant="outlined" isDarkMode={isDarkMode}>
//         <CardContent>
//           {step === 1 ? (
//             <div className="text-center">
//               <img src={emailImg} alt="Email" className="w-32 mx-auto mb-4 rounded-lg" />
//               <Typography variant="h5" sx={{ color: isDarkMode ? "#FFD700" : "#7d66d9" }} gutterBottom>
//                 Forgot Password
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Enter Email or Phone"
//                 value={identifier}
//                 onChange={(e) => setIdentifier(e.target.value)}
//                 sx={{ mb: 3 }}
//               />
//               <Button variant="contained" fullWidth onClick={handleSendOtp} sx={{ backgroundColor: "#5B5BD6", color: "white" }}>
//                 Send OTP
//               </Button>
//             </div>
//           ) : (
//             <div className="text-center">
//               <img src={clean2} alt="OTP" className="w-32 mx-auto mb-4 rounded-lg" />
//               <Typography variant="h5" sx={{ color: isDarkMode ? "#FFD700" : "#7d66d9" }} gutterBottom>
//                 Reset Password
//               </Typography>
//               <OtpInputStyled value={otp} onChange={setOtp} length={6} autoFocus inputMode="numeric" />
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 type={showPassword ? "text" : "password"}
//                 label="Enter New Password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 sx={{ mb: 3 }}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button variant="contained" fullWidth onClick={handleResetPassword} sx={{ backgroundColor: "#5B5BD6", color: "white" }}>
//                 Reset Password
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </AnimatedCard>

//       {/* ✅ Snackbar for Alerts */}
//       <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
//         <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: "100%" }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default ForgotPassword;
