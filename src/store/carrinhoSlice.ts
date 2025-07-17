import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

// Estado inicial do carrinho (carrinho vazio)
const initialState = {
  itens: [] as Produto[]
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    // Função para adicionar produto ao carrinho
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      // Verifica se produto já existe no carrinho
      const produtoExistente = state.itens.find(item => item.id === produto.id)

      if (produtoExistente) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },

    // Função para remover produto do carrinho
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload
      state.itens = state.itens.filter(item => item.id !== produtoId)
    }
  }
})

// Exportar as "ações" (funções)
export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions

// Exportar o "reducer" (coração do slice)
export default carrinhoSlice.reducer

// Funções para "pegar" dados do carrinho
export const selecionarItensCarrinho = (state: any) => state.carrinho.itens
export const selecionarQuantidadeCarrinho = (state: any) => state.carrinho.itens.length
