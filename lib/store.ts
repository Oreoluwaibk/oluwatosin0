import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '@/redux/reducer/blogReducer';
import productReducer from '@/redux/reducer/productReducer';
import userReducer from '@/redux/reducer/userReducer';


export const makeStore = () => {
    return configureStore({
      reducer: {
        blog: blogReducer,
        product: productReducer,
        user: userReducer
      }
    })
}

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']