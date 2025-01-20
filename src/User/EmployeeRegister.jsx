// import React, { useEffect } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   IconButton,
//   Avatar,
//   TextareaAutosize,
// } from "@mui/material";
// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   updateFormValue,
//   resetForm,
//   setImage,
//   registerEmployee,
// } from "../features/employeeRegisterSlice";

// function EmployeeRegister() {
//   const { formValues, image, loading, error, isAuthenticated } = useSelector(
//     (state) => state.employeeRegister
//   );
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const categoryOptions = {
//     Mason: ["Bricklayer", "Concrete Mason", "Stonemason"],
//     Gardner: ["Landscape Gardener", "Horticulturist", "Floral Designer"],
//     Labour: ["General Labourer", "Skilled Labourer"],
//     Chef: ["Sous Chef", "Pastry Chef", "Head Chef"],
//     Carpenter: ["Furniture Carpenter", "Finish Carpenter", "Rough Carpenter"],
//     Shifting: ["Packers and Movers", "Furniture Movers"],
//     Electrician: [
//       "AC Repair",
//       "House Electrician",
//       "Washing Machine Electrician",
//     ],
//     Plumber: ["Residential Plumber", "Commercial Plumber"],
//     Painter: ["Interior Painter", "Exterior Painter"],
//     Cleaning: ["House Cleaning", "Office Cleaning", "Window Cleaning"],
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateFormValue({ name, value }));
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file); // Generate a preview URL
//       dispatch(setImage(file)); // Store the file in Redux state
//       dispatch(updateFormValue({ name: "imagePreview", value: imageUrl })); // Update the preview URL in formValues
//     }
//   };

//   const handleSubmit = () => {
//     const formData = {
//       ...formValues,
//       image,
//     };
//     dispatch(registerEmployee(formData));
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/login"); // Redirect to the dashboard after successful login
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <Box
//       sx={{
//         maxWidth: 800,
//         margin: "auto",
//         padding: 4,
//         boxShadow: 3,
//         borderRadius: 2,
//         backgroundColor: "#ffffff",
//         color: "#333",
//       }}
//     >
//       <Box display="flex" alignItems="center" mb={2}>
//         <Box
//           sx={{
//             width: 80,
//             height: 80,
//             borderRadius: "50%",
//             backgroundColor: "#ffffff",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "#fff",
//             cursor: "pointer",
//             position: "relative",
//           }}
//         >
//           <input
//             accept="image/*"
//             style={{ display: "none" }}
//             id="icon-button-file"
//             type="file"
//             onChange={handleImageUpload}
//           />
//           <label htmlFor="icon-button-file">
//             <IconButton component="span">
//               {image ? (
//                 <Avatar
//                   src={formValues.imagePreview || ""}
//                   sx={{ width: "100%", height: "100%" }}
//                 />
//               ) : (
//                 <AddAPhotoIcon fontSize="large" />
//               )}
//             </IconButton>
//           </label>
//         </Box>
//         <Typography variant="h6" ml={2}>
//           Upload Employee Picture
//         </Typography>
//       </Box>

//       {/* Form fields */}
//       <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
//         <TextField
//           label="Employee Name"
//           variant="outlined"
//           name="name"
//           value={formValues.name}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Email"
//           variant="outlined"
//           name="email"
//           value={formValues.email}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           name="password"
//           value={formValues.password}
//           onChange={handleChange}
//           fullWidth
//         />
//         <FormControl fullWidth>
//           <InputLabel>Category</InputLabel>
//           <Select
//             name="category"
//             value={formValues.category}
//             onChange={handleChange}
//           >
//             {Object.keys(categoryOptions).map((category) => (
//               <MenuItem key={category} value={category}>
//                 {category}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl fullWidth>
//           <InputLabel>Speciality</InputLabel>
//           <Select
//             name="speciality"
//             value={formValues.speciality}
//             onChange={handleChange}
//             disabled={!formValues.category}
//           >
//             {(categoryOptions[formValues.category] || []).map((speciality) => (
//               <MenuItem key={speciality} value={speciality}>
//                 {speciality}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <TextField
//           label="Education"
//           variant="outlined"
//           name="education"
//           value={formValues.education}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Experience"
//           variant="outlined"
//           name="experience"
//           value={formValues.experience}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Fees"
//           variant="outlined"
//           name="fees"
//           value={formValues.fees}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Address Line 1"
//           variant="outlined"
//           name="address1"
//           value={formValues.address1}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Address Line 2"
//           variant="outlined"
//           name="address2"
//           value={formValues.address2}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextareaAutosize
//           minRows={4}
//           placeholder="About"
//           name="about"
//           value={formValues.about}
//           onChange={handleChange}
//           style={{
//             width: "100%",
//             fontSize: "16px",
//             padding: "10px",
//             borderRadius: "5px",
//             borderColor: "#ccc",
//           }}
//         />
//       </Box>

