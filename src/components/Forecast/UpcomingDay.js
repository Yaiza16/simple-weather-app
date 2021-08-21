import React from 'react';
import IconsWeater from '../vendors/iconsWeather/IconsWeater';
import './UpcomingDay.scss';

const UpcomingDay = ({ day }) => {
  console.log(day);
  return (
    <div key={day.date} className="upcoming-day-container">
      <div className="upcoming-day-date">
        <p className="upcoming-day-name">{day.day}</p>
        <p className="upcoming-day-number">{day.date}</p>
      </div>
      <div className="upcoming-icon-container">
        <IconsWeater />
      </div>
      <div className="upcoming-temp">
        <p className="upcoming-temp__max">
          {day.tempMax}
          <span>&#176;</span>
        </p>
        <p className="upcoming-temp__min">
          / {day.tempMin}
          <span>&#176;</span>
        </p>
      </div>
    </div>
  );
};

export default UpcomingDay;
