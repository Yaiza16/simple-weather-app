import React from 'react';
import './Page.scss';
import Header from '../components/Header';
import Form from '../components/Form';

const Page = () => (
  <div>
    <Header />
    <div className="main-container">
      <Form />
    </div>
  </div>
);

export default Page;
