import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';

const WeatherCards = ({cityDetails}) => {
    const [ cardContent, setCardContent ] = useState([]);
    useEffect(() => {
        const fetchWeather = async() => {
            try {
                let {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityDetails}&cnt=5&APPID=599c3a748e5fe4204e77f7a454460ef2`);
                const array = data.list.map((day, index) => 
                    {   
                        let dayIndex = index+1;
                        let description = day.weather[0].description;
                        let temp = Math.trunc(day.main.temp - 273.15);
                        let icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
                        let img = '';
                        return {dayIndex, description, temp, icon, img};
                    }
                );
                setCardContent(array);
            } catch(err) {
                console.warn(err);
            }
        }
        fetchWeather();
            
    }, [cityDetails])

    const addOrRemoveImg = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight - 50;
        const randomNum = Math.trunc(Math.random()*100);
        setCardContent(prev => prev.map(el => {
            if(el.img === '') {
                return el = {...el, img: `https://picsum.photos/${windowWidth}/${windowHeight}?random=${randomNum}`}} else {
                return el = {...el, img: ''}}
            })
        )
    }

    const renderCards = (content) => content.map(day => <Card cardContent={day} addImg={addOrRemoveImg} key={day.dayIndex} />);

    return (
        <div>
            <p>
                You have entered <strong>{cityDetails||'*city*'}</strong>
            </p>
                {renderCards(cardContent)} 
            <p><i>Click on any card to get a nice random image. <br></br> Click on the image to close it.</i></p>
        </div>
    )
}

export default WeatherCards;