import React from "react";

export const sliderComponent = (value = 0) => {
    let sliderProps = {
        railStyle: { backgroundColor: "white", height: 6, borderRadius: 0 },
        trackStyle: { backgroundColor: "white", height: 6, borderRadius: 0 },
        handleStyle: { borderColor: "white", height: 16, width: 16, backgroundColor: "white" },
        dotStyle: { borderColor: "white" },
        activeDotStyle: { borderColor: "white" },
        onChange: handleInputChangeMount,
        min: 3000,
        max: 50000,
        marks: marks,
        step: 1000,
    };
    return <Slider {...sliderProps} />;
};
