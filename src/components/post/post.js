import React from "react";
import { useSelector } from "react-redux";

import Text from "./text";

import "./post.css";

const Post = () => {
  let texts = useSelector((state) => state.text);
  const listtext = texts.map((text) => (
    <Text key={text.toString()} text={text} />
  ));
  return (
    <div className="post">
      <div className="post__contents">{listtext}</div>
    </div>
  );
};

export default Post;
