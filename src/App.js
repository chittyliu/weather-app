import React, { Component } from "react";
import "./App.css";
import Title from "./components/title.jsx";
import Form from "./components/form.jsx";
import Weather from "./components/weather.jsx";

const API_KEY = "d0a10211ea3d36b0a6423a104782130e";

class App extends Component {
  state = {
    clouds: undefined,
    humidity: undefined,
    pressure: undefined,
    temperature: undefined,
    error: undefined,
    error_code: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await apiCall.json();
    console.log(data.message);
    if (data.weather) {
      this.setState({
        clouds: data.weather["0"].description,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        error: undefined,
        error_code: undefined
      });
    } else {
      this.setState({
        clouds: undefined,
        humidity: undefined,
        pressure: undefined,
        temperature: undefined,
        error: `Cannot find city ${city}`,
        error_code: data.message
      });
    }

    if (
      this.state.clouds &&
      this.state.humidity &&
      this.state.pressure &&
      this.state.temperature
    ) {
      const locationWeather = [
        {
          clouds: this.state.clouds,
          humidity: this.state.humidity.toString() + "%",
          pressure: this.state.pressure.toString() + " hPa",
          temperature: (this.state.temperature - 273.15).toFixed(1) + "C"
        }
      ];
      console.log(locationWeather);
    } else {
      const locationWeather = [
        {
          error: this.state.error,
          error_code: this.state.error_code
        }
      ];
      console.log(locationWeather);
    }
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        {/* </header> */}
        <div className="container">
          <Title />
          <Form getWeather={this.getWeather} />
          <Weather
            clouds={this.state.clouds}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            temperature={this.state.temperature}
          />
        </div>
      </div>
    );
  }
}

export default App;
