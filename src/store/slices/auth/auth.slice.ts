import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authExtraReducers } from "./auth.api";
import { decryptData, encryptData } from "@/utils/crypt";

export type T_authRoles = "admin" | "superadmin" | "manager";

export interface I_auth {
  adminName: string;
  adminEmail: string;
  adminRole: T_authRoles;
  isVerified: boolean;
  updatedAt: string;
  _id: string;
  token: string;
}

export interface I_authStoreState {
  auth: I_auth | null;
  message: string;
  loading: boolean;
  error: string | null;
}

const persistedAuth: I_auth = decryptData(sessionStorage.getItem("auth") || "null");

const initialState: I_authStoreState = {
  auth: persistedAuth || null,
  message: "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: {
      prepare(auth: I_auth) {
        sessionStorage.setItem("auth", encryptData(auth));
        return { payload: auth };
      },
      reducer(state, action: PayloadAction<I_auth | null>) {
        state.auth = action.payload;
      },
    },
    handleFunction(state, action: PayloadAction<string>) {
      console.log(state);
      console.log(action);
    },
    clearAuth(state) {
      state.auth = null;
      sessionStorage.removeItem("auth");
    },
  },
  extraReducers: authExtraReducers,
});

export const { setAuth, handleFunction, clearAuth } = authSlice.actions;
export default authSlice.reducer;
