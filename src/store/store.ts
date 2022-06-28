import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../../pages/api/postApi'

export const store = configureStore({
    reducer:{
        [postApi.reducerPath]: postApi.reducer
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware().concat(postApi.middleware)
})