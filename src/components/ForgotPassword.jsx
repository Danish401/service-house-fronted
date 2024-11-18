// import React, { useState } from 'react';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Reset Password

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/forgotpassword', { email });
//       alert(response.data.message);
//       setStep(2); // Move to the next step
//     } catch (error) {
//       alert('Failed to send OTP. Please try again.');
//     }
//   };
//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/resetpassword', {
//         email,
//         otp,
//         newPassword,
//       });
//       alert(response.data.message);
//       // Optionally redirect to the login page after successful reset
//     } catch (error) {
//       alert('Failed to reset password. Please check your OTP and try again.');
//     }
//   };
  

//   return (
//     <div>
//       {step === 1 && (
//         <div>
//           <h2>Forgot Password</h2>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//           <button onClick={handleSendOtp}>Send OTP</button>
//         </div>
//       )}
//       {step === 2 && (
//         <div>
//           <h2>Reset Password</h2>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP"
//           />
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             placeholder="Enter new password"
//           />
//           <button onClick={handleResetPassword}>Reset Password</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { MuiOtpInput } from 'mui-one-time-password-input';
// import { styled } from '@mui/material/styles';
// import { Button, TextField, Typography, Box } from '@mui/material';

// const Container = styled(Box)(({ theme }) => ({
//   maxWidth: '400px',
//   margin: '0 auto',
//   padding: '20px',
//   borderRadius: '8px',
//   backgroundColor: '#f7f7f7',
//   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
// }));

// const Header = styled(Typography)(({ theme }) => ({
//   textAlign: 'center',
//   marginBottom: '20px',
//   color: '#6e6ade',
// }));

// const CustomButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#7d66d9',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#6e6ade',
//   },
// }));

// const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
//   marginBottom: '15px',
//   '& .MuiOtpInput-input': {
//     backgroundColor: '#e2ddfe',
//     borderColor: '#9b9ef0',
//     '&:focus': {
//       borderColor: '#7d66d9',
//     },
//   },
// }));

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Reset Password

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/forgotpassword', { email });
//       alert(response.data.message);
//       setStep(2); // Move to the next step
//     } catch (error) {
//       alert('Failed to send OTP. Please try again.');
//     }
//   };

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/resetpassword', {
//         email,
//         otp,
//         newPassword,
//       });
//       alert(response.data.message);
//       // Optionally redirect to the login page after successful reset
//     } catch (error) {
//       alert('Failed to reset password. Please check your OTP and try again.');
//     }
//   };

//   return (
//     <Container>
//       {step === 1 && (
//         <div>
//           <Header variant="h5">Forgot Password</Header>
//           <TextField
//             variant="outlined"
//             fullWidth
//             label="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{ mb: 2 }} // Material-UI v5 way to style
//           />
//           <CustomButton variant="contained" fullWidth onClick={handleSendOtp}>
//             Send OTP
//           </CustomButton>
//         </div>
//       )}
//       {step === 2 && (
//         <div>
//           <Header variant="h5">Reset Password</Header>
//           <OtpInputStyled
//             value={otp}
//             onChange={setOtp}
//             length={6} // Specify the length of the OTP
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             type="password"
//             label="Enter new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             sx={{ mb: 2 }} // Material-UI v5 way to style
//           />
//           <CustomButton variant="contained" fullWidth onClick={handleResetPassword}>
//             Reset Password
//           </CustomButton>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default ForgotPassword;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { MuiOtpInput } from 'mui-one-time-password-input';
// import { styled } from '@mui/material/styles';
// import { Button, TextField, Typography, Box, Snackbar, Alert } from '@mui/material';
// import { useAnimate, stagger } from "framer-motion";

// const Container = styled(Box)(({ theme }) => ({
//   maxWidth: '400px',
//   margin: '0 auto',
//   padding: '20px',
//   borderRadius: '8px',
//   backgroundColor: '#f7f7f7',
//   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '20px',
//   opacity: 0,
//   animation: 'fadeIn 0.5s forwards',
//   "@keyframes fadeIn": {
//     "100%": { opacity: 1 }
//   },
// }));

