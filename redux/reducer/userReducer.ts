import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { register, login } from "../action/authaction";
import { getAllUsers, getUser } from "../action/useraction";

interface userState{
    loading: boolean;
    success: boolean;
    error: any;
    user: any;
    allUser: [];
    oneUser: {},
    isAuthenticated: boolean;
    token: any
}

const initialState: userState = {
    loading: false,
    success: false,
    error: null,
    user: null,
    allUser: [],
    oneUser: {},
    isAuthenticated: false,
    token: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearUserState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
            state.user = null;
            state.allUser = [];
            state.isAuthenticated = false;
            state.token = false;
            state.oneUser = {};
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(getAllUsers.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(register.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.success = true;
            state.user = payload.user;
            state.token = payload.token;
            state.error = null;
            return state;
        }),
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.success = true;
            state.user = payload.user;
            state.token = payload.token;
            state.error = null;
            return state;
        }),
        builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.allUser = payload.user;
            return state;
        }),
        builder.addCase(getUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.oneUser = payload.user;
            return state;
        }),
        builder.addCase(register.rejected, (state, { error }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.success = false;
            state.user = null;
            state.error = error.message;
            return state;
        }),
        builder.addCase(login.rejected, (state, { error }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.success = false;
            state.user = null;
            state.error = error.message;
            return state;
        }),
        builder.addCase(getAllUsers.rejected, (state, { error }) => {
            state.loading = false;
            state.allUser = [];
            state.error = error.message;
            state.success = false;
            return state;
        }),
        builder.addCase(getUser.rejected, (state, { error }) => {
            state.loading = false;
            state.oneUser = {};
            state.error = error.message;
            state.success = false;
            return state;
        })
    }
})

export const { clearUserState } = userSlice.actions;
export default userSlice.reducer; 
export const userState = ( state: RootState ) => state.user;