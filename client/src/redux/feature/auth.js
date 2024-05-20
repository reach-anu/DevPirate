import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;
