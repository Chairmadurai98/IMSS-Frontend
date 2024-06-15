import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slice/userSlice";
import { authSlice } from "../slice/authSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [authSlice.name] : authSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});


export type RootState = ReturnType<typeof store.getState>