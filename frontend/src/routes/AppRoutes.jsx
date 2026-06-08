import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Register from "../pages/Register.jsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Home/>},
            {path: 'shop', element: <Products/>}
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