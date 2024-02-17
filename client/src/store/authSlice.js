import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user:null,
    accessToken:""
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser(state,action){
            state.user = action.payload;
        },
        setAccessToken(state,action){
            state.accessToken = action.payload;
        },
    }
})

export default authSlice