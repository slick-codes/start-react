import React from 'react';
import './assets/style/App.css';
import Navigation from './components/Navigation';

function App() {

  const [config , setConfig] = React.useState({
    darkMode: false
  })

  const toggleDarkMode = () => setConfig( oldConfig => ( {...oldConfig, darkMode: !oldConfig.darkMode} ) )


  return (
    <div className="App">
      <Navigation handlers={{ toggleDarkMode }} darkMode={ config.darkMode } />
    </div>
  );
}

export default App;
