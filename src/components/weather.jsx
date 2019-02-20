import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.clouds && <p>Clouds: {this.props.clouds}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
        {this.props.pressure && <p>Pressure: {this.props.pressure} hPa</p>}
        {this.props.temperature && (
          <p>Temperature: {(this.props.temperature - 273.15).toFixed(1)}C</p>
        )}
      </div>
    );
  }
}

export default Weather;
