import { TYPES } from "../types/types"


const initialState = {
    data: [],
    loading: true
}

export const rickReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.getDataRick:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default:
            return state
    }
}




