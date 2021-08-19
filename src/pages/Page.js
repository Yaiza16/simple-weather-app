import React from 'react';
import './Page.scss';
import Header from '../components/Header';
import Form from '../components/Form';
import useForecast from '../hooks/useForecast';
import Error from '../components/Error/Error';

const Page = () => {
  const { submitRequest, isError, errorData } = useForecast();

  return (
    <div>
      <Header />
      <div className="main-container">
        <Form submitRequest={submitRequest} />
        {isError && <Error message={errorData} />}
      </div>
    </div>
  );
};

export default Page;
