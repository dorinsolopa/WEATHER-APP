import React from "react";
import CardBackground from "../weather_card/CardBackground";
import "./ListWeather.css";

class ListWeight extends React.Component {
  render() {
    const list = this.props.list || [];
    return (
      <div className="listWeather">
        <h3>Forecast</h3>
        <div className="flex1">
          {list.map((item) => {
            const imageUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            return (
              <CardBackground>
                <div className="span">
                  <span>07.24</span> <br/>
                  <span>09:00</span>
                </div>
                <img className="imgHeight" src={imageUrl} />
                <h4>{item.main.temp}</h4>
              </CardBackground>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ListWeight;
