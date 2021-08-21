import React from 'react';
import UpcomingDay from './UpcomingDay';
import './Forecast.scss';
import CurrentDay from './CurrentDay';

const Forecast = ({ forecast }) => (
  <>
    <div className="current-day-container">
      <CurrentDay forecast={forecast.currentDayData} />
    </div>
    <div className="upcoming-days-container">
      {forecast.upcomingDaysData.map((day) => (
        <UpcomingDay day={day} />
      ))}
    </div>
  </>
);

export default Forecast;
