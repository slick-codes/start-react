// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  let [index, setIndex] = React.useState(0)

  const increamentIndex = () => setIndex(++index)
  const decreamentIndex = () => setIndex(--index)  

  return (
    <div className="counter__app">
      <div className="counter__container">
        {index}
      </div>
      <div className="buttons">
        <button onClick={ decreamentIndex }>-</button>
        <button onClick={ increamentIndex }>+</button>
      </div>
    </div>
  );
}

export default App;
