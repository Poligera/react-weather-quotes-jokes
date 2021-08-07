import React from 'react';

const Card = ({ cardContent, addImg }) => {
    return (<ul className='card' onClick={addImg}>
                <li>Day {cardContent.dayIndex}</li>
                <li><img src={cardContent.icon}/></li>
                <li>{cardContent.description}, {cardContent.temp}C</li>
                <li>{cardContent.img? <img src={cardContent.img} className='randomImage'/>: <></>}</li>
            </ul>)
}

export default Card;