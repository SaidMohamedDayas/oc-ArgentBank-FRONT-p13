import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/authApi";
import { getUserProfileApi } from "../../api/userApi";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await loginApi(payload.email, payload.password);
      const { token } = response.body;
      localStorage.setItem("token", token);

      const userProfileResponse = await getUserProfileApi(token);
      const user = userProfileResponse.body;

      return { token, user };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
