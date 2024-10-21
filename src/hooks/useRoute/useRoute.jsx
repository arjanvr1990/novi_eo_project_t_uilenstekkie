// src/hooks/useRoute.js
import { useState } from 'react';
import axios from 'axios';

const useRoute = (apiKey) => {
    const [routeData, setRouteData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getRoute = async (startCoordinates, endCoordinates, profile) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`https://api.openrouteservice.org/v2/directions/${profile}`, {
                coordinates: [startCoordinates, endCoordinates],
            }, {
                headers: {
                    'Authorization': apiKey,
                    'Content-Type': 'application/json'
                }
            });
            setRouteData(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.error : 'Er is een fout opgetreden.');
            setRouteData(null);
        } finally {
            setLoading(false);
        }
    };

    return { routeData, error, loading, getRoute };
};

export default useRoute;
