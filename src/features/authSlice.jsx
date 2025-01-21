// // Import necessary modules
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Initial state
// const initialState = {
//   user: null,
//   token: null,
//   customerId: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
//   allUsers: [], // To store all fetched users
//   role: null, // Track the role
// };
// export const loginWithGoogle = createAsyncThunk(
//   "auth/loginWithGoogle",
//   async (idToken, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/google/google-login",
//         { token: idToken } // Sending the token
//       );
//       return response.data; // Return the server response
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Google login failed"
//       );
//     }
//   }
// );
// export const getAllUsers = createAsyncThunk(
//   "auth/getAllUsers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get("http://localhost:5000/auth/all-users");
//       return response.data.user; // Assuming API response has a `user` field
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to fetch users"
//       );
//     }
//   }
// );
// // Thunk for logging in user
// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("http://localhost:5000/auth/login", {
//         email,
//         password,
//       });
//       return response.data; // Returns user, token, and customerId
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to login"
//       );
//     }
//   }
// );

// // Thunk for signing up user
// export const signupUser = createAsyncThunk(
//   "auth/signup",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/auth/signup",
//         userData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data", // Set the correct header for FormData
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Thunk for logging out user
// export const logoutUser = createAsyncThunk(
//   "auth/logoutUser",
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post("http://localhost:5000/auth/logout");
//       return true; // Logout successful
//     } catch (error) {
//       return rejectWithValue("Failed to logout", error);
//     }
//   }
// );

// // Thunk for fetching user by ID
// export const getUser = createAsyncThunk(
//   "auth/getUser",
//   async (userId, { rejectWithValue, getState }) => {
//     try {
//       const { token } = getState().auth; // Get token from the state
//       const response = await axios.get(`http://localhost:5000/auth/getme`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch user");
//     }
//   }
// );

// // Thunk for updating user
// export const updateUser = createAsyncThunk(
//   "auth/updateUser",
//   async (userData, { rejectWithValue, getState }) => {
//     try {
//       const { token } = getState().auth; // Get token from the state
//       const response = await axios.put("http://localhost:5000/auth/me", userData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
//           "Content-Type": "multipart/form-data", // Set the correct header for FormData
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to update user");
//     }
//   }
// );

// // Thunk for fetching user by ID
// export const getUserById = createAsyncThunk(
//   "auth/getUserById",
//   async (id, { rejectWithValue, getState }) => {
//     try {
//       const { token } = getState().auth; // Get token from the state
//       const response = await axios.get(`http://localhost:5000/auth/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch user by ID");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     resetError(state) {
//       state.error = null;
//     },
//     // setUser(state, action) {
//     //   state.user = action.payload;
//     // },
//     // clearUser(state) {
//     //   state.user = null;
//     // },
//     setUser(state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isAuthenticated = action.payload.isAuthenticated;
//     },
//     clearUser(state) {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//   },
//   extraReducers: (builder) => {
//     // Handle login
//     builder
//     .addCase(getAllUsers.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(getAllUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       state.allUsers = action.payload;
//     })
//     .addCase(getAllUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.role = action.payload.user.role; // Save the role
//         state.customerId = action.payload.customerId; // Store customerId
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // Handle signup
//     builder
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // Handle logout
//     builder
//       .addCase(logoutUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.loading = false;
//         state.user = null;
//         state.token = null;
//         state.customerId = null; // Reset customerId on logout
//         state.isAuthenticated = false;
//       })
//       .addCase(logoutUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // Handle getUser
//     builder
//       .addCase(getUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//       })
//       .addCase(getUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // Handle updateUser
//     builder
//       .addCase(updateUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//     .addCase(updateUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         console.log("User updated:", state.user);
//       })

//       .addCase(updateUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // Handle getUserById
//     builder
//       .addCase(getUserById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getUserById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//       })
//       .addCase(getUserById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       }).addCase(loginWithGoogle.pending, (state) => {
//         state.loading = true;
//         state.error = null; // Clear previous errors
//       })
//       .addCase(loginWithGoogle.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user; // Store the user data
//         state.isAuthenticated = true; // Mark user as authenticated
//         state.error = null; // Clear errors
//       })
//       .addCase(loginWithGoogle.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload; // Store the error message
//       });
//   },
// });

// // Actions
// export const { resetError ,setUser, clearUser } = authSlice.actions;

// // Export the reducer
// export default authSlice.reducer;

// Import necessary modules
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://house-service-9q6h.onrender.com/"
    : "http://localhost:5000/";
const initialState = {
  user: null,
  token: null,
  customerId: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  allUsers: [], // To store all fetched users
  role: null, // Track the role
};
export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (idToken, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}api/google/google-login`,
        { token: idToken } // Sending the token
      );
      return response.data; // Return the server response
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Google login failed"
      );
    }
  }
);
export const getAllUsers = createAsyncThunk(
  "auth/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}auth/all-users`);
      return response.data.user; // Assuming API response has a `user` field
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users"
      );
    }
  }
);
// Thunk for logging in user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
       `${BACKEND_URL}auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      return response.data; // Returns user, token, and customerId
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to login"
      );
    }
  }
);

// Thunk for signing up user
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}auth/signup`,
        userData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the correct header for FormData
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk for logging out user
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${BACKEND_URL}auth/logout`);
      return true; // Logout successful
    } catch (error) {
      return rejectWithValue("Failed to logout", error);
    }
  }
);

// Thunk for fetching user by ID
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (userId, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth; // Get token from the state
      const response = await axios.get(`${BACKEND_URL}auth/getme`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user"
      );
    }
  }
);

// Thunk for updating user
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth; // Get token from the state
      const response = await axios.put(`${BACKEND_URL}auth/me`, userData, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          "Content-Type": "multipart/form-data", // Set the correct header for FormData
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update user"
      );
    }
  }
);

// Thunk for fetching user by ID
export const getUserById = createAsyncThunk(
  "auth/getUserById",
  async (id, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth; // Get token from the state
      const response = await axios.get(`${BACKEND_URL}auth/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user by ID"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
    // setUser(state, action) {
    //   state.user = action.payload;
    // },
    // clearUser(state) {
    //   state.user = null;
    // },
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    // Handle login
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user.role; // Save the role
        state.customerId = action.payload.customerId; // Store customerId
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle signup
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle logout
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.customerId = null; // Reset customerId on logout
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle getUser
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle updateUser
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        console.log("User updated:", state.user);
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle getUserById
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Store the user data
        state.isAuthenticated = true; // Mark user as authenticated
        state.error = null; // Clear errors
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store the error message
      });
  },
});

// Actions
export const { resetError, setUser, clearUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
