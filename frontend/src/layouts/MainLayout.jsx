import Navbar from "../components/layout/Navbar.jsx";
import {Outlet, useLoaderData} from "react-router-dom";
import {getToken, removeToken} from "../util/token.jsx";
import api from "../api/api.jsx";
import {logout, setUser} from "../features/auth/authSlice.jsx";
import {useDispatch, useSelector} from "react-redux";

function MainLayout() {
    const user = useLoaderData()
    const dispatch = useDispatch()
    if (user){
        dispatch(setUser(user));
    }
    const isAuthenticated = useSelector(state => state.auth)
    console.log(isAuthenticated)
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default MainLayout

export async function loader() {
    const token = getToken()
    if (!token) {
        return null
    }
    try {
        const { data } = await api.get("/me")
        return data
    } catch (error) {
        if (error.response?.status === 401) {
            removeToken()
            logout()
            return null
        }
        throw error
    }
}