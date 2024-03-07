import { configureStore } from '@reduxjs/toolkit'
import CartData from './Slice/CartData'


export const store = configureStore({
  reducer: {
    CartData:CartData
  },
})