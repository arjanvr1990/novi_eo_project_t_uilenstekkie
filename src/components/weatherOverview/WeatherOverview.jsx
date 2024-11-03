import "./WeatherOverview.css";
import React, { useEffect, useState } from "react";
import useFetchWeatherData from "../../hooks/useFetchWeatherData/useFetchWeatherData";
import WeatherCurrent from "../../components/weatherCurrent/WeatherCurrent.jsx";
import WeatherForecast from "../../components/weatherForecast/WeatherForcast.jsx";
import WeatherAdvisory from "../weatherAdvisor/WeatherAdvisory.jsx";

const WeatherOverview = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);

    const latitude = 52.41067461917328;
    const longitude = 4.960928364417612;

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
    // const feelsLikeTemp = weatherData.feels_like;
    const weatherCondition = weatherData.weather?.[0]?.description || "Geen beschrijving";
    const windSpeed = weatherData.wind?.speed || 0;
    const uvIndex = weatherData.uvi || 0;


    let precipitationType = "none";
    if (weatherData.rain) {
        precipitationType = "light";
    }

    return (
        <div>
            <WeatherCurrent weatherData={weatherData}/>

            <WeatherAdvisory
                windSpeed={windSpeed}
                uvIndex={uvIndex}
                precipitationType={precipitationType}
                temperature={currentTemp}
                weatherCondition={weatherCondition}
            />


            <WeatherForecast forecastData={forecastData} />
        </div>
    );
};

export default WeatherOverview;
