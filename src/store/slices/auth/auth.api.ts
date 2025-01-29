import axiosInstance from "@/config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { I_auth_state } from "./auth.slice";

export const postLoginApi = createAsyncThunk(
  "auth/login",
  async (credentials: { adminEmail: string; adminPassword: string }) => {
    const response = await axiosInstance.post("/admin/login", credentials);
    return response.data.results;
  },
);

export const authExtraReducers = (builder: ActionReducerMapBuilder<I_auth_state>) => {
  builder.addCase(postLoginApi.pending, (state) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(postLoginApi.fulfilled, (state, action) => {
    state.loading = false;
    state.auth = action.payload;
    console.log(action);
    toast.success("Random Users Fetched");
  });
  builder.addCase(postLoginApi.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message || "Something went wrong";
    console.log(action);

    toast.error(state.error);
  });
};
