import React from 'react';

const CountryButton = ({ handleButtonClick, country, code }) => 
    <button onClick={() => handleButtonClick(code)} className="countryButton">{country}</button>;

export default CountryButton;
