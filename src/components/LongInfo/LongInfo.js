import React from "react";
import "./LongInfo.css";
import WeatherCard from "../weather_card/WeatherCard";
class LongInfo extends React.Component {
  render() {
    const info = this.props.info;
    return (
      <div>
        <div className="sys">
          <h1>{info.name} </h1>
          <h1>,{info.sys.country}</h1>
        </div>
        <WeatherCard info={info} />
      </div>
    );
  }
}
export default LongInfo;
