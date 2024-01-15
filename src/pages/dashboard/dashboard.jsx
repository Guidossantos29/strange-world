import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { NoPostContainer } from '../home/styles'

import { BtnFisrtPost, ContainerLinksDashboard, ContainerTitle, DashboardContainer, Title } from './style'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'


const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  


  return (
    <DashboardContainer>
      
      <Title>Gerencie seus Posts</Title>
      <div>
      {posts && posts.length === 0 ? (
        <NoPostContainer>
          <p>Não foram encontrados posts</p>
          <BtnFisrtPost to="/posts/create" >
            Criar primeiro post
          </BtnFisrtPost>
        </NoPostContainer>
      ) : (
        <ContainerTitle>
          <Title>Título</Title>
          <Title>Ações</Title>
        </ContainerTitle>
      )}

      </div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            
            <ContainerLinksDashboard>
            <p>{post.title}</p>
              <div>
              <BtnFisrtPost to={`/posts/${post.id}`} >
                Ver
              </BtnFisrtPost>
              <BtnFisrtPost to={`/posts/edit/${post.id}`} >
                Editar
              </BtnFisrtPost>
              <BtnFisrtPost
                onClick={() => deleteDocument(post.id)}
                
              >
                Excluir
              </BtnFisrtPost>
              </div>
            </ContainerLinksDashboard>
          </div>
        ))}
    </DashboardContainer>
  )
}

export default Dashboard
