import axios from 'axios';

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const useFetchWeatherData = async (latitude, longitude) => {
    try {

        const currentWeather = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

        );


        const dailyForecast = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );


        console.log("Current Weather API Response:", currentWeather.data);



        return {
            current: currentWeather.data,
            daily: dailyForecast.data,
        };
    } catch (error) {
        throw new Error('Fout bij het ophalen van weergegevens: ' + error.message);
    }
};

export default useFetchWeatherData;
