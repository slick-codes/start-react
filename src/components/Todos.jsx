import Todo from "./Todo";

function Todos(props) {
  const { todosArray } = props;
  const { toggleTodoDisableState } = props.handlers

  const todos = todosArray.map((todo, index) => (
    <Todo key={index} todo={todo} id={ index } handlers={ { toggleTodoDisableState } }  disabled={ todo.disabled } />
  ));

  return (
    <div className="todos">
      <div className="todos__container">
        <div className="todo__header"></div>
        <div className="todo__data">{todos}</div>
      </div>
    </div>
  );
}

export default Todos;
