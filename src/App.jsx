import React from "react";
import "./assets/style/App.css";
import Navigation from "./components/Navigation";
import SearchPanel from "./components/SearchPanel";

function App() {
  const [config, setConfig] = React.useState({
    darkMode: false,
  });

  const toggleDarkMode = () =>
    setConfig((oldConfig) => ({ ...oldConfig, darkMode: !oldConfig.darkMode }));

  return (
    <div className="App">
      <header>
        <Navigation handlers={{ toggleDarkMode }} darkMode={config.darkMode} />
        <SearchPanel />
      </header>
    </div>
  );
}

export default App;
