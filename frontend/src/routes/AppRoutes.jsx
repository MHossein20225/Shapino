import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Home/>}
        ]
    }
])

export default routes