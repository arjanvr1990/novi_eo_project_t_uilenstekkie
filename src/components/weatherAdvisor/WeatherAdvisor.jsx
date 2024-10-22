// WeatherAdvisory.jsx
import React from 'react';

const WeatherAdvisor
    = ({ windSpeed, uvIndex, precipitationType, temperature }) => {
    const getWeatherAdvisor = () => {
        let advisories = []; // Gebruik een array om adviezen op te slaan

        // Advisies op basis van windsnelheid
        if (windSpeed <= 5) {
            advisories.push("Zachtjes aan, de lucht is niet de enige die waait. Zorg ervoor dat je tent niet gaat dansen!");
        } else if (windSpeed > 5 && windSpeed <= 10) {
            advisories.push("Zet je haringen goed vast! Het lijkt wel een winderige dansparty hier!");
        } else if (windSpeed > 10) {
            advisories.push("Als de wind harder blaast dan je buurman met zijn grasmaaier, zorg dan dat je tent niet wegvliegt!");
        }

        // Advisies op basis van UV-index
        if (uvIndex < 3) {
            advisories.push("Het is een mooie dag om buiten te zijn, maar vergeet je zonnebrand niet!");
        } else if (uvIndex >= 3 && uvIndex <= 7) {
            advisories.push("Smeer je goed in, of je wordt een lopende tomaat!");
        } else {
            advisories.push("Als je geen zonnebrand gebruikt, kan je binnenkort de hoofdrol spelen in 'Zonverbranding: De Film'.");
        }

        // Advisies op basis van neerslag
        if (precipitationType === 'light') {
            advisories.push("Een paar druppels? Tijd voor een dans in de regen! Zorg voor je rubberlaarzen!");
        } else if (precipitationType === 'heavy') {
            advisories.push("Als je plannen hebt om naar buiten te gaan, misschien een extra paar sokken in je tas stoppen. En een opblaasboot?");
        } else if (precipitationType === 'thunderstorm') {
            advisories.push("Wees voorzichtig, het lijkt erop dat de hemel een feestje heeft met bliksem en donder! Blijf binnen!");
        }

        // Advisies op basis van temperatuur
        if (temperature < 15) {
            advisories.push("Neem je warme sokken mee, of je krijgt gegarandeerd koude voeten – en dat is niet de manier om je tent in te gaan!");
        } else if (temperature > 30) {
            advisories.push("Zorg ervoor dat je genoeg drinkt, anders kun je als een druif in de zon opwarmen!");
        } else {
            advisories.push("Perfecte kampeertemperatuur! Geniet van de buitenlucht zonder dat je als een ijsblokje of een stoombad eindigt.");
        }

        return advisories; // Retourneert de array van adviezen
    };

    const advisoryMessages = getWeatherAdvisor();

    return (
        <div className="weather-advisory">
            {advisoryMessages.map((advisory, index) => (
                <p key={index}>{advisory}</p> // Render elke advies in een aparte paragraaf
            ))}
        </div>
    );
};

export default WeatherAdvisor;
