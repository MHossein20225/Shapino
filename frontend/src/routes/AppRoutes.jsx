import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Register from "../pages/Register.jsx";
import Cart from "../pages/Cart.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Home/>},
            {path: 'shop', element: <Products/>},
            {path: 'cart', element: <Cart/>},
            {path: 'productDetail', element: <ProductDetails/>}
        ]
    },
    {
        element: <AuthLayout/>, children: [
            {path: '/login', element: <Login/>},
            {path: '/register', element: <Register/>}
        ]
    }
])

export default routes