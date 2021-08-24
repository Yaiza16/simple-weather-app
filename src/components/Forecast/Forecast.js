import React from 'react';
import UpcomingDay from './UpcomingDay';
import './Forecast.scss';
import CurrentDay from './CurrentDay';
import ReturnButton from './ReturnButton';

const Forecast = ({ forecast, setForecast, setIsLoading }) => (
  <div className="forecast-container">
    <ReturnButton setForecast={setForecast} setIsLoading={setIsLoading} />
    <div className="current-day-container">
      <CurrentDay forecast={forecast.currentDayData} />
    </div>
    <div className="upcoming-days-container">
      {forecast.upcomingDaysData.map((day) => (
        <UpcomingDay day={day} key={day.date} />
      ))}
    </div>
  </div>
);

export default Forecast;
