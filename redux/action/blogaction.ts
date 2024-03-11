import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogs =  createAsyncThunk(
    "get/blog",
    async () => {
        const url = `${process.env.NEXT_PUBLIC_PLACEHOLDER_API}/posts`;
        // const url2 = `${process.env.NEXT_PUBLIC_FREE_API}/everything?q=gospel&apiKey=${process.env.NEXT_PUBLIC_FREE_BLOG_KEY}`
        const response = await axios.get(url);
        return response.data;
    }
)

export const getOneBlog = createAsyncThunk(
    "get/one_blog",
    async (id: number) => {
        const url = `${process.env.NEXT_PUBLIC_PLACEHOLDER_API}/posts/${id}`;
        const response = await axios.get(url);
        return response.data;
    }
)