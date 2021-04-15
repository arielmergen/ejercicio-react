import React from "react";
import { numberWithCommas } from "./../utils/utils";

export const SimuladorDetail = ({ term = 0, mount = 0 }) => {
    const renderList = (term) => {
        let array = new Array(parseInt(term));
        let obj = [];
        for (let i = 0; i <= array.length; i++) {
            obj[i] = { term: i, mount: mount };
        }

        return obj.length > 0 ? obj : {};
    };

    return (
        <>
            {term > 0 && (
                <>
                    <h1>Detalle de cuotas</h1>
                    {renderList(term, mount).map((item, index) => (
                        <div className="row m-0" key={index}>
                            <div className="column">
                                <span className="slider-label">Cuota: {item.term}</span>
                            </div>
                            <div className="column end">
                                <span className="slider-label">Monto: {numberWithCommas(item.mount)}</span>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
};
