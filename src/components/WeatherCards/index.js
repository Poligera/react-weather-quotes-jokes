import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
// import Card from '.';

const WeatherCards = ({cityDetails}) => {
    const [ weather, setWeather ] = useState([]);
    useEffect(() => {
        const fetchWeather = async() => {
            try {
                let {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityDetails}&cnt=5&APPID=599c3a748e5fe4204e77f7a454460ef2`);
                console.log(data);
                const array = data.list.map((day, index) => 
                    {   
                        const dayIndex = index+1;
                        const description = day.weather[0].description;
                        const temp = Math.trunc(day.main.temp - 273.15);
                        const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
                        return {dayIndex, description, temp, icon};
                    }
                );
                // console.log(array);
                setWeather(array);
            } catch(err) {
                console.warn(err);
            }
        }
        fetchWeather();
            
    }, [cityDetails])


    return (
        <div>
            <p>
                You have entered <strong>{cityDetails||'*city*'}</strong>
            </p>
            <ul>
                {
                    weather.map((day) => (
                        <div key={day.dayIndex} className='card'>
                            <li>Day {day.dayIndex}</li>
                            <img src={day.icon}></img>
                            <li>{day.description}, {day.temp}C</li>
                            <br></br>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default WeatherCards;