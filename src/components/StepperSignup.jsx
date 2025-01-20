// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import { Typography, Box, Avatar, Grid, Paper } from "@mui/material";
// import StepConnector from "@mui/material/StepConnector";
// import { LiaGoogle } from "react-icons/lia";
// import { BiSolidUserDetail } from "react-icons/bi";
// import { MdPreview } from "react-icons/md";

// // Styled connector for stepper
// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`& .MuiStepConnector-line`]: {
//     borderColor: "#eaeaf0",
//     borderWidth: 2,
//   },
// }));

// // Steps
// const steps = [
//   { label: "Google Sign-In", icon: <LiaGoogle /> },
//   { label: "Fill Details", icon: <BiSolidUserDetail /> },
//   { label: "Review & Submit", icon: <MdPreview /> },
// ];

// export default function SignupForm() {
//   const [activeStep, setActiveStep] = useState(0); // Start at step 0
//   const [formData, setFormData] = useState({
//     name: "John Doe", // Replace with Google data
//     email: "johndoe@gmail.com", // Replace with Google data
//     phone: "",
//     address1: "",
//     address2: "",
//     image: null,
//   });

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, image: file });
//   };

//   const handleSubmit = () => {
//     console.log("Form Data:", formData);
//     alert("Form submitted successfully!");
//   };

//   return (
//     <Box sx={{ width: "100%", mt: 8 }}>
//       {/* Stepper */}
//       <Stepper
//         alternativeLabel
//         activeStep={activeStep}
//         connector={<QontoConnector />}
//       >
//         {steps.map((step, index) => (
//           <Step key={step.label}>
//             <StepLabel icon={step.icon} style={{ color: "#7d66d9" }}>
//               {step.label}
//             </StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {/* Content */}
//       <Box sx={{ mt: 4 }}>
//         <Grid container spacing={4} alignItems="flex-start">
//           {/* Left Section: Image Upload */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 4,
//                 textAlign: "center",
//                 backgroundColor: "#f3f2fc",
//                 borderRadius: 3,
//               }}
//             >
//               <Typography variant="h6" sx={{ mb: 2, color: "#7d66d9" }}>
//                 Upload Your Image
//               </Typography>
//               <Button
//                 variant="contained"
//                 component="label"
//                 sx={{ backgroundColor: "#7d66d9", color: "#fff" }}
//               >
//                 Upload Image
//                 <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
//               </Button>
//               {formData.image && (
//                 <Stack
//                   direction="column"
//                   alignItems="center"
//                   spacing={2}
//                   sx={{ mt: 3 }}
//                 >
//                   <Box
//                     sx={{
//                       width: 150,
//                       height: 150,
//                       borderRadius: "8px",
//                       border: "4px solid #abbdf9",
//                       overflow: "hidden",
//                       transition: "transform 0.3s, box-shadow 0.3s",
//                       boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//                       "&:hover": {
//                         transform: "scale(1.05)",
//                         boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
//                         borderColor: "#e2ddfe",
//                       },
//                     }}
//                   >
//                     <Avatar
//                       src={URL.createObjectURL(formData.image)}
//                       alt="Uploaded"
//                       sx={{
//                         width: "100%",
//                         height: "100%",
//                       }}
//                       variant="square"
//                     />
//                   </Box>
//                   <Typography variant="body1">{formData.image.name}</Typography>
//                 </Stack>
//               )}
//             </Paper>
//           </Grid>

