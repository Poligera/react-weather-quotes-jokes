import React, { useState } from 'react';
import { CityEntryForm, WeatherCards } from '../../components';

const Weather = () => {
    const [inputCityInfo, setInputCityInfo ] = useState("");

    const updateCity = (value) => {
        setInputCityInfo(value);
    }

    return(
        <div className='cards'>
            <h1>Welcome to 5-Day Weather!</h1>
            <CityEntryForm updateCity={updateCity}/>
            <WeatherCards cityDetails={inputCityInfo}/>
        </div>
    )
}

export default Weather;