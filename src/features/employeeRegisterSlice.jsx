


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
//   },
//   image: null, // For storing uploaded employee picture
//   loading: false, // For tracking loading state
//   error: null, // For error handling
//   employees: [], // For storing the fetched employee data
//   token: null, // Store JWT token
//   isAuthenticated: false, // Authentication status
// };

// // Thunk to register an employee (POST)
// export const registerEmployee = createAsyncThunk(
//   "employeeRegister/registerEmployee",
//   async (employeeData, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/employees/register",
//         employeeData
//       ); // Backend API endpoint for registration

//       // Automatically log in the user after successful registration
//       const { email, password } = employeeData; // Extract email and password
//       dispatch(loginEmployee({ email, password }));

//       return response.data; // Registration response
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || "Failed to register employee!");
//     }
//   }
// );


// // Thunk to login an employee (POST)
// export const loginEmployee = createAsyncThunk(
//   "employeeRegister/loginEmployee",
//   async (loginData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/employees/login", loginData); // Backend API endpoint
//       return response.data; // This will be handled in the fulfilled case
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || "Failed to login!");
//     }
//   }
// );

// // Thunk to fetch all employees (GET)
// export const getAllEmployees = createAsyncThunk(
//   "employeeRegister/getAllEmployees",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/employees/employees"); // Backend API endpoint
//       return response.data; // Return the fetched employee data
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch employees!");
//     }
//   }
// );


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
//     saveFormData: (state, action) => {
//       console.log("Form data saved:", state.formValues);
//       // Optionally perform save logic here or dispatch to an API
//     },
//     logout: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//   },
//   extraReducers: (builder) => {
//     // Handling registerEmployee thunk
//     builder.addCase(registerEmployee.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(registerEmployee.fulfilled, (state, action) => {
//       state.loading = false;
//       console.log("Employee registered successfully:", action.payload);
//       // After registration, log the employee in automatically
     
//     });
//     builder.addCase(registerEmployee.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || action.error.message;
//     });

//     // Handling loginEmployee thunk
//     builder.addCase(loginEmployee.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(loginEmployee.fulfilled, (state, action) => {
//       state.loading = false;
//       state.token = action.payload.token;
//       state.isAuthenticated = true;
//       console.log("Login successful:", action.payload);
//     });
//     builder.addCase(loginEmployee.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || action.error.message;
//     }) .addCase(getAllEmployees.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(getAllEmployees.fulfilled, (state, action) => {
//       state.loading = false;
//       state.employees = action.payload;
//     })
//     .addCase(getAllEmployees.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to fetch employees.";
//     });
//   },
// });

// export const { updateFormValue, resetForm, setImage, saveFormData, logout } = employeeRegisterSlice.actions;

// export default employeeRegisterSlice.reducer;








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
//     imagePreview:"",
//   },
//   image: null, // For storing uploaded employee picture
//   loading: false, // For tracking loading state
//   error: null, // For error handling
//   employees: [], // For storing the fetched employee data
//   token: null, // Store JWT token
//   isAuthenticated: false, // Authentication status
 
// };


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

// // Thunk to update an employee by ID (PUT)
// export const updateEmployeeById = createAsyncThunk(
//   "employeeRegister/updateEmployeeById",
//   async ({ id, employeeData }, { rejectWithValue }) => {
//     try {
//       const formData = new FormData();
//       Object.keys(employeeData).forEach((key) => {
//         formData.append(key, employeeData[key]);
//       });

//       const response = await axios.put(
//         `http://localhost:5000/api/employees/${id}`,
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to update employee!");
//     }
//   }
// );

// // Thunk to login an employee (POST)
// export const loginEmployee = createAsyncThunk(
//   "employeeRegister/loginEmployee",
//   async (loginData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/employees/login", loginData); // Backend API endpoint
//       return response.data; // This will be handled in the fulfilled case
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || "Failed to login!");
//     }
//   }
// );

// // Thunk to fetch all employees (GET)
// export const getAllEmployees = createAsyncThunk(
//   "employeeRegister/getAllEmployees",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/employees/employees"); // Backend API endpoint
//       return response.data; // Return the fetched employee data
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch employees!");
//     }
//   }
// );
// export const getEmployeeById = createAsyncThunk(
//   "employeeRegister/getEmployeeById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
//       return response.data; // Return the fetched employee data
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch employee by ID!");
//     }
//   }
// );


