import "./EventFilter.css";
import PropTypes from "prop-types";

const EventFilter = ({
                         searchTerm,
                         handleSearchChange,
                         selectedSegment,
                         handleSegmentChange,
                         selectedGenres,
                         uniqueGenres,
                         handleGenreChange,
                         startDate,
                         endDate,
                         handleDateChange,
                         segments
                     }) => {
    return (
        <div className="event-filter-wrapper">
            <div className="event-filter">
                <input
                    type="text"
                    placeholder="Zoek op artiest naam"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="inputField"
                />

                <label>
                    <select className="inputField" value={selectedSegment} onChange={handleSegmentChange}>
                        <option value="">Alle Segmenten</option>
                        {segments.map((segment, index) => (
                            <option key={index} value={segment}>{segment}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="event-dates">
                <label>
                    <input
                        type="date"
                        name="startDate"
                        value={startDate}
                        onChange={handleDateChange}
                        className="inputField"
                    />
                </label>
                <p>t/m</p>
                <label>
                    <input
                        type="date"
                        name="endDate"
                        value={endDate}
                        onChange={handleDateChange}
                        className="inputField"
                    />
                </label>
            </div>

            {selectedSegment && (
                <div className="genre-selecter">
                    <h4>Genres voor {selectedSegment}:</h4>
                    <div className="genre-checkboxes">
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
                </div>
            )}
        </div>
    );
};

EventFilter.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    selectedSegment: PropTypes.string,
    handleSegmentChange: PropTypes.func.isRequired,
    selectedGenres: PropTypes.object.isRequired,
    uniqueGenres: PropTypes.array.isRequired,
    handleGenreChange: PropTypes.func.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    handleDateChange: PropTypes.func.isRequired,
    segments: PropTypes.array.isRequired,
};

export default EventFilter;

