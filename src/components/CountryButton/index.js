import React from 'react';

const CountryButton = ({ country, code }) => {
  console.log(country, code);
  return <button className="countryButton" key={code}>{country}</button>;
};

export default CountryButton;
