import React from "react";
import TempCard from "./TempCard";
import MainCard from "./MainCard"
class WeatherCard extends React.Component {
  render() {
    const info = this.props.info;
    return (
      <div className="infoCard">
        <TempCard weather={info.weather[0]} temp={info.main} /> 
        <MainCard main={info.main}/>
      </div>
    );
  }
}
export default WeatherCard;
