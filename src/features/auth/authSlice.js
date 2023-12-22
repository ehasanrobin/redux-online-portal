import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout(state, action) {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { loggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
