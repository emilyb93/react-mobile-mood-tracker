import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./moodSlice";
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    record: recordReducer,
  },
});

export default store;

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export const useAppSelector = useSelector.withTypes<RootState>();
