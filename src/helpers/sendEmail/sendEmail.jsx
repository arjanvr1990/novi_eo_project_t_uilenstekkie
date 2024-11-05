import emailjs from "emailjs-com";


const sendEmail = (reservationData, templateID) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    return emailjs.send(serviceID, templateID, reservationData, userID)
        .then((response) => {
            console.log("E-mail verzonden!", response.status, response.text);
        })
        .catch((err) => {
            console.log("E-mail verzenden mislukt", err);
        });
};

export default sendEmail;