import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../../store/carrinhoSlice'
import { favoritar, selecionarProdutoFavoritado } from '../../store/favoritosSlice'


export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: { produto: ProdutoType }) => {
  const dispatch = useDispatch()

  // useSelector: verifica se produto está favoritado
  const estaFavoritado = useSelector((state: any) =>
    selecionarProdutoFavoritado(state, produto.id)
  )

  // Funções que usam dispatch
  const handleComprar = () => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = () => {
    dispatch(favoritar(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaFavoritado
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleComprar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