//           {/* Right Section: Form Details */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 4,
//                 backgroundColor: "#fff",
//                 borderRadius: 3,
//               }}
//             >
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 Fill Your Details
//               </Typography>
//               <Stack spacing={2}>
//                 <TextField
//                   label="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Address 1"
//                   name="address1"
//                   value={formData.address1}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Address 2"
//                   name="address2"
//                   value={formData.address2}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//               </Stack>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Navigation Buttons */}
//         <Box sx={{ mt: 4, textAlign: "center" }}>
//           <Button
//             disabled={activeStep === 0}
//             onClick={handleBack}
//             sx={{ mr: 2, backgroundColor: "#7d66d9", color: "#fff" }}
//           >
//             Back
//           </Button>
//           {activeStep === steps.length - 1 ? (
//             <Button
//               variant="contained"
//               onClick={handleSubmit}
//               sx={{ backgroundColor: "#a38ae8", color: "#fff" }}
//             >
//               Submit
//             </Button>
//           ) : (
//             <Button
//               variant="contained"
//               onClick={handleNext}
//               sx={{ backgroundColor: "#abbdf9", color: "#fff" }}
//             >
//               Next
//             </Button>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }



// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import { Typography, Box, Avatar, Grid, Paper } from "@mui/material";
// import StepConnector from "@mui/material/StepConnector";
// import { LiaGoogle } from "react-icons/lia";
// import { BiSolidUserDetail } from "react-icons/bi";
// import { MdPreview } from "react-icons/md";

// // Styled connector for stepper
// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`& .MuiStepConnector-line`]: {
//     borderColor: "#eaeaf0",
//     borderWidth: 2,
//   },
// }));

// // Styled Step Label to increase icon size and adjust color
// const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
//   "& .MuiStepLabel-iconContainer svg": {
//     fontSize: "2rem", // Increase icon size
//   },
//   "& .MuiStepLabel-label": {
//     color: theme.palette.text.primary,
//   },
//   "& .Mui-active .MuiStepLabel-label, .Mui-completed .MuiStepLabel-label": {
//     color: "#7d66d9",
//   },
// }));

// // Steps
// const steps = [
//   { label: "Google Sign-In", icon: <LiaGoogle /> },
//   { label: "Fill Details", icon: <BiSolidUserDetail /> },
//   { label: "Review & Submit", icon: <MdPreview /> },
// ];

// export default function SignupForm() {
//   const [activeStep, setActiveStep] = useState(0); // Start at step 0
//   const [formData, setFormData] = useState({
//     name: "John Doe", // Replace with Google data
//     email: "johndoe@gmail.com", // Replace with Google data
//     phone: "",
//     address1: "",
//     address2: "",
//     image: null,
//   });

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, image: file });
//   };

//   const handleSubmit = () => {
//     console.log("Form Data:", formData);
//     alert("Form submitted successfully!");
//   };

//   return (
//     <Box sx={{ width: "100%", mt: 8 }}>
//       {/* Stepper */}
//       <Stepper
//         alternativeLabel
//         activeStep={activeStep}
//         connector={<QontoConnector />}
//       >
//         {steps.map((step, index) => (
//           <Step key={step.label}>
//             <StyledStepLabel icon={step.icon}>
//               {step.label}
//             </StyledStepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {/* Content */}
//       <Box sx={{ mt: 4 }}>
//         <Grid container spacing={4} alignItems="flex-start">
//           {/* Left Section: Image Upload */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 4,
//                 textAlign: "center",
//                 backgroundColor: "#f3f2fc",
//                 borderRadius: 3,
//               }}
//             >
//               <Typography variant="h6" sx={{ mb: 2, color: "#7d66d9" }}>
//                 Upload Your Image
//               </Typography>
//               <Button
//                 variant="contained"
//                 component="label"
//                 sx={{ backgroundColor: "#7d66d9", color: "#fff" }}
//               >
//                 Upload Image
//                 <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
//               </Button>
//               {formData.image && (
//                 <Stack
//                   direction="column"
//                   alignItems="center"
//                   spacing={2}
//                   sx={{ mt: 3 }}
//                 >
//                   <Box
//                     sx={{
//                       width: 150,
//                       height: 150,
//                       borderRadius: "8px",
//                       border: "4px solid #abbdf9",
//                       overflow: "hidden",
//                       transition: "transform 0.3s, box-shadow 0.3s",
//                       boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//                       "&:hover": {
//                         transform: "scale(1.05)",
//                         boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
//                         borderColor: "#e2ddfe",
//                       },
//                     }}
//                   >
//                     <Avatar
//                       src={URL.createObjectURL(formData.image)}
//                       alt="Uploaded"
//                       sx={{
//                         width: "100%",
//                         height: "100%",
//                       }}
//                       variant="square"
//                     />
//                   </Box>
//                   <Typography variant="body1">{formData.image.name}</Typography>
//                 </Stack>
//               )}
//             </Paper>
//           </Grid>

