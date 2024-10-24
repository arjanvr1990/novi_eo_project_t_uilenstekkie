// import "./weatherAdvisor.css";
// import React from "react";
// import windspeed5 from "../../assets/weather-cartoons/windspeed-les-than-5.jpeg";
// import windSpeed5Till10 from "../../assets/weather-cartoons/windspeed5Till10.jpg";
// import windSpeed10 from "../../assets/weather-cartoons/windspeed10.jpg";
// import uvIndex3 from "../../assets/weather-cartoons/uvIndex3.jpg";
// import uvIndex8 from "../../assets/weather-cartoons/uvIndex8.jpg";
// import rainLight from "../../assets/weather-cartoons/lightRain.jpg";
// import rainModerate from "../../assets/weather-cartoons/moderateRain.jpg";
// import rainHeavy from "../../assets/weather-cartoons/heavyRain.jpg";
// import tunderStorm from "../../assets/weather-cartoons/thunderstorm.jpg";
// import tempLessThan15 from "../../assets/weather-cartoons/tempLessThan15.jpg";
// import temp25plus from "../../assets/weather-cartoons/temp25plus.jpg";
//
//
// const WeatherAdvisor = ({ windSpeed, uvIndex, precipitationType, temperature, weatherCondition }) => {
//     const getWeatherAdvisor = () => {
//         let advisory = {
//             message: "",
//             image: null
//         };
//
//
//         if (windSpeed <= 5) {
//             advisory.message = "Zachtjes aan, de lucht is niet de enige die waait. Zorg ervoor dat je tent niet gaat dansen!";
//             advisory.image = windspeed5;
//         } else if (windSpeed > 5 && windSpeed <= 10) {
//             advisory.message = "Zet je haringen goed vast! Het lijkt wel een winderige dansparty hier!";
//             advisory.image = windSpeed5Till10;
//         } else if (windSpeed > 10) {
//             advisory.message = "Als de wind harder blaast dan je buurman met zijn grasmaaier, zorg dan dat je tent niet wegvliegt!";
//             advisory.image = windSpeed10;
//         }
//
//
//         const cloudyConditions = ["Clouds", "Scattered Clouds", "Overcast", "Broken Clouds"];
//
//         if (!cloudyConditions.includes(weatherCondition)) {
//
//             if (uvIndex >= 8) {
//                 advisory.message = "Smeer je goed in, of je wordt een lopende tomaat!";
//                 advisory.image = uvIndex8;
//             } else if (uvIndex >= 3) {
//                 advisory.message = "Smeer je goed in, voor een gezond kleurtje";
//                 advisory.image = uvIndex3;
//             }
//         }
//
//         // Advisies op basis van neerslag
//         if (precipitationType === "light") {
//             advisory.message = "Een paar druppels? Tijd voor een dans in de regen! Zorg voor je rubberlaarzen!";
//             advisory.image = rainLight;
//         } else if (precipitationType === "moderate") {
//             advisory.message = "Een goede gelegenheid om je regenjas aan te trekken!";
//             advisory.image = rainModerate;
//         } else if (precipitationType === "heavy") {
//             advisory.message = "Zorg voor een opblaasboot! Het lijkt erop dat het gaat gieten.";
//             advisory.image = rainHeavy;
//         } else if (precipitationType === "thunderstorm") {
//             advisory.message = "Wees voorzichtig, het lijkt erop dat de hemel een feestje heeft met bliksem en donder! Blijf binnen!";
//             advisory.image = tunderStorm;
//         }
//
//
//         if (temperature < 15) {
//             advisory.message = "Neem je warme sokken mee, of je krijgt gegarandeerd koude voeten – en dat is niet de manier om je tent in te gaan!";
//             advisory.image = tempLessThan15;
//         } else if (temperature > 30) {
//             advisory.message = "Zorg ervoor dat je genoeg drinkt, anders kun je als een druif in de zon opwarmen!";
//             advisory.image = temp25plus;
//         }
//
//         return advisory;
//     };
//
//     const advisory = getWeatherAdvisor();
//
//     return (
//         <div className="weather-advisory">
//             {advisory.message && (
//                 <div>{advisory.image && <img src={advisory.image} alt={advisory.message} />}
//                     <p>{advisory.message}</p>
//
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default WeatherAdvisor;

