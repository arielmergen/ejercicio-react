import { useState } from "react";

export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);

    const handleCleanInput = (e) => {
        e.target.setSelectionRange(0, 0);
        setValues({
            ...values,
            mount: "",
        });
    };

    const handleInputChangeMount = ({ floatValue }) => {
        if (!isNaN(floatValue)) {
            setValues({
                ...values,
                mount: floatValue,
            });
        }
    };

    const handleInputChangeTerm = ({ target }) => {
        if (!isNaN(target.value)) {
            setValues({
                ...values,
                term: target.value,
            });
        }
    };

    return [values, handleCleanInput, handleInputChangeMount, handleInputChangeTerm];
};
