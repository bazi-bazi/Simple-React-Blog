import React, { useState } from "react";
import "./main.css";
import Post from "../post";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { ADD_TITLE, ADD_DATE, ADD_TEXT } from "../../redux/actions/blogactions";
import { useSelector } from "react-redux";

const Main = () => {
  let titles = useSelector((state) => state.title);
  let texts = useSelector((state) => state.text);

  const [title, setTitle] = useState([""]);
  const [text, setText] = useState([""]);
  let dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TITLE, payload: title });
    dispatch({ type: ADD_TEXT, payload: text });
  };

  return (
    <div className="main">
      {/* {titles.map((title) => (
        <Post key={title.toString()} title={title} text={text} />
      ))} */}
      <Post title={titles} text={texts} />
      <form className="form" onSubmit={handleTitle}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          name="title"
          className="titlearea"
          placeholder="Enter your title here..."
        />
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
