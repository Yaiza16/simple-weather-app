import React from 'react';
import './Page.scss';
import Header from '../components/Header';
import Form from '../components/Form';
import useForecast from '../hooks/useForecast';
import Error from '../components/Error/Error';
import Loading from '../components/vendors/loading/Loading';

const Page = () => {
  const { submitRequest, isLoading, isError, errorData, forecast } =
    useForecast();
  return (
    <div>
      <Header />
      <div className="main-container">
        {!forecast && (
          <>
            {!isLoading && <Form submitRequest={submitRequest} />}
            {isError && <Error message={errorData} />}
            {isLoading && <Loading />}
          </>
        )}
        {/* {forecast && <Forecast forecast={forecast} />} */}
      </div>
    </div>
  );
};

export default Page;
