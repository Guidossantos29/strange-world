import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { PostContainer, Tags, TagsContainer } from './Post';

const Post = () => {
    const { id } = useParams();
    const { document: post,loading } = useFetchDocument("posts", id);
  return (
    <PostContainer>
      {loading && <p>Carregando Post...</p>}
      {post && (
        <>
        <img src={post.image} alt="" />
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <h3>Este Post trata sobre:</h3>
        <TagsContainer>
        {post.tags.map((tag) => (
            
            <Tags key={tag}>#
                {tag}
            </Tags>

           
        ))}
         </TagsContainer>
        </>
      )}
    </PostContainer>
  )
}

export default Post
