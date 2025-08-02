import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./AnnekeLogo.png";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <header className="App-header m-5 d-flex flex-row align-items-center align-self-center justify-content-center">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <div className="App-name">Dictionary Application</div>
      </header>
    </div>
  );
}

export default App;
