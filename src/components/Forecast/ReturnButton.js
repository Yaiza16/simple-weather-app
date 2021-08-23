import React from 'react';
import { IconReturn } from '../../helpers/Icons';
import './ReturnButton.scss';

const ReturnButton = ({ setForecast, setIsLoading }) => {
  const handleReturn = () => {
    setForecast(null);
    setIsLoading(false);
  };

  return (
    <div
      className="icon-return-container"
      onClick={() => handleReturn()}
      role="button"
      aria-hidden="true"
    >
      <IconReturn />
    </div>
  );
};

export default ReturnButton;
