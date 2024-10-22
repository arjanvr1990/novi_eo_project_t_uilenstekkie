import "./Surroundings.css"
import React from "react";
import Polaroid from "../../components/polaroid/Polaroid.jsx";
import eventDefault from "../../assets/event-default.jpg"
import activities from "../../data/activities.json";
import {Link} from 'react-router-dom';



function Surroundings() {


    return (
        <div>
            {/*<ActivitiesDisplay/>*/}

            <div className="polaroid-wrapper">
                <div className="container-polaroids">
                    <Polaroid image={eventDefault} title="Evenementen" alt="default img" link="/events" />
                    {activities.map((activity, index) => (
                        <Polaroid
                            key={index}
                            image={activity.img[0]} // Gebruik de eerste afbeelding
                            title={activity.title}
                            alt={`Image of ${activity.title}`}
                            link={`/activities/${index}`} // Link naar een specifieke activiteit
                        />
                    ))}

                    {/*<Polaroid image={defaultImg} title="activiteit 2" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 3" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 4" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 5" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 6" alt="default img" link="#" />*/}
                </div>
            </div>
        </div>
    );
}

export default Surroundings


