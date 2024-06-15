import AXIOSSERVER from "@/utils/axiosConfig";
import {
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { AuthCredentials, AuthResponse } from "../../../types/AuthType";



export const authLogin = createAsyncThunk<AuthResponse, AuthCredentials>(
  "authLogin",
  async (formData, { rejectWithValue }) => {
    try {
      return await AXIOSSERVER.post("/login", formData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
