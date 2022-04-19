import React from "react";
import './App.css';
import {useState} from 'react';

function App() {

  const [formData , setFormData ] = useState({
    email: "",
    password: "",
    isRegisterNewsLetter: false
  })


  const updateState = function(event){
    // eslint-disable-next-line no-unused-vars
    const {value , name , type , checked} = event.target
    setFormData( oldFormData => ({...oldFormData , [name]: type === 'checkbox'? checked : value  }) )
  }

  const sendForm = function(event){
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={  sendForm   }>
        <input type="text" name="email" value={ formData.email } placeholder="Email" onChange={updateState} />
        <input type="password" name="password" value={ formData.password } placeholder="Password" onChange={updateState} />
        <div>
          <input type="checkbox" id="newsletter" value={ formData.isRegisterNewsLetter } name="isRegisterNewsLetter" onChange={updateState} />
          <label htmlFor="newsletter">Signup to our Newsletter</label>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
