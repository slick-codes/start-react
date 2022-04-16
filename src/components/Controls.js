/* eslint-disable no-unused-vars */
import React from "react";
import "./../assets/styles/controls.css";
import memeObject from "./../resources/memes";
import ImageContainer from "./ImageContainer";

function memeGenerator() {
    const memes = memeObject.data.memes;
    const randomObj = memes[Math.floor(Math.random() * memes.length)];
    return randomObj.url
}


const Controls = function (props) {
    
  function changeImage(){
      <ImageContainer  url={ memeGenerator() } />
  }
 
  changeImage()

  return (
      <div className="controls">
        <section>
          <input type="text" placeholder="Top Section" />
          <input type="text" placeholder="Bottom Section" />
        </section>
        <section>
          <button onClick={changeImage} >Get a new meme Image</button>
        </section>
      </div>
  );
};

export default Controls;
