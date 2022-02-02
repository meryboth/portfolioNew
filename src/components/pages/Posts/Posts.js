import React from 'react';
import PostItem from './PostItem';
import "./Posts.css";
import PostData from './PostData';

function Posts() {
  const postData = PostData;

  const post = postData.map((post) => {
    return (
      <PostItem
        key={post.id}
        title={post.title}
        description={post.description}
        url={post.url}
      />
    );
  });

  return <div>
    <h1 className="post__title">Blog</h1>
    <div className='posts'>
      {post}
    </div>
  </div>;
}

export default Posts;
