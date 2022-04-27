

function Navigation( props ){
    const { toggleDarkMode } = props.handlers
    const { darkMode } = props.config


    return (
        <nav>
            <section>
                Todo
            </section>
            <section>
                <div className={`darkmode__toggler ${ darkMode? 'dark' : '' }` }  onClick={ toggleDarkMode } > <div></div></div>
            </section>
        </nav>
    )
}


export default Navigation