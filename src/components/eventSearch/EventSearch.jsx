import { useState, useEffect } from "react";
import EventFilter from "../eventFilter/EventFilter.jsx";
import EventList from "../eventList/EventList.jsx";
import { filterEvents } from "../../helpers/eventFilterUtils/eventFilterUtils.js";
import PropTypes from "prop-types";

const EventSearch = ({ events, loading, error }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSegment, setSelectedSegment] = useState("");
    const [selectedGenres, setSelectedGenres] = useState(new Set());
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [segments, setSegments] = useState([]);
    const [uniqueGenres, setUniqueGenres] = useState([]);

    useEffect(() => {
        if (events.length > 0) {
            setSegments([...new Set(events.map(event => event.classifications[0]?.segment.name))]);
            setUniqueGenres([...new Set(events.map(event => event.classifications[0]?.genre.name))]);
        }
    }, [events]);

    const filteredEvents = filterEvents(events, searchTerm, selectedSegment, selectedGenres, startDate, endDate);

    return (
        <div>
            {loading && <p>Evenementen worden geladen...</p>}
            {error && <p className="errorMessage">{error}</p>}
            {!loading && !error && (
                <>
                    <EventFilter
                        searchTerm={searchTerm}
                        handleSearchChange={(e) => setSearchTerm(e.target.value)}
                        selectedSegment={selectedSegment}
                        handleSegmentChange={(e) => setSelectedSegment(e.target.value)}
                        uniqueGenres={uniqueGenres}
                        selectedGenres={selectedGenres}
                        handleGenreChange={(genre) => {
                            const updatedGenres = new Set(selectedGenres);
                            updatedGenres.has(genre) ? updatedGenres.delete(genre) : updatedGenres.add(genre);
                            setSelectedGenres(updatedGenres);
                        }}
                        startDate={startDate}
                        endDate={endDate}
                        handleDateChange={(e) => {
                            const { name, value } = e.target;
                            name === "startDate" ? setStartDate(value) : setEndDate(value);
                        }}
                        segments={segments}
                    />
                    <EventList filteredEvents={filteredEvents} />
                </>
            )}
        </div>
    );
};

EventSearch.propTypes = {
    events: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default EventSearch;

