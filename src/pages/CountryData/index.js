import React, { useState, useEffect } from 'react';

import { CountryButton } from '../../components';

const CountryData = () => {
  // const [countries, setCountry] = useState([]);
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
    <div id="country-data">
      <p><i>Here are some least-known countries:</i></p>
      {leastVisitedCountries.map((el) => (
        <CountryButton country={el.country} code={el.code}/>
      ))}
    </div>
  );
};

export default CountryData;
