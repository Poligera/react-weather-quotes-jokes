import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Country, CountryButton } from '../../components';

const CountryData = () => {
  const leastVisitedCountries = [
    { country: 'Tuvalu', code: 'TV' },
    { country: 'Kiribati', code: 'KI' },
    { country: 'Montserrat', code: 'MS' },
    { country: 'Niue', code: 'NU' },
    { country: 'Solomon Islands', code: 'SB' },
    { country: 'Comoros', code: 'KM' },
  ];

  const history = useHistory();

  const loadChosenCountry = (code) => history.push(`/countries/${code}`);

  return (
    // <div id="country-data">
    //   <p>
    //     <i>Here are some least-known countries:</i>
    //   </p>
    //   {leastVisitedCountries.map((el) => (
    //     <CountryButton country={el.country} code={el.code} />
    //   ))}
    <section>
      <Switch>
        <Route exact path={'/countries'}>
          <div id="country-data">
            <p>
              <i>Here are some least-known countries:</i>
            </p>
            {leastVisitedCountries.map((el) => (
              <CountryButton handleButtonClick={() => loadChosenCountry(el.code)} country={el.country} code={el.code} />
            ))}
          </div>
        </Route>
        <Route path={'/countries/:code'}>
          <Country />
        </Route>
      </Switch>
    </section>
  );
};

export default CountryData;
