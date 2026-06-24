import search from "../assets/icons/serach.svg";
import lock from "../assets/icons/lock.svg";
import {Form, Link, redirect} from "react-router-dom";
import api from "../api/api.jsx";
import {loginValidation} from "../util/validations.jsx";
import ShowError from "../util/ShowError.jsx";
import {setUser} from "../features/auth/authSlice.jsx";
import {setToken} from "../util/token.jsx";

function Login() {
    return (
        <nav className="w-full bg-(--bg-secondary)">
            <Form method="post" className="max-w-md mx-auto px-4 py-16 md:py-24 flex flex-col items-center gap-8">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        ورود به حساب کاربری
                    </h1>
                    <p className="text-sm md:text-base text-gray-500">
                        برای ادامه وارد حساب کاربری خود شوید
                    </p>
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block mb-2">
                        ایمیل
                    </label>
                    <div className="flex items-center border rounded-(--radius-md)">
                        <div className="p-3 shrink-0">
                            <img
                                className="size-5"
                                src={search}
                                alt="email"
                            />
                        </div>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="ایمیل خود را وارد کنید"
                            className="w-full h-12 px-2 bg-transparent outline-none"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="block mb-2">
                        رمز عبور
                    </label>
                    <div className="flex items-center border rounded-(--radius-md)">
                        <div className="p-3 shrink-0">
                            <img
                                className="size-5"
                                src={lock}
                                alt="password"
                            />
                        </div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="رمز عبور را وارد کنید"
                            className="w-full h-12 px-2 bg-transparent outline-none"
                        />
                    </div>
                </div>
                <ShowError/>
                <div className="w-full flex justify-between gap-3 text-sm">
                    <div className="flex items-center gap-2">
                        <input id="remember" type="checkbox"/>
                        <label htmlFor="remember">
                            مرا به خاطر بسپار
                        </label>
                    </div>
                    <Link to="" className="hover:underline">
                        رمز عبور را فراموش کردم؟
                    </Link>
                    <Link to="/register" className="hover:underline">
                        اکانت ندارم
                    </Link>
                </div>
                <button
                    className="w-full h-12 bg-(--primary) text-white rounded-(--radius-md)"
                >
                    ورود
                </button>
            </Form>

        </nav>
    )
}

export default Login;

export async function action({ request }) {
    const formData = await request.formData();
    const sendingData = {
        email: formData.get("email"),
        password: formData.get("password"),
    };
    const dataValidated = loginValidation(sendingData)
    if(!dataValidated){
        try {
            const { data } = await api.post("/login", sendingData)
            setToken(data.token)
            setUser(data)
            return redirect("/");
        } catch (error) {
            return {
                error: error.response?.data?.message
            };
        }
    }else{
        return {
            error: dataValidated
        };
    }

}