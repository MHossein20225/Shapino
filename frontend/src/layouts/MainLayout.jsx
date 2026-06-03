import Navbar from "../components/layout/Navbar.jsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default MainLayout