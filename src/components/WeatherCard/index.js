import React, { useState, useEffect } from 'react';
import { CityEntryForm } from '..';
import axios from 'axios';
import env from 'react-dotenv';
const apiKey = '599c3a748e5fe4204e77f7a454460ef2';
const API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityInput}&cnt=3&appid=${apiKey}`;

const WeatherCard = () => {
    return (
        <div>
            <h1>I am a weather card!</h1>
            <p></p>
        </div>
    )
}

export default WeatherCard;