import React from 'react';
import './Page.scss';
import Header from '../components/Header';
import Form from '../components/Form';
import useForecast from '../hooks/useForecast';
import Error from '../components/Error/Error';
import Loading from '../components/vendors/loading/Loading';
import Forecast from '../components/Forecast/Forecast';

const Page = () => {
  const {
    submitRequest,
    isLoading,
    isError,
    errorData,
    forecast,
    setForecast,
    setIsLoading
  } = useForecast();
  return (
    <div>
      <Header />
      {!forecast && (
        <div className="main-container">
          {!isLoading && <Form submitRequest={submitRequest} />}
          {isError && <Error message={errorData} />}
          {isLoading && <Loading />}
        </div>
      )}
      {forecast && (
        <div className="main-container main-container--weather">
          <Forecast
            forecast={forecast}
            setForecast={setForecast}
            setIsLoading={setIsLoading}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
