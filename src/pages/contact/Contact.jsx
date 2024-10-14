import "./Contact.css"
import ContactInfo from "../../components/contactInfo/ContactInfo.jsx";
import ContactForm from "../../components/contactForm/ContactForm.jsx";

function Contact() {
    return(
    <div className="contact-wrapper">
        <ContactInfo/>
        <ContactForm/>
    </div>

        )
}

export default Contact