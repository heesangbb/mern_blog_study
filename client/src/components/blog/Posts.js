import React from 'react';
import PropTypes from 'prop-types';

function Posts({ posts }) {
  const renderPost = () => {
    return posts.map((item, i) => (
      <div key={`${item.id}_${i}`}>
        {i} / {item.id} / {item.title}
      </div>
    ));
  };

  return <div>{posts.length > 0 ? renderPost() : <div>No post found.</div>}</div>;
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
