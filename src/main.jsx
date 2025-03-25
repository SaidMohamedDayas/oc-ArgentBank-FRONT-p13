import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "../store/store.js";
import App from "./App.jsx";
import { setToken } from "./features/auth/authReducers";
import { getUserProfile } from "./features/user/userActions";

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(setToken(token));
  store.dispatch(getUserProfile({ token }));
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
