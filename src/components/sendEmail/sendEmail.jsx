import emailjs from "emailjs-com";


const sendEmail = (reservationData) => {
    emailjs.send("service_28tjxuw", "template_65l432s", reservationData, "Q2f_Z-nFSmyEkxdT1")
        .then((response) => {
            console.log("E-mail verzonden!", response.status, response.text);
        })
        .catch((err) => {
            console.log("E-mail verzenden mislukt", err);
        });
};

export default sendEmail;
