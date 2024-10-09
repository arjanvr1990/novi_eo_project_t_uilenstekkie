import "./Reservation.css"
import Receipt from "../../components/receipt/Receipt.jsx";
import NawtData from "../../components/nawtData/NawtData.jsx";

function Reservation() {




    return (
        <div className="reservation-container">
            <div className="receipt-container">
                 <Receipt/>
            </div>

            <NawtData/>
        </div>
    );
}

export default Reservation
