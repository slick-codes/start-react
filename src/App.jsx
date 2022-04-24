import Header from './components/Header'
import Controls from './components/Controls'
import './App.css';
// import memeObject from "./resources/memes";
import React from 'react';
import MemeDisplay from './components/MemeDisplay'


async function memeGenerator( ){
  try{
  const response = await fetch('https://api.imgflip.com/get_memes')
  const memesObject = response.json()
  return memesObject.data.memes;
  }catch(error){
    return undefined
  }
}

function App() {

    // eslint-disable-next-line no-unused-vars
    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: ""
    })
    
    React.useEffect( function(){
      (async function(){ changeImage()  })()
      console.log('running')
    }, [])


   async function changeImage(){
    (async function() {
      const memes = await memeGenerator()
      console.log(memes)
      const randomObj = memes[Math.floor(Math.random() * memes.length)];
      setMeme( oldMeme =>  ({ ...oldMeme , randomImage: memes[randomObj] }) )
    })()
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
