import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authenticate",
  initialState: { token: null, user_name: "" },
  reducers: {
    logIn: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token = payload.token;
      state.user_name = payload.user_name;
    },
    logOut: (state) => {
      state.token = null;
      state.user_name = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
