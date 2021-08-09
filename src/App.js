import React, { useEffect, useState } from 'react';
import { Header } from './layout';
import { About, CounterPage, CountryData, Quotes, Weather } from './pages';
import { Switch, Route } from 'react-router-dom';
import './index.css';

const App = () => {
  const [color, setColor] = useState('auto');
  const colorArray = ['#C6AC85', '#E2E5CB', '#D9C2BD', '#A2C4C6', '#82B2B8', '#CCD4BF', '#E7CBA9', '#EEBAB2', '#F5F3E7', '#F5E2E4'];

  useEffect(() => {
    const changeColor = () => {
      let randomNum = Math.floor(Math.random() * 11 + 1);
      setColor(colorArray[randomNum]);
      document.body.style.backgroundColor = color;
    };
    const colorStream = setInterval(changeColor, 3000);
    return () => clearInterval(colorStream);
  }, [color]);

  return (
    <div>
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
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route path="/countries">
          <CountryData />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
