import { configureStore } from '@reduxjs/toolkit'
import { TMBDAPI } from '../services/Api'

export default configureStore({
  reducer: {
    [TMBDAPI.reducerPath]: TMBDAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(TMBDAPI.middleware),
})