import React from 'react';

const Card = ({ cardContent, addImg }) => {
    return (<ul key={cardContent.dayIndex} className='card' onClick={addImg}>
                <li>Day {cardContent.dayIndex}</li>
                <li><img src={cardContent.icon}/></li>
                <li>{cardContent.description}, {cardContent.temp}C</li>
                {cardContent.img? <img src={cardContent.img}/>: <></>}
            </ul>)
}

export default Card;