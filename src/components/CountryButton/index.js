import React from 'react';

const CountryButton = ({ handleButtonClick, country, code }) => {
  return (
    <button onClick={handleButtonClick} className="countryButton" key={code}>
      {country}
    </button>
  );
};

export default CountryButton;
