import React, { useEffect, useState } from 'react';
import useRoute from '../../hooks/useRoute/useRoute.jsx';
import RouteInfo from "../../components/routeInfo/RouteInfo.jsx";

const RouteComponent = ({ startCoordinates, endCoordinates, profile }) => {
    const apiKey = import.meta.env.VITE_OPENROUTESERVICE_API_KEY; // API-sleutel uit omgevingsvariabelen
    const { routeData, error, loading, getRoute } = useRoute(apiKey); // Gebruik de hook
    const [routeFetched, setRouteFetched] = useState(false); // State om bij te houden of de route al is opgehaald

    // Definieer de standaard coördinaten
    const defaultCoordinates = [4.960928364417612, 52.41067461917328]; // [longitude, latitude]

    // Gebruik de standaard coördinaten als startCoordinates niet worden opgegeven
    const startCoords = startCoordinates || defaultCoordinates;

    // Haal de route op bij het laden van de component
    useEffect(() => {
        const fetchRoute = async () => {
            if (!routeFetched) { // Controleer of de route nog niet is opgehaald
                try {
                    await getRoute(startCoords, endCoordinates, profile);
                    setRouteFetched(true); // Zet de flag op true
                } catch (err) {
                    console.error('Fout bij het ophalen van de route:', err);
                }
            }
        };

        fetchRoute();
    }, [startCoords, endCoordinates, profile, getRoute, routeFetched]); // Voeg routeFetched toe aan de afhankelijkheden

    const handleNavigate = (provider) => {
        const startLatLng = `${startCoords[1]},${startCoords[0]}`; // Gebruik startCoords
        const endLatLng = `${endCoordinates[1]},${endCoordinates[0]}`;

        if (provider === 'google') {
            window.open(`https://www.google.com/maps/dir/?api=1&origin=${startLatLng}&destination=${endLatLng}`, '_blank');
        } else if (provider === 'apple') {
            window.open(`https://maps.apple.com/?daddr=${endLatLng}&saddr=${startLatLng}`, '_blank');
        }
    };

    return (
        <div>
            <h2>Wandelroute Ophalen</h2>
            {loading && <p>Laden...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {routeData && routeData.routes && routeData.routes.length > 0 && (
                <RouteInfo routeData={routeData} onNavigate={handleNavigate} />
            )}
        </div>
    );
};

export default RouteComponent;
