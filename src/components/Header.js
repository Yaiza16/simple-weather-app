import React from 'react';
import './Header.scss';

const Header = ({ setForecast, setIsLoading }) => {
  const handleMainPage = () => {
    setForecast(null);
    setIsLoading(false);
  };

  return (
    <header className="header-site">
      <a href="!#" className="title-site-link" onClick={() => handleMainPage()}>
        <h1 className="title-site">
          Simple <span className="title-site__bold">weather app</span>
        </h1>
      </a>
    </header>
  );
};

export default Header;
