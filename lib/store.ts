import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '@/redux/reducer/blogReducer';
import productReducer from '@/redux/reducer/productReducer';


export const makeStore = () => {
    return configureStore({
      reducer: {
        blog: blogReducer,
        product: productReducer
      }
    })
}

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']