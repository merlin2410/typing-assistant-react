import React from "react";

const TypingZone = () => {
  return (
    <div className="TypingZone">
      <div className="timer-area">
        <div className="timer">
          <p>0</p>
        </div>
        <div className="timer-list">
          <p>15s</p>
          <p>30s</p>
          <p>60s</p>
        </div>
      </div>
      <div className="type-area">
        <p>loeml flkdnfldkn odfknfldknf oldfldkf ldknfldk ldknfl d</p>
      </div>
      <div className="options-area">
        <center>
            <span className="material-symbols-outlined">refresh</span>
        </center>
        <center>
            <button className="btn esc">esc</button>
            <span> - reset</span>
        </center>
        <center className="num-btns">
            <button className="btn num">10</button>
            <button className="btn num">50</button>
            <button className="btn num">80</button>
            <button className="btn num">100</button>
            <span> - no. of words</span>
        </center>
      </div>
    </div>
  );
};

export default TypingZone;
