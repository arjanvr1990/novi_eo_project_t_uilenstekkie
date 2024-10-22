
import React from 'react';

const RouteInfo = ({ routeData, onNavigate }) => {
    const formatDistance = (meters) => (meters / 1000).toFixed(2) + ' km';
    const formatDuration = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours} uur ${minutes} minuten`;
    };

    return (
        <div>
            <h3>Fietsroute Gegevens:</h3>
            <p>Afstand: {formatDistance(routeData.routes[0].summary.distance)}</p>
            <p>Duur: {formatDuration(routeData.routes[0].summary.duration)}</p>


            {/* Navigatie knoppen */}
            <button onClick={() => onNavigate('google')}>Navigeren met Google Maps</button>
            <button onClick={() => onNavigate('apple')}>Navigeren met Apple Maps</button>
        </div>
    );
};

export default RouteInfo;

