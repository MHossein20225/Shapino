import api from "../api/api.jsx";

export async function getProductByCategory(categories){
    const {data} = await api("/products/"+categories)
    return data
}