

function Navigation( props ){
    const { toggleDarkMode } = props.handlers
    const { darkMode } = props

    return (
        <nav>
            <section>
                Todo
            </section>
            <section>
                <div className={`darkmode__toggler ${ darkMode? 'dark' : '' }` }  onClick={ toggleDarkMode } > <div></div></div>
                <button className="create__button">Add Todo</button>
            </section>
        </nav>
    )
}


export default Navigation