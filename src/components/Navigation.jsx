

function Navigation( props ){
    const { toggleDarkMode, toggleIsShowCreateModal } = props.handlers
    const { darkMode } = props.config


    return (
        <nav>
            <section>
                Todo
            </section>
            <section>
                <div className={`darkmode__toggler ${ darkMode? 'dark' : '' }` }  onClick={ toggleDarkMode } > <div></div></div>
                <button className="create__button" onClick={ toggleIsShowCreateModal } >Add Todo</button>
            </section>
        </nav>
    )
}


export default Navigation