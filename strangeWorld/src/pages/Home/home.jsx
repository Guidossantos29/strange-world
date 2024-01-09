import React from 'react'
import { useState } from 'react'
import { FeedContainer, FormContainerNoPost, HomeConatiner, NoPostContainer } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetail from '../../components/PostDetail'


const Home = () => {
  const [query,setQuery] = useState('')
  const {documents:posts,loading} = useFetchDocuments('posts')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(query){
      return navigate(`/search?q=${query}`)
    }
  }



  return (
    <HomeConatiner>
      <h1>Veja o que temos de mais recente</h1>
      <FormContainerNoPost onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button>O que procura?</button>
      </FormContainerNoPost>
      <FeedContainer>
        {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
        {posts && posts.length === 0 && (
          <NoPostContainer>
            <p>Não foram encontrado posts</p>
            <Link to='/posts/create'>criar primeiro posts</Link>
            </NoPostContainer>
        )}
      </FeedContainer>
    </HomeConatiner>
  )
}

export default Home
