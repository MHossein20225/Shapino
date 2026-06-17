import Navbar from "../components/layout/Navbar.jsx";
import {Outlet} from "react-router-dom";
import getToken from "../util/getToken.jsx";
import api from "../api/api.jsx";

function MainLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default MainLayout

export async function loader() {
    const token = getToken();
    if (!token) return;
    return api("/me");
}