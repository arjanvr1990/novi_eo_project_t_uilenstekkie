import React, { useState } from 'react';
import EventFilters from "../EventFilter/EventFilter.jsx";
import EventList from "../../components/EventList/EventList.jsx";
import { filterEvents } from '../../utils/eventFilterUtils';

const EventSearch = ({ events, loading, error }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSegment, setSelectedSegment] = useState('');
    const [selectedGenres, setSelectedGenres] = useState(new Set());
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [segments, setSegments] = useState([]);
    const [uniqueGenres, setUniqueGenres] = useState([]);

    if (events.length > 0) {
        setSegments([...new Set(events.map(event => event.classifications[0]?.segment.name))]);
        setUniqueGenres([...new Set(events.map(event => event.classifications[0]?.genre.name))]);
    }

    const filteredEvents = filterEvents(events, searchTerm, selectedSegment, selectedGenres, startDate, endDate);

    return (
        <div>
            {loading && <p>Evenementen worden geladen...</p>}
            {error && <p className="errorMessage">{error}</p>}
            {!loading && !error && (
                <>
                    <EventFilters
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedSegment={selectedSegment}
                        setSelectedSegment={setSelectedSegment}
                        uniqueGenres={uniqueGenres}
                        selectedGenres={selectedGenres}
                        setSelectedGenres={setSelectedGenres}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                        segments={segments}
                    />
                    <EventList filteredEvents={filteredEvents} />
                </>
            )}
        </div>
    );
};

export default EventSearch;
