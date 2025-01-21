

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import HeaderEmployee from "./components/HeaderEmployee";
import Home from "./components/Home";
import HomeEmployee from "./components/HomeEmployee";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import MyBooking from "./components/MyBooking";
import BookingDetail from "./components/BookingDetail";
import Details from "./components/Details";
import SearchPage from "./components/SearchPage";
import AddUsers from "./Admin/AddUsers";
import UsersList from "./Admin/UsersList";
import AllAppointements from "./Admin/AllAppointements";
import CustomerList from "./Admin/CustomerList";
import Dashboard from "./Admin/Dashboard";
import CustomerDetails from "./User/CustomerDetails";
// import EmployeeRegister from "./User/EmployeeRegister";
import About from "./components/About";
import RazorpayPayment from "./components/RazorpayPayment";
import UpdateUserForm from "./components/UpdateUserForm";
import EmployeeLogin from "./components/EmployeeLogin";
import ProfileEmployee from "./components/ProfileEmployee";
import Booking from "./components/Booking";
import EmployeeBooking from "./components/EmployeeBooking";
import StepperSignup from "./components/StepperSignup";
import Chart from "./Admin/Chart";
import IndiaMap from "./Admin/IndiaMap"; // Import IndiaMap
import AdminSignUp from "./Admin/AdminSignUp";
import BusinessListPage from "./components/BusinessListPage";
import EmployeeRegisterPage from "./components/EmployeeRegisterPage";
import NotFoundPage from "./components/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

import {
  
  getAllUsers,
  
} from "../src/features/authSlice";
import {
  
  getAllEmployees,
  
} from "../src/features/employeeRegisterSlice";
import {
  getAllBookings,
} from "../src/features/bookingSlice";  // Ensure you're dispatching correct actions
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && user?.role === "admin") {
      dispatch(getAllEmployees());
      dispatch(getAllUsers());
      dispatch(getAllBookings());
    }
  }, [dispatch, isAuthenticated, user]);
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

  // Check current path to decide which header to render
  const RenderHeader = () => {
    const location = useLocation();
    // Handle Dashboard, User, and default routes separately
    const isDashboardRoute = location.pathname.startsWith("/dashboard");
    const isUserRoute = location.pathname.startsWith("/user");

    if (isDashboardRoute) {
      return null; // Don't render the header for dashboard routes
    }

    if (isUserRoute) {
      return (
        <HeaderEmployee isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      ); // Render Employee Header for user routes
    }

    return <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />; // Default Header for non-dashboard and non-user routes
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RenderHeader />
        <div className={`pt-16 ${isDarkMode ? "dark" : ""}`}>
          <Routes>
            {/* Default Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/businesslist" element={<BusinessListPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/search/:category" element={<SearchPage />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/razorpay" element={<RazorpayPayment />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup-process" element={<StepperSignup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/my-bookings" element={<MyBooking />} />
            <Route path="/profile" element={<UpdateUserForm />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route
              path="/booking/detail/:bookingId"
              element={<BookingDetail />}
            />

            {/* User Routes */}
            <Route path="/user" element={<HomeEmployee />}>
              <Route path="customer-details" element={<CustomerDetails />} />

              {/* <Route path="profile-employee" element={<ProfileEmployee />} />
              <Route path="bookings/customer" element={<EmployeeBooking />} /> */}
            </Route>
            <Route
              path="/user/profile-employee"
              element={<ProfileEmployee />}
            />
            <Route
              path="/user/bookings/customer"
              element={<EmployeeBooking />}
            />
            <Route
              path="/user/Employee-register"
              element={<EmployeeRegisterPage />}
            />
            <Route path="/user/Employee-login" element={<EmployeeLogin />} />
            {/* Dashboard Routes */}
            {/* <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<IndiaMap />} />
              <Route path="data" element={<Chart />} />
              <Route path="all-appointements" element={<AllAppointements />} />
              <Route path="add-users" element={<AddUsers />} />
              <Route path="all-users" element={<UsersList />} />
              <Route path="all-customers" element={<CustomerList />} />
              <Route path="admin-signup" element={<AdminSignUp />} />
            </Route> */}

            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<IndiaMap />} />
              <Route
                path="data"
                element={<ProtectedRoute element={<Chart />} />}
              />
              <Route
                path="all-appointements"
                element={<ProtectedRoute element={<AllAppointements />} />}
              />
              <Route
                path="add-users"
                element={<ProtectedRoute element={<AddUsers />} />}
              />
              <Route
                path="all-users"
                element={<ProtectedRoute element={<UsersList />} />}
              />
              <Route
                path="all-customers"
                element={<ProtectedRoute element={<CustomerList />} />}
              />
              <Route path="admin-signup" element={<AdminSignUp />} />{" "}
              {/* No protection here */}
            </Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
