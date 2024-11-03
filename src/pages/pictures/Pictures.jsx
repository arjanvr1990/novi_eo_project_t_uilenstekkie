import "./Pictures.css";
import photo2 from "../../assets/pictures-campiside/photo2.jpg";
import photo3 from "../../assets/pictures-campiside/photo3.jpg";
import photo4 from "../../assets/pictures-campiside/photo4.jpg";
import photo5 from "../../assets/pictures-campiside/photo5.jpg";
import photo6 from "../../assets/pictures-campiside/photo6.jpg";
import photo7 from "../../assets/pictures-campiside/photo7.jpg";
import photo8 from "../../assets/pictures-campiside/photo8.jpg";
import photo9 from "../../assets/pictures-campiside/photo9.jpg";
import photo11 from "../../assets/pictures-campiside/photo11.jpg";
import photo12 from "../../assets/pictures-campiside/photo12.jpg";
import photo13 from "../../assets/pictures-campiside/photo13.jpg";
import photo14 from "../../assets/pictures-campiside/photo14.jpg";
import photo15 from "../../assets/pictures-campiside/photo15.jpg";
import photo16 from "../../assets/pictures-campiside/photo16.jpg";
import photo18 from "../../assets/pictures-campiside/photo18.jpg";
import photo19 from "../../assets/pictures-campiside/photo19.jpg";
import photo20 from "../../assets/pictures-campiside/photo20.jpg";
import Polaroid from "../../components/polaroid/Polaroid.jsx";





function Pictures() {
    return (
        <>
         <div className="polaroid-wrapper">
            <div className="container-polaroids">

            <Polaroid
                image={photo2}
                title="Uitstalling"
                alt="Uitstalling"
            />
            <Polaroid
                image={photo3}
                title="Het grote veld"
                alt="Het grote veld"
            />
            <Polaroid
                image={photo4}
                title="In de bosjes"
                alt="In de bosjes"
            />
            <Polaroid
                image={photo5}
                title="EEENNNDDDDJJEEES"
                alt="eendjes"
            />
            <Polaroid
                image={photo6}
                title="Veldje"
                alt="Foto van het grote veld"
            />
            <Polaroid
                image={photo7}
                title="Vuurtje"
                alt="kampvuur"
            />
            <Polaroid
                image={photo8}
                title="Wat staat hjet gras er weer mooi bij"
                alt="Grasveld"
            />
            <Polaroid
                image={photo9}
                title="Picknicken?"
                alt="Picknicktafel"
            />
            <Polaroid
                image={photo11}
                title="Ome Piet"
                alt="Ome Piet op zijn grasmaaier"
            />
            <Polaroid
                image={photo12}
                title="Tentjes"
                alt="Tenten"
            />
            <Polaroid
                image={photo13}
                title="Zons Ondergang"
                alt="Zons ondergang op de camping"
            />
            <Polaroid
                image={photo14}
                title="Pipo Wagen"
                alt="Pipo wagen"
            />
            <Polaroid
                image={photo15}
                title="Blauwe Luch"
                alt="Blauw Lucht"
            />
            <Polaroid
                image={photo16}
                title="BOEMERS"
                alt="caravan met voortent"
            />
            <Polaroid
                image={photo18}
                title="Wat staat de tent er weer mooi bij"
                alt="Grote en kleine tent"
            />
            <Polaroid
                image={photo19}
                title="Spieken bij de buren"
                alt="2 bussen door de bosjes gefotografeerd"
            />
            <Polaroid
                image={photo20}
                title="Toiletgebouw"
                alt="toiletgebouw"
            />
            </div>
         </div>

        </>

    )
}

export default Pictures;
