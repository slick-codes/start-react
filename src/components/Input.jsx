
import React from 'react';

const Input = function(props){
    const {updateNameHandler , name , placeholder } = props
    
    return(
        <input type="text" onInput={updateNameHandler} value={ name } placeholder={placeholder} />
    )
}

export default Input