import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: "",
}
const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{
        setAuth(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }
    }
})

export const {setAuth} = authSlice.actions
export default authSlice.reducer