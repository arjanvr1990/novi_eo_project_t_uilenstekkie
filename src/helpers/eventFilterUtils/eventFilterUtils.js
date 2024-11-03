export const filterEvents = (events, searchTerm, selectedSegment, selectedGenres, startDate, endDate) => {
    return events.filter(event => {
        const matchesArtist = event.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSegment = selectedSegment ? event.classifications[0]?.segment.name === selectedSegment : true;
        const matchesGenre = selectedGenres.size > 0 ? selectedGenres.has(event.classifications[0]?.genre.name) : true;

        const eventDate = new Date(event.dates.start.localDate);
        const matchesDate = (!startDate || eventDate >= new Date(startDate)) && (!endDate || eventDate <= new Date(endDate));

        return matchesArtist && matchesSegment && matchesGenre && matchesDate;
    });
};
