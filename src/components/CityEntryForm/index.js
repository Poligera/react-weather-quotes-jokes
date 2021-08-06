import React, { useState } from 'react';

const CityEntryForm = ({ updateCity }) => {
    // The form input depends on user entry, so the value will change every time, therefore we need to use 'useState' hook

    const [cityInput, setCityInput] = useState("");
    
    const handleInput = e => setCityInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        updateCity(cityInput); // a function coming from props
        setCityInput("");
    }


    return (
        <>
            <form role="form" aria-label="city form" onSubmit={handleFormSubmit}>
                <label htmlFor="cityName">Enter a city:</label>
                <input type="text" id="cityName" name="cityName" placeholder="Type in a city" onMouseOver={e => e.target.placeholder=''} onMouseOut={e => e.target.placeholder="Type in a city"} value={cityInput} onChange={handleInput}/>
                <input type="submit" value="SUBMIT"/>
            </form>
        </>
    )
}

export default CityEntryForm;