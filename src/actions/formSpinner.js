import { TYPES } from '../types/types';


export const loginSpinnerTrue = () => {
    return {
        type: TYPES.loginSpinnerTrue,
        payload: true
    };
};

export const loginSpinnerFalse = () => {
    return {
        type: TYPES.loginSpinnerFalse,
        payload: false
    };
};


