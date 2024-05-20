import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { changeUsername } = userSlice.actions;
export default userSlice.reducer;
