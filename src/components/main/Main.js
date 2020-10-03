import React, { useState } from "react";
import "./main.css";
import Post from "../post";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { ADD_DATE, ADD_TEXT } from "../../redux/actions/blogactions";

const Main = () => {
  const [text, setText] = useState([""]);
  let dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();

    dispatch({ type: ADD_TEXT, payload: text });
  };

  return (
    <div className="main">
      <ul>
        <Post />
      </ul>

      <form className="form" onSubmit={handleTitle}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="textarea"
          name="textarea"
          placeholder="Enter your post here..."
        />
        <button type="submit" className="form__button">
          post
        </button>
      </form>
    </div>
  );
};

export default Main;
