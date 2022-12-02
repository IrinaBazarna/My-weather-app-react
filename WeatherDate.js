import React from "react";
import DayChange from "./DayChange";
import Icon from "./Icon";

export default function WeatherDate(props) {
  return (
    <div className="Weather">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DayChange date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <Icon code={props.data.weather.icon} alt={props.data.description} />
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt={props.data.description}
            className="float-left"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Temperature{Math.round(props.data.temperature)}°C</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
            <li>Description:{props.data.description}</li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
