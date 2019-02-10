import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City" />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
