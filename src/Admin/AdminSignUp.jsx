


import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";
import { toast } from "react-toastify";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "400px",
  width: "100%",
  padding: theme.spacing(4),
  backgroundColor: "#9b9ef0",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  color: theme.palette.common.white,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: "#4f46e5",
  "&:hover": {
    backgroundColor: "#7d66d9",
  },
  color:"#111827"
}));

const AdminSignUp = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((data) => {
        toast.success(`Welcome back, ${data.user.name}!`);
        navigate(data.user.role === "admin" ? "/dashboard" : "/");
      })
      .catch((error) => {
        toast.error(error || "Invalid credentials");
      });
  };

  return (
    <StyledContainer>
      <FormWrapper>
        <Typography variant={isSmallScreen ? "h5" : "h4"} align="center" gutterBottom>
          Admin Login
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Enter your credentials to continue
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonStyled
            fullWidth
            type="submit"
            size={isSmallScreen ? "small" : "large"}
          >
            Login
          </ButtonStyled>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Typography>
      </FormWrapper>
    </StyledContainer>
  );
};

export default AdminSignUp;
