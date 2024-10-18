
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
        </div>
    );
};

export default EventFilter;
