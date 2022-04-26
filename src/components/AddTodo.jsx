function AddTodo( props ) {

    const { isShow } = props
    const { toggleIsShowCreateModal } = props.handlers
    console.log(isShow)

  return (
    <div className={`create_todo ${ !isShow? 'hide': ''}`} >
      <section className="create__form">
        <div>
          <div className="txt">
            <h4>Todo</h4>
            <p>Insert your todo</p>
          </div>
          <input type="text" placeholder="Enter your Todo" />
        </div>
        <div>
          <div className="txt">
            <h4>Describtion</h4>
            <p>Describe your data</p>
          </div>
          <textarea placeholder="Add Describtion" />
          {/* <input type="text" placeholder="Add Describtion" /> */}
        </div>
        <div>
          <button>Crete Todo</button>
        </div>
      </section>
      <div className="overlay" onClick={ toggleIsShowCreateModal }></div>
    </div>
  );
}
export default AddTodo;
