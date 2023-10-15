import React,{useEffect, useState} from "react";
import { generate } from "random-words";

const TypingZone = () => {

 
 const [words,setWords] = useState([]);

 useEffect(()=>{
    setWords(generate(50));
 },[]);

 function handleClick(wordLength){
    setWords(generate(wordLength));
 }

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
        {
            words.map((word)=>{
               
                return (
                    <span className="word">{word}</span>
                )
            })
        }
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
            <button onClick={()=>{handleClick(10)}} className="btn num">10</button>
            <button onClick={()=>{handleClick(50)}} className="btn num">50</button>
            <button onClick={()=>{handleClick(80)}} className="btn num">80</button>
            <button onClick={()=>{handleClick(100)}} className="btn num">100</button>
            <span> - no. of words</span>
        </center>
      </div>
    </div>
  );
};

export default TypingZone;
