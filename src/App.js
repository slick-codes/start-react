import React from "react";
import './App.css';
import {useState} from 'react';
import Form from './components/Form'
function App() {

  const [formData , setFormData ] = useState({
    email: "",
    password: "",
    forgottenPassword: "",
    isRegisterNewsLetter: false
  })


  const updateState = function(event){
    // eslint-disable-next-line no-unused-vars
    const {value , name , type , checked} = event.target
    setFormData( oldFormData => ({...oldFormData , [name]: type === 'checkbox'? checked : value  }) )
  }


  return (
    <div className="App">
      <Form formData={formData} updateState={updateState}  />
    </div>
  );
}

export default App;
