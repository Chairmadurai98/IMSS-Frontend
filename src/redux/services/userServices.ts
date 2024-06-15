import AXIOSSERVER from "@/utils/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

type UserListResponse = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type GlobalListResponse = {
  page: number;
  per_page: number;
  total: number;
  total_page: number;
  data: UserListResponse[];
};

export const getUserListApiRedux = createAsyncThunk(
  "getUserListApiRedux",
  async (params, thunkApi) => {
    try {
      return (await AXIOSSERVER.get("/users", {
        params,
      })) as GlobalListResponse;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


