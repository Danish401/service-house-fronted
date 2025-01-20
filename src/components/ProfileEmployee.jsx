// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   TextareaAutosize,
//   IconButton,
//   Avatar,
// } from "@mui/material";
// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { updateEmployeeById, getEmployeeById } from "../features/employeeRegisterSlice"; // Import the action

// const ProfileEmployee = () => {
//   const { id } = useParams(); // Get employee ID from URL
//   const dispatch = useDispatch();
//   const { employee, loading, error } = useSelector(
//     (state) => state.employeeRegister
//   ); // Assuming employee data is fetched with this selector

//   const [employeeDetails, setEmployeeDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
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
//     dispatch(getEmployeeById(id)); // Make sure employeeId is a valid string
//     // Fetch employee by ID
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (employee) {
//       setEmployeeDetails({
//         name: employee.name,
//         email: employee.email,
       
//         education: employee.education,
//         address1: employee.address1,
//         address2: employee.address2,
//         experience: employee.experience,
//         fees: employee.fees,
//         about: employee.about,
//         image: employee.image,
//       });
//       setImagePreview(employee.image);
//     }
//   }, [employee]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployeeDetails({ ...employeeDetails, [name]: value });
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImagePreview(imageUrl);
//       setEmployeeDetails({ ...employeeDetails, image: file });
//     }
//   };

//   const handleUpdate = () => {
//     const { _id, ...employeeData } = employeeDetails;
//     dispatch(updateEmployeeById({ id: _id, employeeData }));
//   };

//   if (loading) {
//     return <Typography>Loading...</Typography>;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

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
//               {imagePreview ? (
//                 <Avatar
//                   src={imagePreview || ""}
//                   sx={{ width: "100%", height: "100%" }}
//                 />
//               ) : (
//                 <AddAPhotoIcon fontSize="large" />
//               )}
//             </IconButton>
//           </label>
//         </Box>
//         <Typography variant="h6" ml={2}>
//           Update Employee Picture
//         </Typography>
//       </Box>

//       {/* Form fields */}
//       <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
//         <TextField
//           label="Employee Name"
//           name="name"
//           value={employeeDetails.name || ""}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Email"
//           name="email"
//           value={employeeDetails.email || ""}
//           onChange={handleChange}
//           fullWidth
//         />
       
//         <TextField
//           label="Education"
//           name="education"
//           value={employeeDetails.education || ""}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Experience"
//           name="experience"
//           value={employeeDetails.experience || ""}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Fees"
//           name="fees"
//           value={employeeDetails.fees || ""}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Address 1"
//           name="address1"
//           value={employeeDetails.address1 || ""}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Address 2"
//           name="address2"
//           value={employeeDetails.address2 || ""}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextareaAutosize
//           minRows={3}
//           placeholder="About"
//           name="about"
//           value={employeeDetails.about || ""}
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
//           onClick={handleUpdate}
//           disabled={loading}
//         >
//           {loading ? "Updating..." : "Update"}
//         </Button>
//       </Box>

//       {error && (
//         <Typography color="error" mt={2}>
//           {error}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default ProfileEmployee;


import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  TextareaAutosize,
  IconButton,
  Avatar,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeById, getEmployeeById } from "../features/employeeRegisterSlice";
import { useTranslation } from "react-i18next";
const ProfileEmployee = () => {
  const dispatch = useDispatch();
 const { t } = useTranslation(); // Initialize useTranslation
  // Extract employee details (including id) from the Redux store
  const { employee, loading, error } = useSelector(
    (state) => state.employeeRegister
  );

  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    password: "",
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
    // Dispatch action to fetch employee details if the employee object exists
    if (employee?.id) {
      dispatch(getEmployeeById(employee.id));
    }
  }, [dispatch, employee?.id]);

  useEffect(() => {
    if (employee) {
      setEmployeeDetails({
        ...employee,
      });
      setImagePreview(employee.image);
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setEmployeeDetails({ ...employeeDetails, image: file });
    }
  };

  // const handleUpdate = () => {
  //   console.log("Updating employee details:", employeeDetails); // Log employeeDetails to verify
  
  //   // Ensure employee id (_id) exists
  //   if (employee?._id) { // Use _id instead of id
  //     // Dispatch the update action
  //     dispatch(updateEmployeeById({ id: employee._id, employeeData: employeeDetails }))
  //       .then(() => {
  //         console.log("Employee updated successfully");
  //       })
  //       .catch((err) => {
  //         console.error("Error updating employee:", err);
  //       });
  //   } else {
  //     console.error("Employee ID (_id) is missing.");
  //   }
  // };
  const handleUpdate = () => {
    console.log("Updating employee details:", employeeDetails);
  
    if (employee?._id) {
      dispatch(updateEmployeeById({ id: employee._id, employeeData: employeeDetails }))
        .then(() => {
          // Re-fetch employee data after update to ensure UI is in sync
          dispatch(getEmployeeById(employee._id));
          console.log("Employee updated successfully");
        })
        .catch((err) => {
          console.error("Error updating employee:", err);
        });
    } else {
      console.error("Employee ID (_id) is missing.");
    }
  };
  
  if (loading) {
    return <Typography>{t("loading")}</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

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
      mt: 12, // Add margin from the top
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
              {imagePreview ? (
                <Avatar
                  src={imagePreview || ""}
                  sx={{ width: "100%", height: "100%" }}
                />
              ) : (
                <AddAPhotoIcon fontSize="large" />
              )}
            </IconButton>
          </label>
        </Box>
        <Typography variant="h6" ml={2}>
         {t("updateEmployeePicture")} 
        </Typography>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        <TextField
          label={t("employeeName")}
          name="name"
          value={employeeDetails.name || ""}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={t("email")}
          name="email"
          value={employeeDetails.email || ""}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={t("education")}
          name="education"
          value={employeeDetails.education || ""}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={t("experience")}
          name="experience"
          value={employeeDetails.experience || ""}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={t("fees")}
          name="fees"
          value={employeeDetails.fees || ""}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={t("address1")}
          name="address1"
          value={employeeDetails.address1 || ""}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label={t("address2")}
          name="address2"
          value={employeeDetails.address2 || ""}
          onChange={handleChange}
          fullWidth
        />
        <TextareaAutosize
          minRows={3}
          placeholder={t("about")}
          name="about"
          value={employeeDetails.about || ""}
          onChange={handleChange}
          style={{
            width: "100%",
            fontSize: "16px",
            padding: "10px",
            borderRadius: "5px",
            borderColor: "#ccc",
          }}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" mt={2}>
  <Button
    variant="contained"
    onClick={handleUpdate}
    disabled={loading}
    sx={{
      backgroundColor: "#7d66d9", // Set the background color
      "&:hover": {
        backgroundColor: "#9b9ef0", // Adjust hover color for better UX
      },
    }}
  >
    {loading ? t("updating") : t("update")}
  </Button>
</Box>


      {error && (
        <Typography color="error" mt={2}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default ProfileEmployee;
