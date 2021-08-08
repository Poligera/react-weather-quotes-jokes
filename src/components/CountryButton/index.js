import React from 'react';

const CountryButton = ({ country, code }) => {
  return <button key={code}>{country}</button>;
};

export default CountryButton;
