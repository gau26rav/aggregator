import React from "react";
import "./App.css";
import Landing from "./component/Landing/Landing";
import Routes from "./component/Routes/Routes";
import InstallerPrompt from "./component/InstallerPrompt/InstallerPrompt";

function App() {
  return (
    <div className="App">
      <InstallerPrompt/>
      <Routes />
    </div>
  );
}

export default App;
