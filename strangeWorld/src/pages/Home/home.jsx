import React from 'react'
import { useState } from 'react'
import { FormContainerNoPost, HomeConatiner, NoPostContainer } from './styles'
import { Link } from 'react-router-dom'

const Home = () => {
  const [query,setQuery] = useState('')
  const [posts] = useState([])



  return (
    <HomeConatiner>
      <h1>Veja o que temos de mais recente</h1>
      <FormContainerNoPost>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button>O que procura?</button>
      </FormContainerNoPost>
      <div>
        <h1>Post...</h1>
        {posts && posts.length === 0 && (
          <NoPostContainer>
            <p>Não foram encontrado posts</p>
            <Link to='/posts/create'>criar primeiro posts</Link>
            </NoPostContainer>
        )}
      </div>
    </HomeConatiner>
  )
}

export default Home
