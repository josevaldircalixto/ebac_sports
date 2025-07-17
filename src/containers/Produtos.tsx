import { useSelector } from 'react-redux'
import { useBuscarProdutosQuery } from '../store/produtosApi'
import { selecionarItensFavoritos } from '../store/favoritosSlice'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  // RTK Query: busca produtos da API automaticamente
  const { data: produtos = [], isLoading, error } = useBuscarProdutosQuery()

  // useSelector: pega favoritos do Redux
  const favoritos = useSelector(selecionarItensFavoritos)

  // Função para verificar se produto está favoritado
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f: any) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  // Estados de loading e erro
  if (isLoading) return <div>Carregando produtos...</div>
  if (error) return <div>Erro ao carregar produtos</div>

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
