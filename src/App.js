import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d0a10211ea3d36b0a6423a104782130e";

class App extends React.Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    if (city) {
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        // temperature: undefined,
        // humidity: undefined,
        // city: undefined,
        // country: undefined,
        // description: undefined,
        error: "Please enter a city."
      });
    }
  };
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundColor: "#4060b8",
          display: "grid",
          alignItems: "center",
          justifyContent: "space-around",
          height: "-webkit-fill-available"
        }}
      >
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
