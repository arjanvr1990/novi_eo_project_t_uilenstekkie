import { useEffect, useState } from "react";

const useRandomFont = () => {
    const [randomFont, setRandomFont] = useState('');

    useEffect(() => {
        const fonts = ["Beth Ellen", "Crafty Girls", "Fuzzy Bubbles"];
        const randomFontChoice = fonts[Math.floor(Math.random() * fonts.length)];
        setRandomFont(randomFontChoice);
    }, []);

    return randomFont;
};

export default useRandomFont;
