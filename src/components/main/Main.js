import React, { useState } from "react";
import "./main.css";
import Post from "../post";
import Logout from "../logout";
import { useDispatch } from "react-redux";
import { ADD_TEXT } from "../../redux/actions/blogactions";
import { useSelector } from "react-redux";

const Main = () => {
  const loginLogic = useSelector((state) => state.login);
  const [text, setText] = useState([""]);
  let dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();

    dispatch({ type: ADD_TEXT, payload: text });
  };

  return (
    <div className="main">
      {loginLogic ? (
        <Logout />
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default Main;
