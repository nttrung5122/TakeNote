import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./authSlice"
import folderSlide from './folderSlide'


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    folder: folderSlide.reducer
  },
})

