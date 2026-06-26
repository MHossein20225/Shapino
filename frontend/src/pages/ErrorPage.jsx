import {Link} from "react-router-dom";

export default function ErrorPage({title}) {
    return <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-red-500">
                {title}
            </h1>

            <p className="text-gray-600 mt-4">
                برای مشاهده این بخش ابتدا وارد حساب کاربری خود شوید.
            </p>

            <div className="flex gap-4 mt-8 justify-center">
                <Link
                    to="/login"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    ورود
                </Link>
            </div>
            <Link
                to="/"
                className="block mt-6 text-blue-600 hover:underline"
            >
                بازگشت به صفحه اصلی
            </Link>
        </div>
    </div>
}