//           {/* Right Section: Form Details */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 4,
//                 backgroundColor: "#fff",
//                 borderRadius: 3,
//               }}
//             >
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 Fill Your Details
//               </Typography>
//               <Stack spacing={2}>
//                 <TextField
//                   label="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Address 1"
//                   name="address1"
//                   value={formData.address1}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Address 2"
//                   name="address2"
//                   value={formData.address2}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//               </Stack>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Navigation Buttons */}
//         <Box sx={{ mt: 4, textAlign: "center" }}>
//           <Button
//             disabled={activeStep === 0}
//             onClick={handleBack}
//             sx={{ mr: 2, backgroundColor: "#7d66d9", color: "#fff" }}
//           >
//             Back
//           </Button>
//           {activeStep === steps.length - 1 ? (
//             <Button
//               variant="contained"
//               onClick={handleSubmit}
//               sx={{ backgroundColor: "#a38ae8", color: "#fff" }}
//             >
//               Submit
//             </Button>
//           ) : (
//             <Button
//               variant="contained"
//               onClick={handleNext}
//               sx={{ backgroundColor: "#abbdf9", color: "#fff" }}
//             >
//               Next
//             </Button>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   TextField,
//   Stack,
//   Typography,
//   Box,
//   Avatar,
//   Grid,
//   Paper,
// } from "@mui/material";
// import StepConnector from "@mui/material/StepConnector";
// import { LiaGoogle } from "react-icons/lia";
// import { BiSolidUserDetail } from "react-icons/bi";
// import { MdPreview } from "react-icons/md";
// import { getUserById, updateUser } from "../features/authSlice";
// import { useNavigate } from "react-router-dom";
// // Styled connector for stepper
// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`& .MuiStepConnector-line`]: {
//     borderColor: "#eaeaf0",
//     borderWidth: 2,
//   },
// }));

// // Styled Step Label to increase icon size and adjust color
// const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
//   "& .MuiStepLabel-iconContainer svg": {
//     fontSize: "2rem", // Increase icon size
//   },
//   "& .MuiStepLabel-label": {
//     color: theme.palette.text.primary,
//   },
//   "& .Mui-active .MuiStepLabel-label, .Mui-completed .MuiStepLabel-label": {
//     color: "#7d66d9",
//   },
// }));

// // Steps
// const steps = [
//   { label: "Google Sign-In", icon: <LiaGoogle /> },
//   { label: "Fill Details", icon: <BiSolidUserDetail /> },
//   { label: "Review & Submit", icon: <MdPreview /> },
// ];

// export default function SignupForm() {
//   const dispatch = useDispatch();
//   const { user, token } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const [activeStep, setActiveStep] = useState(0); // Stepper state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address1: "",
//     address2: "",
//     image: null,
//   });

//   // Cleanup URL object for file previews
//   useEffect(() => {
//     return () => {
//       if (formData.image instanceof File) {
//         URL.revokeObjectURL(formData.image);
//       }
//     };
//   }, [formData.image]);

//   // Fetch user data when token or user changes
//   useEffect(() => {
//     if (token) {
//       dispatch(getUserById(user?.id)); // Replace `user?.id` with correct user ID
//     }
//   }, [token, user?.id, dispatch]);

