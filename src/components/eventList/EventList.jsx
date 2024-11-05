import "./EventList.css"
import Polaroid from '../Polaroid/Polaroid';
import PropTypes from "prop-types";

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

EventList.propTypes = {
    filteredEvents: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            dates: PropTypes.shape({
                start: PropTypes.shape({
                    localDate: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string.isRequired,
                })
            ),
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default EventList;
