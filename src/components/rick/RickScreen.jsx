import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../../actions/rick';

export const RickScreen = () => {
    const { data, loading } = useSelector((data) => data.rick)
    const dispatch = useDispatch();
    console.log(data)

    useEffect(()=>{
        dispatch(getDataAsync())
    },[dispatch])

    if(loading === true){
        return <div className="loader"></div>
    }

    return (
        <div className="_main-screen-container">
            <div className="_screen-cards">
                {data.map(person$ => (
                    <h1 key={person$.id}>{person$.name}</h1>
                ))}
            </div>
        </div>
    )
}
