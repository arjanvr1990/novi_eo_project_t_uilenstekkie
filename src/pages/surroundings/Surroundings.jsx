import "./Surroundings.css"
import React from "react";
import EventFetcher from "../../components/eventFetcher/EventFetcher.jsx";

function Surroundings() {

    return (
        <div>










            <div className="polaroid-wrapper">
                <div className="container-polaroids">
                    <EventFetcher />
                    {/*<Polaroid image={defaultImg} title="activiteit 1" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 2" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 3" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 4" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 5" alt="default img" link="#" />*/}
                    {/*<Polaroid image={defaultImg} title="activiteit 6" alt="default img" link="#" />*/}
                </div>
            </div>
        </div>
    );
}

export default Surroundings


// // src/pages/Surroundings.jsx
// import React from "react";
// import "./Surroundings.css"; // Zorg ervoor dat de styling werkt
// import EventFetcher from "../../components/eventFetcher/EventFetcher"; // Nieuwe import
//
// function Surroundings() {
//     return (
//         <div>
//             <EventFetcher /> {/* Gebruik de nieuwe EventFetcher component */}
//             {/* Voeg andere componenten of inhoud toe hier indien nodig */}
//         </div>
//     );
// }
//
// export default Surroundings;
