import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

export default function TrendingPosts() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      const { data: users } = await axios.get('http://20.244.56.144/evaluation-service/users');

      const allPosts = [];
      for (const user of users) {
        const { data: posts } = await axios.get(`http://20.244.56.144/evaluation-service/users/${user.id}/posts`);
        allPosts.push(...posts);
      }

      const postsWithCommentCounts = await Promise.all(
        allPosts.map(async (post) => {
          const { data: comments } = await axios.get(`http://20.244.56.144/evaluation-service/posts/${post.id}/comments`);
          return { ...post, commentsCount: comments.length };
        })
      );

      const max = Math.max(...postsWithCommentCounts.map(p => p.commentsCount));
      const filtered = postsWithCommentCounts.filter(p => p.commentsCount === max);

      setTrending(filtered);
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {trending.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
