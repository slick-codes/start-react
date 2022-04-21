import Header from './components/Header'
import Controls from './components/Controls'
import './App.css';
import memeObject from "./resources/memes";
import React from 'react';
import MemeDisplay from './components/MemeDisplay'

function memeGenerator() {
  const memes = memeObject.data.memes;
  const randomObj = memes[Math.floor(Math.random() * memes.length)];
  return randomObj.url
}


function App() {

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
    <div className="App">
      <Header />
      <Controls handlers={ {changeImage, updateTopText , updateBottomText} }   />
      <MemeDisplay topText={ meme.topText } bottomText={meme.bottomText} imageURL={ meme.randomImage } />
    </div>
  );
}

export default App;
