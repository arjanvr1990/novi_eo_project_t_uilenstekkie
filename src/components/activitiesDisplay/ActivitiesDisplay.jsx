import "./ActivitiesDisplay.css"
import React from 'react';
import activiteiten from "../../data/activities.json";
import RouteComponent from "../../components/routeComponent/RouteComponent.jsx";
import { useParams } from 'react-router-dom';
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";

const ActivitiesDisplay = () => {
    const { id } = useParams();
    const activity = activiteiten[id];
    const rotation = useRandomRotation();


    if (!activity) {
        return <p>Activiteit niet gevonden.</p>;
    }


    const profile = activity.profiles[0];

    return (
        <div className="activities-container"
             style={{
                 transform: `rotate(${rotation}deg)`,
                 transition: 'transform 0.3s ease',
             }}>
            <h2 className="activities-title">{activity.title}</h2>
            <p>{activity.description}</p>
            {activity.img.map((img, imgIndex) => (
                <img key={imgIndex} className="activity-img" src={img} alt={`Afbeelding van ${activity.title}`} />
            ))}
            <RouteComponent
                endCoordinates={activity.coordinates}
                profile={profile}
            />
        </div>
    );
};

export default ActivitiesDisplay;
