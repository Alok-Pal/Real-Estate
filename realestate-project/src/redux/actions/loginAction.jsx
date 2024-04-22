import { createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '../api';

export const logInAction = createAsyncThunk(
  "/user/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await postApi("/user/login", data);

      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      localStorage.setItem("AccessToken", response?.data?.data?.accessToken)

      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

