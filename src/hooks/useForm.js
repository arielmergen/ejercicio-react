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

    const handleSliderChangeMount = (mount = 0) => {
        if (!isNaN(mount)) {
            setValues({
                ...values,
                mount: mount,
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

    const handleSliderChangeTerm = (term = 0) => {
        if (!isNaN(term)) {
            setValues({
                ...values,
                term: term,
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

    return [
        values,
        handleCleanInput,
        handleInputChangeMount,
        handleSliderChangeMount,
        handleInputChangeTerm,
        handleSliderChangeTerm,
    ];
};
