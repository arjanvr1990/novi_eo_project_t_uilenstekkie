// src/pages/ActivitiesDisplay.jsx
import React from 'react';
import activiteiten from "../../data/activities.json";
import RouteComponent from "../../components/routeComponent/RouteComponent.jsx";

const ActivitiesDisplay = () => {
    return (
        <div>
            <h2>Activiteiten</h2>
            {activiteiten.map((activity, index) => (
                <div key={index}>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                    <p>Coördinaten: {activity.coordinates.join(', ')}</p>
                    {activity.img.map((img, imgIndex) => (
                        <img key={imgIndex} src={img} alt={`Afbeelding van ${activity.title}`} />
                    ))}

                    {/* Voeg hier de RouteComponent toe */}
                    <RouteComponent
                        endCoordinates={activity.coordinates} // Correcte coördinaten gebruiken
                        profile="foot-walking"
                    />
                </div>
            ))}
        </div>
    );
};

export default ActivitiesDisplay;
