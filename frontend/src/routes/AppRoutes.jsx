import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Products from "../pages/Products.jsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Home/>},
            {path: 'shop', element: <Products/>}
        ]
    }
])

export default routes