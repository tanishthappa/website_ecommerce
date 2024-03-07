import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[]
}

export const CartData = createSlice({
  name: 'CartData',
  initialState,
  reducers: {
    incrementOnce: (state,action) => {
      
      const newdata = state.data.filter((e)=>{
        if(e.id != action.payload.id) return e;
      })
      
      state.data = [... state.data, action.payload]
    },
    incrementMultiple: (state,action) => {
      state.data = [... state.data, action.payload]
    },
    decrement: (state) => {
      state.data -= 1
    }
  },
  
})

// createAsyncThunk

// Action creators are generated for each case reducer function
export const { incrementOnce, incrementMultiple } = CartData.actions

export default CartData.reducer