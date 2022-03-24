import { TYPES } from "../types/types"
import { fetchRick } from '../helpers/fetchRick';



export const getDataAsync = () => {
    return async (dispatch) => {
        const {results} = await fetchRick();
        dispatch(getData(results))
    }
}
const getData = (data) => {
    return {
        type: TYPES.getDataRick,
        payload: data
    }
}





