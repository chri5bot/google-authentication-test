import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Logout />
      </header>
    </div>
  );
}

export default App;
