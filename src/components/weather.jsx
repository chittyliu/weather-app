import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        <p>Clouds: {this.props.clouds}</p>
        <p>Humidity: {this.props.humidity}%</p>
        <p>Pressure: {this.props.pressure} hPa</p>
        <p>Temperature: {(this.props.temperature - 273.15).toFixed(1)}C</p>
      </div>
    );
  }
}

export default Weather;