//   // Update local form state when user data is fetched
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         name: user.name || "",
//         email: user.email || "",
//         phone: user.phone || "",
//         address1: user.address1 || "",
//         address2: user.address2 || "",
//         image: user.image || null, // Set existing image URL
//       });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData({ ...formData, image: e.target.files[0] });
//     }
//   };

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const formPayload = new FormData();
//     for (const key in formData) {
//       formPayload.append(key, formData[key]);
//     }
    
//     // Add token to the formPayload if needed on the backend
//     if (token) {
//       formPayload.append('token', token);
//     }
  
//     // Dispatch the updateUser action
//     dispatch(updateUser(formPayload));
  
//     // Navigate to the homepage (or any other route)
//     navigate('/');
//   };

//   return (
//     <Box sx={{ width: "100%", mt: 8 }}>
//       {/* Stepper */}
//       <Stepper
//         alternativeLabel
//         activeStep={activeStep}
//         connector={<QontoConnector />}
//       >
//         {steps.map((step, index) => (
//           <Step key={step.label}>
//             <StyledStepLabel icon={step.icon}>
//               {step.label}
//             </StyledStepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {/* Content */}
//       <Box sx={{ mt: 4 }}>
//         <Grid container spacing={4} alignItems="flex-start">
//           {/* Left Section: Image Upload */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 4,
//                 textAlign: "center",
//                 backgroundColor: "#f3f2fc",
//                 borderRadius: 3,
//               }}
//             >
//               <Typography variant="h6" sx={{ mb: 2, color: "#7d66d9" }}>
//                 Upload Your Image
//               </Typography>
//               <Button
//                 variant="contained"
//                 component="label"
//                 sx={{ backgroundColor: "#7d66d9", color: "#fff" }}
//               >
//                 Upload Image
//                 <input type="file" hidden accept="image/*" onChange={handleFileChange} />
//               </Button>
//               {formData.image && (
//                 <Stack direction="column" alignItems="center" spacing={2} sx={{ mt: 3 }}>
//                   <Avatar
//                     src={
//                       formData.image instanceof File
//                         ? URL.createObjectURL(formData.image)
//                         : formData.image
//                     }
//                     alt="Uploaded"
//                     sx={{
//                       width: 150,
//                       height: 150,
//                       borderRadius: "8px",
//                       border: "4px solid #abbdf9",
//                       transition: "transform 0.3s, box-shadow 0.3s",
//                       boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//                       "&:hover": {
//                         transform: "scale(1.05)",
//                         boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
//                         borderColor: "#e2ddfe",
//                       },
//                     }}
//                     variant="square"
//                   />
//                   <Typography variant="body1">
//                     {formData.image instanceof File ? formData.image.name : "Uploaded Image"}
//                   </Typography>
//                 </Stack>
//               )}
//             </Paper>
//           </Grid>

//           {/* Right Section: Form Details */}
//           <Grid item xs={12} md={6}>
//             <Paper elevation={3} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 3 }}>
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 Fill Your Details
//               </Typography>
//               <Stack spacing={2}>
//                 <TextField
//                   label="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Address 1"
//                   name="address1"
//                   value={formData.address1}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Address 2"
//                   name="address2"
//                   value={formData.address2}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//               </Stack>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Navigation Buttons */}
//         <Box sx={{ mt: 4, textAlign: "center" }}>
//           <Button
//             disabled={activeStep === 0}
//             onClick={handleBack}
//             sx={{ mr: 2, backgroundColor: "#7d66d9", color: "#fff" }}
//           >
//             Back
//           </Button>
//           {activeStep === steps.length - 1 ? (
//             <Button
//               variant="contained"
//               onClick={handleSubmit}
//               sx={{ backgroundColor: "#a38ae8", color: "#fff" }}
//             >
//               Submit
//             </Button>
//           ) : (
//             <Button
//               variant="contained"
//               onClick={handleNext}
//               sx={{ backgroundColor: "#abbdf9", color: "#fff" }}
//             >
//               Next
//             </Button>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   TextField,
//   Stack,
//   Typography,
//   Box,
//   Avatar,
//   Grid,
//   Paper,
// } from "@mui/material";
// import StepConnector from "@mui/material/StepConnector";
// import { LiaGoogle } from "react-icons/lia";
// import { BiSolidUserDetail } from "react-icons/bi";
// import { MdPreview } from "react-icons/md";
// import { getUserById, updateUser } from "../features/authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify'; // Import toast for success notification

