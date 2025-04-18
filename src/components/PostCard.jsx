import React from 'react';

export default function PostCard({ post }) {
  return (
    <div className='card'>
      {post.image && <img src={post.image} alt='Post' />}
      <p>{post.content || post.caption || 'No content available'}</p>
      {post.commentsCount !== undefined && <p>Comments: {post.commentsCount}</p>}
    </div>
  );
}
