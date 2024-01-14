import React from 'react'
import { Link } from 'react-router-dom'
import { BtnRead, FeedItem } from './styles'

const PostDetail = ({post}) => {
  return (
    <FeedItem>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.createdBy}</p>
        <div>
            {post.tags.map((tag) => (
                <p key={tag}>
                    <span>#</span>
                    {tag}
                </p>
            ))}
        </div>
        <BtnRead to={`/posts/${post.id}`}>Ler</BtnRead>
      
    </FeedItem>
  )
}

export default PostDetail
