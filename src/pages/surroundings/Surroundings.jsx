import "./Surroundings.css";
import Polaroid from "../../components/polaroid/Polaroid.jsx";
import eventDefault from "../../assets/event-default.jpg"
import activities from "../../data/activities.json";




function Surroundings() {


    return (
        <div>
            <div className="polaroid-wrapper">
                <div className="container-polaroids">
                    <Polaroid image={eventDefault} title="Evenementen" alt="default img" link="/events" />
                    {activities.map((activity, index) => (
                        <Polaroid
                            key={index}
                            image={activity.img[0]}
                            title={activity.title}
                            alt={`Image of ${activity.title}`}
                            link={`/activities/${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Surroundings


