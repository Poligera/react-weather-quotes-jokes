import React, { useEffect, useState } from 'react';
import { Header } from './layout';
import { About, CounterPage, CountryData, Quotes, Weather } from './pages';
import { Switch, Route } from 'react-router-dom';
import './index.css';


const App = () => {
  const [color, setColor] = useState('auto');
  const colorArray = ['#C6AC85', '#E2E5CB', '#D9C2BD', '#A2C4C6', '#82B2B8'];

  useEffect(() => {
    const changeColor = () => {
      document.body.style.backgroundColor = colorArray[Math.floor(Math.random()*7)]
  } 
    changeColor();
    const colorStream = setInterval(changeColor, 3000); 
    console.log(color);
    return () => clearInterval(colorStream);
  }, []);

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
