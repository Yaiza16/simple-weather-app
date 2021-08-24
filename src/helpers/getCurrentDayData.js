import moment from 'moment';

const getCurrentDayData = (data) => ({
  location: data.timezone.split('/')[1],
  date: moment(new Date(data.daily[0].dt * 1000)).format('dddd'),
  temp: Math.round(Number(data.daily[0].temp.day) - 271.15), // Kelvin to celsius
  tempMax: Math.round(Number(data.daily[0].temp.max) - 271.15),
  tempMin: Math.round(Number(data.daily[0].temp.min) - 271.15),
  pop: data.daily[0].pop * 100, // Probability of precipitation
  humidity: data.daily[0].humidity,
  pressure: data.daily[0].pressure,
  windSpeed: data.daily[0].wind_speed,
  weather: data.daily[0].weather[0].main
});

export default getCurrentDayData;
