import api from "../api/api.jsx";

export async function getAllCategories(){
    const { data } = await api("/categories")
    return data
}
export async function getProductByCategory(categories){
    const { data } = await api("/products/"+categories)
    return data
}
export async function getCart(){
    const { data } = await api("/cart")
    return data
}
export async function updateProductQuantity(id, quantity) {
    const { data } = await api.patch(`/cart/${id}`, {
        quantity,
    });
    return data;
}
export async function addProductToCart(productId) {
    const { data } = await api.post("/cart/add", productId);
    return data;
}
export async function isInCart(productId) {
    const { data } = await api.post(`/cart/check/${productId}`);
    return data;
}
export async function deleteCartItems(productId) {
    const { data } = await api.delete(`/cart/delete/${productId}`);
    return data;
}
