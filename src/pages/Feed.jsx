import React, { useState } from 'react';
import FeedForm from '../components/FeedForm';
import PostCard from '../components/PostCard';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <h2>Feed</h2>
      <FeedForm onAddPost={handleAddPost} />
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
