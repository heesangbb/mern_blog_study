import React, { useState, useEffect } from 'react';
import Blog from './../../components/blog/Blog';

function BlogContainer() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aaa' },
    { id: 2, title: 'bbb' },
    { id: 3, title: 'ccc' },
  ]);

  useEffect(() => {
    console.log('BlogContainer.js', 1111);
    setPosts([...posts, { id: 4, title: 'ddd' }]);
  }, []);

  useEffect(() => {
    console.log('BlogContainer.js', 2222, posts);
  }, [posts]);

  const handleAdd = () => {
    setPosts([...posts, { id: 5, title: 'eee' }]);
  };

  return <Blog posts={posts} onAdd={handleAdd} />;
}

export default BlogContainer;
