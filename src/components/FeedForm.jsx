import React, { useState } from 'react';

export default function FeedForm({ onAddPost }) {
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      onAddPost({ image, content: 'New Image Post' });
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
      <button type="submit">Post</button>
    </form>
  );
}
