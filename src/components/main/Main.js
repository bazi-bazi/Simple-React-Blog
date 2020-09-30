import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div>
      <form className="form">
        <textarea
          className="textarea"
          name="styled-textarea"
          id="styled"
          onblur="setbg('white')"
        >
          Enter your comment here...
        </textarea>
        <button className="form__button">post</button>
      </form>
    </div>
  );
};

export default Main;
