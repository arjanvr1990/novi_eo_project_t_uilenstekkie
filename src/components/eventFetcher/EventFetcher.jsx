import React, { useState, useEffect } from 'react';
import useFetchEvents from '../../hooks/useFetchEvents/useFetchEvents.js';
import EventFilter from "../../components/EventFilter/EventFilter.jsx";
import EventList from "../../components/EventList/EventList.jsx";
import {filterEvents} from "../../helpers/eventFilterUtils/eventFilterUtils.js";

const EventFetcher = () => {
    const API_KEY = import.meta.env.VITE_EVENT_FETCHER_API_KEY;
    const { events, loading, error, segments } = useFetchEvents(API_KEY);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSegment, setSelectedSegment] = useState('');
    const [selectedGenres, setSelectedGenres] = useState(new Set());
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [uniqueGenres, setUniqueGenres] = useState([]);

    useEffect(() => {

        if (selectedSegment) {
            const genresForSegment = events
                .filter(event => event.classifications[0]?.segment.name === selectedSegment)
                .map(event => event.classifications[0]?.genre.name);
            const uniqueGenres = [...new Set(genresForSegment)];
            setUniqueGenres(uniqueGenres);
            setSelectedGenres(new Set());
        } else {
            setUniqueGenres([...new Set(events.map(event => event.classifications[0]?.genre.name))]);
        }
    }, [selectedSegment, events]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSegmentChange = (event) => {
        setSelectedSegment(event.target.value);
    };

    const handleGenreChange = (genre) => {
        const newGenres = new Set(selectedGenres);
        if (newGenres.has(genre)) {
            newGenres.delete(genre);
        } else {
            newGenres.add(genre);
        }
        setSelectedGenres(newGenres);
    };

    const handleDateChange = (event) => {
        const { name, value } = event.target;
        if (name === 'startDate') {
            setStartDate(value);
        } else if (name === 'endDate') {
            setEndDate(value);
        }
    };

    const filteredEvents = filterEvents(events, searchTerm, selectedSegment, selectedGenres, startDate, endDate);

    return (
        <div>
            <EventFilter
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
                selectedSegment={selectedSegment}
                handleSegmentChange={handleSegmentChange}
                selectedGenres={selectedGenres}
                uniqueGenres={uniqueGenres}
                handleGenreChange={handleGenreChange}
                startDate={startDate}
                endDate={endDate}
                handleDateChange={handleDateChange}
                segments={segments}
            />
            {loading && <p>Evenementen worden geladen...</p>}
            {error && <p className="errorMessage">{error}</p>}
            <EventList filteredEvents={filteredEvents} />
        </div>
    );
};

export default EventFetcher;


