import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="logo">
      <h1 className="logo__text">
        simple <br />
        react <br />
        blog
      </h1>
      <div className="header">
        <p>number of posts</p>
        <p>latest posts</p>
      </div>
    </div>
  );
};

export default Header;
