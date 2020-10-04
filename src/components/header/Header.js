import React from "react";
import "./header.css";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { ADD_LOGIN } from "../../redux/actions/blogactions";

const Header = () => {
  const loginLogic = useSelector((state) => state.login);
  const textLength = useSelector((state) => state.text);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: ADD_LOGIN });
  };
  return (
    <div className="logo">
      <h1 className="logo__text">
        simple <br />
        react <br />
        blog
      </h1>
      <div className="header">
        <p>
          number of posts:{" "}
          <span className="header__posts">{textLength.length}</span>
        </p>
        <button className="header__button" onClick={handleLogin}>
          {loginLogic ? "login" : "logout"}
        </button>
      </div>
    </div>
  );
};

export default Header;
