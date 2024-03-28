import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND;

export const getAllUsers = createAsyncThunk(
    "get/allUsers",
    async () => {
        const url = `${backendUrl}/user`;
        const response  = await axios.get(url);

        return response.data;
    }
) 

export const createUser = createAsyncThunk(
    "post/user",
    async (data) => {
        const url = `${backendUrl}/user`;
        const response  = await axios.post(url, data);

        return response.data;
    }
)

export const getUser = createAsyncThunk(
    "get/oneUser",
    async (id: number) => {
        const url = `${backendUrl}/user/${id}`;
        const response = await axios.get(url);

        return response.data;
    }
)

export const updateUser = createAsyncThunk(
    "put/oneUser",
    async (payload: any) => {
        const url = `${backendUrl}/user/${payload.id}`;
        const response = await axios.put(url, payload.data);

        return response.data;
    }
)

export const deleteUser = createAsyncThunk(
    "delete/oneUser",
    async (id: number) => {
        const url = `${backendUrl}/user/${id}`;
        const response = await axios.delete(url);

        return response.data;
    }
)