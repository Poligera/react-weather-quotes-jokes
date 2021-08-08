import React from 'react';
import { Header } from './layout';
import { About, CountryData, Quotes, Weather } from './pages';
import { Switch, Route } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Weather />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/countries">
          <CountryData />
        </Route>
      </Switch>
    </>
  );
};

export default App;
