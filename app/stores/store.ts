import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./moodSlice";

const store = configureStore({
  reducer: {
    record: recordReducer,
  },
});

export default store;
