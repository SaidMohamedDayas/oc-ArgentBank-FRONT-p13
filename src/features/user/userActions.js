import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfileApi, updateUserProfileApi } from "../../api/userApi";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getUserProfileApi(payload.token);
      const user = response.body;
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateUserProfileApi(
        payload.token,
        payload.profile
      );
      const user = response.body;
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
