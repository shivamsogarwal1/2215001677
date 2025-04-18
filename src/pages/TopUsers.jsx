import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

export default function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchUsersAndPosts = async () => {
      const { data: users } = await axios.get('http://20.244.56.144/evaluation-service/users');

      const usersWithPostCounts = await Promise.all(
        users.map(async (user) => {
          const { data: posts } = await axios.get(`http://20.244.56.144/evaluation-service/users/${user.id}/posts`);
          return { ...user, postCount: posts.length };
        })
      );

      const sorted = usersWithPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
      setTopUsers(sorted);
    };

    fetchUsersAndPosts();
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      {topUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
