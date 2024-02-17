import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    idFolder:"",
    password:"",
}
const folderSlide = createSlice({
    name: "folder",
    initialState,
    reducers:{
        setIdFolder(state,action){
            state.idFolder = action.payload;
        },
        setPassword(state,action){
            state.password = action.payload;
        },
    }
})

export default folderSlide