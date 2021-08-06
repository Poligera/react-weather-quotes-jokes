import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCard = ({cityDetails}) => {
    const [ weather, setWeather ] = useState();
    // const [ error, setError ] = useState();

    // const apiKey = '599c3a748e5fe4204e77f7a454460ef2';

    // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityDetails}&APPID=599c3a748e5fe4204e77f7a454460ef2`;

    useEffect(() => {
        const fetchWeather = async() => {
            let data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityDetails}&cnt=5&APPID=599c3a748e5fe4204e77f7a454460ef2`);
            console.log(data);
            // setWeather(data);
            }
            fetchWeather();
    }, [cityDetails])

    return (
        <div>
            <p>
                You have entered <strong>{cityDetails||'*city*'}</strong>
            </p>
        </div>
    )
}

export default WeatherCard;