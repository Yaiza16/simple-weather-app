import moment from 'moment';

// const weatherIconClassName = {
//   'clear sky': 'clear-sky-icon',
//   'few-clouds': 'few-clouds-icon',
//   'scattered clouds': 'scattered-clouds-icon',
//   'broken clouds': 'broken-clouds-icon',
//   'shower rain': 'shower-rain-icon',
//   rain: 'rain-icon',
//   thunderstorm: 'thunderstorm-icon',
//   snow: 'snow-icon',
//   mist: 'mist-icon'
// };

const getCurrentDayData = (data) => ({
  location: data.timezone.split('/')[1],
  date: moment(new Date(data.daily[0].dt * 1000)).format('dddd'),
  temp: data.daily[0].temp.day, // Kelvin
  tempMax: data.daily[0].temp.max,
  tempMix: data.daily[0].temp.min,
  pop: data.daily[0].pop, // probability of precipitation
  windSpeed: data.daily[0].wind_speed,
  weather: data.daily[0].weather[0].description
});

export default getCurrentDayData;
