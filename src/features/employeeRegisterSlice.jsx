// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Initial state
// const initialState = {
//   formValues: {
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
//     imagePreview: "",
//   },
//   image: null, // For storing uploaded employee picture
//   loading: false, // For tracking loading state
//   error: null, // For error handling
//   employees: [], // For storing the fetched employee data
//   token: null, // Store JWT token
//   isAuthenticated: false, // Authentication status
//   employee: null,
// };

// // Async thunks
// export const registerEmployee = createAsyncThunk(
//   "employeeRegister/registerEmployee",
//   async (employeeData, { rejectWithValue, dispatch }) => {
//     try {
//       const formData = new FormData();
//       Object.keys(employeeData).forEach((key) => {
//         formData.append(key, employeeData[key]);
//       });

//       const response = await axios.post(
//         "http://localhost:5000/api/employees/register",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       const { email, password } = employeeData;
//       dispatch(loginEmployee({ email, password })); // Auto-login
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to register employee!");
//     }
//   }
// );

// export const loginEmployee = createAsyncThunk(
//   "employeeRegister/loginEmployee",
//   async (loginData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/employees/login", loginData);
//       const { token, employee } = response.data;

//       localStorage.setItem("token", token); // Save token to localStorage

//       return { token, employee }; // Return both token and employee
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to login!");
//     }
//   }
// );

// export const getAllEmployees = createAsyncThunk(
//   "employeeRegister/getAllEmployees",
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().employeeRegister;
//       const response = await axios.get("http://localhost:5000/api/employees/employees", {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return response.data; // Return the list of employees
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch employees!");
//     }
//   }
// );

// // Get employee by ID
// export const getEmployeeById = createAsyncThunk(
//   "employeeRegister/getEmployeeById",
//   async (id, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().employeeRegister;
//       const response = await axios.get(`http://localhost:5000/api/employees/employees/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return response.data; // Return the specific employee's data
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch employee by ID!");
//     }
//   }
// );

// // Update employee by ID
// export const updateEmployeeById = createAsyncThunk(
//   "employeeRegister/updateEmployeeById",
//   async ({ id, employeeData }, { getState, rejectWithValue }) => {
//     try {
//       const { token } = getState().employeeRegister;
//       const formData = new FormData();
//       Object.keys(employeeData).forEach((key) => {
//         formData.append(key, employeeData[key]);
//       });

//       const response = await axios.put(
//         `http://localhost:5000/api/employees/${id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to update employee!");
//     }
//   }
// );

// // Slice
// const employeeRegisterSlice = createSlice({
//   name: "employeeRegister",
//   initialState,
//   reducers: {
//     updateFormValue: (state, action) => {
//       const { name, value } = action.payload;
//       state.formValues[name] = value;

//       // Reset speciality when category changes
//       if (name === "category") {
//         state.formValues.speciality = "";
//       }
//     },
//     resetForm: (state) => {
//       state.formValues = { ...initialState.formValues };
//       state.image = null;
//     },
//     setImage: (state, action) => {
//       state.image = action.payload;
//     },
//     setImagePreview: (state, action) => {
//       state.formValues.imagePreview = action.payload;
//     },
//     logout: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem("token"); // Clear token from storage
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerEmployee.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(registerEmployee.fulfilled, (state, action) => {
//         state.loading = false;
//         console.log("Employee registered successfully:", action.payload);
//       })
//       .addCase(registerEmployee.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       })

//       .addCase(loginEmployee.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginEmployee.fulfilled, (state, action) => {
//         state.loading = false;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         state.employee = action.payload.employee; // Save employee data in the state
//         localStorage.setItem("token", action.payload.token); // Save token to localStorage
//       })

//       .addCase(loginEmployee.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(getAllEmployees.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(getAllEmployees.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(getEmployeeById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(getEmployeeById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(updateEmployeeById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getEmployeeById.fulfilled, (state, action) => {
//         state.employee = action.payload;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(updateEmployeeById.fulfilled, (state, action) => {
//         state.employee = action.payload;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(getAllEmployees.fulfilled, (state, action) => {
//         state.employees = action.payload;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(updateEmployeeById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       });
//   },
// });

// // Export actions and reducer
// export const {
//   updateFormValue,
//   resetForm,
//   setImage,
//   setImagePreview,
//   logout,
// } = employeeRegisterSlice.actions;

// export default employeeRegisterSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../services/helper";
// Initial state
const initialState = {
  formValues: {
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
    imagePreview: "",
  },
  image: null, // For storing uploaded employee picture
  loading: false, // For tracking loading state
  error: null, // For error handling
  employees: [], // For storing the fetched employee data
  token: null, // Store JWT token
  isAuthenticated: false, // Authentication status
  employee: null,
};

// Async thunks
export const registerEmployee = createAsyncThunk(
  "employeeRegister/registerEmployee",
  async (employeeData, { rejectWithValue, dispatch }) => {
    try {
      const formData = new FormData();
      Object.keys(employeeData).forEach((key) => {
        formData.append(key, employeeData[key]);
      });

      const response = await axios.post(
        `${BACKEND_URL}/api/employees/register`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { email, password } = employeeData;
      dispatch(loginEmployee({ email, password })); // Auto-login
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to register employee!"
      );
    }
  }
);

export const loginEmployee = createAsyncThunk(
  "employeeRegister/loginEmployee",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/employees/login`,
        loginData
      );
      const { token, employee } = response.data;

      localStorage.setItem("token", token); // Save token to localStorage

      return { token, employee }; // Return both token and employee
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to login!"
      );
    }
  }
);

export const getAllEmployees = createAsyncThunk(
  "employeeRegister/getAllEmployees",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().employeeRegister;
      const response = await axios.get(
        `${BACKEND_URL}/api/employees/employees`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // Return the list of employees
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch employees!"
      );
    }
  }
);

// Get employee by ID
export const getEmployeeById = createAsyncThunk(
  "employeeRegister/getEmployeeById",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().employeeRegister;
      const response = await axios.get(
        `${BACKEND_URL}/api/employees/employees/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // Return the specific employee's data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch employee by ID!"
      );
    }
  }
);

// Update employee by ID
export const updateEmployeeById = createAsyncThunk(
  "employeeRegister/updateEmployeeById",
  async ({ id, employeeData }, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().employeeRegister;
      const formData = new FormData();
      Object.keys(employeeData).forEach((key) => {
        formData.append(key, employeeData[key]);
      });

      const response = await axios.put(
        `${BACKEND_URL}/api/employees/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update employee!"
      );
    }
  }
);

// Slice
const employeeRegisterSlice = createSlice({
  name: "employeeRegister",
  initialState,
  reducers: {
    updateFormValue: (state, action) => {
      const { name, value } = action.payload;
      state.formValues[name] = value;

      // Reset speciality when category changes
      if (name === "category") {
        state.formValues.speciality = "";
      }
    },
    resetForm: (state) => {
      state.formValues = { ...initialState.formValues };
      state.image = null;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setImagePreview: (state, action) => {
      state.formValues.imagePreview = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token"); // Clear token from storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerEmployee.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Employee registered successfully:", action.payload);
      })
      .addCase(registerEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      .addCase(loginEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.employee = action.payload.employee; // Save employee data in the state
        localStorage.setItem("token", action.payload.token); // Save token to localStorage
      })

      .addCase(loginEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getEmployeeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateEmployeeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployeeById.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateEmployeeById.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Export actions and reducer
export const { updateFormValue, resetForm, setImage, setImagePreview, logout } =
  employeeRegisterSlice.actions;

export default employeeRegisterSlice.reducer;
