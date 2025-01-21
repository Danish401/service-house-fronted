

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginEmployee } from "../features/employeeRegisterSlice";
import { fadeIn } from "../animations/framerMotion";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loading: employeeLoading, error: employeeError } = useSelector(
    (state) => state.employeeRegister
  );

  // Form Validation
  const validateForm = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return false;
    }
    return true;
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setError(""); // Reset error
    try {
      const response = await dispatch(loginEmployee({ email, password })).unwrap();
      if (response.token) {
        localStorage.setItem("token", response.token);
        navigate("/user");
        toast.success("Employee login successful!");
      }
    } catch (err) {
      setError(employeeError || "Login failed.");
      toast.error(error || "Invalid credentials.");
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex items-center justify-center min-h-screen mt-5 bg-gray-100"
    >
      <Box
        sx={{
          maxWidth: "400px",
          p: 4,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Employee Log In
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error && error.includes("email") ? error : ""}
            style={{
              
              borderColor: "#ccc",
              backgroundColor: "#E2DDFE", // Background for textarea
            }}
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error && error.includes("password") ? error : ""}
            fullWidth
            style={{
              
              borderColor: "#ccc",
              backgroundColor: "#E2DDFE", // Background for textarea
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="text-white bg-indigo-500 hover:bg-indigo-300"
            disabled={employeeLoading}
          >
            {employeeLoading ? "Logging In..." : "Log In"}
          </Button>
        </Box>

        <Divider sx={{ my: 2 }}>or</Divider>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          Forgot your password?{" "}
          <Button
            variant="text"
            onClick={() => navigate("/forgot-password")}
            sx={{ color: "#a38ae8" }}
          >
            Reset here
          </Button>
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
         if not register yet Signup?{" "}
          <Button 
            variant="text"
            onClick={() => navigate("/user/Employee-register")}
            sx={{ color: "#a38ae8" }}
          >
           SignUp
          </Button>
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Login;
