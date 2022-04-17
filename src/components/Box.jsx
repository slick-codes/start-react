
import React from "react"

const Box = function(props){

    const [theme, setTheme] = React.useState(props.darkMode)

    function toggleTheme(){
        setTheme( oldTheme => !oldTheme)
    }

    const style = {
        backgroundColor: theme? '#333' : 'transparent',
        borderColor: theme && 'transparent'
    }


    return (
        <div className="box" onClick={toggleTheme} style={style} ></div>
    )
}

export default Box