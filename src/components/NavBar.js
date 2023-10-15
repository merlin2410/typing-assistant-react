import React from "react";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="left-nav">
        <h2>Typing Assistant</h2>
        <span className="material-symbols-outlined">keyboard_keys</span>
      </div>
      <div className="right-nav">
        <span className="material-symbols-outlined">person</span>
      </div>
    </div>
  );
};

export default NavBar;
