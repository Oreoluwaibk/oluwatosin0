import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk(
    "get/all_product",
    async (limit: number) => {
        const url = `${process.env.NEXT_PUBLIC_FAKE_PRODUCT_API}/products?limit=${limit}`;
        const response = await axios.get(url);

        return response.data.products;
    }
);

export const getSingleProduct = createAsyncThunk(
    "get/one_product",
    async (id: number) => {
        const url = `${process.env.NEXT_PUBLIC_FAKE_PRODUCT_API}/products/${id}`;
        const response = await axios.get(url);
        return response.data;
    }
);

export const getAllCategory = createAsyncThunk(
    "get/all_category",
    async () => {
        const url = `${process.env.NEXT_PUBLIC_FAKE_PRODUCT_API}/products/categories`;
        const response = await axios.get(url);
        return response.data;
    }
);

export const getProductByCategory = createAsyncThunk(
    "get/product_by_category",
    async (category: string) => {
        const url = `${process.env.NEXT_PUBLIC_FAKE_PRODUCT_API}/products/category/${category}`;
        const response = await axios.get(url);
        return response.data.products;
    }
)