import "./ContactInfo.css"
import useRandomRotation from "../../hooks/useRandomRotation/useRandomRotation.js";
import useRandomFont from "../../hooks/useRandomFont/useRandomFont.js";


function ContactInfo() {
    const rotation = useRandomRotation();
    const randomFont = useRandomFont();


    return(
        <div className="contact-container" style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.3s ease',
            fontFamily: randomFont
        }}>


            <div className="contact-info-container">
                <h3>Contactgegevens</h3>
                <div className="contact-info">
                    <p>
                        Adres: <a href="https://www.google.com/maps?q=Termietergouw+1,+1027AD+Amsterdam" target="_blank" rel="noopener noreferrer">Termietergouw 1, 1027AD Amsterdam</a>
                    </p>
                    <p>
                        Telefoon: <a href="tel:+31612345678">+31 6 12345678</a>
                    </p>
                    <p>
                        E-mail: <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo