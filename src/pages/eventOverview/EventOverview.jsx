import "./EventOverview.css";
import fetchEvents from "../../helpers/fetchEvents/fetchEvents.js";
import EventSearch from "../../components/eventSearch/EventSearch";

function EventOverview() {
    const API_KEY = import.meta.env.VITE_EVENT_FETCHER_API_KEY;
    const { events, loading, error, segments, uniqueGenres } = fetchEvents(API_KEY);

    return (
        <div>
            <EventSearch
                events={events}
                loading={loading}
                error={error}
                segments={segments}
                uniqueGenres={uniqueGenres}
            />
        </div>
    );
}

export default EventOverview;
