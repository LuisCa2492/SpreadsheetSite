import { configureStore } from '@reduxjs/toolkit'
import { principalSlice } from './slices/principalSlice'

export const store = configureStore({
  reducer: {
       principal: principalSlice.reducer
  },
})