//       <Box display="flex" justifyContent="space-between" mt={2}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSubmit}
//           disabled={loading}
//         >
//           {loading ? "Registering..." : "Register"}
//         </Button>
//       </Box>

//       {error && (
//         <Typography color="error" mt={2}>
//           {error}
//         </Typography>
//       )}
//     </Box>
//   );
// }

// export default EmployeeRegister;





import React, { useEffect } from "react";
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
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormValue({ name, value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a preview URL
      dispatch(setImage(file)); // Store the file in Redux state
      dispatch(updateFormValue({ name: "imagePreview", value: imageUrl })); // Update the preview URL in formValues
    }
  };

  const handleSubmit = () => {
    const formData = {
      ...formValues,
      image,
    };
    dispatch(registerEmployee(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user/home-employee"); // Redirect to the dashboard after successful login
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        color: "#333",
        mt:12
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span">
              {image ? (
                <Avatar
                  src={formValues.imagePreview || ""}
                  sx={{ width: "100%", height: "100%" }}
                />
              ) : (
                <AddAPhotoIcon fontSize="large" />
              )}
            </IconButton>
          </label>
        </Box>
        <Typography variant="h6" ml={2}>
          Upload Employee Picture
        </Typography>
      </Box>

      {/* Form fields */}
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        <TextField
          label="Employee Name"
          variant="outlined"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE", // Light background color for text fields
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE", // Background for input area
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE", // Light background color for text fields
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE", // Background for input area
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
            backgroundColor: "#E2DDFE", // Light background color for text fields
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE", // Background for input area
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
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE", // Light background color for text fields
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE", // Background for input area
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
              backgroundColor: "#E2DDFE", // Light background color for select
              "& .MuiInputBase-root": {
                backgroundColor: "#E2DDFE", // Background for select area
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
              backgroundColor: "#E2DDFE", // Light background color for select
              "& .MuiInputBase-root": {
                backgroundColor: "#F5F5F5", // Background for select area
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
          label="Education"
          variant="outlined"
          name="education"
          value={formValues.education}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE", // Light background color for text fields
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE", // Background for input area
            },
          }}
        />
        <TextField
          label="Experience"
          variant="outlined"
          name="experience"
          value={formValues.experience}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE", // Light background color for text fields
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE", // Background for input area
            },
          }}
        />
        <TextField
          label="Fees"
          variant="outlined"
          name="fees"
          value={formValues.fees}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE", // Light background color for text fields
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE", // Background for input area
            },
          }}
        />
        <TextField
          label="Address Line 1"
          variant="outlined"
          name="address1"
          value={formValues.address1}
          onChange={handleChange}
          fullWidth
          sx={{
            backgroundColor: "#E2DDFE", // Light background color for text fields
            "& .MuiInputBase-root": {
              backgroundColor: "#E2DDFE", // Background for input area
            },
          }}
        />
      <TextField
  label="Address Line 2"

  name="address2"
  value={formValues.address2}
  onChange={handleChange}
  fullWidth
  sx={{
    backgroundColor: "#ffffff", // Light background color for text fields
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#E2DDFE", // Background for input area
      borderRadius: "5px", // Optional: to match the textarea's rounded corner
      "& fieldset": {
        borderColor: "#E2DDFE", // Border color to match the background
      },
      "&:hover fieldset": {
        borderColor: "#D1C9F3", // Light color for hover state
      },
      "&.Mui-focused fieldset": {
        borderColor: "#D1C9F3", // Focused border color
      },
    },
  }}
/>

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
    backgroundColor: "#E2DDFE", // Background for textarea
    border: "1px solid #D1C9F3", // Subtle border for textarea
  }}
/>

        
      </Box>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7d66d9", // Set the background color
            "&:hover": {
              backgroundColor: "#9b9ef0", // Adjust hover color for better UX
            },
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </Box>
<Typography variant="body2" align="center" sx={{ mt: 1 }}>
         if you are already register then Login ?{" "}
          <Button 
            variant="text"
            onClick={() => navigate("/user/Employee-login")}
            sx={{
             color: "#7d66d9", // Set the background color
              "&:hover": {
               color: "#9b9ef0", // Adjust hover color for better UX
              },
            }}
          >
           LogIn
          </Button>
        </Typography>
      {error && (
        <Typography color="error" mt={2}>
          {error}
        </Typography>
      )}
    </Box>
  );
}

export default EmployeeRegister;
