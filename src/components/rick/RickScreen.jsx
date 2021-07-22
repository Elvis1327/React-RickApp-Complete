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
        <div className="_main-screen-container animate__animated animate__fadeIn">
            <div className="_screen-cards">
                {data.map(person$ => (
                    <div key={person$.id} className="_screen-card">
                        <img src={person$.image} alt="pic"/>
                        <div className="_screen-card-info">
                            <div className="screen_h1-status">
                                <h1 className="screen-h1"> {person$.name} </h1>
                                {/* FLOTADO STATUS */}
                                <div className="flotado__status">
                                    <div 
                                        className={`${person$.status === 'Alive' ? '_cards-alive' : '_cards-dead'}`}>
                                    </div>
                                    <span>{person$.status} - { person$.species } </span>
                                </div>
                            </div>
                            <div className="screen_last-seen">
                                <span>Last known location:</span>
                                <p>{person$.location.name}</p>
                            </div>
                            <div className="screen_origin">
                                <span>Origin</span>
                                <p>{person$.origin.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
