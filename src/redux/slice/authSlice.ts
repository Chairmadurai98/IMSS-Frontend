import {  createSlice } from "@reduxjs/toolkit";
import { authLogin } from "../services/authServices";


const config = {
  authLogin: authLogin,
};

let initialState: {
  [key: string]: {
    loading: boolean;
    data: unknown;
    error: unknown;
  };
} = {};

Object.entries(config).forEach(([key]) => {
  initialState[key] = {
    loading: false,
    error: null,
    data: null,
  };
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    Object.entries(config).forEach(([key, value])=>{
        builder.addCase(value.pending, (state)=>{
            state[key].loading = true;
            state[key].data = null;
            state[key].error = null;
        })
        builder.addCase(value.fulfilled, (state, {payload})=>{
            state[key].loading = false;
            state[key].data = payload;
            state[key].error = null;
        })
        builder.addCase(value.rejected, (state, {payload})=>{
            state[key].loading = false;
            state[key].data = null;
            state[key].error = payload;
        })
    })
  },
  reducers: {},
});


