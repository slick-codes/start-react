import React from "react";

function App() {

  // eslint-disable-next-line no-unused-vars
  const [inputObj , setInputObj] = React.useState({
    firstName: "",
    lastName: ""
  })
  
  function updateState(event){
    setInputObj( oldValue =>  ({ ...oldValue , [event.target.getAttribute('name')]: event.target.value}) )
  }

  return (
    <div className="App">
      <input type="text" placeholder="first Name" name="firstName" value={ inputObj.firstName } onChange={updateState} />
      <input type="text" placeholder="first Name" name="lastName"  value={ inputObj.lastName } onChange={updateState}/>
    </div>
  );
}

export default App;
