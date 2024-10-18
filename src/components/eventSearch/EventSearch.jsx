// src/EventFetcher2.js
import React, { useState } from 'react';
import useFetchEvents from "../../hooks/useFetchEvents/useFetchEvents.js"
import EventFilters from "../EventFilter/EventFilter.jsx";
import EventList from "../../components/EventList/EventList.jsx";

const EventSearch = () => {
    const API_KEY = 'cuTAQnexXF5rUqC6hLkbLWDXcy0HZYGS'; // Je API-sleutel hier
    const { events, loading, error } = useFetchEvents(API_KEY);
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


    const filteredEvents = events.filter(event => {
        const matchesArtist = event.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSegment = selectedSegment ? event.classifications[0]?.segment.name === selectedSegment : true;
        const matchesGenre = selectedGenres.size > 0 ? selectedGenres.has(event.classifications[0]?.genre.name) : true;

        const eventDate = new Date(event.dates.start.localDate);
        const matchesDate = (!startDate || eventDate >= new Date(startDate)) && (!endDate || eventDate <= new Date(endDate));

        return matchesArtist && matchesSegment && matchesGenre && matchesDate;
    });

    return (
        <div>
            {loading && <p>Evenementen worden geladen...</p>}
            {error && <p>{error}</p>}
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
