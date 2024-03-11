import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { getAllBlogs, getOneBlog } from "../action/blogaction";

interface blogState {
    blogs?: [];
    loading: boolean;
    success: boolean;
    failure: boolean;
    currentBlog?: {
        title: string;
        body: string;
        id: any
    }
    error: any
}

const initialState: blogState = {
    blogs: [],
    loading: false,
    success: false,
    failure: false,
    currentBlog: {
        title: "",
        body: "",
        id: null,
    },
    error: null
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        clearBlog: ( state ) => {
            state.blogs = [];
            state.failure = false;
            state.loading = false;
            state.success = false;
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBlogs.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(getAllBlogs.fulfilled, ( state, action ) => {
            state.loading = false;
            state.blogs = action.payload;
            state.success = true;
            state.error = null;
            return state;
        }),
        builder.addCase(getAllBlogs.rejected, (state, action) => {
            state.loading = false;
            state.blogs = [];
            state.failure = true;
            state.success = false;
            state.error = action.error
        }),
        builder.addCase(getOneBlog.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(getOneBlog.fulfilled, (state, action) => {
            state.loading = false;
            state.currentBlog = action.payload;
            state.success = true;
            state.error = null;
            return state;
        }),
        builder.addCase(getOneBlog.rejected, (state, action) => {
            state.loading = false;
            state.currentBlog = {
                title: "",
                body: "",
                id: null,
            };
            state.failure = true;
            state.success = false;
            state.error = action.error
        })
    }
});

export const { clearBlog } = blogSlice.actions;
export const blogState = (state:RootState) => state.blog;
export default blogSlice.reducer;