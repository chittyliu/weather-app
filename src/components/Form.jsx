import React, { Component } from "react";
import "../App.css";

class Form extends Component {
  render() {
    return (
      <form className="componentcontainer" onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City" />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
