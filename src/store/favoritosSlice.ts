import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

const initialState = {
  itens: [] as Produto[]
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoIndex = state.itens.findIndex(
        (item) => item.id === produto.id
      )

      if (produtoIndex >= 0) {
        state.itens.splice(produtoIndex, 1)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer

export const selecionarItensFavoritos = (state: any) => state.favoritos.itens
export const selecionarQuantidadeFavoritos = (state: any) =>
  state.favoritos.itens.length
export const selecionarProdutoFavoritado = (state: any, produtoId: number) =>
  state.favoritos.itens.some((item: Produto) => item.id === produtoId)
