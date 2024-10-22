import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
    const latitude = 52.3702;  // Voorbeeld: Amsterdam
    const longitude = 4.8952;   // Voorbeeld: Amsterdam
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY; // Zorg ervoor dat dit correct is

    useEffect(() => {
        console.log("API Key:", apiKey); // Controleer of de sleutel geladen is
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
                );
                console.log("Response Data:", response.data); // Controleer de response
                setWeatherData(response.data);
            } catch (err) {
                console.error(err); // Foutmelding bij debuggen
                setError('Fout bij het ophalen van weergegevens');
            }
        };

        fetchWeather();
    }, [latitude, longitude, apiKey]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const allWeatherData = JSON.stringify(weatherData.weather[0]);

    return (
        <div>
            <h1>Weerbericht</h1>
            <p>Temperatuur: {temperature} °C</p>
            <p>Beschrijving: {description}</p>
            <p>Alle weerdata: {allWeatherData}</p>
        </div>
    );
};

export default WeatherComponent;
