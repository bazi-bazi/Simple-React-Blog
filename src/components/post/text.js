import React from "react";

import "./post.css";

const Text = ({ text }) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

  today = mm + "/" + dd;
  return (
    <div className="posts">
      <p className="post__date">{today}</p>
      <div className="post__content">
        <p className="post__text">{text}</p>
      </div>
    </div>
  );
};

export default Text;
