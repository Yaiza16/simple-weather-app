import { useState } from 'react';
import axios from 'axios';

const BASE_URL_LATLON = 'https://api.openweathermap.org/data/2.5/forecast';
const BASE_URL_FORECAST = 'https://api.openweathermap.org/data/2.5/onecall';

const useForecast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState('');

  const getLatLon = async (location) => {
    await axios(BASE_URL_LATLON, {
      params: { q: location, appid: process.env.REACT_APP_API_KEY }
    })
      .then(({ data }) => {
        const { coord } = data.city;
        return coord;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setIsError(true);
          setIsLoading(false);
          setErrorData('There is not such location');
        }
      });
  };

  const getForecast = async (latLon) => {
    const exludeParams = 'current,minutely,hourly';
    await axios(BASE_URL_FORECAST, {
      params: {
        lat: latLon.lat,
        lon: latLon.lon,
        exclude: exludeParams,
        appid: process.env.REACT_APP_API_KEY
      }
    })
      .then(({ data }) => data)
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
        setErrorData('Some error happened');
      });
  };

  const submitRequest = async (location) => {
    setIsLoading(true);
    setIsError(false);

    const coord = await getLatLon(location);
    console.log(isError);
    if (!coord) return;
    const data = await getForecast(coord);

    console.log(data);
  };

  return { submitRequest, isLoading, isError, errorData };
};

export default useForecast;
