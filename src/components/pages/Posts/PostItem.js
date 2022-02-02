import React from 'react';
import "./PostItem.css";

function PostItem(props) {
  return <div className='post'>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <a href="" className='post__btn'><strong>Read More</strong></a>
  </div>;
}

export default PostItem;
