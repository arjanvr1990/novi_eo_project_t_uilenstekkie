import useFetchWeatherData from "../../hooks/useFetchWeatherData/useFetchWeatherData.js";
import { useEffect, useState } from "react";
import cloudyImg from "../../assets/wheater-api-images/cloudy.png";
import foggyImg from "../../assets/wheater-api-images/foggy.png";
import rainyImg from "../../assets/wheater-api-images/rainy.png";
import snowImg from "../../assets/wheater-api-images/snow.png";
import sunnyImg from "../../assets/wheater-api-images/sunny.png";
import thunderImg from "../../assets/wheater-api-images/thunder.png";

// Object om weercondities te koppelen aan afbeeldingen
const weatherImages = {
    Clouds: cloudyImg,
    Fog: foggyImg,
    Rain: rainyImg,
    Snow: snowImg,
    Clear: sunnyImg,
    Thunderstorm: thunderImg,
};

const useWeatherImg = () => {
    const [weatherImage, setWeatherImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const latitude = 52.3702;  // Amsterdam
    const longitude = 4.8952;   // Amsterdam

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await useFetchWeatherData(latitude, longitude);
                const description = data.weather[0].main; // Haal de hoofdweercategorie op
                const imageUrl = weatherImages[description] || sunnyImg; // Gebruik een fallback
                setWeatherImage(imageUrl); // Stel de afbeelding in
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getWeather();
    }, [latitude, longitude]);

    return { weatherImage, loading, error };
};

export default useWeatherImg;
