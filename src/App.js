import React from "react";
import Title from "./compoments/Title";
import Form from "./compoments/Form";
import Weather from "./compoments/Weather";
class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
