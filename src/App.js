// import logo from './logo.svg';
import './App.css';


function print( event ){
  console.log('Hello Word')
  console.log(event)
}

function App() {
  return (
    <div className="App">
      <div className="sqaure"></div>
      <button  onClick={ print } >Click Me</button>
    </div>
  );
}

export default App;
