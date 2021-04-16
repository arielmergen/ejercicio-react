import React from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import NumberFormat from "react-number-format";

export const SimuladorFields = ({
    formValues,
    handleCleanInput,
    handleInputChangeMount,
    handleSliderChangeMount,
    handleInputChangeTerm,
    handleSliderChangeTerm,
}) => {
    const { mount, term } = formValues;
    const marks = {
        3000: {
            label: <span className="slider-label">$3000</span>,
        },
        50000: {
            label: <span className="slider-label">$50000</span>,
        },
    };

    const marksTerm = {
        3: {
            label: <span className="slider-label">3</span>,
        },
        24: {
            label: <span className="slider-label">24</span>,
        },
    };

    let sliderMountProps = {
        railStyle: { backgroundColor: "white", height: 6, borderRadius: 0 },
        trackStyle: { backgroundColor: "white", height: 6, borderRadius: 0 },
        handleStyle: { borderColor: "white", height: 16, width: 16, backgroundColor: "white" },
        dotStyle: { borderColor: "white" },
        activeDotStyle: { borderColor: "white" },
        onChange: handleSliderChangeMount,
        min: 3000,
        max: 50000,
        marks: marks,
        step: 1000,
    };

    let sliderTermProps = {
        railStyle: { backgroundColor: "white", height: 6, borderRadius: 0 },
        trackStyle: { backgroundColor: "white", height: 6, borderRadius: 0 },
        handleStyle: { borderColor: "white", height: 16, width: 16, backgroundColor: "white" },
        onChange: handleSliderChangeTerm,
        min: 3,
        max: 24,
        marks: marksTerm,
        step: 1,
    };

    if (mount !== "") {
        sliderMountProps.value = mount;
    }

    if (term !== "") {
        sliderTermProps.value = term;
    }

    return (
        <>
            <div className="row">
                <label className="column">MONTO TOTAL</label>
                <div className="column">
                    <div className="row m-0  end">
                        <div className="mount-control">
                            <span className="mount-control-items">$</span>
                            <NumberFormat
                                className="form-control mount-control-items"
                                thousandSeparator={"."}
                                decimalSeparator={","}
                                onValueChange={handleInputChangeMount}
                                placeholder={"0"}
                                value={mount}
                                minLength={4}
                                maxLength={6}
                                min={3000}
                                max={50000}
                                onClick={handleCleanInput}
                            />
                        </div>
                    </div>
                </div>
                <div className="row slider">
                    <div className="column">
                        <Slider {...sliderMountProps} />
                    </div>
                </div>
            </div>
            <div className="row">
                <label className="column">Plazo</label>
                <div className="column">
                    <div className="row m-0 end">
                        <div className="mount-control">
                            <input
                                className="form-control text-center"
                                type="text"
                                name="term"
                                min={3}
                                max={24}
                                minLength={1}
                                maxLength={2}
                                value={term}
                                placeholder={3}
                                onChange={handleInputChangeTerm}
                            />
                        </div>
                    </div>
                </div>
                <div className="row slider">
                    <div className="column">
                        <Slider {...sliderTermProps} />
                    </div>
                </div>
            </div>
        </>
    );
};
