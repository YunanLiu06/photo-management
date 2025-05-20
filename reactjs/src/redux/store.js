import { configureStore } from "@reduxjs/toolkit";
import { stateInfo } from "./reducer/stateInfo";
import { loginUser } from "./reducer/loginUser";
import { carPicInfo } from "./reducer/carPicInfo";

const store = configureStore({
  reducer: {
    stateInfo: stateInfo,
    loginUser: loginUser,
    carPicInfo: carPicInfo
  },
});

export default store;
