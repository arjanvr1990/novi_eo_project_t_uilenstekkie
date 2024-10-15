import { useState, useEffect } from "react";

const useCampingStatus = () => {
    const [campingStatus, setCampingStatus] = useState({
        isFull: false,
        availableUntil: ""
    });

    useEffect(() => {
        const storedStatus = localStorage.getItem("campingStatus");
        if (storedStatus) {
            setCampingStatus(JSON.parse(storedStatus));
        }
    }, []);

    const updateCampingStatus = (status) => {
        setCampingStatus(status);
        localStorage.setItem("campingStatus", JSON.stringify(status));
    };

    return [campingStatus, updateCampingStatus];
};

export default useCampingStatus;
