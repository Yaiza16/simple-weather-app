import React from 'react';
import UpcomingDay from './UpcomingDay';
import './Forecast.scss';

const Forecast = ({ forecast }) => (
  <div className="upcoming-days-container">
    {forecast.upcomingDaysData.map((day) => (
      <UpcomingDay day={day} />
    ))}
  </div>
);

export default Forecast;
