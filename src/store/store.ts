import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {api} from "@/store/api";


const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
