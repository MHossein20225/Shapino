import '../../index.css'
import {useState} from 'react'
import {Link, NavLink, useLoaderData} from 'react-router-dom'
import logo from '../../assets/icons/bag.svg'
import search from '../../assets/icons/serach.svg'
import cart from '../../assets/icons/cart.svg'
import user from '../../assets/icons/user.svg'
import menu from '../../assets/icons/menu.svg'
import lArrow from '../../assets/icons/leftArrow.svg'
import SearchBar from "../component/SearchBar.jsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const isAuth = useLoaderData()
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
                        <div className="hidden lg:flex items-center gap-8">
                            <NavLink to="/">خانه</NavLink>
                            <NavLink to="shop"
                                     className={({isActive}) => isActive && "text-(--primary-hover)"}>فروشگاه</NavLink>
                            <NavLink to="/categories" className="text-nowrap">دسته بندی ها</NavLink>
                            <NavLink to="/blog">وبلاگ</NavLink>
                            <NavLink to="/contact" className="text-nowrap">تماس با ما</NavLink>
                        </div>
                        <div
                            className="hidden lg:flex items-center bg-(--bg-secondary) border rounded-(--radius-md) overflow-hidden">
                            <div className="p-3">
                                <img
                                    className="size-5"
                                    src={search}
                                    alt="search"
                                />
                            </div>
                            <SearchBar/>
                        </div>
                        <div className="flex items-center gap-3 md:gap-5">
                            <Link
                                to="/cart"
                                className="flex items-center gap-1"
                            >
                                <img
                                    className="size-8 md:size-10"
                                    src={cart}
                                    alt="cart"
                                />
                                <span className="hidden md:block">
                                    سبد خرید
                                </span>
                            </Link>


                            {!isAuth &&
                                <Link
                                    to="/login"
                                    className="hidden md:flex items-center gap-1"
                                >
                                    <img
                                        className="size-8 md:size-10"
                                        src={user}
                                        alt="user"
                                    />
                                    <span>
                                    ورود
                                </span>
                                </Link>}

                            <button
                                onClick={() => setIsOpen(true)}
                                className="lg:hidden text-3xl"
                            >
                                <img className="size-10" src={menu} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="pb-4 lg:hidden">
                        <div
                            className="flex items-center bg-(--bg-secondary) border rounded-(--radius-md) overflow-hidden">
                            <div className="p-3">
                                <img
                                    className="size-5"
                                    src={search}
                                    alt="search"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="جستجو برای محصولات..."
                                className="w-full h-12 outline-none bg-transparent px-2"
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/40 transition-all duration-300 z-40 ${
                    isOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                }`}
            />
            <aside
                className={`fixed top-0 right-0 h-screen w-72 bg-(--bg-secondary) shadow-xl z-50 transition-transform duration-300 ${
                    isOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'
                }`}
            >
                <div className="p-4 border-b flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            className="size-10"
                            src={logo}
                            alt=""/>
                        <span className="font-bold text-xl">
                            ]شاپینو
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-2xl"
                    >
                        <img src={lArrow} alt=""/>
                    </button>
                </div>
                <div className="flex flex-col p-4 gap-6">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                    >
                        خانه
                    </NavLink>
                    <NavLink
                        to="/shop"
                        onClick={() => setIsOpen(false)}
                    >
                        فروشگاه
                    </NavLink>
                    <NavLink
                        to="/categories"
                        onClick={() => setIsOpen(false)}
                    >
                        دسته بندی ها
                    </NavLink>
                    <NavLink
                        to="/blog"
                        onClick={() => setIsOpen(false)}
                    >
                        وبلاگ
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                    >
                        تماس با ما
                    </NavLink>
                    <hr/>
                    <Link
                        to="/login"
                        onClick={() => setIsOpen(false)}
                    >
                        ورود / ثبت نام
                    </Link>
                    <Link
                        to="/cart"
                        onClick={() => setIsOpen(false)}
                    >
                        سبد خرید
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default Navbar