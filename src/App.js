// import logo from './logo.svg';
import './App.css';
import React from 'react';
// TODO insert push this branch
function App() {
  let [index, setIndex] = React.useState(1)
  const [characterName , setCharacterName ] = React.useState("Placeholder")
  const increamentIndex = () => setIndex(++index)
  const decreamentIndex = () => setIndex( index > 0? --index : 0)  

  React.useEffect( function(){
     ( async function(){
       try{
         const response = await fetch('https://swapi.dev/api/people/' + index)
         const nameObj = await response.json()
         setCharacterName(nameObj.name)
       }catch(error){
         setCharacterName("An Error Occured!")
       }
    })()

  }, [index] )

  return (
    <div className="counter__app">
      <div className="counter__container">
        {index}
      </div>
      <div className="buttons">
        <button onClick={ decreamentIndex }>-</button>
        <button onClick={ increamentIndex }>+</button>
      </div>
      { characterName }
    </div>
  );
}

export default App;
