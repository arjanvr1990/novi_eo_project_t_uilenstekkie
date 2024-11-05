import "./PriceSetter.css"
import pricesData from "../../data/prices.json";
import {useState} from "react";

function PriceSetter() {
    const [prices, setPrices] = useState(pricesData);

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setPrices((prevPrices) => ({
            ...prevPrices,
            [name]: parseFloat(value) || 0,
        }));
    };

    const handleSavePrices = () => {
        const jsonString = JSON.stringify(prices, null, 2);
        console.log(jsonString);
        alert("Prijzen zijn opgeslagen!");
    };

    return (
        <div className="price-setter">
            <h2>Prijzen</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSavePrices(); }}>
                {Object.keys(prices).map((key) => (
                    <div key={key}>
                        <label>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                            <input
                                type="number"
                                name={key}
                                value={prices[key] || ""}
                                onChange={handlePriceChange}
                                step="0.10"
                                className="inputField"
                            />
                        </label>
                    </div>
                ))}
                <button className="button" type="submit">Opslaan</button>
            </form>
        </div>
    );
}

export default PriceSetter;
