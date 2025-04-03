import { configureStore } from "@reduxjs/toolkit";
import { stateInfo } from "./reducer/stateInfo";

const store = configureStore({
  reducer: {
    stateInfo: stateInfo,
  },
});

export default store;
