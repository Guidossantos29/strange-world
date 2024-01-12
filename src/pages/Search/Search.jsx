import React from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'
import { BtnReturn, NoSearh, SearchComponent } from './styles'


const Search = () => {

  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <SearchComponent>
    <h1>Resultados encontrados para: {search}</h1>
    <div>
      {posts && posts.length === 0 && (
        <NoSearh>
          <p>Não foram encontrados posts a partir da sua busca...</p>
          <BtnReturn to="/">
            Voltar
          </BtnReturn>
        </NoSearh>
      )}
      {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
  </SearchComponent>
  )
}

export default Search
