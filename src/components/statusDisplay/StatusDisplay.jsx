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
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('nl-NL', options);
    };

    return (
        <div className="status-display"
             style={{
                 border: isFull ? "1px solid red" : "none",
                 boxShadow: isFull ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
                 padding: "20px",
                 borderRadius: "8px",
                 backgroundColor: isFull ? "#f9c2c2" : "#f9f9f9",
             }}>
            {isFull ? (
                <p>
                    Camping is vol tot {formatDate(availableUntil)}
                </p>
            ) : null}
        </div>
    );
}

export default StatusDisplay;
