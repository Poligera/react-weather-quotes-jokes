import React, { useState } from 'react';
import { CityEntryForm, WeatherCards } from '../../components';

const Weather = () => {
    const [inputCityInfo, setInputCityInfo ] = useState("");
    console.log(inputCityInfo);

    const updateCity = (value) => {
        setInputCityInfo(value);
    }

    return(
        <div className="weatherParent">
            <CityEntryForm updateCity={updateCity}/>
            <WeatherCards cityDetails={inputCityInfo}/>
        </div>
    )
}

export default Weather;