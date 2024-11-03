import { useEffect, useState } from "react";
import axios from "axios";

const useFetchEvents = (API_KEY) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
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
                        return segmentName !== "Miscellaneous";
                    });

                    allFetchedEvents = [...allFetchedEvents, ...filteredEvents];
                    totalPages = response.data.page.totalPages;
                    page++;
                } catch (error) {
                    setError("Fout bij het ophalen van evenementen: " + error.message);
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

    return { events, loading, error, segments, uniqueGenres };
};

export default useFetchEvents;
