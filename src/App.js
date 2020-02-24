import React from "react";
import "./App.css";
import Landing from "./component/Landing/Landing";
import Routes from "./component/Routes/Routes";
import InstallerPrompt from "./component/InstallerPrompt/InstallerPrompt";
import LanguageSelection from "./vernac/LanguageSelection";

function App(props) {
  return (
    <div className="App">
      <LanguageSelection />
      <InstallerPrompt />
      <Routes />
    </div>
  );
}

export default App;
