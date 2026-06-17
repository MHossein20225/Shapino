import search from "../assets/icons/serach.svg";
import lock from "../assets/icons/lock.svg";
import user from "../assets/icons/user.svg";
import {Form, Link, redirect, useActionData} from "react-router-dom";

function Register(){
    const response = useActionData()
    return (
        <nav className="w-full bg-(--bg-secondary)">
            <Form method="post" className="max-w-md mx-auto px-4 py-16 md:py-24 flex flex-col items-center gap-8">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        ثبت نام
                    </h1>
                    <p className="text-sm md:text-base text-gray-500">
                        برای ادامه ثبت نام کنید
                    </p>
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block mb-2">
                        نام کاربری
                    </label>
                    <div className="flex items-center border rounded-(--radius-md)">
                        <div className="p-3 shrink-0">
                            <img
                                className="size-5"
                                src={user}
                                alt="name"
                            />
                        </div>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="ایمیل خود را وارد کنید"
                            className="w-full h-12 px-2 bg-transparent outline-none"
                        />
                    </div>
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
                            type="email"
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
                <div className="w-full">
                    <label htmlFor="password" className="block mb-2">
                        تکرار رمز عبور
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
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            placeholder="رمز عبور را دوباره وارد کنید"
                            className="w-full h-12 px-2 bg-transparent outline-none"
                        />
                    </div>
                </div>
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
                </div>
                <button
                    className="w-full h-12 bg-(--primary) text-white rounded-(--radius-md) cursor-pointer"
                >
                    ثبت نام
                </button>
            </Form>
            {
                <p className="text-red-500" >{response?.message}</p>
            }
        </nav>

    )
}

export default Register;

export async function action({ request }) {
    const formData = await request.formData();
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    };
    const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) return await response.json();
    return redirect('/login')
}