// // Styled connector for stepper
// const QontoConnector = styled(StepConnector)(({ theme, active, completed }) => ({
//   [`& .MuiStepConnector-line`]: {
//     borderColor: active || completed ? "#7d66d9" : "#eaeaf0", // Color for active/completed steps
//     borderWidth: 2,
//   },
// }));

// // Styled Step Label to increase icon size, adjust color for active, completed, and inactive states
// const StyledStepLabel = styled(StepLabel)(({ theme, active, completed }) => ({
//   "& .MuiStepLabel-iconContainer svg": {
//     fontSize: "2rem", // Increase icon size
//   },
//   "& .MuiStepLabel-label": {
//     color: theme.palette.text.primary,
//   },
//   "& .Mui-active .MuiStepLabel-label, .Mui-completed .MuiStepLabel-label": {
//     color: "#7d66d9", // Color for active/completed steps
//   },
//   "& .MuiStepLabel-iconContainer": {
//     color: active
//       ? "#7d66d9" // Active step color
//       : completed
//       ? "#7d66d9" // Completed step color
//       : "#eaeaf0", // Inactive step color
//   },
// }));

// // Steps
// const steps = [
//   { label: "Google Sign-In", icon: <LiaGoogle /> },
//   { label: "Fill Details", icon: <BiSolidUserDetail /> },
//   { label: "Review & Submit", icon: <MdPreview /> },
// ];

// export default function SignupForm() {
//   const dispatch = useDispatch();
//   const { user, token } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const [activeStep, setActiveStep] = useState(0); // Stepper state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address1: "",
//     address2: "",
//     image: null,
//   });

//   // Cleanup URL object for file previews
//   useEffect(() => {
//     return () => {
//       if (formData.image instanceof File) {
//         URL.revokeObjectURL(formData.image);
//       }
//     };
//   }, [formData.image]);

//   // Fetch user data when token or user changes
//   useEffect(() => {
//     if (token) {
//       dispatch(getUserById(user?.id)); // Replace `user?.id` with correct user ID
//     }
//   }, [token, user?.id, dispatch]);

//   // Update local form state when user data is fetched
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         name: user.name || "",
//         email: user.email || "",
//         phone: user.phone || "",
//         address1: user.address1 || "",
//         address2: user.address2 || "",
//         image: user.image || null, // Set existing image URL
//       });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData({ ...formData, image: e.target.files[0] });
//     }
//   };

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const formPayload = new FormData();
//     for (const key in formData) {
//       formPayload.append(key, formData[key]);
//     }
    
//     // Add token to the formPayload if needed on the backend
//     if (token) {
//       formPayload.append('token', token);
//     }
  
//     // Dispatch the updateUser action
//     dispatch(updateUser(formPayload));
  
//     // Show toast notification for success
//     toast.success("Profile Updated Successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       draggable: true,
//     });

//     // Mark the last step as completed
//     setActiveStep(steps.length - 1);
    
//     // Navigate to the homepage (or any other route)
//     navigate('/');
//   };

//   return (
//     <Box sx={{ width: "100%", mt: 8 }}>
//       {/* Stepper */}
//       <Stepper
//   alternativeLabel
//   activeStep={activeStep}
//   connector={<QontoConnector />}
// >
//   {steps.map((step, index) => (
//     <Step key={step.label}>
//       <StyledStepLabel
//         icon={step.icon}
//         active={activeStep === index} // Pass active state
//         completed={activeStep > index} // Mark previous steps as completed
//       >
//         {step.label}
//       </StyledStepLabel>
//     </Step>
//   ))}
// </Stepper>

