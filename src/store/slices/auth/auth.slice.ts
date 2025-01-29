import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authExtraReducers } from "./auth.api";

export interface I_auth_state {
  auth: unknown | null;
  counts: number;
  message: string;
  loading: boolean;
  error: string | null;
}

const initialState: I_auth_state = {
  auth: null,
  counts: 0,
  message: "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: {
      prepare(user: string) {
        const id = Math.random().toString(36).substring(7);
        console.log(user);
        return { payload: { user, id } };
      },
      reducer(state, action: PayloadAction<{ user: string; id: string }>) {
        state.auth = action.payload;
        state.loading = false;
      },
    },
    handleFunction(state, action: PayloadAction<string>) {
      console.log(state);
      console.log(action);
    },
    callingReducer(state) {
      state.counts++;
    },
  },
  extraReducers: authExtraReducers,
});

export const { loginReducer, handleFunction, callingReducer } = authSlice.actions;
export default authSlice.reducer;
