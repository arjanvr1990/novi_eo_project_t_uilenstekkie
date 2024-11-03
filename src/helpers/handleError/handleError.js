export const handleError = (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 403:
                return "Onvoldoende rechten. Controleer je toegang.";
            case 409:
                return "Er bestaat al een gebruiker met deze informatie.";
            default:
                return "Er is een onverwachte fout opgetreden. Probeer het later opnieuw.";
        }
    } else {
        return "Netwerkfout. Controleer je verbinding en probeer opnieuw.";
    }
};
