import React from "react";

import "./post.css";

const Post = ({ title, text }) => {
  return (
    <div className="post">
      <p className="post__date">04/11</p>
      <div className="post__content">
        <h3 className="post__title">{title}</h3>
        <p className="post__text">{text}</p>
      </div>
    </div>
  );
};

export default Post;
