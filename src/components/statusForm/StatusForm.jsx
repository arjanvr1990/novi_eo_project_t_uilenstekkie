import { useState } from "react";
import "./StatusForm.css";
import PropTypes from "prop-types";

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
                    className="inputField"
                />
                Beschikbaar
            </label>
            <label>
                <input
                    type="radio"
                    value="full"
                    checked={isFull}
                    onChange={() => setIsFull(true)}
                    className="inputField"
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
                            className="inputField"
                        />
                    </label>
                </div>
            )}
            <button className="button" type="submit">Opslaan</button>
        </form>
    );
}

StatusForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default StatusForm;
