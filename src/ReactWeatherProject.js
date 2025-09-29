import React from "react";
import axios from "axios";
import { Rings } from 'react-loader-spinner';

export default function ReactWeatherProject () {

    function handleSubmit (response) {
        return (
            alert(`The temperature in New York is ${Math.round(response.data.main.temp)}`)
        )
    }

  const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);

    return (
        <Rings color="#00BFFF" height={80} width={80} />
    )
}