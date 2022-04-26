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

  const [ todosArray , setTodosArray] = React.useState([
    {
      todo: "going to learn how to play basket ball", 
      describtion: "How to use a Todo",
      disabled: false
    },
    {
      todo: "going to  how to play basket ball", 
      describtion: "How to use a Todo",
      disabled: true
    }
  ])

  const toggleIsShowCreateModal = function(){
    console.log('clickckc')
    setConfig( oldConfig => ({ ...config, isShowCreateModal: !config.isShowCreateModal }) )
  }

  const addTodo = function(){
    
      console.log('Adding Todo')
  }

  const deleteTodo = function(key){
    setTodosArray( oldTodos => oldTodos.filter( ( todo , index) => index !== key) )
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
        <AddTodo handlers={{ toggleIsShowCreateModal}} isShow={ config.isShowCreateModal } />
        <Navigation handlers={{ toggleDarkMode, toggleIsShowCreateModal }} config={ config }  />
        <SearchPanel handlers={{ updateSearchValue }} searchValue={ config.searchValue } />
        <Todos todosArray={ todosArray } handlers={{deleteTodo, toggleTodoDisableState}} />
      </header>
    </div>
  );
}

export default App;
