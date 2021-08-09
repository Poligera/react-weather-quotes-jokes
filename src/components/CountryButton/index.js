import React from 'react';

const CountryButton = ({ handleButtonClick, country, code }) => 
    <button onClick={() => handleButtonClick(code)} className="countryButton" key={code}>{country}</button>;

export default CountryButton;
