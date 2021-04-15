//import { useState } from "react";

const calc = (mount = 3000, term = 3) => {
    return mount / term;
};

const prepareToClac = (num) => {
    return parseInt(num);
};

export const calcTotalMount = (mount = 0, term = 0) => {
    if (!isNaN(mount) && mount !== "") {
        return calc(prepareToClac(mount), prepareToClac(term));
    }
};

// export const useCalc = (mount, term, initialState) => {
//     const [state, setState] = useState(initialState);

//     const calcTotalMount = () => {
//         if (!isNaN(mount) && mount !== "") {
//             let result = calc(prepareToClac(mount), prepareToClac(term));
//             setState({
//                 ...state,
//                 totalmount: result,
//             });
//         }
//     };

//     return [state, calcTotalMount];
// };
