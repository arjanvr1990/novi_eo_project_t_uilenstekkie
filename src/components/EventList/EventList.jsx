import "./EventList.css"
import React from 'react';
import Polaroid from '../Polaroid/Polaroid';

const EventList = ({ filteredEvents }) => {
    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>Geen evenementen gevonden.</p>;
    }

    return (
        <div className="event-list">
            <h2>Aantal evenementen: {filteredEvents.length}</h2>
            <div className="polaroid-wrapper">
                {filteredEvents.map(event => (
                    <Polaroid
                        key={event.id}
                        image={event.images && event.images.length > 0 ? event.images[0].url : 'default-image-url.jpg'}
                        title={event.name}
                        date={event.dates.start.localDate}
                        alt={event.name}
                        link={event.url}

                    >
                    </Polaroid>
                ))}
            </div>
        </div>
    );
};

export default EventList;