// const Header = styled(Typography)(({ theme }) => ({
//   textAlign: 'center',
//   marginBottom: '20px',
//   color: '#6e6ade',
// }));

// const CustomButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#7d66d9',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#6e6ade',
//   },
// }));

// const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
//   marginBottom: '15px',
//   '& .MuiOtpInput-input': {
//     backgroundColor: '#e2ddfe',
//     borderColor: '#9b9ef0',
//     '&:focus': {
//       borderColor: '#7d66d9',
//     },
//   },
// }));

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Reset Password
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [animateRef, startAnimation] = useAnimate();

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/forgotpassword', { email });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       setStep(2); // Move to the next step
//     } catch (error) {
//       setSnackbarMessage('Failed to send OTP. Please try again.');
//       setOpenSnackbar(true);
//     }
//   };

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/resetpassword', {
//         email,
//         otp,
//         newPassword,
//       });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       // Optionally redirect to the login page after successful reset
//     } catch (error) {
//       setSnackbarMessage('Failed to reset password. Please check your OTP and try again.');
//       setOpenSnackbar(true);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setOpenSnackbar(false);
//   };

//   return (
// <div className='flex items-center justify-center mb-16 p-16'>
//   <Container ref={animateRef} onAnimationEnd={() => startAnimation(stagger(0.1))}>
//     {step === 1 && (
//       <div>
//         <Header variant="h5">Forgot Password</Header>
//         <TextField
//           variant="outlined"
//           fullWidth
//           label="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{ mb: 2 }}
//         />
//         <CustomButton variant="contained" fullWidth onClick={handleSendOtp}>
//           Send OTP
//         </CustomButton>
//       </div>
//     )}
//     {step === 2 && (
//       <div>
//         <Header variant="h5">Reset Password</Header>
//         <OtpInputStyled
//           value={otp}
//           onChange={setOtp}
//           length={6} // Specify the length of the OTP
//         />
//         <TextField
//           variant="outlined"
//           fullWidth
//           type="password"
//           label="Enter new password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           sx={{ mb: 2 }}
//         />
//         <CustomButton variant="contained" fullWidth onClick={handleResetPassword}>
//           Reset Password
//         </CustomButton>
//       </div>
//     )}
//   </Container>

//   <Snackbar
//     open={openSnackbar}
//     autoHideDuration={3000}
//     onClose={handleSnackbarClose}
//   >
//     <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
//       {snackbarMessage}
//     </Alert>
//   </Snackbar>
// </div>
//   )
// };

// export default ForgotPassword;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { MuiOtpInput } from 'mui-one-time-password-input';
// import { styled } from '@mui/material/styles';
// import { Button, TextField, Typography, Snackbar, Alert, Card, CardContent } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// const CustomButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#7d66d9',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#6e6ade',
//   },
// }));

// const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
//   marginBottom: '15px',
//   '& .MuiOtpInput-input': {
//     backgroundColor: '#e2ddfe',
//     borderColor: '#9b9ef0',
//     '&:focus': {
//       borderColor: '#7d66d9',
//     },
//   },
// }));

