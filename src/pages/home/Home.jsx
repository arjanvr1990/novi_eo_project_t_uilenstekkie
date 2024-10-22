import "./Home.css";
import Polaroid from "../../components/polaroid/Polaroid.jsx";
import defaultImg from "../../assets/img-default.png";
import StatusDisplay from "../../components/statusDisplay/StatusDisplay.jsx";
import useCampingStatus from "../../hooks/useCampingStatus/useCampingStatus.js";
import zunderdorp from "../../assets/polaroids-img/zunderdorp.jpg"
import receptie from "../../assets/polaroids-img/receptie.jpg"
import inge from    "../../assets/polaroids-img/inge-ekkelboom-in-haar-zelfvoorzienende-bus.jpeg"
import eef from "../../assets/polaroids-img/eef-en-haar-bus.jpg"
import useWeatherImg from "../../hooks/useWeatherImg/useWeatherImg.js";


function Home() {
    const [campingStatus, updateCampingStatus] = useCampingStatus();
    const { weatherImage, loading, error } = useWeatherImg();

    return (
        <div>
            <StatusDisplay
                isFull={campingStatus.isFull}
                availableUntil={campingStatus.availableUntil}
                updateCampingStatus={updateCampingStatus}
            />
            <div className="polaroid-wrapper">
                <div className="container-polaroids">
                    <Polaroid image={zunderdorp} title="Omgeving" alt="default img" link="/omgeving" />
                    <Polaroid image={receptie} title="Tarieven" alt="default img" link="/tarieven" />
                    {loading ? (
                        <Polaroid image={defaultImg} title="Weerbericht" alt="Loading..." link="/weer" />
                    ) : error ? (
                        <Polaroid image={defaultImg} title="Weerbericht" alt="Error" link="/weer" />
                    ) : (
                        <Polaroid image={weatherImage} title="Weerbericht" alt="Weer" link="/weer" />
                    )}
                    <Polaroid image={inge} title="Foto's" alt="default img" link="/fotos" />
                    <Polaroid image={eef} title="Contact" alt="default img" link="/contact" />

                </div>
            </div>
        </div>
    );
}

export default Home;
