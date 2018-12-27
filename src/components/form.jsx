import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="city" />
        <button>Confirm</button>
      </form>
    );
  }
}

export default Form;
