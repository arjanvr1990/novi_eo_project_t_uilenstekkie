import React from 'react';

const EventList = ({ filteredEvents }) => {
    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>Geen evenementen gevonden.</p>;
    }

    return (
        <div>
            <h2>Aantal opgehaalde evenementen: {filteredEvents.length}</h2>
            <ul>
                {filteredEvents.map(event => (
                    <li key={event.id}>
                        <strong>{event.name}</strong><br />
                        {event.images && event.images.length > 0 && (
                            <img src={event.images[0].url} alt={event.name} style={{ width: '200px', height: 'auto' }} />
                        )}
                        Genre: {event.classifications && event.classifications.length > 0 ? event.classifications[0].genre.name : 'N/A'}<br />
                        Segment: {event.classifications && event.classifications.length > 0 ? event.classifications[0].segment.name : 'N/A'}<br />
                        Startdatum: {event.dates.start.localDate}<br />
                        <a href={event.url} target="_blank" rel="noopener noreferrer">Bekijk meer</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;

