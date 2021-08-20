import { useState } from 'react';
import axios from 'axios';
import getCurrentDayData from '../helpers/getCurrentDayData';

const BASE_URL_LATLON = 'https://api.openweathermap.org/data/2.5/forecast';
const BASE_URL_FORECAST = 'https://api.openweathermap.org/data/2.5/onecall';

const useForecast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState('');

  const getLatLon = async (location) => {
    let coord = null;
    await axios(BASE_URL_LATLON, {
      params: { q: location, appid: process.env.REACT_APP_API_KEY }
    })
      .then(({ data }) => {
        coord = data.city.coord;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setIsError(true);
          setIsLoading(false);
          setErrorData('There is not such location');
        }
      });
    return coord;
  };

  const getForecast = async (latLon) => {
    let response = null;
    const exludeParams = 'current,minutely,hourly';
    await axios(BASE_URL_FORECAST, {
      params: {
        lat: latLon.lat,
        lon: latLon.lon,
        exclude: exludeParams,
        appid: process.env.REACT_APP_API_KEY
      }
    })
      .then(({ data }) => {
        response = data;
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
        setErrorData('Some error happened');
      });
    return response;
  };

  const submitRequest = async (location) => {
    setIsLoading(true);
    setIsError(false);

    const coord = await getLatLon(location);
    // console.log(isError);
    if (!coord) return;
    const data = await getForecast(coord);

    console.log(data);
    console.log(getCurrentDayData(data));
  };

  return { submitRequest, isLoading, isError, errorData };
};

export default useForecast;
