import { createSlice } from "@reduxjs/toolkit";
import { logInAction } from "../actions/loginAction";
// import { toastText } from "utils/utils";

const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const logInSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logInAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logInAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(logInAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default logInSlice;
