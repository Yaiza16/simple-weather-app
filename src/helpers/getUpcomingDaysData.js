import moment from 'moment';

const upcomingDaysDataOrganization = (data) => ({
  day: moment(new Date(data.dt * 1000))
    .format('dddd')
    .substring(0, 3),
  date: moment(new Date(data.dt * 1000))
    .format('L')
    .split(',')[0]
    .substr(0, 5),
  temp: data.temp.day,
  tempMax: data.temp.max,
  tempMix: data.temp.min
});

// const getUpcomingDaysData = (data) => {
//   // for (let i = 1; i < data.daily.length; i++) {
//   //   data.daily[i].map((day) => {
//   //     const dayItem = upcomingDaysDataOrganization(day);
//   //     dayItem.push(upcomingDaysData);
//   //     return upcomingDaysData;
//   //   });
//   }
// };

const getUpcomingDaysData = (data) => {
  const upcomingDayData = data.daily.map((day) =>
    upcomingDaysDataOrganization(day)
  );

  upcomingDayData.shift();

  return upcomingDayData;
};

export default getUpcomingDaysData;