//       {/* Content */}
//       <Box sx={{ mt: 4 }}>
//         <Grid container spacing={4} alignItems="flex-start">
//           {/* Left Section: Image Upload */}
//           <Grid item xs={12} md={6}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 4,
//                 textAlign: "center",
//                 backgroundColor: "#f3f2fc",
//                 borderRadius: 3,
//               }}
//             >
//               <Typography variant="h6" sx={{ mb: 2, color: "#7d66d9" }}>
//                 Upload Your Image
//               </Typography>
//               <Button
//                 variant="contained"
//                 component="label"
//                 sx={{ backgroundColor: "#7d66d9", color: "#fff" }}
//               >
//                 Upload Image
//                 <input type="file" hidden accept="image/*" onChange={handleFileChange} />
//               </Button>
//               {formData.image && (
//                 <Stack direction="column" alignItems="center" spacing={2} sx={{ mt: 3 }}>
//                   <Avatar
//                     src={
//                       formData.image instanceof File
//                         ? URL.createObjectURL(formData.image)
//                         : formData.image
//                     }
//                     alt="Uploaded"
//                     sx={{
//                       width: 150,
//                       height: 150,
//                       borderRadius: "8px",
//                       border: "4px solid #abbdf9",
//                       transition: "transform 0.3s, box-shadow 0.3s",
//                       boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//                       "&:hover": {
//                         transform: "scale(1.05)",
//                         boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
//                         borderColor: "#e2ddfe",
//                       },
//                     }}
//                     variant="square"
//                   />
//                   <Typography variant="body1">
//                     {formData.image instanceof File ? formData.image.name : "Uploaded Image"}
//                   </Typography>
//                 </Stack>
//               )}
//             </Paper>
//           </Grid>

//           {/* Right Section: Form Details */}
//           <Grid item xs={12} md={6}>
//             <Paper elevation={3} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 3 }}>
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 Fill Your Details
//               </Typography>
//               <Stack spacing={2}>
//                 <TextField
//                   label="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Address 1"
//                   name="address1"
//                   value={formData.address1}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   label="Address 2"
//                   name="address2"
//                   value={formData.address2}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//               </Stack>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Navigation Buttons */}
//         <Box sx={{ mt: 4, textAlign: "center" }}>
//           <Button
//             disabled={activeStep === 0}
//             onClick={handleBack}
//             sx={{ mr: 2, backgroundColor: "#7d66d9", color: "#fff" }}
//           >
//             Back
//           </Button>
//           {activeStep === steps.length - 1 ? (
//             <Button
//               variant="contained"
//               onClick={handleSubmit}
//               sx={{ backgroundColor: "#a38ae8", color: "#fff" }}
//             >
//               Submit
//             </Button>
//           ) : (
//             <Button
//               variant="contained"
//               onClick={handleNext}
//               sx={{ backgroundColor: "#abbdf9", color: "#fff" }}
//             >
//               Next
//             </Button>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

//16/1/25
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Stack,
  Typography,
  Box,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import StepConnector from "@mui/material/StepConnector";
