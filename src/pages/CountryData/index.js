import React, { useState, useEffect } from 'react';

import { CountryButton } from '../../components';

const CountryData = () => {
  const [country, setCountry] = useState([]);
  //   const [statusMessage, setStatusMessage] = useState('Loading...');
  const leastVisitedCountries = [
    { country: 'Tuvalu', code: 'TV' },
    { country: 'Kiribati', code: 'KI' },
    { country: 'Montserrat', code: 'MS' },
    { country: 'Niue', code: 'NU' },
    { country: 'Solomon Islands', code: 'SB' },
    { country: 'Comoros', code: 'KM' },
  ];

  return (
    <>
      {leastVisitedCountries.map((el) => (
        <CountryButton country={el.country} />
      ))}
    </>
  );
};

export default CountryData;
