import React, { useState } from 'react';
import { CountButton } from '..';

export default () => {
    const [ count, setCount ] = useState(0);

    const add = () => {
        setCount(prev => prev+1);
    }

    const subtract = () => {
        setCount(prev => prev - 1);
    }

    


    return <div id="counter">
                <CountButton text='-' operation={subtract}/>
                <span>{count}</span>
                <CountButton text='+' operation={add}/>
            </div>
}