import React from "react";

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
            <h4>Afstand: {formatDistance(routeData.routes[0].summary.distance)}</h4>
            <h4>Duur: {formatDuration(routeData.routes[0].summary.duration)}</h4>



            <button className="button" onClick={() => onNavigate("google")}>Navigeren met Google Maps</button>
            <button className="button" onClick={() => onNavigate("apple")}>Navigeren met Apple Maps</button>
        </div>
    );
};

export default RouteInfo;