import React from "react";
import Polaroid from "../polaroid/Polaroid"; // Zorg ervoor dat je het juiste pad gebruikt
import windspeed5 from "../../assets/weather-cartoons/windspeed-les-than-5.jpeg";
import windSpeed5Till10 from "../../assets/weather-cartoons/windspeed5Till10.jpg";
import windSpeed10 from "../../assets/weather-cartoons/windspeed10.jpg";
import uvIndex3 from "../../assets/weather-cartoons/uvIndex3.jpg";
import uvIndex8 from "../../assets/weather-cartoons/uvIndex8.jpg";
import rainLight from "../../assets/weather-cartoons/lightRain.jpg";
import rainModerate from "../../assets/weather-cartoons/moderateRain.jpg";
import rainHeavy from "../../assets/weather-cartoons/heavyRain.jpg";
import thunderStorm from "../../assets/weather-cartoons/thunderstorm.jpg";
import tempLessThan15 from "../../assets/weather-cartoons/tempLessThan15.jpg";
import temp25plus from "../../assets/weather-cartoons/temp25plus.jpg";

const WeatherAdvisor = ({ windSpeed, uvIndex, precipitationType, temperature, weatherCondition }) => {
    const getWeatherAdvisor = () => {
        let advisory = {
            message: "",
            image: null
        };

        if (windSpeed <= 5) {
            advisory.message = "Zachtjes aan, de lucht is niet de enige die waait. Zorg ervoor dat je tent niet gaat dansen!";
            advisory.image = windspeed5;
        } else if (windSpeed > 5 && windSpeed <= 10) {
            advisory.message = "Zet je haringen goed vast! Het lijkt wel een winderige dansparty hier!";
            advisory.image = windSpeed5Till10;
        } else if (windSpeed > 10) {
            advisory.message = "Als de wind harder blaast dan je buurman met zijn grasmaaier, zorg dan dat je tent niet wegvliegt!";
            advisory.image = windSpeed10;
        }

        const cloudyConditions = ["Clouds", "Scattered Clouds", "Overcast", "Broken Clouds"];

        if (!cloudyConditions.includes(weatherCondition)) {
            if (uvIndex >= 8) {
                advisory.message = "Smeer je goed in, of je wordt een lopende tomaat!";
                advisory.image = uvIndex8;
            } else if (uvIndex >= 3) {
                advisory.message = "Smeer je goed in, voor een gezond kleurtje";
                advisory.image = uvIndex3;
            }
        }

        // Advisies op basis van neerslag
        if (precipitationType === "light") {
            advisory.message = "Een paar druppels? Tijd voor een dans in de regen! Zorg voor je rubberlaarzen!";
            advisory.image = rainLight;
        } else if (precipitationType === "moderate") {
            advisory.message = "Een goede gelegenheid om je regenjas aan te trekken!";
            advisory.image = rainModerate;
        } else if (precipitationType === "heavy") {
            advisory.message = "Zorg voor een opblaasboot! Het lijkt erop dat het gaat gieten.";
            advisory.image = rainHeavy;
        } else if (precipitationType === "thunderstorm") {
            advisory.message = "Wees voorzichtig, het lijkt erop dat de hemel een feestje heeft met bliksem en donder! Blijf binnen!";
            advisory.image = thunderStorm;
        }

        if (temperature < 15) {
            advisory.message = "Neem je warme sokken mee, of je krijgt gegarandeerd koude voeten – en dat is niet de manier om je tent in te gaan!";
            advisory.image = tempLessThan15;
        } else if (temperature > 30) {
            advisory.message = "Zorg ervoor dat je genoeg drinkt, anders kun je als een druif in de zon opwarmen!";
            advisory.image = temp25plus;
        }

        return advisory;
    };

    const advisory = getWeatherAdvisor();

    return (
        <div className="weather-advisory">
            {advisory.message && (
                <Polaroid
                    image={advisory.image}
                    alt={advisory.message}
                    link="/weer"
                    quote={advisory.message}
                />
            )}
        </div>
    );
};

export default WeatherAdvisor;
