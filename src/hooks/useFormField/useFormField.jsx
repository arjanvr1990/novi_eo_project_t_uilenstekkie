import { useState } from "react";

const useFormField = (type, initialValue, placeholder, className = " ") => {
    const [value, setValue] = useState(initialValue);

    const inputField = (
        <label className="nawt-data-label">
            {/*{placeholder}:*/}
            <input
                type={type}
                className={`nawt-data-input ${className}`}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                required={type !== 'text' || (placeholder !== "Tussenvoegsel" && placeholder !== "Toevoeging")}
            />
        </label>
    );


    return { value, setValue, inputField };
};

export default useFormField;
