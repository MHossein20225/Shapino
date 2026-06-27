import api from "../api/api.jsx";

export async function getAllCategories(){
    const {data} = await api("/categories")
    return data
}
export async function getProductByCategory(categories){
    const {data} = await api("/products/"+categories)
    return data
}
export async function getCart(){
    const {data} = await api("/cart")
    return data
}
export async function updateCart(id, quantity) {
    const { data } = await api.patch(`/cart/${id}`, {
        quantity,
    });
    return data;
}