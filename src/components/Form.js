


const Form = function(props){
    const { formData, updateState } = props 

    const sendForm = function(){
      console.log(formData)
    }

    const validateForm = function(event){
      event.preventDefault()
      sendForm()
      console.log(' ---------------- ')
      const { password , confirmPassword } = formData

      if( password === confirmPassword )
        return console.log('Sucessfully Logged In')
      else 
        return console.log('Password does not match confirm Password')
      

    }
    
    return (
        <form onSubmit={  validateForm   }>
        <input type="text" name="email" value={ formData.email } placeholder="Email" onChange={updateState} />
        <input type="password" name="password" value={ formData.password } placeholder="Password" onChange={updateState} />
        <input type="password" name="confirmPassword" value={ formData.confirmPassword } placeholder="Confirm password" onChange={updateState} />
        <div>
          <input type="checkbox" id="newsletter" value={ formData.isRegisterNewsLetter } name="isRegisterNewsLetter" onChange={updateState} />
          <label htmlFor="newsletter">Signup to our Newsletter</label>
        </div>
        <button>Login</button>
      </form>
    )
}

export default Form