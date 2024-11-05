import "./WeatherCurrent.css"
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";
import PropTypes from "prop-types";

const WeatherCurrent = ({ weatherData }) => {

    const rotation = useRandomRotation();
    const randomFont = useRandomFont();

    const { main, weather, wind } = weatherData || {};

    if (!main) {
        return <div>Loading...</div>;
    }

    const { temp, feels_like, humidity } = main;
    const weatherDescription = weather[0]?.description || "Geen beschrijving beschikbaar";
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`;



    return (
        <div className="weather-current"
             style={{
                 transform: `rotate(${rotation}deg)`,
                 transition: "transform 0.3s ease",
             }}>
            <h2 style={{fontFamily: randomFont}}>Huidig Weer</h2>

            <div className="weather-temp-icon">
                <h3 className="temperture">{temp.toFixed(1)}°</h3>
                <img src={weatherIcon} alt={weatherDescription} />
            </div>

                <p className="temperture-note">*Gevoelsmatige temperatuur: {feels_like.toFixed(1)} °C</p>

            <div className="weather-details">
                <div >
                    <h3>{humidity}%</h3>
                    <p>Luchtvochtigheid</p>
                </div>
                <div>
                    <h3>{wind?.speed.toFixed(1)} m/s</h3>
                    <p>Windsnelheid</p>
                </div>


            </div>
        </div>
    );
};

WeatherCurrent.propTypes = {
    weatherData: PropTypes.shape({
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            feels_like: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
            })
        ).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};


export default WeatherCurrent;
