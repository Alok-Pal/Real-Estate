import { createSlice } from "@reduxjs/toolkit";
import { signUpAction } from "../actions/signUpAction";
// import { toastText } from "utils/utils";

const initialState = {
  isLoading: false,
  error: null,
};

const signUpSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      state.isLoading = false;
    //   localStorage.setItem("accessToken", action?.payload?.data?.accessToken);
    //   localStorage.setItem("refreshToken", action?.payload?.data?.refreshToken);
    //   toastText(action?.payload?.message, "success");
    });
    builder.addCase(signUpAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    //   toastText(action?.payload?.message, "error");
    });
  },
});

export default signUpSlice;
