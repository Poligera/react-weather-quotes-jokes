import React, { useState } from 'react';
import { CityEntryForm, WeatherCard } from '../../components';

const Weather = () => {
    const [inputCityInfo, setInputCityInfo ] = useState("");
    console.log(inputCityInfo);

    const updateCity = (value) => {
        setInputCityInfo(value);
    }

    return(
        <div className="weatherParent">
            <CityEntryForm updateCity={updateCity}/>
            <WeatherCard cityDetails={inputCityInfo}/>
        </div>
    )
}

export default Weather;