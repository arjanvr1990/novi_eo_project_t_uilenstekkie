import "./Home.css";
import Polaroid from "../../components/polaroid/Polaroid.jsx";
import defaultImg from "../../assets/img-default.png";

function Home() {
    return (
        <div>

            <div className="polaroid-wrapper"> {/* Wrapper voor centreren */}
                <div className="container-polaroids"> {/* Container voor polaroids */}
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
