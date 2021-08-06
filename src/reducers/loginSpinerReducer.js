import { TYPES } from '../types/types';

const initialState = {
    checkSpinerForm: false
}


export const loginSpinerReducer = (state = initialState, action) => {
    switch(action.type){

        case TYPES.loginSpinnerTrue:
            return {
                ...state,
                checkSpinerForm: action.payload
            };

        case TYPES.loginSpinnerFalse:
            return {
                ...state,
                checkSpinerForm: action.payload
            }

        default:
            return state;
    }
}


