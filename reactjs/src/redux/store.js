import { configureStore } from "@reduxjs/toolkit";
import { stateInfo } from "./reducer/stateInfo";
import { loginUser } from "./reducer/loginUser";

const store = configureStore({
  reducer: {
    stateInfo: stateInfo,
    loginUser: loginUser
  },
});

export default store;
