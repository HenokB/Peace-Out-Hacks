import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice";

const store = configureStore({
  reducer: {
    post: postSlice
  }
});

export default store;
