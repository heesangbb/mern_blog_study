import React from 'react';
import PropTypes from 'prop-types';
import Posts from './Posts';

function Blog({ posts, onAdd }) {
  return (
    <div>
      <p>Blog list</p>
      <Posts posts={posts} />

      <button onClick={onAdd}>add</button>
    </div>
  );
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Blog;
