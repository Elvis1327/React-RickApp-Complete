import { useEffect, useState } from 'react';

import { RickContext } from "./rick-context"
import { fetchRick } from '../utils/fetchRick';

export const RickProvider = ({ children }) => {

    const [ rickData, setRickData ] = useState([]);
    const [ isRickDataLoading, setIsRickDataLoading ] = useState(true);

    useEffect(() => {
        fetchRick().then(({results}) => {
            setRickData(results);
            setIsRickDataLoading(false)
        }).catch(err => {
            setIsRickDataLoading(false);
        })
    },[])


    return (
        <>
            <RickContext.Provider value={{
                rickData,
                isRickDataLoading
            }}>
                {children}
            </RickContext.Provider>
        </>
    )
}



