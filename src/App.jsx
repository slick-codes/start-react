/* eslint-disable no-unused-vars */
import React from "react";
import "./assets/style/App.css";
import Navigation from "./components/Navigation";
import SearchPanel from "./components/SearchPanel";
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'

let timeout = null
function App() {
  const [config, setConfig] = React.useState({
    darkMode: false,
    searchValue: "",
    isShowCreateModal: false
  });


  const [ todosArray , setTodosArray] = React.useState([])

  const toggleIsShowCreateModal = function(){
    console.log('clickckc')
    setConfig( oldConfig => ({ ...config, isShowCreateModal: !config.isShowCreateModal }) )
  }

  const createTodo = function( todo ){
    console.log('from create function \n', todo)
    setTodosArray( oldTodo => [...oldTodo , { ...todo, timestamp: new Date() } ]  )
  }


  const deactivateAllTodo = function(){
    setTodosArray( oldTodo => oldTodo.map( todo => ({ ...todo, disabled: true}) ))
  }

  const activateAllTodo = function(){
    setTodosArray( oldTodo => oldTodo.map( todo => ({ ...todo, disabled: false}) ))
  }
  
  const deleteSelected = function(){
    setTodosArray( oldTodo => {
      return oldTodo.filter( todo => !todo.disabled)
    })
  }
  
  const deleteTodo = function(key){
    setTodosArray( oldTodos => oldTodos.filter( ( todo , index) => index !== key) )
    console.log(todosArray)
  }

  const toggleTodoDisableState = function(key){
    // console.log('changed', key)
    setTodosArray( function(oldTodo){
        return oldTodo.map( (todo , index) => index === key? {...todo, disabled: !todo.disabled} : todo )
    })

  }
  

  const toggleDarkMode = () =>
    setConfig((oldConfig) => ({ ...oldConfig, darkMode: !oldConfig.darkMode }));
  
    
  const updateSearchValue = event => {
    clearTimeout( timeout )
    timeout = setTimeout( function(){
      setConfig( oldConfig => ({ ...oldConfig , searchValue: event.target.value}) )
    }, 1000)
    
  }

  return (
    <div className="App">
      <header>
        <AddTodo handlers={{ toggleIsShowCreateModal, createTodo}} isShow={ config.isShowCreateModal } />
        <Navigation handlers={{ toggleDarkMode }} config={ config }  />
        <SearchPanel handlers={{ updateSearchValue }} searchValue={ config.searchValue } />
        <Todos  todosArray={ todosArray } handlers={{deactivateAllTodo,deleteSelected, activateAllTodo,  deleteTodo, toggleTodoDisableState, toggleIsShowCreateModal}} />
      </header>
    </div>
  );
}

export default App;
