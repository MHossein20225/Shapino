import api from "../api/api.jsx";

export async function productSliderFun(categories){
    const {data} = await api.get("/products/"+categories)
    return await data
}