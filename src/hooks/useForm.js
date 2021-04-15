import { useState, useEffect } from "react";
import { calcTotalMount } from "./useCalc";

export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);

    const { mount, term } = values;

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

    useEffect(() => {
        if (mount !== "" && term !== "") {
            let result = calcTotalMount(mount, term);
            setValues((prevState) => ({
                ...prevState,
                totalmount: result,
            }));
        }
    }, [mount, term]);

    return [values, handleCleanInput, handleInputChangeMount, handleInputChangeTerm];
};
