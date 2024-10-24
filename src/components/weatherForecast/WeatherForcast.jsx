import React, { useState } from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({ forecastData }) => {
    if (!forecastData || !forecastData.list) {
        return <div>Loading...</div>;
    }

    const forecasts = forecastData.list;

    const itemsToShow = 5;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, forecasts.length - itemsToShow));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className="weather-forecast">
            <h3>Weersvoorspelling</h3>
            <div className="forecast-slider">
                <button className="arrow" onClick={handlePrev} disabled={currentIndex === 0}>❮</button>
                <div className="forecast-display">
                    {forecasts.slice(currentIndex, currentIndex + itemsToShow).map((forecast, index) => (
                        <div key={index} className="forecast-item">
                            <p className="forecast-date">
                                {new Date(forecast.dt * 1000).toLocaleString('nl-NL', {
                                    weekday: 'short',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </p>
                            <img
                                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                alt={forecast.weather[0].description}
                                className="forecast-icon"
                            />
                            <p className="forecast-temp">{forecast.main.temp.toFixed(1)} °C</p>
                            <p className="forecast-description">{forecast.weather[0].description}</p>
                        </div>
                    ))}
                </div>
                <button className="arrow" onClick={handleNext} disabled={currentIndex + itemsToShow >= forecasts.length}>❯</button>
            </div>
        </div>
    );
};

export default WeatherForecast;
