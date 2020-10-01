import React from "react";
import "./main.css";
import Post from "../post";

const Main = () => {
  return (
    <div className="main">
      <Post />
      <form className="form">
        <textarea
          className="textarea"
          name="textarea"
          placeholder="Enter your comment here..."
        />
        <button className="form__button">post</button>
      </form>
    </div>
  );
};

export default Main;
