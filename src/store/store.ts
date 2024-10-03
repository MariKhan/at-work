import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "@/store/slices/userSlices";

const rootReducer = combineReducers({
  users: usersReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
