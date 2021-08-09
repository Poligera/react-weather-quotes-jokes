import React from 'react';

export default ({text, operation }) =>
    <button className='countButton' onClick={operation}>{text}</button>;