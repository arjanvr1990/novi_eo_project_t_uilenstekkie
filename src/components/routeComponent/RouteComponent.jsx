import React, { useEffect, useState } from 'react';
import useRoute from '../../hooks/useRoute/useRoute.jsx';
import RouteInfo from "../../components/routeInfo/RouteInfo.jsx";

const RouteComponent = ({ startCoordinates, endCoordinates, profile }) => {
    const apiKey = import.meta.env.VITE_OPENROUTESERVICE_API_KEY; // API-sleutel uit omgevingsvariabelen
    const { routeData, error, loading, getRoute } = useRoute(apiKey); // Gebruik de hook
    const [routeFetched, setRouteFetched] = useState(false); // State om bij te houden of de route al is opgehaald

    // Haal de route op bij het laden van de component
    useEffect(() => {
        const fetchRoute = async () => {
            if (!routeFetched) { // Controleer of de route nog niet is opgehaald
                try {
                    await getRoute(startCoordinates, endCoordinates, profile);
                    setRouteFetched(true); // Zet de flag op true
                } catch (err) {
                    console.error('Fout bij het ophalen van de route:', err);
                }
            }
        };

        fetchRoute();
    }, [startCoordinates, endCoordinates, profile, getRoute, routeFetched]); // Voeg routeFetched toe aan de afhankelijkheden

    const handleNavigate = (provider) => {
        const startLatLng = `${startCoordinates[1]},${startCoordinates[0]}`;
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
