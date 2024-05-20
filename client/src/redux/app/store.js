import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.js";
import authReducer from "../feature/auth.js";

export const store = configureStore({
  reducer: {
    userReducer,
    authReducer,
  },
});
