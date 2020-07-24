import React from "react";
import "./WeatherSearch.css";

class WeatherSearch extends React.Component {

  
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("onSearch-->");
      this.props.onSearch(event.target.value);
    }
  };

  render() {
    return (
      <div className="weather_center centered">
        <h1 className="title">WEATHER APP</h1>
        <input
          className="border form"
          placeholder="Enter city"
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}
export default WeatherSearch;
