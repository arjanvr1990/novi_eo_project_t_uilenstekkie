import React, { useEffect, useState } from 'react';
import useRoute from '../../hooks/useRoute/useRoute.jsx';
import RouteInfo from "../../components/routeInfo/RouteInfo.jsx";

const RouteComponent = ({ startCoordinates, endCoordinates, profile }) => {
    const apiKey = import.meta.env.VITE_OPENROUTESERVICE_API_KEY;
    const { routeData, error, loading, getRoute } = useRoute(apiKey);
    const [routeFetched, setRouteFetched] = useState(false);
    const defaultCoordinates = [4.960928364417612, 52.41067461917328];
    const startCoords = startCoordinates || defaultCoordinates;

    useEffect(() => {
        const fetchRoute = async () => {
            if (!routeFetched) {
                try {
                    await getRoute(startCoords, endCoordinates, profile);
                    setRouteFetched(true);
                } catch (err) {
                    console.error('Fout bij het ophalen van de route:', err);
                }
            }
        };

        fetchRoute();
    }, [startCoords, endCoordinates, profile, getRoute, routeFetched]);

    const handleNavigate = (provider) => {
        const startLatLng = `${startCoords[1]},${startCoords[0]}`;
        const endLatLng = `${endCoordinates[1]},${endCoordinates[0]}`;

        if (provider === 'google') {
            window.open(`https://www.google.com/maps/dir/?api=1&origin=${startLatLng}&destination=${endLatLng}`, '_blank');
        } else if (provider === 'apple') {
            window.open(`https://maps.apple.com/?daddr=${endLatLng}&saddr=${startLatLng}`, '_blank');
        }
    };

    return (
        <div>
            {loading && <p>Laden...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {routeData && routeData.routes && routeData.routes.length > 0 && (
                <RouteInfo routeData={routeData} onNavigate={handleNavigate} />
            )}
        </div>
    );
};

export default RouteComponent;





