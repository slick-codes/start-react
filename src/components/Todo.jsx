


function Todo ( props ){
    const { toggleTodoDisableState, deleteTodo } = props.handlers 
    return (
        <div className="todo">
            <section>
               <input type="checkbox" id={`data-${props.id}`} onChange={ () => toggleTodoDisableState(props.id) } checked={  props.disabled } />
            </section>
            <section className={ props.disabled? 'deactivate' : '' }>
                <div className="todo__active_indicator" ></div>  
                <label htmlFor={`data-${props.id}`}>{props.todo.todo}</label>
            </section>
            <section>
                <div className="todo__checkbox" onClick={ () => deleteTodo(props.id) }></div>
            </section>
        </div>
    )
}
export default Todo