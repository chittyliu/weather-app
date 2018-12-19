import React, { Component } from "react";
import "./App.css";
import Title from "./components/title.jsx";
import Form from "./components/form.jsx";
import Weather from "./components/weather.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* </header> */}
        <div className="container">
          <Title />
          <Form />
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
