import React, { useEffect } from "react";
import "./StatusDisplay.css";

function StatusDisplay({ isFull, availableUntil, updateCampingStatus }) {
    useEffect(() => {
        const currentDate = new Date();
        if (isFull && new Date(availableUntil) < currentDate) {
            updateCampingStatus({ isFull: false, availableUntil: "" });
            localStorage.removeItem("campingStatus");
        }
    }, [isFull, availableUntil, updateCampingStatus]);


    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "long", year: "numeric" };
        return new Date(dateString).toLocaleDateString('nl-NL', options);
    };

    return (
        <div className={isFull ? "active-status-display" : "default-status-display"}>
            {isFull ? (
                <h2>
                    Camping is vol tot: {formatDate(availableUntil)}
                </h2>
            ) : null}
        </div>
    );
}

export default StatusDisplay;
