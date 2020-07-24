import React from "react";
import CardBackground from "./CardBackground.js";
import "./CardBackground.css";

class MainCard extends React.Component {
  render() {
    const { main,wind, list } = this.props;
    return (
      <CardBackground >
        <div className="grid-container">
          <div className="padding">
            <h4>{main.temp_max}</h4>
            <span>Hight</span>
          </div>
          <div className="padding">
            <h4>speed</h4>
            <span>Wind</span>
          </div>
          <div className="padding">
            <h4>7:38</h4>
            <span>Sunrise</span>
          </div>
          <div className="padding">
            <h4>{main.temp_min}</h4>
            <span>Low</span>
          </div>
          <div className="padding">
            <h4>rain</h4>
            <span>Rain</span>
          </div>
          <div className="padding">
            <h4>10:16</h4>
            <span>Sunset</span>
          </div>
        </div>
      </CardBackground>
    );
  }
}
export default MainCard;
