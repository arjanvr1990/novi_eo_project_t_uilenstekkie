import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./WeatherForecast.css";
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";

const WeatherForecast = ({ forecastData }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(5);

    const rotation = useRandomRotation();
    const randomFont = useRandomFont();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setItemsToShow(1);
            } else if (window.innerWidth < 768) {
                setItemsToShow(2);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(3);
            } else {
                setItemsToShow(5);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener('' + "resize", handleResize);
        };
    }, []);


    if (!forecastData || !forecastData.list) {
        return <div>Loading...</div>;
    }

    const forecasts = forecastData.list;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, forecasts.length - itemsToShow));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className="weather-forecast"
             style={{
                 transform: `rotate(${rotation}deg)`,
                 transition: "transform 0.3s ease",
             }}>
            <h3 style={{fontFamily: randomFont}}>Weersvoorspelling</h3>
            <div className="forecast-slider">
                <button className="arrow" onClick={handlePrev} disabled={currentIndex === 0}>❮</button>
                <div className="forecast-display">
                    {forecasts.slice(currentIndex, currentIndex + itemsToShow).map((forecast, index) => (
                        <div key={index} className="forecast-item">
                            <p className="forecast-date">
                                {new Date(forecast.dt * 1000).toLocaleString('nl-NL', {
                                    weekday: "short",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                            <img
                                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
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


WeatherForecast.propTypes = {
    forecastData: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                dt: PropTypes.number.isRequired,
                main: PropTypes.shape({
                    temp: PropTypes.number.isRequired,
                }).isRequired,
                weather: PropTypes.arrayOf(
                    PropTypes.shape({
                        icon: PropTypes.string.isRequired,
                        description: PropTypes.string.isRequired,
                    })
                ).isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default WeatherForecast;
