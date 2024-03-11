import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { 
    getAllProduct, 
    getAllCategory, 
    getProductByCategory, 
    getSingleProduct 
} from "../action/productAction";

interface ProductState {
    loading: boolean;
    success: boolean;
    failure: boolean;
    allProducts: [];
    currentProduct: {
        id: any;
        title: string;
        price:string;
        category:string;
        description:string;
        images: [""];
        brand: string;
        discountPercentage: number;
        rating: number;
        stock: number;
        thumbnail: string;
    };
    allCategory: [];
    error: any
}

const initialState: ProductState = {
    loading: false,
    success: false,
    failure: false,
    allCategory: [],
    allProducts: [],
    currentProduct: {
        id: null,
        title: "",
        price: "",
        category: "",
        description: "",
        images: [""],
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        thumbnail: "",
        brand: ""
    },
    error: null
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        clearProductState: (state) => {
            state.loading = false;
            state.success = false;
            state.failure = false;
            state.allCategory = [];
            state.allProducts = [];
            state.currentProduct = {
                id: null,
                title: "",
                price: "",
                category: "",
                description: "",
                images: [""],
                discountPercentage: 0,
                rating: 0,
                stock: 0,
                thumbnail: "",
                brand: ""
            },
            state.error = null
        }
    },
    extraReducers: ( builder ) => {
        builder.addCase(getAllProduct.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(getAllCategory.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(getProductByCategory.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(getSingleProduct.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.allProducts = action.payload;
            state.error = null
            return state;
        }),
        builder.addCase(getAllCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.allCategory = action.payload;
            state.error = null
            return state;
        }),
        builder.addCase(getProductByCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.allProducts = action.payload;
            state.error = null
            return state;
        }),
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.currentProduct = action.payload;
            state.error = null
            return state;
        }),
        builder.addCase(getAllProduct.rejected, (state, action) => {
            state.loading = false;
            state.success = true;
            state.allProducts = [];
            state.error = action.error;
            return state;
        }),
        builder.addCase(getAllCategory.rejected, (state, action) => {
            state.loading = false;
            state.success = true;
            state.allCategory = [];
            state.error = action.error;
            return state;
        }),
        builder.addCase(getProductByCategory.rejected, (state, action) => {
            state.loading = false;
            state.success = true;
            state.allProducts = [];
            state.error = action.error;
            return state;
        }),
        builder.addCase(getSingleProduct.rejected, (state, action) => {
            state.loading = false;
            state.success = true;
            state.currentProduct = {
                id: null,
                title: "",
                price: "",
                category: "",
                description: "",
                images: [""],
                discountPercentage: 0,
                rating: 0,
                stock: 0,
                thumbnail: "",
                brand: ""
            },
            state.error = action.error;
            return state;
        })
    }
});

export const { clearProductState } = productSlice.actions;
export const productState = ( state: RootState ) => state.product; 
export default productSlice.reducer;