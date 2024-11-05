import "./WeatherOverview.css";
import { useEffect, useState } from "react";
import fetchWeatherData from "../../helpers/fetchWeatherData/fetchWeatherData.js";
import WeatherCurrent from "../../components/weatherCurrent/WeatherCurrent.jsx";
import WeatherForecast from "../../components/weatherForecast/WeatherForcast.jsx";
import WeatherAdvisory from "../weatherAdvisor/WeatherAdvisory.jsx";
import { defaultCoordinates } from "../../config/config.js";

const WeatherOverview = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);

    const latitude = defaultCoordinates[1];
    const longitude = defaultCoordinates[0];

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeatherData(latitude, longitude);
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
