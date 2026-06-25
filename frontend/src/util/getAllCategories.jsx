import api from "../api/api.jsx";

export async function getAllCategories(){
    const {data} = await api('/categories')
    return data
}