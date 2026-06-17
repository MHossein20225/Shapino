import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice.jsx'
import authReducer from '../features/auth/authSlice.jsx'

const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth: authReducer
    }
})
export default store