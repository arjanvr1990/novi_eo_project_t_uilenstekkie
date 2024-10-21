import emailjs from "emailjs-com";


const sendEmail = (reservationData) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, reservationData, userID)
        .then((response) => {
            console.log("E-mail verzonden!", response.status, response.text);
        })
        .catch((err) => {
            console.log("E-mail verzenden mislukt", err);
        });
};

export default sendEmail;