import "./Home.css";
import Polaroid from "../../components/polaroid/Polaroid.jsx";
import defaultImg from "../../assets/img-default.png";
import StatusDisplay from "../../components/statusDisplay/StatusDisplay.jsx";
import useCampingStatus from "../../hooks/useCampingStatus/useCampingStatus.js";


function Home() {
    const [campingStatus, updateCampingStatus] = useCampingStatus();

    return (
        <div>
            <StatusDisplay
                isFull={campingStatus.isFull}
                availableUntil={campingStatus.availableUntil}
                updateCampingStatus={updateCampingStatus}
            />
            <div className="polaroid-wrapper">
                <div className="container-polaroids">
                    <Polaroid image={defaultImg} title="Omgeving" alt="default img" link="/omgeving" />
                    <Polaroid image={defaultImg} title="Tarieven" alt="default img" link="/tarieven" />
                    <Polaroid image={defaultImg} title="Weerbericht" alt="default img" link="/weer" />
                    <Polaroid image={defaultImg} title="Foto's" alt="default img" link="/fotos" />
                    <Polaroid image={defaultImg} title="Contact" alt="default img" link="/contact" />

                </div>
            </div>
        </div>
    );
}

export default Home;
