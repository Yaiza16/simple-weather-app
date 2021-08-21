import React from 'react';
import IconsWeater from '../vendors/iconsWeather/IconsWeater';
import './CurrentDay.scss';

const CurrentDay = ({ forecast }) => (
  <>
    <div className="current-day-main">
      <p className="current-day-title">{forecast.location}</p>
      <p className="current-day-date">{forecast.date}</p>
      <p className="current-day-temp">
        {forecast.temp}
        <span className="current-day-temp__symbol">&#176;</span>
      </p>
      <div className="icon-container">
        <IconsWeater />
      </div>
      <p className="current-day-weather">{forecast.weather}</p>
    </div>

    <div className="current-day-data">
      <p className="current-day-data__item">
        Max temp:
        <span className="current-day-data__data">
          {' '}
          {forecast.tempMax}&#176;
        </span>
      </p>
      <p className="current-day-data__item">
        Min temp:
        <span className="current-day-data__data">{forecast.tempMin}&#176;</span>
      </p>
      <p className="current-day-data__item">
        % Precipitation:
        <span className="current-day-data__data">{forecast.pop}%</span>
      </p>
      <p className="current-day-data__item">
        Humidity:
        <span className="current-day-data__data">{forecast.humidity}%</span>
      </p>
      <p className="current-day-data__item">
        Wind:
        <span className="current-day-data__data">
          {forecast.windSpeed} km/h
        </span>
      </p>
    </div>
  </>
);

export default CurrentDay;
