import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout, {loader as MainLayoutLoader} from "../layouts/MainLayout.jsx";
import Products from "../pages/Products.jsx";
import Login, {action as loginAction} from "../pages/Login.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Register, {action as registerAction} from "../pages/Register.jsx";
import Cart from "../pages/Cart.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, loader: MainLayoutLoader, children: [
            {index: true, element: <Home/>},
            {path: 'shop', element: <Products/>},
            {path: 'cart', element: <Cart/>},
            {path: 'productDetail', element: <ProductDetails/>}
        ]
    },
    {
        element: <AuthLayout/>, children: [
            {path: '/login', element: <Login/>, action: loginAction},
            {path: '/register', element: <Register/>, action: registerAction}
        ]
    }
])

export default routes