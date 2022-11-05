import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const Cart = createSlice({
  name: 'cart',
  initialState ,
  reducers: {
    addCart: (state,action)=>{
      let values = action.payload
       if(values.new === -1) {
        return [...state, values]
       }else{
         state.splice(values.new,1,values)
       }
    },
    deleteCart:(state,action)=>{
       return state.filter(item=> item.id !== action.payload)
    },
    editCart:(state,action)=>{
      let values = action.payload
      state.splice(values.new,1,{...values.items})
    }
  }
})

export const { addCart, deleteCart, editCart } = Cart.actions
export default Cart.reducer
