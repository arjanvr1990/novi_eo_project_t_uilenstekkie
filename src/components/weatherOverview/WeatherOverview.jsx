// WeatherOverview.jsx
import React, { useEffect, useState } from 'react';
import useFetchWeatherData from '../../hooks/useFetchWeatherData/useFetchWeatherData';
import WeatherAdvisor from "../../components/weatherAdvisor/WeatherAdvisor.jsx"

const WeatherOverview = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const latitude = 52.3702;  // Amsterdam
    const longitude = 4.8952;   // Amsterdam

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await useFetchWeatherData(latitude, longitude);
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        getWeather();
    }, [latitude, longitude]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const currentTemp = weatherData.main.temp;
    const weatherCondition = weatherData.weather[0].description;
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    const uvIndex = weatherData.current?.uvi || 0; // Veilige toegang tot uvi
    const precipitationType = weatherData.weather[0].main === 'Rain' ? 'heavy' : 'light'; // Eenvoudige voorbeeldwaarde

    return (
        <div>
            <h2>Weeroverzicht</h2>
            <p>Temperatuur: {currentTemp} °C</p>
            <p>Weerconditie: {weatherCondition}</p>
            <p>Luchtvochtigheid: {humidity}%</p>
            <p>Windsnelheid: {windSpeed} m/s</p>
            <WeatherAdvisor
                windSpeed={windSpeed}
                uvIndex={uvIndex}
                precipitationType={precipitationType}
                temperature={currentTemp}
            />
            {/* Andere weerinformatie kan hier worden toegevoegd */}
        </div>
    );
};

export default WeatherOverview;
