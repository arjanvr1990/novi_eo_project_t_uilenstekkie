import React, { useState } from "react";
import './StatusForm.css'; // Import de CSS

function StatusForm({ onSubmit }) {
    const [isFull, setIsFull] = useState(false);
    const [availableUntil, setAvailableUntil] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ isFull, availableUntil });
    };

    return (
        <form className="status-form" onSubmit={handleSubmit}>
            <h2>Camping Status</h2>
            <label>
                <input
                    type="radio"
                    value="available"
                    checked={!isFull}
                    onChange={() => setIsFull(false)}
                />
                Beschikbaar
            </label>
            <label>
                <input
                    type="radio"
                    value="full"
                    checked={isFull}
                    onChange={() => setIsFull(true)}
                />
                Vol
            </label>

            {isFull && (
                <div>
                    <label>
                        Beschikbaar tot:
                        <input
                            type="date"
                            value={availableUntil}
                            onChange={(e) => setAvailableUntil(e.target.value)}
                            required
                        />
                    </label>
                </div>
            )}
            <button type="submit">Opslaan</button>
        </form>
    );
}

export default StatusForm;