import { LiaGoogle } from "react-icons/lia";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdPreview } from "react-icons/md";
import { getUserById, updateUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

// Styled connector for stepper
const QontoConnector = styled(StepConnector)(({ theme, active, completed }) => ({
  [`& .MuiStepConnector-line`]: {
    borderColor: active || completed ? "#7d66d9" : "#eaeaf0", 
    borderWidth: 2,
  },
}));

// Styled Step Label to increase icon size, adjust color for active, completed, and inactive states
const StyledStepLabel = styled(StepLabel)(({ theme, active, completed }) => ({
  "& .MuiStepLabel-iconContainer svg": {
    fontSize: "2rem", 
  },
  "& .MuiStepLabel-label": {
    color: theme.palette.text.primary,
  },
  "& .Mui-active .MuiStepLabel-label, .Mui-completed .MuiStepLabel-label": {
    color: "#7d66d9", 
  },
  "& .MuiStepLabel-iconContainer": {
    color: active ? "#7d66d9" : completed ? "#7d66d9" : "#eaeaf0",
  },
}));

// Steps
const steps = [
  { label: "Upload Image", icon: <LiaGoogle /> },
  { label: "Fill Details", icon: <BiSolidUserDetail /> },
  { label: "Review & Submit", icon: <MdPreview /> },
];

export default function SignupForm() {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    image: null,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formPayload = new FormData();
    for (const key in formData) {
      formPayload.append(key, formData[key]);
    }

    if (token) {
      formPayload.append('token', token);
    }

    dispatch(updateUser(formPayload));

    toast.success(" Login Successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });

    setActiveStep(steps.length - 1);
    
    navigate('/');
  };

  return (
    <Box sx={{ width: "100%", mt: 8 }}>
      {/* Stepper */}
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StyledStepLabel
              icon={step.icon}
              active={activeStep === index}
              completed={activeStep > index}
            >
              {step.label}
            </StyledStepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Content */}
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Section: Image Upload */}
          {activeStep === 0 && (
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  backgroundColor: "#f3f2fc",
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: "#7d66d9" }}>
                  Upload Your Image
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ backgroundColor: "#7d66d9", color: "#fff" }}
                >
                  Upload Image
                  <input type="file" hidden accept="image/*" onChange={handleFileChange} />
                </Button>
                {formData.image && (
                  <Stack direction="column" alignItems="center" spacing={2} sx={{ mt: 3 }}>
                    <Avatar
                      src={
                        formData.image instanceof File
                          ? URL.createObjectURL(formData.image)
                          : formData.image
                      }
                      alt="Uploaded"
                      sx={{
                        width: 150,
                        height: 150,
                        borderRadius: "8px",
                        border: "4px solid #abbdf9",
                      }}
                    />
                    <Typography variant="body1">
                      {formData.image instanceof File ? formData.image.name : "Uploaded Image"}
                    </Typography>
                  </Stack>
                )}
              </Paper>
            </Grid>
          )}

          {/* Right Section: Form Details */}
          {activeStep === 1 && (
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Fill Your Details
                </Typography>
                <Stack spacing={2}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Address 1"
                    name="address1"
                    value={formData.address1}
                    onChange={handleInputChange}
                    fullWidth
                  />
                  <TextField
                    label="Address 2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Stack>
              </Paper>
            </Grid>
          )}

          {/* Review Section */}
          {activeStep === 2 && (
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, backgroundColor: "#fff", borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Review Your Details
                </Typography>
                <Stack spacing={2}>
                  <Typography>Name: {formData.name}</Typography>
                  <Typography>Email: {formData.email}</Typography>
                  <Typography>Phone: {formData.phone}</Typography>
                  <Typography>Address 1: {formData.address1}</Typography>
                  <Typography>Address 2: {formData.address2}</Typography>
                  {formData.image && (
                    <Avatar
                      src={
                        formData.image instanceof File
                          ? URL.createObjectURL(formData.image)
                          : formData.image
                      }
                      alt="Uploaded"
                      sx={{
                        width: 100,
                        height: 100,
                        borderRadius: "8px",
                        border: "4px solid #abbdf9",
                      }}
                    />
                  )}
                </Stack>
              </Paper>
            </Grid>
          )}
        </Grid>

        {/* Navigation Buttons */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 2, backgroundColor: "#7d66d9", color: "#fff" }}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ backgroundColor: "#a38ae8", color: "#fff" }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ backgroundColor: "#abbdf9", color: "#fff" }}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
