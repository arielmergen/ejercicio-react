import React from "react";
import { numberWithCommas } from "./../utils/utils";

export const SimuladorDetail = ({ term = 0, mount = 0 }) => {
    const renderList = (term) => {
        let array = new Array(parseInt(term));
        let obj = [];
        for (let i = 1; i <= array.length; i++) {
            obj[i] = { term: i, mount: mount };
        }

        return obj.length > 0 ? obj : {};
    };

    return (
        <>
            {term > 0 && (
                <div class="details">
                    <h1 className="text-center">Detalle de cuotas</h1>
                    {renderList(term, mount).map((item, index) => (
                        <div className="row" key={index}>
                            <span className="slider-label">Cuota: {item.term}</span>
                            <span className="slider-label">$ {numberWithCommas(item.mount)}</span>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
