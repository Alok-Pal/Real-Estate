import { createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '../api';
// import { postApi } from 'redux/apis';

export const signUpAction = createAsyncThunk(
  "/user/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await postApi("/user/create", data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

