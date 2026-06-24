export function loginValidation(data) {
    if (!data.password || !data.email)
        return "تمام اطلاعات را وارد کنید"
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        return "فرمت ایمیل صحیح نیست"
    if (data.password.length <= 6)
        return "رمز عبور باید حداقل 8 کاراکتر باشد"

    return false;
}
export function registerValidation(data) {
    if (!data.password || !data.email || !data.username || !data.password_confirmation)
        return "تمام اطلاعات را وارد کنید"
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        return "فرمت ایمیل صحیح نیست"
    if (data.password.length <= 6)
        return "رمز عبور باید حداقل 6 کاراکتر باشد"
    if (data.password !== data.password_confirmation)
        return "رمز ها مشابه نیستند"

    return false;
}