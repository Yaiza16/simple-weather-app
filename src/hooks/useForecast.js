import axios from 'axios';

const BASE_URL_LATLON = 'https://api.openweathermap.org/data/2.5/forecast';
const BASE_URL_FORECAST = 'https://api.openweathermap.org/data/2.5/onecall';
// const location = 'London';

const useForecast = () => {
  const getLatLon = async (location) => {
    const { data } = await axios(BASE_URL_LATLON, {
      params: { q: location, appid: process.env.REACT_APP_API_KEY }
    });

    if (!data || data.lenght === 0) {
      /* Set error */
      return {}; // Function should consistently return the same type
    }

    const { coord } = data.city;
    return coord;
  };

  const getForecast = async (latLon) => {
    const exludeParams = 'current,minutely,hourly';
    const { data } = await axios(BASE_URL_FORECAST, {
      params: {
        lat: latLon.lat,
        lon: latLon.lon,
        exclude: exludeParams,
        appid: process.env.REACT_APP_API_KEY
      }
    });

    if (!data || data.lenght === 0) {
      /* Set error */
      return {}; // Function should consistently return the same type
    }

    return data;
  };

  const submitRequest = async (location) => {
    // Set isLoading (true)
    // Set isError(false)

    const coord = await getLatLon(location);
    const data = await getForecast(coord);

    return data;
  };

  return submitRequest;
};
