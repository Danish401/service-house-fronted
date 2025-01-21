
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextareaAutosize,
  IconButton,
  Avatar,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const AddUsers = () => {
  const [formValues, setFormValues] = useState({
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
  });

  const [image, setImage] = useState(null);

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
    setFormValues({ ...formValues, [name]: value });

    // Reset speciality field if category changes
    if (name === "category") {
      setFormValues((prevValues) => ({
        ...prevValues,
        speciality: "",
      }));
    }
  };

  const handleSubmit = () => {
    console.log(formValues);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setFormValues({
            ...formValues,
            address2: `Lat: ${latitude}, Lon: ${longitude}`,
          });
          try {
            const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
            );
            const data = await response.json();
            if (data.status === "OK" && data.results.length > 0) {
              const address = data.results[0].formatted_address;
              setFormValues((prevValues) => ({
                ...prevValues,
                address2: address,
              }));
            } else {
              console.error("No address found or API error:", data.status);
            }
          } catch (error) {
            console.error("Error fetching address:", error);
          }
        },
        (error) => console.error("Error fetching location:", error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      console.log("Image URL:", imageUrl); // Optional: Log image URL to the console
    }
  };

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
                <Avatar src={image} sx={{ width: "100%", height: "100%" }} />
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

      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        <TextField
          label="Employee Name"
          variant="outlined"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={formValues.category}
            onChange={handleChange}
            label="Category"
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
            label="Speciality"
            disabled={!formValues.category}
          >
            {(categoryOptions[formValues.category] || []).map((speciality) => (
              <MenuItem key={speciality} value={speciality}>
                {speciality}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Employee Email"
          variant="outlined"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Education"
          variant="outlined"
          name="education"
          value={formValues.education}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Address 1"
          variant="outlined"
          name="address1"
          value={formValues.address1}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Address 2"
          variant="outlined"
          name="address2"
          value={formValues.address2}
          onChange={handleChange}
          fullWidth
        />
      </Box>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleLocationClick}
        sx={{ mt: 2, mb: 3 }}
        fullWidth
      >
        Set Current Location
      </Button>

      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
        <FormControl fullWidth>
          <InputLabel>Experience</InputLabel>
          <Select
            name="experience"
            value={formValues.experience}
            onChange={handleChange}
            label="Experience"
          >
            <MenuItem value="1 year">1 year</MenuItem>
            <MenuItem value="2 years">2 years</MenuItem>
            <MenuItem value="3 years">3 years</MenuItem>
            <MenuItem value="4+ years">4+ years</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Fees"
          variant="outlined"
          name="fees"
          type="number"
          value={formValues.fees}
          onChange={handleChange}
          fullWidth
        />
      </Box>

      <Box mt={2}>
        <Typography variant="body1" mb={1}>
          About me
        </Typography>
        <TextareaAutosize
          minRows={4}
          placeholder="Write about yourself"
          name="about"
          value={formValues.about}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 4,
            borderColor: "#9b9ef0",
          }}
        />
      </Box>

      <Button
  variant="contained"
  onClick={handleSubmit}
  fullWidth
  sx={{ mt: 3, backgroundColor: '#9b9ef0' }}
>
  Add Employee
</Button>

    </Box>
  );
};

export default AddUsers;
