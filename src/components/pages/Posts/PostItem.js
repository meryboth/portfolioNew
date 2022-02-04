import React from 'react';
import "./PostItem.css";

function PostItem(props) {
  return <div className='post'>
    <div className='post__content'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </div>;
}

export default PostItem;
