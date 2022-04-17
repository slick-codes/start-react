import './App.css';
import Input from './components/Input';
import Header from './components/Header';
import React from 'react';
import Body from './components/Body'
function App() {

  
  const [ name , setName  ] = React.useState("Paul")

  const updateName = event =>{
     setName(event.target.value)
  } 

  return (
    <div className="App">
      <Input updateNameHandler={updateName} name={name} placeholder={name} />
      <Header name={name} />  
      <Body name={name} />
    </div>
  );
}

export default App;
