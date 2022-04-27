import Todo from "./Todo";

function Todos(props) {
  const { todosArray } = props;
  const { toggleTodoDisableState, deleteTodo,toggleIsShowCreateModal,activateAllTodo,deactivateAllTodo,deleteSelected } = props.handlers

  const todos = todosArray.map((todo, index) => (
    <Todo key={index} todo={todo} id={ index } handlers={ { toggleTodoDisableState, deleteTodo } }  disabled={ todo.disabled } />
  ));

  const isDisableExsit = todosArray.some( todo => todo.disabled)
  const isAllDisabled = todosArray.every( todo => todo.disabled)

  return (
    <div className="todos">
      <div className="todos__container">
        <div className="todo__header">
          {
            todosArray.length !== 0?
            <section>
              { isAllDisabled? <button onClick={ activateAllTodo } >Deselete All</button> : <button onClick={ deactivateAllTodo }>Select All</button>}
            { isDisableExsit&& <button onClick={ deleteSelected }>Delete Selected</button>   } 
            </section>
            : 
            <section></section>
          }
          <section>
            <button onClick={toggleIsShowCreateModal}> Create Todo </button>
          </section>
        </div>
        <div className="todo__data">{todos}</div>
      </div>
    </div>
  );
}

export default Todos;
