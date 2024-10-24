import axios from 'axios';

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const useFetchWeatherData = async (latitude, longitude) => {
    try {
        // Haal de huidige weersdata op
        const currentWeather = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );

        // Haal de dagelijkse weersvoorspelling op
        const dailyForecast = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );



        // Retourneer beide data samen
        return {
            current: currentWeather.data,
            daily: dailyForecast.data,
        };
    } catch (error) {
        throw new Error('Fout bij het ophalen van weergegevens: ' + error.message);
    }
};

export default useFetchWeatherData;
