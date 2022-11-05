import jsonData from '../../data/cakes.json'
import { createSlice } from '@reduxjs/toolkit'

export const Cake = createSlice({
  name: 'cake',
  initialState: jsonData
})

export default Cake.reducer
