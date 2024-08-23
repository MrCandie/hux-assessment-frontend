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
    deleteToken: () => {
      localStorage.removeItem("authToken");
    },
  },
});

export default authSlice.reducer;
export const { storeToken, deleteToken } = authSlice.actions;
