import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import Home from "./components/Home";


import SignUp from "./components/SignUp";
import Login from "./components/Login";

import "./index.css";

import ForgotPassword from "./components/ForgotPassword";
import MyBooking from "./components/MyBooking";
import Details from "./components/Details";
import SearchPage from "./components/SearchPage";
import AddUsers from "./Admin/AddUsers";
import UsersList from "./Admin/UsersList";
import AllAppointements from "./Admin/AllAppointements";
import CustomerList from "./Admin/CustomerList";
import Dashboard from "./Admin/Dashboard";
import CustomerDetails from "./User/CustomerDetails";
const theme = createTheme();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className={`pt-16 ${isDarkMode ? "dark" : ""}`}>
          <Routes>
            {/* Set Home component at root path */}
            <Route path="/" element={<Home />} />

            {/* Set Dashboard with a unique path */}
            <Route path="/dashboard" element={<Dashboard />}>
              {/* Nested routes for Dashboard */}
              <Route path="all-appointements" element={<AllAppointements />} />
              <Route path="add-users" element={<AddUsers />} />
              <Route path="all-users" element={<UsersList />} />
              <Route path="all-customers" element={<CustomerList />} />
            </Route>

            <Route path="/user">
              {/* Nested routes for Dashboard */}
              <Route path="customer-details" element={<CustomerDetails />} />
            </Route>

            {/* Other routes */}
            <Route path="/my-bookings" element={<MyBooking />} />
            <Route path="/search/:category" element={<SearchPage />} />
            <Route path="/details/:id" element={<Details />} />
            
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
