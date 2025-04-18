import React from 'react';

export default function UserCard({ user }) {
  return (
    <div className='card'>
      <strong>{user.name || user.username}</strong> – Posts: {user.postCount}
    </div>
  );
}
