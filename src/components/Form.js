


const Form = function(props){
    const { formData, updateState } = props 

    const sendForm = function(event){
      event.preventDefault()
      console.log(formData)
    }
    
    return (
        <form onSubmit={  sendForm   }>
        <input type="text" name="email" value={ formData.email } placeholder="Email" onChange={updateState} />
        <input type="password" name="password" value={ formData.password } placeholder="Password" onChange={updateState} />
        <input type="password" name="forgottenPassword" value={ formData.forgottenPassword } placeholder="Password" onChange={updateState} />
        <div>
          <input type="checkbox" id="newsletter" value={ formData.isRegisterNewsLetter } name="isRegisterNewsLetter" onChange={updateState} />
          <label htmlFor="newsletter">Signup to our Newsletter</label>
        </div>
        <button>Login</button>
      </form>
    )
}

export default Form