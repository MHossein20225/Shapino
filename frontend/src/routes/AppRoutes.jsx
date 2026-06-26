import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout, {loader as mainLayoutLoader} from "../layouts/MainLayout.jsx";
import Products, {loader as productsLoader} from "../pages/Products.jsx";
import Login, {action as loginAction} from "../pages/Login.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Register, {action as registerAction} from "../pages/Register.jsx";
import Cart from "../pages/Cart.jsx";
import ProductDetails, {loader as productDetailLoader} from "../pages/ProductDetails.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, loader: mainLayoutLoader, HydrateFallback: () => <div>Loading...</div>, children: [
            {index: true, element: <Home/>},
            {path: "/products", element: <Products />, loader: productsLoader},
            {path: 'product/:id', element: <ProductDetails/>, loader: productDetailLoader, errorElement: <ErrorPage/>},
            {path: 'cart', element: <Cart/>},
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