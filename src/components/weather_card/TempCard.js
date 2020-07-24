import React from "react";
import "./CardBackground.css"

const TempCard = (props) => {

  const { temp, weather } = props;
  console.log("temp-->", temp);
  const imageUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="rowTemp">
    <div>
    <img className="height" src={imageUrl} />
    </div>
  
      <div>
        <h1 className="fontSize">{temp.temp}</h1>
        <h5>{weather.description}</h5>
      </div>
    </div>
  );
};
export default TempCard;
