import React from "react";
import Title from "./compoments/Title";
import Form from "./compoments/Form";
import Weather from "./compoments/Weather";

const API_KEY = "d0a10211ea3d36b0a6423a104782130e";
let location = "london";

class App extends React.Component {
  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
