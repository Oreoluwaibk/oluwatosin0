import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND;

export const login = createAsyncThunk(
    "post/login",
    async (data: any) => {
        const url = `${backendUrl}/auth/login`;
        const response = await axios.post(url, data) 

        return response.data;
    }
);

export const register = createAsyncThunk(
    "post/register",
    async (data: any) => {
        const url = `${backendUrl}/auth/register`;
        const response = await axios.post(url, data);

        return response.data;
    }
);

export const forgotPassword = createAsyncThunk(
    "post/forgetPassword",
    async(data: any) => {
        const url = `${backendUrl}/auth/forgotpassword`;
        const response = await axios.post(url, data);

        return response.data;
    }
)

export const resetPassword = createAsyncThunk(
    "post/resetpassword",
    async ( data: any ) => {
        const url = `${backendUrl}/auth/resetpassword`;
        const response = await axios.post(url, data);

        return response.data;
    }
)