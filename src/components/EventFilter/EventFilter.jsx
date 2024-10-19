import "./EventFilter.css";
import React from 'react';

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
            />


            <label>
                <select value={selectedSegment} onChange={handleSegmentChange}>
                    <option value="" >Alle Segmenten</option>
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
                    />
                </label>
                <p>t/m</p>
                <label>
                    <input
                        type="date"
                        name="endDate"
                        value={endDate}
                        onChange={handleDateChange}
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

export default EventFilter;
