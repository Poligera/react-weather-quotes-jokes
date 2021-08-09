import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// We need name, capital, region, currency(code, name, symbol), language.name

const Country = () => {
  const [country, setCountry] = useState();
  const [statusMessage, setStatusMessage] = useState('Loading');

  const params = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        let { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${params.code}`);
        setCountry(data);
        setStatusMessage('');
      } catch (err) {
        console.warn(err);
        setStatusMessage("Sorry, there's been an error");
      }
    };
    fetchCountry();
  }, [params]);

  //   console.log(params.code);

  return (
    <div className="country">
      <h3>{statusMessage ? statusMessage : country.capital}</h3>
    </div>
  );
};

export default Country;