// const AnimatedCard = styled(motion(Card))({
//   maxWidth: '400px',
//   width: '100%',
//   backgroundColor: '#e2ddfe', // Card background color
//   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//   borderRadius: '8px',
// });

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Reset Password
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate for redirection

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/forgotpassword', { email });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       setStep(2); // Move to the next step
//     } catch (error) {
//       setSnackbarMessage('Failed to send OTP. Please try again.');
//       setOpenSnackbar(true);
//     }
//   };

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/resetpassword', {
//         email,
//         otp,
//         newPassword,
//       });
//       setSnackbarMessage(response.data.message);
//       setOpenSnackbar(true);
//       // Redirect to login page after successful reset
//       setTimeout(() => {
//         navigate('/login'); // Adjust this path to your login route
//       }, 1000); // Wait for snackbar to show for 3 seconds before redirecting
//     } catch (error) {
//       setSnackbarMessage('Failed to reset password. Please check your OTP and try again.');
//       setOpenSnackbar(true);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <div className='flex items-center justify-center mb-16 p-16'>
//       <AnimatedCard 
//         variant="outlined"
//         initial={{ opacity: 0, y: 20 }} // Initial state for animation
//         animate={{ opacity: 1, y: 0 }} // Final state for animation
//         exit={{ opacity: 0, y: 20 }} // Exit state for animation
//         transition={{ duration: 0.5 }} // Transition duration
//       >
//         <CardContent>
//           {step === 1 && (
//             <div>
//               <Typography variant="h5" align="center" gutterBottom color="#7d66d9">
//                 Forgot Password
//               </Typography>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 sx={{ mb: 2 }}
//               />
//               <CustomButton variant="contained" fullWidth onClick={handleSendOtp}>
//                 Send OTP
//               </CustomButton>
//             </div>
//           )}
//           {step === 2 && (
//             <div>
//               <Typography variant="h5" align="center" gutterBottom color="#7d66d9">
//                 Reset Password
//               </Typography>
//               <OtpInputStyled
//                 value={otp}
//                 onChange={setOtp}
//                 length={6} // Specify the length of the OTP
//               />
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 type="password"
//                 label="Enter new password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 sx={{ mb: 2 }}
//               />
//               <CustomButton variant="contained" fullWidth onClick={handleResetPassword}>
//                 Reset Password
//               </CustomButton>
//             </div>
//           )}
//         </CardContent>
//       </AnimatedCard>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//       >
//         <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default ForgotPassword;



import React, { useState } from 'react';
import axios from 'axios';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { Button, TextField, Typography, Snackbar, Alert, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles'; // Ensure this is included
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OtpInputStyled = styled(MuiOtpInput)(({ theme }) => ({
  marginBottom: '15px',
  '& .MuiOtpInput-input': {
    backgroundColor: '#e2ddfe', // Set background color
    borderColor: '#9b9ef0',
    '&:focus': {
      borderColor: '#7d66d9',
    },
  },
}));

const AnimatedCard = styled(motion(Card))({
  maxWidth: '400px',
  width: '100%',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  padding: '16px',
});

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/forgotpassword', { email });
      setSnackbarMessage(response.data.message);
      setOpenSnackbar(true);
      setStep(2);
    } catch (error) {
      setSnackbarMessage('Failed to send OTP. Please try again.');
      setOpenSnackbar(true);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/resetpassword', {
        email,
        otp,
        newPassword,
      });
      setSnackbarMessage(response.data.message);
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      setSnackbarMessage('Failed to reset password. Please check your OTP and try again.');
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className='flex items-center justify-center mb-16 p-16'>
      <AnimatedCard
        variant="outlined"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <CardContent>
          {step === 1 && (
            <div>
              <Typography variant="h5" align="center" gutterBottom color="#7d66d9">
                Forgot Password
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                label="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
                className="bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300" // Apply Tailwind CSS classes
              />
              <Button
                variant="contained"
                fullWidth
                onClick={handleSendOtp}
                className="bg-[#7d66d9] text-white hover:bg-[#6e6ade] transition duration-300"
              >
                Send OTP
              </Button>
            </div>
          )}
          {step === 2 && (
            <div>
              <Typography variant="h5" align="center" gutterBottom color="#7d66d9">
                Reset Password
              </Typography>
              <OtpInputStyled
                value={otp}
                onChange={setOtp}
                length={6}
              />
              <TextField
                variant="outlined"
                fullWidth
                type="password"
                label="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ mb: 2 }}
                className="bg-[#e2ddfe] border border-[#9b9ef0] focus:border-[#7d66d9] transition duration-300" // Apply Tailwind CSS classes
              />
              <Button
                variant="contained"
                fullWidth
                onClick={handleResetPassword}
                className="bg-[#7d66d9] text-white hover:bg-[#6e6ade] transition duration-300"
              >
                Reset Password
              </Button>
            </div>
          )}
        </CardContent>
      </AnimatedCard>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ForgotPassword;

