import "./Surroundings.css"
import React from "react";
import EventFetcher from "../../components/eventFetcher/EventFetcher.jsx";
import Polaroid from "../../components/polaroid/Polaroid.jsx";
import defaultImg from "../../assets/img-default.png"
import eventDefault from "../../assets/event-default.jpg"


function Surroundings() {

    return (
        <div>
            <div className="polaroid-wrapper">
                <div className="container-polaroids">
                    <Polaroid image={eventDefault} title="Evenementen" alt="default img" link="/events" />
                    <Polaroid image={defaultImg} title="activiteit 2" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 3" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 4" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 5" alt="default img" link="#" />
                    <Polaroid image={defaultImg} title="activiteit 6" alt="default img" link="#" />
                </div>
            </div>
        </div>
    );
}

export default Surroundings


