import React from "react";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";

import LoginMicrosoft from "./LoginMicrosoft";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Logout />
        <hr />
        <LoginMicrosoft />
      </header>
    </div>
  );
}

export default App;
