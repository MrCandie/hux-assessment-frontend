import { createSlice } from "@reduxjs/toolkit";

let token;

token = localStorage.getItem("authToken");

const authSlice = createSlice({
  name: "token",
  initialState: {
    token: token || "",
    isAuth: !!token,
  },
  reducers: {
    storeToken: (state, action) => {
      localStorage.setItem("authToken", action.payload);
    },
  },
});

export default authSlice.reducer;
export const { storeToken } = authSlice.actions;
