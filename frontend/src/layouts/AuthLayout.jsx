import {Link, NavLink, Outlet} from "react-router-dom";
import logo from "../assets/icons/bag.svg";
import home from "../assets/icons/home.svg";

function AuthLayout() {

    return (
        <>
            <nav className="w-full bg-(--bg-secondary)">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-18 flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center shrink-0"
                        >
                            <img
                                className="size-12 md:size-14"
                                src={logo}
                                alt="logo"
                            />
                            <p className="text-2xl md:text-3xl font-bold text-(--text)">
                                شاپینو
                            </p>
                        </Link>
                        <Link to="/" className="flex gap-4 items-center">
                            <p>بازگشت به صفحه اصلی</p>
                            <img src={home} alt=""/>
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}
export default AuthLayout