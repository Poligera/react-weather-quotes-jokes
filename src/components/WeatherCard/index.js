import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiKey = '599c3a748e5fe4204e77f7a454460ef2';

const WeatherCard = ({cityDetails}) => {
    const [ weather, setWeather ] = useState([]);
    const [ error, setError ] = useState();

    const API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityDetails}&cnt=3&appid=${apiKey}`;

    useEffect(() => {
        const fetchWeather = async() => {
            try {
                let {list} = await axios.get(API_URL);
            }
            catch {

            }
        }
    })

    return (
        <div>
            <p>
                You have entered <strong>{cityDetails||'*city*'}</strong>
                </p>
        </div>
    )
}

export default WeatherCard;