import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Text from "./text";

import "./post.css";

const Post = () => {
  let texsts = useSelector((state) => state.text);
  const listText = texsts.map((text) => <Text key={uuidv4()} text={text} />);
  return (
    <div className="post">
      <div className="post__contents">{listText}</div>
    </div>
  );
};

export default Post;
