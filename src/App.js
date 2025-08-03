import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";
import logo from "./AnnekeLogo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header d-flex flex-row align-items-center align-self-center justify-content-center">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <div className="App-name">Dictionary Application</div>
        </header>
        <main className="App-main">
          <Dictionary defaultKeyword="dictionary" />
        </main>
      </div>
    </div>
  );
}

export default App;
