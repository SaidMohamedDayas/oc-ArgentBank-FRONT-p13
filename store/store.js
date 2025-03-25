import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/features/auth/authReducers";
import userReducer from "../src/features/user/userReducers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
