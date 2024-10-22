import axios from 'axios';

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const useFetchWeatherData = async (latitude, longitude) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        return response.data; // Retourneert de weergegevens
    } catch (error) {
        throw new Error('Fout bij het ophalen van weergegevens: ' + error.message);
    }
};

export default useFetchWeatherData;