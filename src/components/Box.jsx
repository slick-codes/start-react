


const Box = function(props){

    const style = {
        backgroundColor: props.darkMode? 'black' : 'gray'
    }


    return (
        <div className="box" onClick={props.handleThemeToggler} style={style} ></div>
    )
}

export default Box