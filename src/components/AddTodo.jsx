import React from 'react';

function AddTodo( props ) {

    const { isShow } = props
    const { toggleIsShowCreateModal, createTodo } = props.handlers

    const [ inputValue , setInputValue ] = React.useState( {
      todo: "", description: ""
    } )

    function createTodoFunc(){
      createTodo({ todo: inputValue.todo , description: inputValue.description })
      toggleIsShowCreateModal()
    }

    const updateValues = function(event){
      const { name , value } = event.target
      setInputValue( oldValue => ({...oldValue, [ name ]: value }) )
    }

  return (
    <div className={`create_todo ${ !isShow? 'hide': ''}`} >
      <section className="create__form">
        <div>
          <div className="txt">
            <h4>Todo</h4>
            <p>Insert your todo</p>
          </div>
          <input type="text" name="todo" onChange={ updateValues } placeholder="Enter your Todo" />
        </div>
        <div>
          <div className="txt">
            <h4>Describtion</h4>
            <p>Describe your data</p>
          </div>
          <textarea name="description" onChange={ updateValues } placeholder="Add Describtion" />
          {/* <input type="text" placeholder="Add Describtion" /> */}
        </div>
        <div>
          <button onClick={ createTodoFunc } >Crete Todo</button>
        </div>
      </section>
      <div className="overlay" onClick={ toggleIsShowCreateModal }></div>
    </div>
  );
}
export default AddTodo;
