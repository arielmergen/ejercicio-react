import React, { useState } from "react";

import { SimuladorFields } from "./SimuladorFields";
import { SimuladorDetail } from "./SimuladorDetail";

import { useForm } from "./../hooks/useForm";
import { calcTotalMount } from "./../hooks/useCalc";
import { numberWithCommas } from "./../utils/utils";

export const SimuladorApp = () => {
    const initialState = {
        mount: "",
        term: "",
        totalmount: "",
        minMount: 3000,
        maxMount: 50000,
        minterm: 3,
        maxTerm: 24,
    };
    const [
        formValues,
        handleCleanInput,
        handleInputChangeMount,
        handleSliderChangeMount,
        handleInputChangeTerm,
        handleSliderChangeTerm,
    ] = useForm(initialState);

    const [stateDetails, setDetails] = useState(false);

    const { mount, term, totalmount } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        calcTotalMount(mount, term);
    };

    const handleDetails = (e) => {
        e.preventDefault();
        if (totalmount !== "" && mount !== "" && term !== "") {
            setDetails(!stateDetails);
        }
    };
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <SimuladorFields
                    formValues={formValues}
                    handleCleanInput={handleCleanInput}
                    handleInputChangeMount={handleInputChangeMount}
                    handleSliderChangeMount={handleSliderChangeMount}
                    handleInputChangeTerm={handleInputChangeTerm}
                    handleSliderChangeTerm={handleSliderChangeTerm}
                />
                <div className="row">
                    <div className="column">
                        <div className="cuota-fija background-primary">
                            <span className="text-bold middle-big text-uppercase">Cuota fija por mes</span>
                            <span className="text-bold too-big">
                                $ {totalmount !== "" ? numberWithCommas(totalmount) : numberWithCommas(0)}
                            </span>
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-secondary btn-70 btn-size-big text-uppercase">
                                Obtené tú Crédito
                            </button>
                            <button
                                className="btn btn-primary-light btn-30 text-uppercase ml-10"
                                onClick={handleDetails}
                            >
                                Ver Detalle de Cuotas
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            {stateDetails ? <SimuladorDetail term={term} mount={totalmount} /> : undefined}
        </>
    );
};
