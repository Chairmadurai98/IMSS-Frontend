import {  createSlice } from "@reduxjs/toolkit";
import { getUserListApiRedux } from "../services/userServices";


const config = {
  getUserListApiRedux: getUserListApiRedux,
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

export const userSlice = createSlice({
  name: "user",
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


