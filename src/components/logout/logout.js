import React from "react";

import "./logout.css";

const Logout = () => {
  return (
    <div className="logout">
      <h3 className="logout__title">please login to post your blog</h3>
      <p className="logout__icon">
        <i class="fas fa-sign-in-alt"></i>
      </p>
    </div>
  );
};

export default Logout;
