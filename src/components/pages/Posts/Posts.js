import React from 'react';
import PostItem from './PostItem';
import "./Posts.css";

function Posts() {
  return <div>
    <h1 className="post__title">Blog</h1>
    <div className='posts'>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  </div>;
}

export default Posts;
