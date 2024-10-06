import "./Home.css"
import Background from "../../components/background/Background.jsx";
import Polaroid from "../../components/polaroid/Polaroid.jsx";
import defaultImg from "../../assets/img-default.png"
function Home() {

    return (
        <div>
            {/*<Background/>*/}
            {/*<div className="polaroid-container-background"> /!* Container voor polaroids *!/*/}
                <Polaroid imagePolaroid={defaultImg} titlePolaroid="omgeving" alt="default img" link="/omgeving"/>
                <Polaroid imagePolaroid={defaultImg} titlePolaroid="Tweede Polaroid" alt="default img" />
                <Polaroid imagePolaroid={defaultImg} titlePolaroid="Derde Polaroid" alt="default img" />
                {/* Voeg hier meer polaroids toe */}
            {/*</div>*/}


        </div>
    );
}

export default Home