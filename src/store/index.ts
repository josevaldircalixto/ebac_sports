import { configureStore } from '@reduxjs/toolkit'
import { produtosApi } from './produtosApi'
import carrinhoReducer from './carrinhoSlice'
import favoritosReducer from './favoritosSlice'

export const store = configureStore({
  reducer: {
    // RTK Query API para produtos
    [produtosApi.reducerPath]: produtosApi.reducer,
    // Slices para estado local
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
  },
  // Middleware necessário para RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
