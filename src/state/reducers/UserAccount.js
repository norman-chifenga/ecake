import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {   
      id: "",
      name: ""
  }
]

export const User = createSlice({
  name: 'user',
  initialState ,
  reducers: {
    addUser: (state,action)=>{
      let values = action.payload
       if(values.id === -1) {
        return [...state, values]
       }else{
         state.splice(values.id,1,values)
       }
    },
    deleteUser:(state)=>{
       return state = initialState
    }
  }
})

export const { addUser, deleteUser } = User.actions
export default User.reducer
