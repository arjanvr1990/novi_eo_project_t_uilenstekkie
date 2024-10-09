// useRandomRotation.js
import { useEffect, useState } from 'react';

const useRandomRotation = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const generateRandomRotation = () => {
            return Math.floor(Math.random() * 11) - 5;
        };

        setRotation(generateRandomRotation());
    }, []);

    return rotation;
};

export default useRandomRotation;
