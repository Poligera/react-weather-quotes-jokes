import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Country = () => {
    const [ country, setCountry ] = useState();
    const [ statusMessage, setStatusMessage ] = useState('Loading');

    const params = useParams();

    useEffect(() => {
        const fetchCountry = async() => {
            try {
                let { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${params.code}`);
                setCountry(data);
                setStatusMessage('');
                console.log(data);
            } catch (err) {
                console.warn(err);
                setStatusMessage("Sorry, there's been an error")
            }
        }
        fetchCountry();
    }, [params])


    return <div className='country'>
        <h3><pre>{statusMessage? statusMessage: `country: ${country.name}.\ncapital: ${country.capital}\ncurrency: ${country.currencies[0].name} (${country.currencies[0].symbol})\nmain language: ${country.languages[0].name}`}</pre></h3>
    </div>
}

export default Country;
