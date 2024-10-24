import "./WeatherCurrent.css"
import React from 'react';

const WeatherCurrent = ({ weatherData }) => {

    const { main, weather, wind } = weatherData || {};

    if (!main) {
        return <div>Loading...</div>;
    }

    const { temp, feels_like, humidity } = main;
    const weatherDescription = weather[0]?.description || "Geen beschrijving beschikbaar";
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`;

    return (
        <div className="weather-current">
            <h2>Huidig Weer</h2>
            <img src={weatherIcon} alt={weatherDescription} />
            <p>Temperatuur: {temp.toFixed(1)} °C</p>
            <p>Gevoelsmatige temperatuur: {feels_like.toFixed(1)} °C</p>
            <p>Luchtvochtigheid: {humidity}%</p>
            <p>Weerconditie: {weatherDescription}</p>
            <p>Windsnelheid: {wind?.speed.toFixed(1)} m/s</p>
        </div>
    );
};

export default WeatherCurrent;
