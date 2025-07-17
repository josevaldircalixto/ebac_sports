import * as S from './styles'
import { useSelector } from 'react-redux'
import {
  selecionarItensCarrinho,
  selecionarQuantidadeCarrinho
} from '../../store/carrinhoSlice'
import { selecionarQuantidadeFavoritos } from '../../store/favoritosSlice'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  // useSelector: pega dados do Redux
  const itensCarrinho = useSelector(selecionarItensCarrinho)
  const quantidadeCarrinho = useSelector(selecionarQuantidadeCarrinho)
  const quantidadeFavoritos = useSelector(selecionarQuantidadeFavoritos)

  // Calcula valor total
  const valorTotal = itensCarrinho.reduce((acc: number, item: any) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{quantidadeFavoritos} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidadeCarrinho} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
