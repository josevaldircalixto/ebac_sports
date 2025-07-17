import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/',
  }),
  endpoints: (builder) => ({
    // Substitui o fetch que estava no App.tsx
    buscarProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports',
    }),
  }),
})

// Hook para usar nos componentes
export const { useBuscarProdutosQuery } = produtosApi
