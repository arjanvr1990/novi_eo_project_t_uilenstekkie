import "./WeatherOverview.css";
import React, { useEffect, useState } from "react";
import useFetchWeatherData from '../../hooks/useFetchWeatherData/useFetchWeatherData';
import WeatherCurrent from "../../components/weatherCurrent/WeatherCurrent.jsx"
import WeatherForecast from "../../components/weatherForecast/WeatherForcast.jsx";
import WeatherAdvisor from "../weatherAdvisor/WeatherAdvisor.jsx";

const WeatherOverview = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);

    const latitude = 52.3702;  // Amsterdam
    const longitude = 4.8952;   // Amsterdam

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await useFetchWeatherData(latitude, longitude);
                setWeatherData(data.current);
                setForecastData(data.daily);
            } catch (err) {
                setError(err.message);
            }
        };

        getWeather();
    }, [latitude, longitude]);


    if (error) {
        return <div>Error: {error}</div>;
    }


    if (!weatherData || !forecastData) {
        return <div>Loading...</div>;
    }


    const currentTemp = weatherData.temp;
    const feelsLikeTemp = weatherData.feels_like;
    const weatherCondition = weatherData.weather?.[0]?.description || "Geen beschrijving";
    const windSpeed = weatherData.wind?.speed || 0;
    const uvIndex = weatherData.uvi || 0;
    const precipitationType = weatherData.weather?.[0]?.main === "Rain" ? "heavy" : "light";

    return (
        <div>
            <WeatherAdvisor
                windSpeed={windSpeed}
                uvIndex={uvIndex}
                precipitationType={precipitationType}
                temperature={currentTemp}
            />

            <WeatherCurrent weatherData={weatherData} />
            <WeatherForecast forecastData={forecastData} />
        </div>
    );
};

export default WeatherOverview;

