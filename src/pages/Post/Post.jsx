import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { ContentPost, ContentPostContainer, ImagePost, PostContainer, Tags, TagsContainer, TitlePost } from './Post';

const Post = () => {
    const { id } = useParams();
    const { document: post,loading } = useFetchDocument("posts", id);
  return (
    <PostContainer>
      {loading && <p>Carregando Post...</p>}
      {post && (
        <ContentPostContainer>
        <ImagePost src={post.image} alt={Post.title} />
        <TitlePost>{post.title}</TitlePost>
        <ContentPost>{post.body}</ContentPost>
        <h3>Este Post trata sobre:</h3>
        <TagsContainer>
        {post.tags.map((tag) => (
            
            <Tags key={tag}>#
                {tag}
            </Tags>

           
        ))}
         </TagsContainer>
        </ContentPostContainer>
      )}
    </PostContainer>
  )
}

export default Post
