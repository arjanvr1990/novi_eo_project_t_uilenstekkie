import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventFetcher2 = () => {
    const API_KEY = 'cuTAQnexXF5rUqC6hLkbLWDXcy0HZYGS';
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [selectedSegment, setSelectedSegment] = useState('');
    const [selectedGenres, setSelectedGenres] = useState(new Set());
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [segments, setSegments] = useState([]);
    const [uniqueGenres, setUniqueGenres] = useState([]);

    useEffect(() => {
        const fetchAllEvents = async () => {
            let allFetchedEvents = [];
            let page = 0;
            const size = 200;
            let totalPages = 1;

            while (page < totalPages) {
                try {
                    const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&city=Amsterdam&page=${page}&size=${size}`);
                    const fetchedEvents = response.data._embedded?.events || [];


                    const filteredEvents = fetchedEvents.filter(event => {
                        const segmentName = event.classifications[0]?.segment.name;
                        return segmentName !== 'Miscellaneous';
                    });

                    allFetchedEvents = [...allFetchedEvents, ...filteredEvents];
                    totalPages = response.data.page.totalPages;
                    page++;
                } catch (error) {
                    setError('Fout bij het ophalen van evenementen: ' + error.message);
                    break;
                }
            }

            setEvents(allFetchedEvents);
            setUniqueGenres([...new Set(allFetchedEvents.map(event => event.classifications[0]?.genre.name))]);
            setSegments([...new Set(allFetchedEvents.map(event => event.classifications[0]?.segment.name))]);
            setLoading(false);
        };

        fetchAllEvents();
    }, [API_KEY]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSegmentChange = (event) => {
        const value = event.target.value;
        setSelectedSegment(value);
        setSelectedGenres(new Set());

        const genresForSegment = events
            .filter(event => event.classifications[0]?.segment.name === value)
            .map(event => event.classifications[0]?.genre.name);
        const uniqueGenres = [...new Set(genresForSegment)];
        setUniqueGenres(uniqueGenres);
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
            <h1>Evenementen Lijst</h1>
            <input
                type="text"
                placeholder="Zoek op artiest naam"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <br />

            <label>
                Selecteer Segment:
                <select value={selectedSegment} onChange={handleSegmentChange}>
                    <option value="">Alle Segmenten</option>
                    {segments.map((segment, index) => (
                        <option key={index} value={segment}>{segment}</option>
                    ))}
                </select>
            </label>
            <br />

            {selectedSegment && (
                <div>
                    <h4>Genres voor {selectedSegment}:</h4>
                    {uniqueGenres.map(genre => (
                        <label key={genre}>
                            <input
                                type="checkbox"
                                value={genre}
                                checked={selectedGenres.has(genre)}
                                onChange={() => handleGenreChange(genre)}
                            />
                            {genre}
                        </label>
                    ))}
                </div>
            )}

            <br />
            <label>
                Startdatum:
                <input
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={handleDateChange}
                />
            </label>
            <label>
                Einddatum:
                <input
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={handleDateChange}
                />
            </label>

            {loading && <p>Evenementen worden geladen...</p>}
            {error && <p>{error}</p>}
            <h2>Aantal opgehaalde evenementen: {filteredEvents.length}</h2>
            <ul>
                {filteredEvents.map(event => (
                    <li key={event.id}>
                        <strong>{event.name}</strong><br />
                        {/* Afbeelding tonen als beschikbaar */}
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

export default EventFetcher2;
