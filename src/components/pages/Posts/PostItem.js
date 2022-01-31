import React from 'react';
import "./PostItem.css";

function PostItem() {
  return <div className='post'>
    <h2>Title Post</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, neque!</p>
    <a href="" className='post__btn'><strong>Read More</strong></a>
  </div>;
}

export default PostItem;