// const employeeRegisterSlice = createSlice({
//   name: "employeeRegister",
//   initialState,
//   reducers: {
//  updateFormValue: (state, action) => {
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
//     setImagePreview(state, action) {
//       state.imagePreview = action.payload; // Store the image preview URL
//     },
//     saveFormData: (state, action) => {
//       console.log("Form data saved:", state.formValues);
//     },
//     logout: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//   },
//   extraReducers: (builder) => {
//     // Handling registerEmployee thunk
//     builder.addCase(registerEmployee.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(registerEmployee.fulfilled, (state, action) => {
//       state.loading = false;
//       console.log("Employee registered successfully:", action.payload);
//       // After registration, log the employee in automatically
     
//     });
//     builder.addCase(registerEmployee.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || action.error.message;
//     });

//     // Handling loginEmployee thunk
//     builder.addCase(loginEmployee.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(loginEmployee.fulfilled, (state, action) => {
//       state.loading = false;
//       state.token = action.payload.token;
//       state.isAuthenticated = true;
//       localStorage.setItem("token", action.payload.token); // Save token
//     });
    
//     builder.addCase(loginEmployee.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || action.error.message;
//     }) .addCase(getAllEmployees.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(getAllEmployees.fulfilled, (state, action) => {
//       state.loading = false;
//       state.employees = action.payload;
//     })
//     .addCase(getAllEmployees.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to fetch employees.";
//     })  .addCase(updateEmployeeById.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(updateEmployeeById.fulfilled, (state, action) => {
//       state.loading = false;
//       console.log("Employee updated successfully:", action.payload);
//       // Update employee in state.employees if needed
//       const updatedEmployee = action.payload.employee;
//       const index = state.employees.findIndex((e) => e._id === updatedEmployee._id);
//       if (index !== -1) {
//         state.employees[index] = updatedEmployee;
//       }
//     })
//     .addCase(updateEmployeeById.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || action.error.message;
//     }).addCase(getEmployeeById.fulfilled, (state, action) => {
//       state.formValues = action.payload; // Update formValues with the fetched employee data
//     });
    
    
//   },
// });

// export const {  setImagePreview,  updateFormValue, resetForm, setImage, saveFormData, logout } = employeeRegisterSlice.actions;

// export default employeeRegisterSlice.reducer;

//9/1/24
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
//       const { token, user } = response.data;

//       localStorage.setItem("token", token); // Save token to localStorage

//       return { token, user };
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
//         localStorage.setItem("token", action.payload.token); // Save token to local storage
//       })
//       .addCase(loginEmployee.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(getAllEmployees.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getAllEmployees.fulfilled, (state, action) => {
//         state.loading = false;
//         state.employees = action.payload;
//       })
//       .addCase(getAllEmployees.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(getEmployeeById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getEmployeeById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.formValues = { ...action.payload };
//         state.imagePreview = action.payload.image;
//       })
//       .addCase(getEmployeeById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(updateEmployeeById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateEmployeeById.fulfilled, (state, action) => {
//         state.loading = false;
//         const updatedEmployee = action.payload.employee;
//         const index = state.employees.findIndex((e) => e._id === updatedEmployee._id);
//         if (index !== -1) {
//           state.employees[index] = updatedEmployee;
//         }
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
        "http://localhost:5000/api/employees/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { email, password } = employeeData;
      dispatch(loginEmployee({ email, password })); // Auto-login
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to register employee!");
    }
  }
);

export const loginEmployee = createAsyncThunk(
  "employeeRegister/loginEmployee",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/employees/login", loginData);
      const { token, employee } = response.data;

      localStorage.setItem("token", token); // Save token to localStorage

      return { token, employee }; // Return both token and employee
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to login!");
    }
  }
);

export const getAllEmployees = createAsyncThunk(
  "employeeRegister/getAllEmployees",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().employeeRegister;
      const response = await axios.get("http://localhost:5000/api/employees/employees", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data; // Return the list of employees
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch employees!");
    }
  }
);

// Get employee by ID
export const getEmployeeById = createAsyncThunk(
  "employeeRegister/getEmployeeById",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().employeeRegister;
      const response = await axios.get(`http://localhost:5000/api/employees/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data; // Return the specific employee's data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch employee by ID!");
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
        `http://localhost:5000/api/employees/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to update employee!");
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
export const {
  updateFormValue,
  resetForm,
  setImage,
  setImagePreview,
  logout,
} = employeeRegisterSlice.actions;

export default employeeRegisterSlice.reducer;
