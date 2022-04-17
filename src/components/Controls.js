import React from "react";
import "./../assets/styles/controls.css";
import memeObject from "./../resources/memes";
import MemeDisplay from "./MemeDisplay";

 

function memeGenerator() {
    const memes = memeObject.data.memes;
    const randomObj = memes[Math.floor(Math.random() * memes.length)];
    return randomObj.url
}


const Controls = function () {
  
  // eslint-disable-next-line no-unused-vars
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: memeGenerator()
  })
  
  function changeImage(){
    setMeme( () => {
      return { ...meme , randomImage: memeGenerator()}
    })
  }
  const updateTopText = event => setMeme({...meme , topText: event.target.value})
  const updateBottomText = event => setMeme({...meme , bottomText: event.target.value})

  return (
    <div>
      <div className="controls">
        <section>
          <input type="text" onInput={updateTopText} placeholder="Top Section" />
          <input type="text" onInput={updateBottomText} placeholder="Bottom Section" />
        </section>
        <section>
          <button onClick={changeImage}>Get a new meme Image</button>
        </section>
      </div>
     <MemeDisplay topText={ meme.topText } bottomText={meme.bottomText} imageURL={ meme.randomImage } />

    </div>
  );
};

export default Controls;
