import React from "react";
import "./../assets/styles/controls.css";
import memeObject from "./../resources/memes";

 

function memeGenerator() {
    const memes = memeObject.data.memes;
    const randomObj = memes[Math.floor(Math.random() * memes.length)];
    return randomObj.url
}


const Controls = function (props) {
  
  // eslint-disable-next-line no-unused-vars
  const [memeURL, setMemeURL] = React.useState(memeGenerator())
    
  return (
    <div>
      <div className="controls">
        <section>
          <input type="text" placeholder="Top Section" />
          <input type="text" placeholder="Bottom Section" />
        </section>
        <section>
          <button onClick={ () => setMemeURL( memeGenerator()) } >Get a new meme Image</button>
        </section>
      </div>
      <div className="image__container">
      <img src={ memeURL } alt="" />
      <div className="title__container">
        <h1 className="top__title"> {props.topValue} </h1>
        <h1 className="bottom__title"> {props.bottomValue} </h1>
      </div>
    </div>
    </div>
  );
};

export default Controls;
