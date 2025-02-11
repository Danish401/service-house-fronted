// import React, { useEffect, useState } from "react";
// import { Box, Button, TextField, Typography, TextareaAutosize, Avatar, IconButton } from "@mui/material";
// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
// import { useDispatch, useSelector } from "react-redux";
// import { updateEmployeeById, getEmployeeById } from "../features/employeeRegisterSlice";
// import { useParams } from "react-router-dom";

// const ProfileUpdate = () => {
//   const { id } = useParams(); // Extract ID from URL
//   const dispatch = useDispatch();
//   const { employee, loading, error } = useSelector((state) => state.employeeRegister);
  
//   const [employeeDetails, setEmployeeDetails] = useState({
//     name: "",
//     email: "",
//     category: "",
//     speciality: "",
//     education: "",
//     address1: "",
//     address2: "",
//     experience: "",
//     fees: "",
//     about: "",
//     image: "",
//   });
//   const [imagePreview, setImagePreview] = useState("");

//   useEffect(() => {
//     dispatch(getEmployeeById(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (employee) {
//       setEmployeeDetails(employee);
//       setImagePreview(employee.image);
//     }
//   }, [employee]);

//   const handleChange = (e) => {
//     setEmployeeDetails({ ...employeeDetails, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = () => {
//     dispatch(updateEmployeeById({ id, employeeData: employeeDetails }));
//   };

//   return (
//     <Box sx={{ maxWidth: 800, margin: "auto", padding: 4, boxShadow: 3, borderRadius: 2, mt: 12 }}>
//       <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>Edit Profile</Typography>

//       <Box display="flex" alignItems="center" mb={2}>
//         <IconButton component="label">
//           <input type="file" hidden onChange={(e) => setImagePreview(URL.createObjectURL(e.target.files[0]))} />
//           <Avatar src={imagePreview} sx={{ width: 80, height: 80 }} />
//           <AddAPhotoIcon fontSize="large" />
//         </IconButton>
//       </Box>

//       <TextField label="Name" name="name" value={employeeDetails.name || ""} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
//       <TextField label="Email" name="email" value={employeeDetails.email || ""} onChange={handleChange} fullWidth sx={{ mb: 2 }} />

//       <Button variant="contained" color="primary" fullWidth onClick={handleUpdate}>
//         Update Profile
//       </Button>
//     </Box>
//   );
// };

// export default ProfileUpdate;


import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  TextareaAutosize,
  Avatar,
  IconButton,
  MenuItem,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeById, getEmployeeById } from "../features/employeeRegisterSlice";
import { useParams, useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employee, loading, error } = useSelector((state) => state.employeeRegister);
  const { isDarkMode } = useSelector((state) => state.bookings);

  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    category: "",
    speciality: "",
    education: "",
    address1: "",
    address2: "",
    experience: "",
    fees: "",
    about: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (employee) {
      setEmployeeDetails(employee);
      setImagePreview(employee.image);
    }
  }, [employee]);

  const handleChange = (e) => {
    setEmployeeDetails({ ...employeeDetails, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setEmployeeDetails({ ...employeeDetails, image: file });
    }
  };

  const handleUpdate = () => {
    dispatch(updateEmployeeById({ id, employeeData: employeeDetails }));
    navigate(`/dashboard/user-detail/${id}`); // Redirect after update
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        maxWidth: "100%", // ✅ Prevents any unwanted overflow
        overflowX: "hidden", // ✅ Removes horizontal scrolling
        overflowY: "auto", // ✅ Keeps vertical scrolling if needed
        backgroundColor: isDarkMode ? "#1E293B" : "#F5F5F5",
        padding: { xs: 2, md: 4 }, // Responsive padding
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          width: "100%",
          boxShadow: 3,
          borderRadius: 2,
          padding: { xs: 2, md: 4 },
          backgroundColor: isDarkMode ? "#1E293B" : "#fff",
        }}
      >
        {/* Left Section - Profile Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 3, md: 0 }, // Mobile margin
          }}
        >
          <Avatar src={imagePreview} sx={{ width: 120, height: 120, mb: 1 }} />
          <IconButton component="label">
            <input type="file" hidden onChange={handleImageUpload} />
            <AddAPhotoIcon fontSize="large" sx={{ color: "#7d66d9" }} />
          </IconButton>
        </Box>

        {/* Right Section - Employee Details Form */}
        <Box sx={{ flex: 2, width: "100%" }}>
          <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ mb: 3, color: isDarkMode ? "#fff" : "#7d66d9" }}>
            Edit Profile
          </Typography>

          <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={2}>
            <TextField label="Name" name="name" value={employeeDetails.name} onChange={handleChange} fullWidth />
            <TextField label="Email" name="email" value={employeeDetails.email} onChange={handleChange} fullWidth />
            <TextField label="Phone" name="phone" value={employeeDetails.phone} onChange={handleChange} fullWidth />
            <TextField label="Education" name="education" value={employeeDetails.education} onChange={handleChange} fullWidth />
            <TextField label="Experience" name="experience" value={employeeDetails.experience} onChange={handleChange} fullWidth />
            <TextField label="Fees" name="fees" value={employeeDetails.fees} onChange={handleChange} fullWidth />
            <TextField label="Address 1" name="address1" value={employeeDetails.address1} onChange={handleChange} fullWidth />
            <TextField label="Address 2" name="address2" value={employeeDetails.address2} onChange={handleChange} fullWidth />

            {/* Category Dropdown */}
            <TextField
              select
              label="Category"
              name="category"
              value={employeeDetails.category}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Electrician">Electrician</MenuItem>
              <MenuItem value="Plumber">Plumber</MenuItem>
              <MenuItem value="Carpenter">Carpenter</MenuItem>
              <MenuItem value="Mechanic">Mechanic</MenuItem>
            </TextField>

            <TextField label="Speciality" name="speciality" value={employeeDetails.speciality} onChange={handleChange} fullWidth />
          </Box>

          {/* About Section */}
          <Box mt={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              About
            </Typography>
            <TextareaAutosize
              minRows={3}
              name="about"
              value={employeeDetails.about}
              onChange={handleChange}
              placeholder="Write about yourself..."
              style={{
                width: "100%",
                fontSize: "16px",
                padding: "10px",
                borderRadius: "5px",
                borderColor: "#ccc",
              }}
            />
          </Box>

          {/* Update Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleUpdate}
            sx={{
              mt: 3,
              backgroundColor: "#7d66d9",
              "&:hover": { backgroundColor: "#9b9ef0" },
            }}
          >
            Update Profile
          </Button>

          {/* Error Handling */}
          {error && (
            <Typography color="error" mt={2} textAlign="center">
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileUpdate;
